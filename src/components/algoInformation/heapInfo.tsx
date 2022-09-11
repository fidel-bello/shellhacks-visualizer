import React from "react";
import ReactMarkdownComponent from "../reactMarkdown/reactMarkdown";
import styles from "./info.module.css";

const codeSnippet = `
\`\`\`javascript
const heapSort = ({ dataSet }) => {
  const length = dataSet.length;
  const array = dataSet;
  const moves = [];

  const heapify = (temp, array, length, index) => {
    let largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (left < length && array[left] > array[largest]) {
      largest = left;
    }

    if (right < length && array[right] > array[largest]) {
      largest = right;
    }

    if (largest !== index) {
      temp.push([index, largest]);
      swapElements(array, index, largest);

      heapify(temp, array, length, largest);
    }
  };

  for (let i = Math.ceil(length / 2) - 1; i >= 0; --i) {
    heapify(moves, array, length, i);
  }

  for (let index = length - 1; index >= 0; --index) {
    moves.push([index, 0]);
    swapElements(array, index, 0);
    heapify(moves, array, index, 0);
  }

  return moves;
};
\`\`\`
`;

const HeapInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Heap Sort</h2>
      <ReactMarkdownComponent markdown={codeSnippet} />
      <h2 className={styles.header}>How it works?</h2>
      <p>
        Heap sort is a comparison-based sorting technique and it is similar to
        the selection sort where we first find the minimum element and place the
        minimum element at the beginning. Repeat the same process for the
        remaining elements.
      </p>
      <p>
        Heap sort is typically 2-3 times slower than well-implemented QuickSort.
        The reason for slowness is a lack of locality of reference.
      </p>
      <h2 className={styles.header}>Benefits of Heap Sort</h2>
      <ul>
        <li>
          <strong>Efficiency - </strong>The time required to perform Heap sort
          increases logarithmically while other algorithms may grow
          exponentially slower as the number of items to sort increases. This
          sorting algorithm is very efficient.
        </li>
        <li>
          <strong>Memory Usage - </strong>Memory usage is minimal because apart
          from what is necessary to hold the initial list of items to be sorted,
          it needs no additional memory space to work
        </li>
        <li>
          <strong>Simplicity - </strong>It is simpler to understand than other
          equally efficient sorting algorithms.
        </li>
      </ul>
    </div>
  );
};

export default HeapInfo;
