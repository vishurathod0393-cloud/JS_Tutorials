import { useEffect, useState } from "react";

function EmployeeForm({ onAdd, onUpdate, editingEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });

  useEffect(() => {
    if (editingEmployee) {
      setFormDate(editingEmployee);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormDate((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.department ||
      !formData.salary
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingEmployee) {
      onUpdate(formData);
    } else {
      onAdd({
        ...formData,
        id: Date.now(),
      });
    }

    setFormDate({
      name: "",
      email: "",
      department: "",
      salary: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
      >
        <option value="">select options</option>
        <option value="Development">Development</option>
        <option value="Testing">Testing</option>
        <option value="HR">HR</option>
      </select>

      <input
        name="salary"
        type="number"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
      />

      <button type="submit">
        {editingEmployee ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;
