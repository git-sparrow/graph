import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { select } from "d3";



const Details = (props: any) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  useEffect(() => {
    if (svgRef && svgRef.current) {
      // const svg = select(svgRef.current);
    }
  }, []);

  return (
    <div>
      <h1>Detail graph</h1>
      <svg ref={svgRef} />
    </div>
  );
};

export default Details;
