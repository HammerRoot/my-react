import React from "react";

import withData, { ComponentWithDataProps } from "../HoC/WithFetchData";
import List from "./List";

const withList = withData(
  (props: ComponentWithDataProps) => "https://api.github.com/users/gaearon/gists"
);
const ListWithGist = withList(List);

export default ListWithGist;
