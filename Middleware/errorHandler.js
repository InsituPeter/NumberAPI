const { createCustomError, CustomAPIError }= require("../customErrors")
const errorHandler = (err, req, res,next)=>{
   if(err instanceof CustomAPIError){
    
    return res.status(400).json({Number, error:true})
   
   }
   res.status(500).json({error:"failed to fetch fun fact"})
}

module.exports= errorHandler