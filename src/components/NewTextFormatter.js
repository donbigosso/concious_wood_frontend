import React from "react";

export default function NewTextFormatter(props) {
  const sourceText = props.children;
  const splitStringBy = (source, element) => {
    return source.split(element);
  };

  const subSplitArrayBy = (array, element) => {
    return array.map((entry) => splitStringBy(entry, element));
  };
  const arraySplittedByBeg = splitStringBy(sourceText, "<");

  const arraySplittedByEnds = subSplitArrayBy(arraySplittedByBeg, ">");

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

  const checkIndexesof = (array, element) => {
    let indexArray = [];
    let newIndex = 0;
    array.forEach((value, index) => {
      if (value === element) {
        indexArray[newIndex] = index;
        newIndex++;
      }
    });
    return indexArray;
  };

  const createIndexesToAction = (indexArray) => {
    let indexesToAdjust = [];
    let indexesToRemove1 = [];
    let indexesToRemove2 = [];
    indexesToAdjust = indexArray.map((element) => element + 1);
    indexesToRemove1 = indexArray;
    indexesToRemove2 = indexArray.map((element) => element + 2);
    return [indexesToAdjust, indexesToRemove1, indexesToRemove2];
  };

  const markedArray = createMarkedArray(arraySplittedByEnds);

  const boldIndexesOfMarkedArray = checkIndexesof(markedArray, "b");
  console.log(createIndexesToAction(boldIndexesOfMarkedArray));

  const markedArray2 = createIndexesToAction(boldIndexesOfMarkedArray);
  const printElement2 = (element, index, formatSymbol, formatArray) => {
    const indexesToAdjust = formatArray[0];
    const indexesToRemove1 = formatArray[1];
    const indexesToRemove2 = formatArray[2];
    if (indexesToAdjust.includes(index)) {
      return formatSymbol === "b" ? (
        <span key={index}>
          <b>{element}</b>
        </span>
      ) : formatSymbol === "i" ? (
        <span key={index}>
          <i>{element}</i>
        </span>
      ) : (
        <span key={index}>{element}</span>
      );
    } else if (indexesToRemove1.includes(index)) {
      return;
    } else if (indexesToRemove2.includes(index)) {
      return;
    } else {
      return <span key={index}>{element}</span>;
    }
  };

  return (
    <div>
      {markedArray.map((element, index) =>
        printElement2(element, index, "b", markedArray2)
      )}
    </div>
  );
}
