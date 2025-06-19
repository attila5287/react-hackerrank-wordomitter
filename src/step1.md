# step1: omit words, no button to toggle `omit mode`

```JS
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const omitWords = ['a', 'an', 'the'];
  
  const words = text.split(" ");
  const filtered = [];
  console.log(words);
  
  for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
    if (omitWords.includes(words[i].toLowerCase())) {
      console.log("Word Omitted", words[i]);
    } else {
      console.log("Word Not Omitted", words[i]);
      filtered.push(words[i]);
    }
  }
  
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a sentence..."
      />
      <button onClick={() => setText("")}>Clear</button>
      <div>{filtered.join(" ")}</div>
      <div>{words.join(" ")}</div>


    </div>
  )
};

export default App;
```
