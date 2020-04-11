import React from 'react';

const Employee = React.createContext({
    employees: [],
    dates: {},
    search: ``,
    findByName: () => { },
});

export default Employee;