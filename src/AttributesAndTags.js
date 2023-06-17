import React, {useEffect, useState} from "react";

const AttributesAndTags = (props) => {
    const [data, setData] = useState({
        concept: "", taxo: ""
    });

    useEffect(() => {
        props.onChange(props.childName, {
            template: {
                tags: [{
                    concept: data.concept,
                    taxo: data.taxo
                }]
            }
        });
    }, [data]);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prev) => {
            return {...prev, [name]: value};
        });
    };
    return (<div>
        <label> AttributesAndTags : <br/>
            <label className="m-2">
                concept : <input type="text" name="concept" onChange={handleChange}/>
            </label>
            <br/>
            <label className="m-2">
                taxo : <input type="text" name="taxo" onChange={handleChange}/>
            </label>
        </label>
        <br/>
    </div>);
};
export default AttributesAndTags;
