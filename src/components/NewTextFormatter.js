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

  const markedArray = createMarkedArray(arraySplittedByEnds);

  const printElement = (element, index) => {
    if (index % 2 == 1) {
      return <b>{element}</b>;
    } else {
      return element;
    }
  };

  const printTextFromMarkedArray = (array) => {
    console.log(array);
    if (array.length === 1) {
      return array[0];
    } else {
      console.log(checkIndexesof(array, "b"));
      return "Longer array...";
    }
  };

  //console.log(testArray2);
  //console.log(testResult);
  return <div>{markedArray.map(printElement)}</div>;
}
