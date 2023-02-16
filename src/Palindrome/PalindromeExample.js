import React, { useState } from "react";

function PalindromeExample() {
  const [value, setValue] = useState();
  const [palindrome, setPalindrome] = useState();
  const handlePalindrome = () => {
    if (value.split("").reverse().join("") === value) {
      setPalindrome(value + " is a palindrome");
    } else {
      setPalindrome(value + " is not a palindrome");
    }
  };
  return (
    <div>
      <h1>Palindrome Checker</h1>
      <input
        placeholder="type here..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handlePalindrome}>Click me!</button>
      <p>{palindrome}</p>
    </div>
  );
}
export default PalindromeExample;
