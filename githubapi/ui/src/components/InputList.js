import React from 'react';

class InputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false
        }
    }
    componentDidMount() {
    }
    render() {
        return (<div>
                    <h2>Contribution Inputs</h2>
                </div>)
    }
}
export default InputList;
