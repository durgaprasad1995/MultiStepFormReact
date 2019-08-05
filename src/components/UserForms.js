import React, { Component } from 'react'
import FormUserDetails from "./FormUserDetails"
import FormPersonalDetails from "./FormPersonalDetails"
import Confirm from './Confirm'
import Success from './Success'
export class UserForms extends Component {
    state = {
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }
    //proceed to next step

    nextStep=() =>{
        const {step}=this.state//here we are pulling and assigin the state of step to the vaiable
        this.setState({
            step:step+1
        })
    }

      //goback to previous page

      prevStep=() =>{
        const {step}=this.state//here we are pulling and assigin the state of step to the vaiable
        this.setState({
            step:step-1
        })
    }

    //handle fields change
    handleChange = input  => e=>{
        this.setState({
            [input]:e.target.value
        })
        if(input.length > 0){
            //debugger
            console.log("hey")
        }
        else
        {
            console.log("hello")
        }
    }
  render() {
      const {step}=this.state
      const {firstName,lastName,email,occupation,city,bio} = this.state
      const values = {firstName,lastName,email,occupation,city,bio}
  switch(step){
      case 1:return(
          <FormUserDetails 
          nextStep={this.nextStep}
          handleChange = {this.handleChange}
          values={values}/>
      )
      case 2 :return(
          <FormPersonalDetails  
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange = {this.handleChange}
          values={values}
          />
      )
      case 3 : return(
        <Confirm 
        nextStep={this.nextStep}
        prevStep={this.prevStep}
      
        values={values}
        />
      )
      case 4 : return(
        <Success />
      )
      default : return true
  }
  }
}
//rce is for creat a sample form
export default UserForms
