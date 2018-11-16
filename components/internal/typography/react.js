import React, { createElement } from "react";
import ReactDOM, { render } from "react-dom";
import s from "./style.module.scss";

export const Heading = props => {
  const { level, children } = props;
  const tag = `h${level}`;
  return createElement(tag, { className: s[tag] }, children);
};

export const P = props => {
  const { children } = props;
  return <p className={s.p}>{children}</p>;
};
