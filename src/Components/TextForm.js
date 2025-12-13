import { func } from 'prop-types';
import {useState} from 'react'

export default function TextForm() {
  const [text, settext] = useState("This is default text");
  const [textColor, setTextColor] = useState("black");
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
  function changeTextColor() {
    setTextColor(textColor === "black" ? "red" : "black");
  }
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
          style={{ color: textColor }}
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={onbtnclick}>
          Click to UPPERCASE
        </button>
        <button className="btn btn-primary" onClick={onbtnclicklow}>
          Click to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={changeTextColor}>
          Click to change text color
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
