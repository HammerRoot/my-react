import React, { useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Svg from "../components/SvgCom";

import styles from "./index.module.less";
// import withInnerWidth, { HoCProps } from "../HoC/WithInnerWidth";

const circle = { x: 20, y: 20, radius: 20, fill: "red" };

const MyComponent = () => {
  const cssRef1 = useRef(null);
  const cssRef2 = useRef(null);

  return (
    <>
      <Svg {...circle} />
      <TransitionGroup className={styles["my-transition"]}>
        <CSSTransition appear timeout={500} classNames="my-transition-item" nodeRef={cssRef1}>
          <div ref={cssRef1}>Hello React</div>
        </CSSTransition>
        <CSSTransition appear timeout={500} classNames="my-transition-item" nodeRef={cssRef2}>
          <div ref={cssRef2}>Bye!</div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default MyComponent;
