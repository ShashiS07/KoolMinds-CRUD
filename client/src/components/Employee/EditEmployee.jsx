import { useState, useEffect } from "react";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, editEmployee, increaseSalary } from "../../utils/api";

const initialValue = {
  name: "",
  email: "",
  phone: "",
  salary: "",
};

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% 0 0 25%;
  & > div {
    margin-top: 20px;
  }
`;

const EditEmployee = () => {
  const [employee, setEmployee] = useState(initialValue);
  const { name, email, phone, salary } = employee;
  const { employeeId } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getEmployeeById(employeeId);
    setEmployee(response.data.Details.employeeId);
  };

  const editEmployeeDetails = async () => {
    await editEmployee(employeeId, employee);
    navigate("/getEmployees");
  };

  const increaseEmployeeSalary=async()=>{
    confirm("Are You sure?")
    await increaseSalary(employeeId)
    navigate("/getEmployees")
  }
  const onValueChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Typography variant="h4">Edit Information</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Salary</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="salary"
          value={salary}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editEmployeeDetails()}
        >
          Edit Employee
        </Button>
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="success"
          onClick={() => increaseEmployeeSalary()}
        >
          Increase Employee's Salary By Rs.5000
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditEmployee;
