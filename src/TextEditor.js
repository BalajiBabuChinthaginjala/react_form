import React, {useState} from "react";
import FileExtensions from "./FileExtension";
import TitleExtraction from "./TitleExtraction";
import SynopsisExtraction from "./SynopsisExtraction";
import AttributesAndTags from "./AttributesAndTags";
import Source from "./Source";


const TextEditor = () => {
    const [details] = useState({
        source: "",
    });
    const onChildChange = (key, e) => {
        console.log("changing " + key);
        details[key] = e;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(details));
    }
    return (<div>
            <form className="p-1 m-3">
                <Source onChange={onChildChange} childName={"source"}/>
                <div>
                    <label>Title Identification :
                        <FileExtensions onChange={onChildChange} childName="formats"/>
                    </label>
                </div>
                <div>
                    <label>Title Identification :
                        <TitleExtraction onChange={onChildChange} childName="titleExtraction"/>
                    </label>
                </div>
                <label>Synopsis Identification : <SynopsisExtraction onChange={onChildChange}
                                                                     childName="synopsisExtraction"/></label>
                <AttributesAndTags onChange={onChildChange} childName="AttributesAndTags"/>
                <br/>
                <button onClick={handleSubmit}>Submit</button>

            </form>
        </div>
    )
}

export default TextEditor;