import React,{useState} from "react";
import FileExtensions from "./fileExtension";
import TitleExtraction from "./TitleExtraction";


const TextEditor = () =>{
    const [details,setdetails]=useState({
      KnowledgeSource : "",
      StotageType:"",
      AmazonS3Accesskey:"",
      AmazonS3SecretKey:"",
      AmazonS3BucketName:"",
      AmazonS3FolderPath:"",
      AmazonS3BucketRegion:"",
    })
  
    const handleChange = (e) =>{
      const {name,value}=e.target;
      setdetails((prev)=>{
        return {...prev,[name]:value};
      })
    }
    const onChildChange = (key,e) =>{
      console.log("changing "+key);
     details[key] = e;
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(JSON.stringify(details));
    }
      return (<div>
  <form className="p-1 m-3" >
    <div className="m-2">
    <label className="m-2" >Knowledge Source :  <input type="text" name = "KnowledgeSource" onChange={handleChange}></input></label><br/>
    <div>
  <label>StotageType :  
    <select  onChange={handleChange} name="StotageType">
      <option value="cloud">cloud</option>
      <option value="S3Bucket">S3Bucket</option>
      <option value="Locale">Locale</option>
    </select>
  </label>
  </div>
    <label className="m-2">Amazon S3 Access key :  <input type="text" name="AmazonS3Accesskey" onChange={handleChange}/></label><br/>
    <label className="m-2">Amazon S3 SecretKey : <input type="password" name="AmazonS3SecretKey"  onChange={handleChange}></input></label> <br/>
    <label className="m-2">Amazon S3 BucketName : <input type="text" name="AmazonS3BucketName" onChange={handleChange}></input></label><br/>
    <label className="m-2">Amazon S3 FolderPath : <input type="text" name="AmazonS3FolderPath"  onChange={handleChange}></input></label><br/>
    <label className="m-2">Amazon S3 Bucket Region : <input type="text" name="AmazonS3BucketRegion"  onChange={handleChange}></input></label><br/>
    </div>
    <button type="" >Test Connection</button>
    <div>
    <FileExtensions onChange={onChildChange} childName="extensions"/>
    <TitleExtraction onChange={onChildChange} childName="titleExtraction"/>
    </div>
    <label > Slice pdf files into slices: <input type ="checkbox" name="Slicepdffilesintoslices" value="Slicepdffilesintoslices"/></label><br/>
    <label > DetagSnopsys: <input type ="checkbox" name="DetagSnopsys" value="DetagSnopsys"/></label>
    <label className="m-2">BaseUrl for displaihng files: <input type="text" name="Baseurlfordisplayingurl"  onChange={handleChange}></input></label><br/>

    <button onClick={handleSubmit}>Submit</button>

  </form>
    </div>
      )
  }

  export default TextEditor;