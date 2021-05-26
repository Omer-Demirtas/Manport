
export const createPlant = (plant) => 
{
    return {type: 'CREATE_PLANT', payload: plant}
}

export const deletePlant = (id) => 
{
    return {type: 'DELETE_PLANT', payload: id}
}


export const updatePlant = (plant) => 
{
    return {type: 'UPDATE_PLANT', payload: plant}
}