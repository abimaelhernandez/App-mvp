import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import UserWeight from './components/addUserWeight.jsx';
import UserList from './components/UserList.jsx'


 class App extends React.Component {
   constructor(props){
     super();
      this.state = {
        list :[]
      }

   // TODO the binding of wht ever components

   }

/*

the get functions and the post
*/
consultGuru(heigth,name){
  $.ajax({
    method: "POST",
    url: "/showme",
    contentType: 'application/jason',
    data: JSON.stringify({
      height: height,
      name: name
    })
  }).done(() => {
    this.getWeight();
  })
}

getWeight(){
    $.ajax({
      url: '/showme',
      method: 'GET',
      success:({UserRecords}) => {
      this.setState()
      },
      error : (xhr, err) => {
        console.log('err,err');
      }
    })
  }

 componentDidMount(){
   this.getWeight();
 }

  render () {
    return (
      <div>
      <h1>Please Do</h1>
        <UserWeight addItem={this.consultGuru}/>
        <UserList list={this.state.list}/>
      </div>)
  }


 }
ReactDOM.render(<App/>, document.getElementById('app'));
