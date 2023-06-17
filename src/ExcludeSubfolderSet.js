import React, {useEffect, useRef, useState} from "react";

const ExcludeSubfolderSet = (props) => {
    const [data, setData] = useState(
        {
            all: "no",
            hidden: "no"
        }
    );
    useEffect(() => {
        props.onChange(props.childName, {
            all: data.all,
            hidden: data.hidden
        });
    }, [data]);
    const handleChange = (e) => {
        const {name, checked} = e.target;
        setData((prev) => {
            return {...prev, [name]: checked ? "yes":"no"};
        })
        if(e.target.checked){
        }
        props.onChange(props.childName, data);
    }

    return <span>
        <label> all :
            <input type="checkbox" value="yes" name="all" onChange={handleChange}/>
        </label>
        <label>hidden :
            <input type="checkbox" value="yes" name="hidden" onChange={handleChange}/>
        </label>
    </span>
}

export default ExcludeSubfolderSet;