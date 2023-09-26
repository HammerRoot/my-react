import React from "react";

interface IProps {
  x: number | string;
  y: number | string;
  radius: number | string;
  fill: string;
}

const Circle = ({ x, y, radius, fill }: IProps) => (
  <svg>
    <circle cx={x} cy={y} r={radius} fill={fill} />
  </svg>
);

export default Circle;
