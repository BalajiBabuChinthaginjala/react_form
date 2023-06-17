import React, {useEffect, useState} from "react";
import ExcludeSubfolderSet from "./ExcludeSubfolderSet";

const Source = (props) => {

    const [details, setdetails] = useState({
        baseUrl: "",
        path: "",
        KnowledgeSource: "",
        StorageType: "",
        AmazonS3Accesskey: "",
        AmazonS3SecretKey: "",
        AmazonS3BucketName: "",
        AmazonS3FolderPath: "",
        AmazonS3BucketRegion: "",
    });
    useEffect(() => {
        props.onChange(props.childName, {
            baseUrl: details.baseUrl,
            path: details.path,
            storageType: details.StorageType,
            amazonAccessKey: details.AmazonS3Accesskey,
            amazonS3BucketName: details.AmazonS3BucketName,
            amazonS3BucketRegion: details.AmazonS3BucketRegion,
            amazonS3FolderPath: details.AmazonS3FolderPath,
            excludeSubfolderSet: details.excludeSubfolderSet,
        })
    }, [details]);
    const onChildChange = (key, e) => {
        setdetails((prev) => {
            return {...prev, [key]: e};
        })
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setdetails((prev) => {
            return {...prev, [name]: value};
        })
    }
    const handleChangeChecked = (e) => {
        const {name, checked} = e.target;
        setdetails((prev) => {
            return {...prev, [name]: checked ? "yes" : "no"};
        })
    }


    return <div>
        <label className="m-2">Knowledge Source : <input type="text" name="KnowledgeSource"
                                                         onChange={handleChange}></input></label><br/>
        <div>
            <label>StorageType :
                <select onChange={handleChange} name="StorageType">
                    <option value="cloud">cloud</option>
                    <option value="S3Bucket">S3Bucket</option>
                    <option value="Locale">Locale</option>
                </select>
            </label>
        </div>
        <label className="m-2">Amazon S3 Access key : <input type="text" name="AmazonS3Accesskey"
                                                             onChange={handleChange}/></label><br/>
        <label className="m-2">Amazon S3 SecretKey : <input type="password" name="AmazonS3SecretKey"
                                                            onChange={handleChange}></input></label> <br/>
        <label className="m-2">Amazon S3 BucketName : <input type="text" name="AmazonS3BucketName"
                                                             onChange={handleChange}></input></label><br/>
        <label className="m-2">Amazon S3 FolderPath : <input type="text" name="AmazonS3FolderPath"
                                                             onChange={handleChange}></input></label><br/>
        <label className="m-2">Amazon S3 Bucket Region : <input type="text" name="AmazonS3BucketRegion"
                                                                onChange={handleChange}></input></label><br/>
        <button type="">Test Connection</button>
        <label> Slice pdf files into slices: <input type="checkbox" name="Slicepdffilesintoslices"
                                                    value="Slicepdffilesintoslices"
                                                    onChange={handleChangeChecked}/></label><br/>
        <label> DetagSnopsys: <input type="checkbox" name="DetagSnopsys" value="DetagSnopsys"
                                     onChange={handleChangeChecked}/></label>
        <label className="m-2">BaseUrl for displaihng files: <input type="text" name="Baseurlfordisplayingurl"
                                                                    onChange={handleChange}></input></label><br/>
        <label className="m-2">Path: <input type="text" name="path" onChange={handleChange}></input></label><br/>
        Exclude SubFolder: <ExcludeSubfolderSet onChange={onChildChange} childName="excludeSubfolderSet"/>
    </div>
}

export default Source;