import React from "react";
import { DismissButton } from "./DismissButton";
import { Button } from "../Button/Button";
import { dismissIconColors } from "./DismissButton.levers";
import { SrOnlyText } from "../SrOnlyText/SrOnlyText";

export default {
  title: "Simple/Dismiss Button",
  component: DismissButton,
  subcomponents: { Button, SrOnlyText },
  argTypes: {
    color: {
      control: {
        type: "inline-radio",
        options: dismissIconColors,
      },
    },
    onClick: {
      action: "clicked",
    },
  },
};

const DismissButtonTemplate = ({ ...rest }) => <DismissButton {...rest} />;

export const Default = DismissButtonTemplate.bind({});
Default.args = {
  text: "Close",
  srText: "error",
  color: "black",
};
