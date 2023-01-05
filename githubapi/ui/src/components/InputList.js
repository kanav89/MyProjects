import React from 'react';

class InputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false
        }
    }

    handleChange(event,field) {
    this.setState({[field]: event.target.value});
  }
    render() {
        return (<div>
<form>
  <label>
    Username:
    <input type="text" name="username" value={this.props.u} onChange={(event)=>this.props.su(event.target.value)}/>
  </label>
  <label>
    Token:
    <input type="text" name="token" value={this.props.t} onChange={(event) => this.props.st(event.target.value)} />
  </label>
  <label>
    Start_date:
    <input type="text" name="start" value={this.props.s} onChange={(event) => this.props.ss(event.target.value)} />
  </label>
  <label>
    End_date:
    <input type="text" name="end" value={this.props.e} onChange={(event) => this.props.se(event.target.value)} />
  </label>
  <input type="submit" value="Submit" />
</form>
</div>)
    }
}
export default InputList;
