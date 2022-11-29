import React from "react";
import NewTextFormatter from "./NewTextFormatter";

export default function TestComponent() {
  const sampleText =
    "This is <b>some</b> text to be tested. We will see <b>if</b> that works.";
  const sampleText2 = "This is a text with no formatting";
  return (
    <>
      <NewTextFormatter>{sampleText}</NewTextFormatter>
    </>
  );
}
