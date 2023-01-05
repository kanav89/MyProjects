import React from 'react';

class InputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username :'',
            token:'',
            start:'',
            end:'',
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
    <input type="text" name="username" onChange={(event)=>this.handleChange(event, "username")}/>
  </label>
  
</form><form>
  <label>
    Token:
    <input type="text" name="token" onChange={(event)=>this.handleChange(event, "token")} />
  </label>
  
</form><form>
  <label>
    Start_date:
    <input type="text" name="start" onChange={(event)=>this.handleChange(event, "start")} />
  </label>
  
</form><form>
  <label>
    End_date:
    <input type="text" name="end" onChange={(event)=>this.handleChange(event, "end")} />
  </label>
  
  <input type="submit" value="Submit" />
</form></div>)
    }
}
export default InputList;
