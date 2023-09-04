import react, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";
import { getEmployees, deleteEmployee } from "../../utils/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 20px auto;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);

  const getAllEmployees = async () => {
    let response = await getEmployees();
    setEmployees(response.data.Employees);
  };

  const deleteEmployeeData = async (id) => {
    confirm("Are You sure? You want to delete")
    await deleteEmployee(id);
    getAllEmployees();
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Employee ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Salary</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {employees.map((employee) => (
          <TRow key={employee.name}>
            <TableCell>{employee._id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.phone}</TableCell>
            <TableCell>{employee.salary}</TableCell>
            <TableCell>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link} to={`/employees/${employee._id}/update`}
              >
                Edit
              </Button>{" "}
              <Button
                color="info"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link} to={`/employees/${employee._id}`}
              >
                More...
              </Button>{" "}
              <Button
                color="secondary"
                variant="contained"
                style={{ marginRight: 10 }}
                onClick={() => deleteEmployeeData(employee._id)}
              >
                Delete
              </Button>{" "}
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllEmployees;
