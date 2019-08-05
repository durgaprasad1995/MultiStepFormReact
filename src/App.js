import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserForms } from './components/UserForms';
import Cookies from 'js-cookie'
class App extends Component {
 
  render() {
    localStorage.setItem('brakfast','creail')
    console.log(localStorage.getItem('brakfast'))
    sessionStorage.setItem('brakfast','creail')
    console.log(sessionStorage.getItem('brakfast'))
    const coo = Cookies.set('Durgaprasd',"true",{expires:2})
    console.log(coo)
    return (
      <div className="App">
       <UserForms />
      </div>
    );
  }
}

export default App;
