import React, {useEffect, useState} from "react";

const fileType = ["html", "xml", "pdf", "doc", "docx", "docm", "txt", "xls", "xlsx", "xlsm", "xlsb", "ppt", "pptx", "pptm", "pdfslicing"];

const FileExtensions = (props) => {

    const [data, setdata] = useState({
        html: "no",
        xml: "no",
        pdf: "no",
        doc: "no",
        docx: "no",
        txt: "no",
        xls: "no",
        xlsx: "no",
        xlsm: "no",
        xlsb: "no",
        ppt: "no",
        pptx: "no",
        pptm: "no",
        pdfslicing: "no",
    });
    useEffect(() => {
        props.onChange(props.childName, {
            formats: {
                html: data.html,
                xml: data.xml,
                pdf: data.pdf,
                doc: data.doc,
                docx: data.docx,
                txt: data.txt,
                xls: data.xls,
                xlsx: data.xlsx,
                xlsm: data.xlsm,
                xlsb: data.xlsb,
                ppt: data.ppt,
                pptx: data.pptx,
                pptm: data.pptm,
                pdfslicing: data.pdfslicing,
            },
        });
    }, [data]);
    const handleChange = (e) => {
        const {name,checked} = e.target;
        setdata((prev) => {
            return {...prev, [name]: checked? "yes":"no"};
        })
        props.onChange(props.childName, data);
    }
    return (
        <div>
            {
                fileType.map((eachvalue) => {
                        return <div key={eachvalue}>
                            <input value={eachvalue} type="checkbox" name={eachvalue} onChange={handleChange}/>
                            <span> {eachvalue} </span>
                        </div>
                    }
                )
            }
        </div>
    )

}
export default FileExtensions;