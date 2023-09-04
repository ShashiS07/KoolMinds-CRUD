import React, { useState, useEffect } from "react";
import { getEmployeeById } from "../../utils/api";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  styled,
} from "@mui/material";
import dummy from "../../assets/dummy.png";

const Wrapper = styled(Card)`
  border: 1px solid black;
  border-radius: 20px;
  margin: 35px auto;
  width: 30%;
`;
const AvatarWrapper = styled(CardHeader)`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmployeeDetails = () => {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const { employeeId } = useParams();

  const fetchEmployeeDetails = async () => {
    const response = await getEmployeeById(employeeId);
    return response;
  };

  useEffect(() => {
    const fetchdata=async()=>{
        const data = await fetchEmployeeDetails();
        if (data) {
          setEmployeeDetails(data.data.Details);
        }
    }
    fetchdata()
  }, []);

  return (
    <Wrapper>
      <AvatarWrapper
        avatar={
          <Avatar style={{ marginBottom: "20px"}} src={dummy} alt="Avatar" />
        }
         title={employeeDetails?.employeeId?.name || ""}
      />
      <CardContent>
        {employeeDetails ? (
          <Typography variant="body2" color="textSecondary" component="div">
            <div>Email: {employeeDetails?.employeeId?.email}</div>
            <div>Phone: {employeeDetails?.employeeId?.phone}</div>
            <div>Salary: {employeeDetails?.employeeId?.salary}</div>
            <div>Country: {employeeDetails?.country}</div>
            <div>State: {employeeDetails?.state}</div>
            <div>City: {employeeDetails?.city}</div>
            <div>Pincode: {employeeDetails?.pincode}</div>
          </Typography>
        ) : (
          <Typography variant="body2" color="textSecondary" component="div">
            Loading...
          </Typography>
        )}
      </CardContent>
    </Wrapper>
  );
};

export default EmployeeDetails;
