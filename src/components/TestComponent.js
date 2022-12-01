import React from "react";
import NewTextFormatter from "./NewTextFormatter";

export default function TestComponent() {
  const sampleText =
    "<b>This text</b> is bald, <b>this text</b> as well. And <i>this one</i> will be in italics.";
  const sampleText2 = "This is a text with no formatting";
  return (
    <>
      <NewTextFormatter>{sampleText}</NewTextFormatter>
    </>
  );
}
