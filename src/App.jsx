import { useState } from "react";
import "./index.css";
import htmlParse from "html-react-parser";
// import { marked } from "marked";

marked.use({
  breaks: true
})


const editorInitValue = '# Markdown Previewer\n## Made by richiCoder\n### richicoder.com\n\nPlease [click here to visit richiCoder website](https://www.richicoder.com)\n\nSome code:\n```\n\n// JS function\n\nfunction() { \n\tconsole.log("Visit my website!")\n\t}\n```\n\n`{ name: "richiCoder", website: "richiCoder.com" }`\n\n- Check website!\n- Remember to check it out!\n\n1. First step\n1. Second step! \n\nHere a blockquote\n> Quoting the great Shakespeare!\n\n![richiCoder](https://richicoder.com/richicoder_profile_photo.png)\n\nFinally, **I`am richiCoder**, _a React Developer_'
const previewerInitValue = marked.parse(editorInitValue)

function App() {
  const [input, setInput] = useState(editorInitValue)
  const [output, setOutput] = useState(previewerInitValue)

  const onChange = (e) => {
    if (e.target.value === '' || e.target.value === ' ') {
      setInput('')
      setOutput('')
      return
    }
    const htmlOutput = marked.parse(e.target.value)
    setInput(e.target.value)
    setOutput(htmlOutput)
  };

  return (
      <div className="w-full h-full flex flex-row flex-wrap items-center justify-around pt-6 absolute top-0 left-0">
        <div id="input-container" className='sm:w-[49%] w-full h-[47%] sm:h-[90%] min-w-[300px] flex flex-col'>
          <label htmlFor="editor" className='text-2xl pl-5'>Markdown Input</label>
          <textarea
            onChange={onChange}
            className='w-full flex-grow bg-[rgb(20,20,20)] text-lime-300 rounded-lg p-5 overflow-auto mt-1 sm:mt-3'
            name="input"
            id="editor"
            cols="30"
            rows="10"
            value={input}
            type='text'
          ></textarea>
        </div>
        <div id="output-container" className='sm:w-[49%] w-full h-[47%] sm:h-[90%] min-w-[300px] flex flex-col'>
          <label htmlFor="preview" className='text-2xl pl-5'>Html Output</label>
          <div id="preview"
            className='w-full flex-grow bg-black text-white flex flex-col rounded-lg gap-5 p-5 overflow-auto mt-1 sm:mt-3'>
            {
              htmlParse(output)
            }
          </div>
        </div>
      </div>
  );
}

export default App;
