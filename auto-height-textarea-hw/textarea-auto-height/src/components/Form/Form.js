import React from 'react';
import Textarea from "../Textarea";
import './Form.scss'

const Form = ({className}) => {
    return (
        <form className={className}>
            <div className="form__group">
                <label htmlFor="textarea-label" className="form__group-title">
                    Textarea
                </label>
                <Textarea
                    className="form__group-textarea"
                    name="textarea-label"
                    id="textarea-label"
                    cols="30"
                    rows="10"
                    autoHeight={5}
                    placeholder="Enter whatever you want" />
            </div>
        </form>
    );
};

export default Form;