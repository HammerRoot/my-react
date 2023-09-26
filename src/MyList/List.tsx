import React from "react";

import styles from "./List.module.less";

import type { ComponentWithDataProps } from "../HoC/WithFetchData";

type GistType = { id: string; description: string };

type IProps = ComponentWithDataProps<GistType[]>;

const List = ({ data: gists, ...rest }: IProps) => {
  return (
    <ul className={styles.list}>
      {gists
        .filter((gist) => !!gist.description)
        .map((gist) => (
          <li key={gist.id}>{gist.description}</li>
        ))}
    </ul>
  );
};

export default List;
