import React from "react";

export default function NewTextFormatter(props) {
  const getSourceText = () => {
    if (props.children) {
      return props.children;
    } else {
      return "Loading data...";
    }
  };
  const arraySplittedByBeg = getSourceText().split("<");
  const arraySplittedByEndsNew = arraySplittedByBeg.map((entry) =>
    entry.split(">")
  );
  const createMarkedArray = (array) => {
    let newIndex = 0;
    let newArray = [];
    array.forEach((element) => {
      if (element.length === 2) {
        newArray[newIndex] = element[0];
        newIndex++;
        newArray[newIndex] = element[1];
        newIndex++;
      } else if (element.length === 1) {
        newArray[newIndex] = element[0];
        newIndex++;
      }
    });

    return newArray;
  };

  const checkFormattingIndexes = (markedArray) => {
    let indexArray = { bold: [], italics: [] };
    let boldIndex = 0;
    let italicsIndex = 0;
    markedArray.forEach((value, index) => {
      if (value === "b") {
        indexArray["bold"][boldIndex] = index;
        boldIndex++;
      } else if (value === "i") {
        indexArray["italics"][italicsIndex] = index;
        italicsIndex++;
      }
    });
    return indexArray;
  };

  const createIndexesToActionNew = (formattingIndexArray) => {
    let indexesToBold = [];
    let indexesToItalics = [];
    let indexesToRemove = [];

    indexesToBold = formattingIndexArray.bold.map((element) => element + 1);
    indexesToItalics = formattingIndexArray.italics.map(
      (element) => element + 1
    );
    formattingIndexArray.bold.forEach((element) =>
      indexesToRemove.push(element)
    );
    formattingIndexArray.bold.forEach((element) =>
      indexesToRemove.push(element + 2)
    );
    formattingIndexArray.italics.forEach((element) =>
      indexesToRemove.push(element)
    );
    formattingIndexArray.italics.forEach((element) =>
      indexesToRemove.push(element + 2)
    );

    return [indexesToBold, indexesToItalics, indexesToRemove];
  };

  const markedArray = createMarkedArray(arraySplittedByEndsNew);
  const formattingIndexArray = checkFormattingIndexes(markedArray);

  const indexesForActionArray = createIndexesToActionNew(formattingIndexArray);

  const printElement = (element, index, formatArray) => {
    const indexesToBold = formatArray[0];
    const indexesToItalics = formatArray[1];
    const indexesToRemove = formatArray[2];
    if (indexesToBold.includes(index)) {
      return (
        <span key={index}>
          <b>{element}</b>
        </span>
      );
    } else if (indexesToItalics.includes(index)) {
      return (
        <span key={index}>
          <i>{element}</i>
        </span>
      );
    } else if (indexesToRemove.includes(index)) {
      return;
    } else {
      return <span key={index}>{element}</span>;
    }
  };

  return (
    <>
      {markedArray.map((element, index) =>
        printElement(element, index, indexesForActionArray)
      )}
    </>
  );
}
