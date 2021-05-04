import React from "react";
import { Message } from "semantic-ui-react";

export const MessageComponent = () => {
  return (
    <Message positive>
      <Message.Header>Successfully Registered</Message.Header>
      <p>Watch out for notifications from us.</p>
    </Message>
  );
};
