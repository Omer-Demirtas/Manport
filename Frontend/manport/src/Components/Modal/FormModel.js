import { useEffect, useState } from "react";
import LoadingButton from "../Buttons/LoadingButton";
import './index.css'


const FormModel = (props) =>
{
    const {
        type,
        action,
        data,
        title,
        forms,
        handleResetForm
    } = props;
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState()

    useEffect(() => {
        setInput({...data})
    }, [data, forms, type])

    const handleSubmit = async () =>
    {
        setLoading(true)
        await action(input);
        setLoading(false)
    }

    const handleInput = (e) =>
    {
        setInput({...input, [e.target.name]: e.target.value})
    }

    return (
        <div className="modal right focus  fade text-dark" id="form" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
                    <button
                        onClick={handleResetForm}
                        type="button" className="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                        ></button>
                </div>
                <div className="modal-body">
                    <form className='text-start'>
                        {
                            input &&
                            forms.map(form => (
                                <div key={form.name} className="mb-3">
                                    <label 
                                        htmlFor={form.name} 
                                        className="form-label"
                                    >
                                        {form.text}
                                    </label>
                                    <input 
                                            type="text" 
                                            className="form-control" 
                                            id={form.name} 
                                            aria-describedby={form.text} 
                                            name={form.name}
                                            value={input[form.name]}
                                            onChange={handleInput}
                                            placeholder={form.text}
                                    />
                                </div>
                            ))
                        }
                    </form>
                    
                </div>
                <div className="modal-footer">
                    <button
                        onClick={handleResetForm}
                        type="button" 
                        className="btn btn-secondary" 
                        data-bs-dismiss="modal">
                            Close
                    </button>
                    
                    <LoadingButton
                        loading={loading}
                        onClick={handleSubmit}
                    >
                        save
                    </LoadingButton>
                </div>
                </div>
            </div>
        </div>    
    )
}

FormModel.defaultProps = 
{
    title: 'Title',
    forms: [],
    data: {},
    action: () => console.log(`default action`)
}

export default FormModel;