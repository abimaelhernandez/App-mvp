import React from 'react';
import ReactDom from 'react';

 class App extends React.component {
   constructor(props){
     super(props);
      this.set = {
        list :[]
      }

   // TODO the binding of wht ever components when you incoorporate server

   }

/*

the get functions and the post
*/









getWeight(){

    $.ajax({
      url: '/localhost',
      method: 'GET',
      success:(results) => {
        this.setState({list: results})
      },
      error : (xhr, err) => {
        console.log('err,err');
      }
    })
  }











 }
React.render(<App / >, document.getElementById('app'));
