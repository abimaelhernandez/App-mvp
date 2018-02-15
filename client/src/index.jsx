import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


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









getWeight(){

    $.ajax({
      url: '/localhost',
      method: 'GET',
      success:(results) => {
      //  this.setState({list: results})
      },
      error : (xhr, err) => {
        console.log('err,err');
      }
    })
  }

  render () {
    return (<div>
      <h1>Helo Worl!!</h1>
    </div>)
  }


 }
ReactDOM.render(<App/>, document.getElementById('app'));
