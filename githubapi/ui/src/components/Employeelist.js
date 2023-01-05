import React from 'react';
import './InputList.js';

class Employeelist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            employees: [],
            IsApiError: false
        }
    }
    componentDidMount() {
        fetch(" http://127.0.0.1:5000/contributions?username=Vansh-Coder&token=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&start_date=2021-12-28&end_date=2022-12-28")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        employees: result,
                        updated: true
                    });
                },
                (error) => {
                    this.setState({ IsApiError: true });
                }
            )
    }
    render() {
        var employeeslist = this.state.employees;
        if (employeeslist && this.state.updated) {
            if (employeeslist.length === 0) {
                return (<div>
                    <h2>Contributions</h2>
                    No Record Found
                    </div>)
            }
            else {
                return (<div>
                    <h2>Contributions</h2>
                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeslist.map(emp => (
                                <tr key={emp}>
                                    <td>{emp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>)
            }
        }
        else {
            return (<div>
                <h2>Contributions</h2>
                Fetching records...
            </div>)
        }
    }
}
export default Employeelist;
