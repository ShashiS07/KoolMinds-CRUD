const express=require('express')
const router=express.Router()
const {createEmployee,getAllEmployees,deleteEmployee,increaseSalary,updateEmployee}=require('../controller/EmployeeController')
const {createEmployeeDetails,getDetailsOfEmployee,updateEmployeeDetails}=require('../controller/EmployeeDetailsController')
const {validateEmployee,validateDetails}=require('../validation/employeeValidation')

router.post('/createEmployee',validateEmployee,createEmployee)
router.get('/getEmployees',getAllEmployees)
router.delete('/employees/:employeeId',deleteEmployee)
router.put('/employees/:employeeId/update',updateEmployee)
router.put('/employees/:id',increaseSalary)

router.post('/createEmployeeDetails',validateDetails,createEmployeeDetails)
router.get('/employees/:employeeId',getDetailsOfEmployee)
router.put('/employees/:employeeId/updateDetails',updateEmployeeDetails)


router.all('/*', (req,res)=>{
    return res.status(404).json({status:false,message:"Invalid Http Request"})
})

module.exports=router