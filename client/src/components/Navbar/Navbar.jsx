import React from "react";
import { AppBar, Toolbar, Typography, Button, styled } from "@mui/material";
import {Link} from 'react-router-dom'

const Container = styled(AppBar)`
  background: gray;
`;

const Navbar = () => {
  return (
    <Container position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Employee Management System
        </Typography>
        <Button color="inherit" component={Link} to='/'>Homepage</Button>
        <Button color="inherit" component={Link} to='/createEmployee'>Add Employee</Button>
        <Button color="inherit" component={Link} to='/getEmployees'>List of Employees</Button>
      </Toolbar>
    </Container>
  );
};

export default Navbar;
