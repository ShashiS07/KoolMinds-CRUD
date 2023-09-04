import react, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { addEmployee } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const initialValue = {
  name: "",
  email: "",
  phone: "",
  salary: "",
};

const Container = styled(FormGroup)`
  color: white;
  width: 50%;
  margin: 5% 0 0 25%;
  & > div {
    margin-top: 20px;
  }
`;

const AddEmployee = () => {
  const [employee, setEmployee] = useState(initialValue);
  const { name, email, phone, salary } = employee;

  let navigate = useNavigate();

  const onValueChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const addEmployeeDetails = async () => {
    const response = await addEmployee(employee);
    localStorage.setItem("employeeId",response.data.data._id)
    navigate("/createEmployeeDetails");
  };

  return (
    <Container>
      <Typography variant="h4">Add Employee</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Salary</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="salary"
          value={salary}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addEmployeeDetails()}
        >
          Add Employee
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddEmployee;
