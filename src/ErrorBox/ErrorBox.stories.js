import React from "react";
import { ErrorBox } from "./ErrorBox";

const errorBody = (
  <p className="last:su-mb-0 su-leading-display su-card-paragraph">
    <strong>Account locked for your security</strong>
    <br />
    You attempted to log in too many times. Please try again in 24 hours or
    contact <a href="/">Customer Service</a> M-F 8am-5pm Pacific.
  </p>
);

export default {
  title: "Composite/Error Box",
  component: ErrorBox,
  argTypes: {},
};

const ErrorBoxTemplate = ({ ...rest }) => <ErrorBox {...rest} />;

export const Default = ErrorBoxTemplate.bind({});
Default.args = {
  children: errorBody,
};
