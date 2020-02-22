import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { select } from "d3";

import { DATA } from "../../D3_data_model";

const tree = (data: any) => {
  const root: any = d3
    .hierarchy(data)
    .sort(
      (a, b) =>
        d3.descending(a.height, b.height) ||
        d3.ascending(a.data.name, b.data.name)
    );
  // @ts-ignore
  root.dx = 10;
  // @ts-ignore
  root.dy = 1200 / (root.height + 1);

  return d3.cluster().nodeSize([root.dx, root.dy])(root);
};

const Details = (props: any) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  useEffect(() => {
    if (svgRef && svgRef.current) {
      const root: any = tree(DATA);
      const svg = select(svgRef.current);
      svg
        .append("g")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5)
        .selectAll("path")
        .data(root.links())
        .join("path")
        .attr(
          "d",
            (d: any) => `
        M${d.target.y},${d.target.x}
        C${d.source.y + root.dy / 2},${d.target.x}
         ${d.source.y + root.dy / 2},${d.source.x}
         ${d.source.y},${d.source.x}
      `
        );

      svg
        .append("g")
        .selectAll("circle")
        .data(root.descendants())
        .join("circle")
        .attr("cx", (d: any) => d.y)
        .attr("cy", (d: any) => d.x)
        .attr("fill", (d: any) => (d.children ? "#555" : "#999"))
        .attr("r", 2.5);

      svg
        .append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
        .selectAll("text")
        .data(root.descendants())
        .join("text")
        .attr("x", (d: any) => d.y)
        .attr("y", (d: any) => d.x)
        .attr("dy", "0.31em")
        .attr("dx", (d: any) => (d.children ? -6 : 6))
        .text((d: any) => d.data.name)
        .filter((d: any) => d.children)
        .attr("text-anchor", "end")
        .clone(true)
        .lower()
        .attr("stroke", "white");
    }
  }, []);

  // @ts-ignore
  return (
    <div>
      <h1>Detail graph</h1>
      <svg ref={svgRef} style={{width: '100%', height: '100vh'}}/>
    </div>
  );
};

export default Details;
