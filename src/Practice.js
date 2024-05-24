import React from "react";
import { Button, AlbaButton, IconButton } from "@platform/service-ui-libraries";
const Practice = () => {
  return (
    <div>
      <Button variant="outlined">Delete</Button>
      <AlbaButton variant="contained">Alba</AlbaButton>
      <AlbaButton variant="primary" disabled>
        Alba
      </AlbaButton>
      <AlbaButton title="hello">Alba</AlbaButton>
      <AlbaButton
        onClick={() => {
          alert("hello");
        }}
      >
        Alba
      </AlbaButton>
      <IconButton aria-label="fingerprint" color="secondary"></IconButton>
      <AlbaButton variant="danger">danger</AlbaButton>
    </div>
  );
};

export default Practice;
