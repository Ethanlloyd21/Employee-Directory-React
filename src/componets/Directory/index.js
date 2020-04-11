import React, { useContext } from 'react';
import './style.css';
import Dates from '../Dates';
import Dob from '../Dob';
import Employee from '../Employee';

function Directory(props) {
    const { search, dates, findByName } = useContext(Employee);
    const inputStyle = {
        width: '20%',
        backgroundColor: 'white',
        paddingLeft: '5px',
    };

    return (
        <div id="directory">
            <div className="dir">
                <Dob
                    whenClicked={props.filterEmployees}
                    args={[dates.startDate, dates.endDate]}
                    text={`DOB:`}
                />
                <Dates
                    style={inputStyle}
                    value={dates.startDate}
                    onChange={props.handleChange}
                    field={`startDate`}


                />
                <Dates
                    style={inputStyle}
                    value={dates.endDate}
                    onChange={props.handleChange}
                    field={`endDate`}

                />
                <Dob
                    whenClicked={findByName}
                    args={[search]}
                    text={`Search:`}
                />
                <input
                    id="name"
                    type="text"
                    style={inputStyle}
                    placeholder="Search"
                    value={search}
                    onChange={(event) => props.handleChange(event, `search`)}
                    onKeyUp={(event) => {
                        if (event.key === `Enter`) {
                            findByName(search);
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Directory;