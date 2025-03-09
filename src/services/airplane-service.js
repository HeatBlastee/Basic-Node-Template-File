const {AirplaneRepository} = require('../repositories');

const airplaneRepository = new AirplaneRepository();

function createAirplane(data){
    try{return airplaneRepository.create(data);}catch(error){
        throw error;
    }


}

module.exports={
    createAirplane
}