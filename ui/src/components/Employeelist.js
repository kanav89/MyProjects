import React from 'react';

class Employeelist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                        employees: result
                    });
                },
                (error) => {
                    this.setState({ IsApiError: true });
                }
            )
    }
    render() {
        var employeeslist = this.state.employees;
        // debugger;
        if (employeeslist && employeeslist.length > 0) {
            return (<div>
                <h2>contributions Component</h2>
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
        else {
            return (<div>No Record Found</div>)
        }
    }
}
export default Employeelist;