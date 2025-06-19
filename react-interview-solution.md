# React Word Omitter - Interview Solution Guide

## Problem Overview
Create a React application that dynamically filters out specific words from user input in real-time. The component should:
- Take an array of words to omit as a prop
- Display a text input field
- Show filtered output in real-time
- Have a toggle button to switch between omitting and showing all words
- Have a clear button
- Handle empty input properly

## The Error We Encountered
```
Uncaught TypeError: can't access property "includes", omitWords is undefined
```

## Root Cause Analysis
The error occurred because:
- The `App` component expected a prop called `omitWords`
- In `main.tsx`, we were rendering `<App />` without passing any props
- So `omitWords` was `undefined`, causing the `.includes()` method to fail

## Step-by-Step Solution

### Step 1: Fix the Component Definition
```typescript
// src/App.tsx
import { useState } from "react";

const App = ({ omitWords }: { omitWords: string[] }) => {
  const [text, setText] = useState("");
  const [omitMode, setOmitMode] = useState(true);

  const filteredText = omitMode
    ? text.split(" ").filter(word => !omitWords.includes(word)).join(" ")
    : text;

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <button onClick={() => setOmitMode(!omitMode)}>
        {omitMode ? "Show All Words" : "Omit Words"}
      </button>
      
      <button onClick={() => setText("")}>Clear</button>
      
      <div>{text && filteredText}</div>
    </div>
  );
};

export default App;
```

### Step 2: Fix the Component Usage
```typescript
// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const omitWords = ['a', 'an', 'the'];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App omitWords={omitWords} />
  </StrictMode>,
)
```

## Key React Concepts Demonstrated

### 1. Props in React
```javascript
// Component definition - expects omitWords prop
const App = ({ omitWords }: { omitWords: string[] }) => {
  // Component logic here
}

// Component usage - must pass the prop
<App omitWords={['a', 'an', 'the']} />
```

### 2. State Management
```javascript
const [text, setText] = useState("");        // Input text
const [omitMode, setOmitMode] = useState(true); // Toggle mode
```

### 3. Conditional Rendering
```javascript
const filteredText = omitMode
  ? text.split(" ").filter(word => !omitWords.includes(word)).join(" ")
  : text;
```

### 4. Event Handling
```javascript
onChange={(e) => setText(e.target.value)}  // Update input
onClick={() => setOmitMode(!omitMode)}     // Toggle mode
onClick={() => setText("")}                // Clear text
```

## How the Application Works

### Initial State
- Input field is empty
- Output area is empty
- Button displays "Show All Words" (omit mode enabled)

### User Interactions
1. **User types**: As they type, words in the `omitWords` array are filtered out in real-time
2. **Toggle button**: Switches between omitting words and showing all words
3. **Clear button**: Clears both input and output areas
4. **Empty input**: When input is empty, output is also empty

### Example Usage
```javascript
// If omitWords = ['a', 'an', 'the']
// User types: "This is a test sentence"
// Output: "This is test sentence" (in omit mode)
// After toggle: "This is a test sentence" (show all mode)
```

## Interview Tips

### What to Emphasize:
1. **Problem-solving approach**: Identify the root cause (missing prop)
2. **React fundamentals**: Props, state, event handling
3. **Code simplicity**: Clean, readable, minimal code
4. **User experience**: Real-time filtering, clear interactions

### Common Interview Questions:
- **"Why did this error occur?"** - Missing required prop
- **"How would you test this?"** - Unit tests for filtering logic, integration tests for user interactions
- **"How would you improve this?"** - Add error handling, better styling, accessibility features
- **"What if omitWords is empty?"** - Current code handles this correctly (shows all words)

### Code Quality Points:
- ✅ Simple and readable
- ✅ Proper TypeScript typing
- ✅ Efficient filtering logic
- ✅ Clean component structure
- ✅ Proper event handling

## Final Code Summary

The solution consists of just **25 lines of code** in the main component, demonstrating:
- React hooks (`useState`)
- Props and TypeScript
- Event handling
- Conditional rendering
- Array methods (`split`, `filter`, `join`)

This is the **simplest possible implementation** that meets all requirements and demonstrates core React concepts for an interview! 