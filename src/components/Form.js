import React from 'react';

const Form = ({ handleSubmit, handleLabelChange, handleLabelSubmit, handleOptionChange, handleOptionSubmit, labelInput, optionInput }) => {
    return (
        <>
            <form onSubmit={handleSubmit} className='form1'>
                <div className="input-group">
                    <input className="input" type="text" name='label' value={labelInput} placeholder='Add Label' onChange={handleLabelChange} />
                    <button type='button' className="btn" onClick={handleLabelSubmit}>Add Input Box</button>
                </div>
                <div className="input-group">
                    <input className="input" type="text" placeholder='Options' name='options' value={optionInput} onChange={handleOptionChange} />
                    <button type='button' className="btn" onClick={handleOptionSubmit}>Add Select Box</button>
                </div>
            </form>
        </>
    )
}

export default Form;
