import React from 'react';

class UserWeight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      name: ''
    }
    this.addName = this.addName.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
  }

  handleHeight(event) {
    this.setState({height: event.target.value})
  };

  handleName(event) {
    this.setState({name: event.target.value})
  }

  addName() {
    this.props.UserWeight(this.state.height, this.state.name);
    this.setState({height: '', name: ''})
  }

  render() {
    return (<div>
      height:
      <input value={this.state.height} onChange={this.handleHeight}></input>
      <br/>
      name:
      <input value={this.state.name} onChange={this.handleName}></input>
      <br/>
      <button onClick ={this.addName}> Reality Check </button>
    </div>)
  }
}

export default UserWeight;
