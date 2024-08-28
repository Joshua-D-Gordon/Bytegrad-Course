import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({text, setText}) {

  const [warningText, setWarningText] = useState('');

  const handelChange = (e) =>{
    let newText = e.target.value;
      // see if user is typing script
      if(newText.includes("<script>")){
        setWarningText('no script allowed');
        newText = newText.replace('<script>', "");
      } else if (newText.includes("@")){
        setWarningText('no @ allowed');
        newText = newText.replace("@", "");
      } else {
        setWarningText('');
      }
      // set text
      setText(newText);
  }

  return (
    <div className="textarea">
      <textarea
      placeholder="Enter your text"
      spellCheck="false"
      value={text}
      onChange={handelChange}/>
      {warningText && <Warning warningText={warningText}/>}
    </div>
  )
}
