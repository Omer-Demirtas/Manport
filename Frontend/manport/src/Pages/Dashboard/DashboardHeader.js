import { useState } from "react";
import Button from "../../Components/Buttons/Button";
import {IoVolumeMuteOutline, IoVolumeHighOutline} from 'react-icons/io5'



const DahsboardHeader = () =>
{
    const [sound, setSound] = useState(true)

    return (
        <div className='header'>
            <Button
                variant='transparant '
                onClick={() => setSound(!sound)}
            >
                {
                    sound ? 
                    <IoVolumeHighOutline size={128} />
                    :
                    <IoVolumeMuteOutline size={128} />
                }
            </Button>
        </div>
    )
}

export default DahsboardHeader;