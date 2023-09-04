import axios from 'axios';

const Url = 'https://koolmind-crud.onrender.com';

export const addEmployee = async (employee) => {
    return await axios.post(`${Url}/createEmployee`, employee);
}

export const addMoreEmployeeDetails = async (employee) => {
    return await axios.post(`${Url}/createEmployeeDetails`, employee);
}

export const getEmployees = async (employee) => {
    return await axios.get(`${Url}/getEmployees`);
}

export const getEmployeeById = async (employeeId) => {
    return await axios.get(`${Url}/employees/${employeeId}`);
}

export const deleteEmployee = async (id) => {
    return await axios.delete(`${Url}/employees/${id}`);
}

export const editEmployee = async (id, employee) => {
    return await axios.put(`${Url}/employees/${id}/update`, employee)
}

export const increaseSalary = async (id)=>{
    return await axios.put(`${Url}/employees/${id}`)
}