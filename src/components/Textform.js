import React, {useState} from 'react'
 
export default function Textform(props) {
  const[text, setText] = useState("Enter some text here");
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
    
  }
  const handleClearText = () => {
    var newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success")
  }
  const handleOnChange = (event) =>{
    // console.log("textarea clicked");
    setText(event.target.value);
  }
  return (
    <>
<div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
  <textarea className="form-control " style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} placeholder="Write here" id="floatingTextarea2" rows="8" cols="20" value={text} onChange={handleOnChange} ></textarea>
  <br />
<div className="btn btn-primary my-3 " onClick={handleUpClick}>Convert to uppercase</div>
<div className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to lowercase</div>
<div className="btn btn-primary my-3 mx-2" onClick={handleClearText}>Clear text</div>
    </div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h3>Your Text Summary</h3>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} minute read</p>
  <h3>Preview</h3>
  <p>{text}</p>
</div>
    </>
  )
}
