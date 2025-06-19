```JS
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("this is a test sentence");
  const omitWords = ['a', 'an', 'the'];
  
  const words = text.split(" ");
  const filtered = [];
  const omitted = [];
  console.log(words);
  
  for (let i = 0; i < words.length; i++) {
    if (omitWords.includes(words[i].toLowerCase())) {
      console.log("Word Omitted", words[i]);
      omitted.push(words[i]);
    } else {
      console.log("Word Not Omitted", words[i]);
      filtered.push(words[i]);
    }
  }
  const [omitMode, setOmitMode] = useState(false);
  return (
    <div>
      <h1 style={{ margin: 0 }}>
        <a
          href="https://github.com/attila5287/react-hackerrank-wordomitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Word Omitter
        </a>
      </h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a sentence..."
      />
      <button onClick={() => setText("")}>Clear</button>
      <h2>{omitMode ? filtered.join(" ") : words.join(" ")}</h2>
      <button onClick={() => setOmitMode(!omitMode)}>
        Toggle Mode
      </button>
      <button onClick={() => setText("this is a test sentence")}>Test</button>
      <ul>
        <li>Currently Omitting Words: {omitMode ? " True" : " False"}</li>
        <li>Omitting Words:<b> {omitWords.join(", ")}</b></li>
        <li>Filtered: {filtered.join(" ")}</li>
        <li>Omitted: {omitted.join(" ")}</li>
        <li>Raw: {words.join(" ")}</li>
      </ul>
    </div>
  );
};

export default App;

```