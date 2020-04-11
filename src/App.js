import React, { useState, useEffect } from 'react';
import API from './utils/API';
import './App.css';
import Footer from './componets/Footer';
import Wrapper from './componets/Wrapper';
import Directory from './componets/Directory';
import Container from './componets/Container';
import Topbar from './componets/Topbar';
import File from './componets/File';
import Employee from './componets/Employee';
import Headers from './componets/Headers';

function App() {
  const [employees, setEmployees] = useState([]);
  const [lastSort, setLastSort] = useState(``);
  const [search, setSearch] = useState(``);
  const [dates, setDates] = useState({
    startDate: `1950-01-01`,
    endDate: `2000-01-01`,
  });

  useEffect(() => {
    searchEmployees();
  }, []);

  function handleChange(event, field) {
    if (field === `search`) {
      setSearch(event.target.value);
    } else {
      setDates({ ...dates, [field]: event.target.value });
    }
  }

  function searchEmployees() {
    API.search().then((res) => {
      setEmployees(res.data.results);
    });
  }

  function findByName(searchString) {
    searchString = searchString.toLowerCase();
    const foundByName = [...employees].filter((employee) => {
      return (
        `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`.indexOf(
          searchString
        ) !== -1
      );
    });
    setEmployees(foundByName);
  }

  function filterEmployees(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    const filteredEmployees = [...employees].filter((employee) => {
      let date = new Date(employee.dob.date);
      return date >= start && date <= end;
    });
    setEmployees(filteredEmployees);
  }

  function sortEmployees(propertyToSort) {
    let sortedEmployees;
    let sortStatus;
    switch (propertyToSort) {
      case `name`:
        if (lastSort !== propertyToSort) {
          sortedEmployees = employees.sort((a, b) =>
            a.name.last > b.name.last ? 1 : -1
          );
          sortStatus = propertyToSort;
        } else {
          sortedEmployees = employees.sort((a, b) =>
            a.name.last > b.name.last ? -1 : 1
          );
          sortStatus = ``;
        }
        setEmployees(sortedEmployees);
        setLastSort(sortStatus);
        break;
      case `dob`:
        if (lastSort !== propertyToSort) {
          sortedEmployees = employees.sort((a, b) =>
            a.dob.date > b.dob.date ? 1 : -1
          );
          sortStatus = propertyToSort;
        } else {
          sortedEmployees = employees.sort((a, b) =>
            a.dob.date > b.dob.date ? -1 : 1
          );
          sortStatus = ``;
        }
        setEmployees(sortedEmployees);
        setLastSort(sortStatus);
        break;
      default:
        console.log(`nothing provided`);
    }
  }

  return (

    <div>

      <Employee.Provider
        value={{ search, dates, employees, findByName }}
      >
        <Topbar />
        <Wrapper>

          <Directory
            filterEmployees={filterEmployees}
            handleChange={handleChange}
          />
          <Container>
            <Headers sortEmployees={sortEmployees} />
            <File />
          </Container>
        </Wrapper>
      </Employee.Provider>

      <Footer />

    </div>

  );
}

export default App;