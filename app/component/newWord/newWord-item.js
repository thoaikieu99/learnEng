"use client"; // This marks the component as a Client Component

import { useState } from "react";

export default function NewWordItem({ dataWord }) {
  const [count, setCount] = useState();
  const [dataw, setDataw] = useState(dataWord);
  const handleClick = () => {
    getRandomItem(dataw);
  };
  function getRandomItem(arr) {
    if (arr[0]) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      setCount(arr[randomIndex].word);
    }
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
