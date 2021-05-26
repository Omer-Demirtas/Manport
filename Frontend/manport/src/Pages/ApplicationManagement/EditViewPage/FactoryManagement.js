import api from "../../../Api";
import CheckBox from "../../../Components/Input/CheckBox";
import Switch from "../../../Components/Input/Switch";
import Section from "../../../Components/Section";


const isExist = (countries, plant) =>
{
    return countries.map(c => c.plantId === plant.id).includes(true)
}

const createCountry = async (plantId, appId) =>
{
    try {
        const resp = await api().post('/country/'+appId, {plantId, isTracking: true, isActive: true})
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}



const FactoryManagement = (props) =>
{
    const {
        countries, 
        plants,
        appId
    } = props;

    return (
        <Section id='factory' title='Factory Management'>
                {

                    plants.map(plant => {
                        const exist = isExist(countries, plant)
                        return (
                            <div key={plant.id} className='row justify-content-center align-items-center my-2'>
                            <div className='col col-md-3 '>
                                <div className='d-flex text-end'>
                                    <CheckBox
                                        onChange={() => (!exist && createCountry(plant.id, appId))}
                                        value={exist}
                                    />
                                    <h4 className='mx-2 mt-1'>{plant.countryName}</h4>
                                </div>
                            </div>
                            <div className='col-auto col-md-3 '>
                                <div className='d-flex  justify-content-end'>
                                    <Switch />  

                                </div>
                            </div>
                        </div>
                        )
                    }
                    )
                }
        </Section>
    )
}
/*
                                    <input 
                                        //onChange={() => (!exist && createCountry(plant.id, appId))}
                                        type="checkbox" 
                                        className="largerCheckbox"
                                        //checked={exist}
                                    />
                                    */
FactoryManagement.defaultProps = 
{
    countries: [],
    plants: [],
}

export default FactoryManagement;