const { error } = require('winston');
const {AirplaneService} = require('../services');
const {StatusCodes} = require('http-status-codes');
async function createAirplane(req, res){
    try{
        const resp = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Airplane created successfully",
            data:resp,
            error:{}
        });
    }catch(err){
        res.status(500).json(
            {
                success:false,
                message:"Something went wrong",
                data:{},
                error:{err}
            }
        );
    }
}
module.exports={
    createAirplane
}