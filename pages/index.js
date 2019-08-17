// track state, import useState from react
// use {} to declare single component
import React, {useState} from "react";

const InputElement = () => {

    const [inputText, setInputText] = useState(""); // this will track a single change
    const [historyList, setHistoryList] = useState([]); // this will track a history of each change
    return ( <div>
        <input 
        onChange={(event) => {
            setInputText(event.target.value); // caputer value from event
            setHistoryList([...historyList, event.target.value]);
        }}
        placeholder="Enter Some Text" /><br/>
        {inputText}
        <hr/><br/>
        <ul>
            {historyList.map((record)=> {
                return <div>{record}</div>
            })}
        </ul>
    </div>
    );
    }

export default InputElement;