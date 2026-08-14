import EmployeeCard from "./EmployeeCard";

function EmployeeList({
    employees, onEdit, onDelete,
}){
    if(employees.length == 0){
        return <p>No employees found.</p>
    }

    return(
        <div>
            {employees.map((employee)=>(
                <EmployeeCard
                key={employee.id}
                employee={employee}
                onEdit={onEdit}
                onDelete={onDelete}/>
            ))}
        </div>
    );
}

export default EmployeeList;