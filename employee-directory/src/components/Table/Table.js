import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Table = () => {
  const { employeeData } = useContext(UserContext);
  const { fetchData } = useContext(UserContext);
  const { search } = useContext(UserContext);

  const [employees, setEmployees] = employeeData;
  const [fetches, setFetch] = fetchData;

  return (
    <table className="employeeTable">
      <tbody>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
        {fetches === false ? (
          <tr className="employee"></tr>
        ) : (
          <React.Fragment>
            {employees
              .filter(employee => {
                let name = employee.name.first + " " + employee.name.last;
                return name.toLowerCase().includes(search[0].toLowerCase());
              })
              .map((data, index) => (
                <tr className="employee" key={index}>
                  <td className="employeeImg">
                    <img src={data.picture.medium} alt="" />
                  </td>
                  <td className="employeeName">
                    {data.name.first + " " + data.name.last}
                  </td>
                  <td className="employeePhone">{data.cell}</td>
                  <td className="employeeEmail">{data.email}</td>
                  <td className="employeeDOB">
                    {data.dob.date.substring(0, 10)}
                  </td>
                </tr>
              ))}
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
};

export default Table;
