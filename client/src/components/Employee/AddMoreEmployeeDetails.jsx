import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addMoreEmployeeDetails } from '../../utils/api';

const initialValue = {
    country: '',
    state: '',
    city: '',
    pincode:'',
    employeeId:''
}

const Container = styled(FormGroup)`
    color: white;
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
    }
`;

const AddMoreEmployeeDetails = () => {

    const [employee, setEmployee] = useState(initialValue);
    const { country, state, city, pincode} = employee;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.
            value})
    }

    const addEmployeeDetails = async() => {
        employee.employeeId=localStorage.getItem('employeeId')
        await addMoreEmployeeDetails(employee);
        navigate('/getEmployees');
        localStorage.removeItem("employeeId")
    }

    return (
        <Container>
            <Typography variant="h4">Add More Employee Details</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Country</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='country' value={country} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">State</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='state' value={state} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={city} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Pincode</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='pincode' value={pincode} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addEmployeeDetails()}>Add Details</Button>
            </FormControl>
        </Container>
    )
}

export default AddMoreEmployeeDetails