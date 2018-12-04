import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      txtUsername   : '',
      txtPassword   : '',
      gender        : 1,
      lang          : "en",
      cbEnable      : true
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(e){
    let value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name] : value
    });
  }

  onHandleSubmit(e){
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>Form control: input</h2>
          <h3> { this.state.txtUsername }, { this.state.txtPassword }, { (parseInt(this.state.gender) === 0) ? 'Male' : 'Female' } </h3>
          <form onSubmit={this.onHandleSubmit}>
            <div className="form-group">
              <label htmlFor="usr">Name:</label>
              <input type="text" name="txtUsername" className="form-control" onChange={ this.onHandleChange }/>
            </div>

            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" name="txtPassword" className="form-control" onChange={ this.onHandleChange }/>
            </div>

            <div className="form-group">
              <select name="gender" className="form-control" value={this.state.gender} onChange={ this.onHandleChange }>
                <option value={0}>Male</option>
                <option value={1}>Female</option>
              </select>
            </div>

            <div className="form-group">
              <div className="radio">
                <label><input type="radio" name="lang" value="en" checked={this.state.lang === "en"} onChange={ this.onHandleChange } />English</label>
              </div>
              <div className="radio">
                <label><input type="radio" name="lang" value="vi" checked={this.state.lang === "vi"} onChange={ this.onHandleChange } />Vietnames</label>
              </div>
            </div>

            <div className="form-group">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="cbEnable"
                  value={true}
                  onChange={ this.onHandleChange }
                  checked={this.state.cbEnable === true}
                /> Enable
              </label>
            </div>


            <button type="submit" className="btn btn-success  ">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
