import React from 'react';

class InputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event,field) {
    this.setState({[field]: event.target.value});
  }
    render() {
        return (<div>
<form>
  <label>
    Username:
    <input type="text" name="username" value={this.props.u} onChange={(event)=>this.props.su("somenewusername")}/>
  </label>
  <label>
    Token:
    <input type="text" name="token" value={this.props.t} onChange={(event)=>this.handleChange(event, "token")} />
  </label>
  <label>
    Start_date:
    <input type="text" name="start" value={this.props.s} onChange={(event)=>this.handleChange(event, "start")} />
  </label>
  <label>
    End_date:
    <input type="text" name="end" value={this.props.e} onChange={(event)=>this.handleChange(event, "end")} />
  </label>
  <input type="submit" value="Submit" />
</form>
</div>)
    }
}
export default InputList;
