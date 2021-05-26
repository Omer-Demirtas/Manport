import { useState } from "react"
import Button from "./Button";



const AsyncButton = (props) =>
{
    const [loading, setLoading] = useState(false)
    const {
        children,
        onClick
    } = props;


    const handleSubmit = async () =>
    {

        setLoading(true)
        await onClick();
        setLoading(false)
    }

    return (
        <Button
            onClick={handleSubmit}
        >
            {
                loading ?
                <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Loading...</span>
                </>
                :
                children
            }
       </Button>
    )
}

export default AsyncButton;