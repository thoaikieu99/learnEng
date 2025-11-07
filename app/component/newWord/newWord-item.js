"use client"; // This marks the component as a Client Component

import { useEffect, useState } from "react";

export default function NewWordItem({ dataWord }) {
  const [count, setCount] = useState();
  const [dataw, setDataw] = useState(dataWord);
  const [inputValue, setInputValue] = useState("");
  const [isFalse, setIsFalse] = useState(0);

  useEffect(() => {
    getRandomItem(dataw);
  }, [dataw]);

  useEffect(() => {
    function sayHello() {
      setIsFalse(0);
    }
    if (isFalse) {
      setTimeout(sayHello, 2000);
    }
  }, [isFalse]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (inputValue == count?.word) {
      setIsFalse(2);
      let hh = dataw;
      const updatedUsers = hh.filter((wordid) => wordid.id !== count.id);
      setDataw(updatedUsers);
    } else {
      setIsFalse(1);
    }
  };

  function getRandomItem(arr) {
    if (arr[0]) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      setCount(arr[randomIndex]);
    }
  }
  function DayNewWords() {
    if (isFalse == 1) return <div>incorrect</div>;
    if (isFalse == 2) return <div>correct</div>;
    return;
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>{count?.meaning}</p>
      <input type="text" value={inputValue} onChange={handleChange} />
      <DayNewWords />
      <button type="submit">Submit</button>
    </form>
  );
}
