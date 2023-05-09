import { useState } from "react";
import "./index.css";
import { marked } from "marked";

function App() {
  const [output, setOutput] = useState('HTML outputs here!')


  const onChange = (e) => {
    const htmlOutput = marked.parse(e.target.value)
    setOutput(htmlOutput)
  };

  return (
    <>
      <div className="w-full h-full flex flex-row flex-wrap justify-between text-lime-300">
          <textarea
            onChange={onChange}
            className='w-full mx-5 max-w-[700px] bg-black'
            name="input"
            id="input"
            cols="30"
            rows="10"
            placeholder="Write markdown here!"
          ></textarea>
        <div id="output-container" 
          className="w-full mx-5 max-w-[700px] bg-black">
          {output}
        </div>
      </div>
    </>
  );
}

export default App;
