const employeeDetailsModal = require("../modal/EmployeeDetailsModal");
const ObjectId = require("mongoose").Types.ObjectId;

const createEmployeeDetails = async (req, res) => {
  try {
    let details = req.body;

    let employeeDetails = await employeeDetailsModal.create(details);
    return res
      .status(201)
      .json({ status: true, message: "Success", data: employeeDetails });
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }
};

const getDetailsOfEmployee = async (req, res) => {
  try {
    let employeeId = req.params.employeeId;
    if (!ObjectId.isValid(employeeId)) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid EmployeeId" });
    }

    let detailsOfEmployee = await employeeDetailsModal
      .findOne({ employeeId })
      .populate("employeeId");
    if (!detailsOfEmployee)
      return res.status(404).json({
        status: false,
        message: "No Employee Found with this employee Id",
      });
    return res.status(200).json({
      status: true,
      message: "Details Of Employee",
      Details: detailsOfEmployee,
    });
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }
};

const updateEmployeeDetails = async (req, res) => {
  try {
    let employeeId = req.params.employeeId;
    let toBeUpdateData = req.body;

    let updatedEmployeeDetails = await employeeDetailsModal.findOneAndUpdate(
      { employeeId: employeeId },
      toBeUpdateData,
      { new: true }
    ).populate("employeeId");

    if (!updatedEmployeeDetails)
      return res
        .status(404)
        .json({ status: false, message: "No Employee Found" });
    return res
      .status(201)
      .json({ status: true, message: "Updated", data: updatedEmployeeDetails });
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }
};

module.exports = {
  createEmployeeDetails,
  getDetailsOfEmployee,
  updateEmployeeDetails,
};
