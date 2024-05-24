import React, { useState } from 'react';
import Form from './Form';
import CustomForm from './CustomForm';
import "../styles/main.scss"

const Actions = ({setIsopen}) => {
    const [labelInput, setLabelInput] = useState('');
    const [optionInput, setOptionInput] = useState('');
    const [labels, setLabels] = useState([]);
    const [options, setOptions] = useState([]);
    let [label, setLabel] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleLabelChange = (e) => {
        setLabelInput(e.target.value);
    }

    const handleOptionChange = (e) => {
        setOptionInput(e.target.value);
    }

    const handleLabelSubmit = () => {
        if (labelInput.trim() !== '') {
            setLabels([...labels, labelInput]);
            setLabelInput('');
        }
        else {
            alert("Label Cannot be Empty!")
        }

    }

    const handleOptionSubmit = () => {
        if (labelInput.trim() !== '') {
            setOptions([...options, optionInput]);
            setOptionInput('');
            setLabel(labelInput);
            setLabelInput('');
        }
        else {
            alert("please fill the data")
        }
    }

    return (
        <div className='con'>
            <h1>Custom Form Builder</h1>
            <div>
                <Form
                    handleSubmit={handleSubmit}
                    handleLabelChange={handleLabelChange}
                    handleLabelSubmit={handleLabelSubmit}
                    handleOptionChange={handleOptionChange}
                    handleOptionSubmit={handleOptionSubmit}
                    labelInput={labelInput}
                    optionInput={optionInput}
                />
                <CustomForm
                    labels={labels}
                    options={options}
                    labelInput={labelInput}
                    label={label}
                    setLabel={setLabel}
                    setOptions={setOptions}
                    setLabels={setLabels}
                />
            </div>
        </div>
    )
}

export default Actions;
