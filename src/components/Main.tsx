import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/users";

const Main = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <h1>Main component</h1>;
};

export default Main;
