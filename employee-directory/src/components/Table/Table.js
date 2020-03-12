import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Table = () => {
  const { employeeData } = useContext(UserContext);
  const { fetchData } = useContext(UserContext);
  const { search } = useContext(UserContext);
  const { sort } = useContext(UserContext);
  const { carrot } = useContext(UserContext);

  const [employees, setEmployees] = employeeData;
  const [fetches, setFetch] = fetchData;
  const [sorts, setSort] = sort;
  const [carrots, setCarrot] = carrot;

  const alphabetCheck = () => {
    setSort(sorts === "alphabet" ? "notAlphabet" : "alphabet");
  };

  return (
    <table className="employeeTable">
      <tbody>
        <tr>
          <th>Image</th>
          <th onClick={alphabetCheck}>
            Name <img src={carrots} width="18px" height="18px" />
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
        {fetches === false ? (
          <tr className="employee"></tr>
        ) : (
          <React.Fragment>
            {employees
              // Stores the employee data and filters using search field
              .filter(employee => {
                let name = employee.name.first + " " + employee.name.last;
                return name.toLowerCase().includes(search[0].toLowerCase());
              })
              // Sorts the data
              .sort((a, b) => {
                if (sorts === "alphabet") {
                  return a.name.first + " " + a.name.last >
                    b.name.first + " " + b.name.last
                    ? 1
                    : -1;
                } else {
                  return a.name.first + " " + a.name.last <
                    b.name.first + " " + b.name.last
                    ? 1
                    : -1;
                }
              })
              // Loops the content from API and displays it to the front end
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
