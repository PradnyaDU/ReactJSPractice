import {useState} from 'react'

export default function TextForm({ theme = 'light', themeStyles = {} }) {
  const [text, settext] = useState("This is default text");
  function onbtnclick() {
    let newText = text.toUpperCase();
    settext(newText);
  }
    function onbtnclicklow() {
      let newText = text.toLowerCase();
      settext(newText);
    }
  function onChangeFunc(event) {
    settext(event.target.value);
  }
  function getWordAndCharCount() {
    const charCount = text.length;
    const wordCount = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    return { charCount, wordCount };
  }
  // Text color now follows the global theme passed from App
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={onChangeFunc}
          style={themeStyles.textareaStyle}
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={onbtnclick}>
          Click to UPPERCASE
        </button>
        <button className="btn btn-primary" onClick={onbtnclicklow}>
          Click to lowercase
        </button>
        

        <div className="mt-3">
          <p>
            Words: {getWordAndCharCount().wordCount} | Characters:{" "}
            {getWordAndCharCount().charCount}
          </p>
        </div>
      </div>
    </>
  );
}
