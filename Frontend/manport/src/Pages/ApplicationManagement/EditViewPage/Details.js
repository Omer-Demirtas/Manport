import CheckBox from "../../../Components/Input/CheckBox";
import Select from "../../../Components/Input/Select";
import TextInput from "../../../Components/Input/TextInput";
import Section from "../../../Components/Section";
import EnumTypes from '../../../Utils/Data/EnumTypes.json'


const Details = (props) =>
{
    const {
        app,
        handleChange
    } = props

    
    return (
        <Section id='details' title="Details">
            <div className='row mt-3 justify-content-between'>
                <div className='col-md-5'>
                    <p className='input-col mt-2'>Full Name : </p>
                    <div className="input-box">
                        <TextInput  
                            label="Full Name"
                            name='fullName'
                            value={app.fullName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='col-md-5 offset-md-2 '>
                    <p className='input-col mt-2'>Short Code : </p>
                    <div className="input-box">
                        <TextInput 
                            label="Short Code"
                            name='shortCode'
                            value={app.shortCode}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='row mt-3 justify-content-between'>
                <div className='col-md-5'>
                    <p className='input-col mt-2'>Release Date : </p>
                    <div className="input-box">
                        <TextInput  
                            label="Release Date : "
                            value={app.releaseDate}
                            onChange={handleChange}
                            name='releaseDate'
                        />
                    </div>
                </div>
                <div className='col-md-5 offset-md-2 '>
                    <p className='input-col mt-2'>Business Area</p>
                    <div className="input-box">
                        <Select 
                            options={EnumTypes.businessArea}
                            value={app.businessArea}
                            onChange={(e) => handleChange({target: {name: 'businessArea', value: e.target.value}})}
                        />
                    </div>
                </div>
            </div>
            <div className='row mt-3 justify-content-between'>
                <div className='col-md-5'>
                    <p className='input-col mt-2'>Responsible</p>
                    <div className="input-box">
                        <TextInput  
                            label="Responsible"
                            name='responsible'
                            value={app.responsible}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='col-md-5 offset-md-2 '>
                    <p className='input-col mt-2'>Responsible Team : </p>
                    <div className="input-box">
                        <Select 
                            name='responsibleTeam'
                            options={EnumTypes.responsibleTeam}
                            value={app.responsibleTeam}
                            onChange={(e) => handleChange({target: {name: 'businessArea', value: e.target.value}})}
                        />
                    </div>
                </div>
            </div>
            <div className='row mt-3 justify-content-between'>
                <div className='col-md-5'>
                    <p className='input-col mt-2'>Backend</p>
                    <div className="input-box">
                        <Select 
                            name='Backend'
                            options={EnumTypes.backend}
                            value={app.backend}
                            onChange={(e) => handleChange({target: {name: 'backend', value: e.target.value}})}
                        />
                    </div>
                </div>
                <div className='col-md-5 offset-md-2 '>
                    <p className='input-col mt-2'>Line Count of Backend : </p>
                    <div className="input-box">
                        <TextInput 
                            label="Line Count of Backend"
                            name='lineCountOfBackend'
                            value={app.lineCountOfBackend}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='row mt-3 justify-content-between'>
                <div className='col-md-5'>
                    <p className='input-col mt-2'>Frontend</p>
                    <div className="input-box">
                        <Select 
                            name='Frontend'
                            options={EnumTypes.frontend}
                            value={app.frontend}
                            onChange={(e) => handleChange({target: {name: 'frontend', value: e.target.value}})}
                        />
                    </div>
                </div>
                <div className='col-md-5 offset-md-2 '>
                    <p className='input-col mt-2'>Line Count of Frontend : </p>
                    <div className="input-box">
                        <TextInput 
                            label="Line Count of Frontend"
                            name='lineCountOfFrontend'
                            value={app.lineCountOfFrontend}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='row mt-3 justify-content-between'>
                <div className='col-md-5'>
                    <p className='input-col mt-2'>Database</p>
                    <div className="input-box">
                        <Select 
                            name='Database'
                            options={EnumTypes.database}
                            value={app.database}
                            onChange={(e) => handleChange({target: {name: 'database', value: e.target.value}})}
                        />
                    </div>
                </div>
                <div className='col-md-5 offset-md-2 '>
                    <p className='input-col mt-2'>Line Stop Risk of this application : </p>
                    <div className="input-box">
                        <CheckBox
                            value={app.isStopProduction}
                            onChange={(e) => handleChange({target: {name: 'isStopProduction', value: e.target.checked}})}
                        />  
                    </div>
                </div>
            </div>
            
        </Section>
    )
}

export default Details;