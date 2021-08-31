import React from "react";
import { ErrorBox } from "./ErrorBox";

const errorBody = (
  <p className="last:su-mb-0 su-leading-display su-card-paragraph su-text-18">
    <strong>Account locked for your security</strong>
    <br />
    You attempted to log in too many times. Please try again in 24 hours or
    contact <a href="/">Customer Service</a> M-F 8am-5pm Pacific.
  </p>
);

const errorListBody = (
  <div className="last:su-mb-0 su-leading-display su-card-paragraph su-text-18">
    <p className="su-mb-6">
      <strong>Please revise inputs to the following fields.</strong>
    </p>
    <p className="su-mb-18">
      Some of your inputs need revising. Please see each field for more
      information.
    </p>
    <ul className="su-list-none su-pl-0">
      <li className="su-mb-12">
        <a href="/">Address line 1</a>
      </li>
      <li className="su-mb-12">
        <a href="/">Expiration date</a>
      </li>
      <li className="su-mb-12">
        <a href="/">Field name one</a>
      </li>
      <li className="su-mb-12">
        <a href="/">Field name two</a>
      </li>
    </ul>
  </div>
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

export const List = ErrorBoxTemplate.bind({});
List.args = {
  children: errorListBody,
};
