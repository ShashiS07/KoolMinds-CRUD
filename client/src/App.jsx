import React from "react";
import Homepage from "./components/Homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import AddEmployee from "./components/Employee/AddEmployee";
import ListOfEmployees from "./components/Employee/ListOfEmployees";
import EditEmployee from "./components/Employee/EditEmployee"
import AddMoreEmployeeDetails from "./components/Employee/AddMoreEmployeeDetails";
import EmployeeDetails from "./components/Employee/EmployeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { 
        path: "/createEmployee", 
        element: <AddEmployee /> 
      },
      { 
        path: "/createEmployeeDetails", 
        element: <AddMoreEmployeeDetails/> 
      },
      {
        path:"/getEmployees",
        element:<ListOfEmployees/>
      },
      {
        path:"/employees/:employeeId",
        element:<EmployeeDetails/>
      },
      {
        path:"/employees/:employeeId/update",
        element:<EditEmployee/>
      }
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
