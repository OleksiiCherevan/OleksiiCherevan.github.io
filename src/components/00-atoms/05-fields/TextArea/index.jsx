import style from "./index.module.css";
import React, { Children, useState } from "react";

const TextArea = (props) => {
    const { value = "", placeholder = "", onChange = () => {} } = props;

    const [text, setText] = useState(value);

    return (
        <div className={style["box"]}>
            <textarea
                className={style["text"]}
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
        </div>
    );
};

export default TextArea;
