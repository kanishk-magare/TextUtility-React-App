// TextForm.js
import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted To UpperCase');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted To LowerCase');
  };

  const handleFWCcase = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase();
    setText(newText);
    props.showAlert('Converted To First Word Capital Case');
  };

  const handlecopy = () => {
    var textarea = document.getElementById('myform');
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    props.showAlert('Text Copied');
  };

  const handleEtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Removed Extra Spaces');
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Cleared text');
    navigator.clipboard.writeText(''); // Clear the clipboard
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  

  return (
    <>
    <div className="container">
      <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h1>
      <textarea  placeholder="Type Here" value={text} className="form-control" id="myform" rows="3" onChange={handleOnChange}></textarea>
      <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={handleEtraSpaces}>
        Remove Extra Spaces
      </button>
      <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={handleFWCcase}>
        First Letter Capital
      </button>
      <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={handlecopy}>
        Copy Text
      </button>
      <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>
        Clear
      </button>
    </div>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h2>Your text Summary :</h2>
      <h4>
        {text.split(/\s+/).filter((element)=>{return element!=0}).length } Words and {text.length} Characters
      </h4>
      <h3>Time required to read your text: </h3>
      <h5> {0.008 * text.split(' ').filter((element)=>{return element!=0}).length} Minutes</h5>
    </div>
    </>
  );
}
