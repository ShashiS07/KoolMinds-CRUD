const employeeModal = require("../modal/EmployeeModal");
const employeeDetailsModal = require("../modal/EmployeeDetailsModal");

const createEmployee = async (req, res) => {
  try {
    let employeeData = req.body;

    let data = await employeeModal.create(employeeData);
    return res
      .status(201)
      .json({ status: true, message: "Success", data: data });
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    let employees = await employeeModal.find();
    if (!employees.length)
      return res(404).status({ status: false, message: "No Employee Found" });

    return res
      .status(200)
      .json({ status: true, message: "Employees", Employees: employees });
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    let id = req.params.employeeId;
    console.log(id);
    await employeeModal.deleteOne({ _id: id });
    await employeeDetailsModal.deleteOne({ employeeId: id });
    return res
      .status(200)
      .json({ status: true, message: "Deleted Successfully" });
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }
};

const increaseSalary = async (req, res) => {
  try {
    let id = req.params.id;

    let newSalary = await employeeModal.findByIdAndUpdate(
      id,
      { $inc: { salary: 5000 } },
      { new: true }
    );
    return res
      .status(201)
      .json({ status: false, message: "Updated", data: newSalary });
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }
};


const updateEmployee=async (req,res)=>{
try{
    let employeeId = req.params.employeeId;
    let toBeUpdateData=req.body

    let updatedEmployee=await employeeModal.findOneAndUpdate({_id:employeeId},toBeUpdateData,{new:true})

    if(!updatedEmployee) return res.status(404).json({status:false,message:'No Employee Found'})
    return res.status(201).json({status:true,message:"Updated",data:updatedEmployee})

}catch(err){
    return res.status(500).json({status:false,message:err.message})
}
}


module.exports = {
  createEmployee,
  getAllEmployees,
  deleteEmployee,
  increaseSalary,
  updateEmployee
};
