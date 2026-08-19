import React, { useState } from "react";

function FormInput() {
    const [inputText, setInputText] = useState("");

    function handleInputChange(event) {
        setInputText(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter text"
            />

            <p>{inputText}</p>
        </div>
    );
}

export default FormInput;