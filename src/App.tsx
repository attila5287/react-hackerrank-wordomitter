import { useState } from "react";
import "./App.css";

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
          <img
            className="logo react"
            src="/react.svg"
            alt="React Logo"
          />
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
      <h2 style={{ margin: 0 }}>
        {omitMode ? filtered.join(" ") : words.join(" ")}
      </h2>
      <button onClick={() => setOmitMode(!omitMode)}>Toggle Mode</button>
      <button onClick={() => setText("this is a test sentence")}>Test</button>
      <table
        border={0}
        style={{ borderCollapse: "collapse", marginTop: "20px", textAlign: "left" }}
      >
        <thead>
          <tr>
            <th>Currently Omitting Words:</th>
            <th><i style={{ color: "green" }}>{omitMode ? "True" : "False"}</i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Omitting Words</td>
            <td>
              <b>{omitWords.join(", ")}</b>
            </td>
          </tr>
          <tr>
            <td>Filtered</td>
            <td>{filtered.join(" ")}</td>
          </tr>
          <tr>
            <td>Omitted</td>
            <td>{omitted.join(" ")}</td>
          </tr>
          <tr>
            <td>Raw</td>
            <td>{words.join(" ")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
