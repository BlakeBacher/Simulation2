import React, {Component} from 'react';
import {Link} from 'react-router-dom'
// import styled from 'styled-components'
import axios from 'axios'


export default class Wizard extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            name:'',
            address:'',
            city:'',
            state:'',
            zipcode:'',
        }
        this.handelChange = this.handelChange.bind(this)
        this.addHouse = this.addHouse.bind(this)
    }
        handelChange(e){
            this.setState({[e.target.name]: e.target.value})
        }
        addHouse(){
            let body = {
              name: this.state.name,
              address: this.state.address,
              city: this.state.city,
              state:this.state.state,
              zipcode:this.state.zipcode,
            }
              axios.post('/api/addhouse', body).then(()=> {
                  this.props.history.push('/')
              })
          }
    render(){
        return(
            <div>
                <h2 className='addnewlisting'>Add New Listing</h2>
                <Link to = '/'><button className= 'cancel'>Cancel</button></Link>
                <br/>
                <p>Property Name</p>
                <input  name = 'name' value={this.state.name} onChange = {this.handelChange}/>
                <br/>
                <p>Address</p>
                <input  name = 'address' value={this.state.address} onChange = {this.handelChange}/>
                <br/>
                <p>City</p>
                <input  name = 'city'  onChange = {this.handelChange}/>
                <p>State</p>
                <input  name = 'state'  onChange = {this.handelChange}/>
                <br/>
                <p>Zip</p>
                <input  name = 'zipcode' type = 'number' onChange = {this.handelChange}/>
                <br/>
                <button onClick = {this.addHouse}>Add</button>
            </div> 
        )
    }
}
