const mongoose=require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const EmployeeDetailsSchema=new mongoose.Schema({
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true,
    },
    employeeId:{
        type:ObjectId,
        ref:"Employee"
    }
})


module.exports=mongoose.model("Employee_Details",EmployeeDetailsSchema)