import "./App.css";
import { useState } from "react";
let marked = require("marked");

function App() {
  const sampleText = `
# React Markdown Previewer!

## This is a sub-heading...
      
Or... wait for it... **_both!_**
    
And feel free to go crazy ~~crossing stuff out~~.
        
There's also [links](https://finaspaceapi.com), and
> Block Quotes!  
  `;
  const [data, setData] = useState(sampleText);
  return (
    <div className="App">
      <div className="header">Markdown Previewer</div>
      <div className="previewer">
        <div className="input">
          <textarea value={data} onChange={(e) => setData(e.target.value)} />
        </div>
        <div
          className="output"
          dangerouslySetInnerHTML={{ __html: marked(data) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
