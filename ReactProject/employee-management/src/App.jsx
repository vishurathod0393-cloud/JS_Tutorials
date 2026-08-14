import { useState } from "react";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import SearchBar from "./components/SearchBar";

import "./App.css";

const initialEmployees = [
  {
    id: 1,
    name: "Vishal Rathod",
    email: "vishal@gmail.com",
    department: "Development",
    salary: 30000,
  },
  {
    id: 2,
    name: "Rahul Patil",
    email: "rahul@gmail.com",
    department: "Testing",
    salary: 28000,
  },
  {
    id: 3,
    name: "Amit Sharma",
    email: "amit@gmail.com",
    department: "HR",
    salary: 25000,
  },
];

function App() {
  // Employees
  const [employees, setEmployees] =
    useState(initialEmployees);

  // Search
  const [search, setSearch] = useState("");

  // Department Filter
  const [department, setDepartment] =
    useState("All");

  // Edit Employee
  const [editingEmployee, setEditingEmployee] =
    useState(null);

  // -------------------------
  // ADD EMPLOYEE
  // -------------------------

  const handleAdd = (employee) => {
    setEmployees((previous) => [
      ...previous,
      employee,
    ]);
  };

  // -------------------------
  // DELETE EMPLOYEE
  // -------------------------

  const handleDelete = (id) => {
    setEmployees((previous) =>
      previous.filter(
        (employee) => employee.id !== id
      )
    );
  };

  // -------------------------
  // EDIT EMPLOYEE
  // -------------------------

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  // -------------------------
  // UPDATE EMPLOYEE
  // -------------------------

  const handleUpdate = (updatedEmployee) => {
    setEmployees((previous) =>
      previous.map((employee) =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );

    setEditingEmployee(null);
  };

  // -------------------------
  // SEARCH + FILTER
  // -------------------------

  const filteredEmployees = employees.filter(
    (employee) => {
      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesDepartment =
        department === "All" ||
        employee.department === department;

      return (
        matchesSearch &&
        matchesDepartment
      );
    }
  );

  return (
    <div className="app">

      <h1>Employee Management</h1>

      {/* Employee Form */}

      <EmployeeForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingEmployee={editingEmployee}
      />

      <hr />

      {/* Search + Department Filter */}

      <SearchBar
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
      />

      {/* Employee List */}

      <EmployeeList
        employees={filteredEmployees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default App;
