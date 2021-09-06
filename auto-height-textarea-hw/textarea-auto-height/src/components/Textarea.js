import React from 'react';
import './Textarea.scss'

const Textarea = ({name, id, cols, rows, autoHeight, placeholder, className}) => {
    const handlerAutoHeight = (e) => {
        e.target.style.height = "0px";
        e.target.style.height = (e.target.scrollHeight + autoHeight) + "px";
    }

    return (
        <textarea className={className}
                  onInput={handlerAutoHeight}
                  name={name}
                  id={id}
                  cols={cols}
                  rows={rows}
                  placeholder={placeholder} />
    );
};

export default Textarea;