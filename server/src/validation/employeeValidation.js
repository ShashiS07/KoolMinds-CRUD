const ObjectId = require('mongoose').Types.ObjectId

const validateEmployee=async (req,res,next)=>{
try{
    let employeeData=req.body
    if(!Object.keys(employeeData).length){
        return res.status(400).json({status:false,message:"All fields are required"})
    }
    let {name,email,phone,salary}=employeeData
    if(!name){
        return res.status(400).json({status:false,message:"Name is required"})
    }
    if(!email){
        return res.status(400).json({status:false,message:"Email is required"})
    }
    if(!phone){
        return res.status(400).json({status:false,message:"Phone is required"})
    }
    if(!salary){
        return res.status(400).json({status:false,message:"Salary is required"})
    }

    next()
}catch(err){
    return res.status(500).json({status:false,message:err.message})
}
}


const validateDetails=async (req,res,next)=>{
try{
    let details= req.body
    if(!Object.keys(details).length){
        return res.status(400).json({status:false,message:"All fields are required"})
    }
    let {country,state,city,pincode,employeeId}=details

    if(!country){
        return res.status(400).json({status:false,message:"Country is required"})
    }
    if(!state){
        return res.status(400).json({status:false,message:"state is required"})
    }
    if(!city){
        return res.status(400).json({status:false,message:"city is required"})
    }
    if(!pincode){
        return res.status(400).json({status:false,message:"pincode is required"})
    }
    if(!employeeId){
        return res.status(400).json({status:false,message:"emplyeeId is required"})
    }else{
        if(!ObjectId.isValid(employeeId)){
            return res.status(400).json({status:false,message:"Invalid EmployeeId"})
        }
    }

    next()
}catch(err){
    return res.status(500).json({status:false,message:err.message})
}
}


module.exports={validateEmployee,validateDetails}