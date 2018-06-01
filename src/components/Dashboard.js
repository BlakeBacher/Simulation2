import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

import House from './House'
// import { ENGINE_METHOD_DIGESTS } from 'constants';

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state={
            houses:[]
        }
    }
    componentDidMount(){
        axios.get('/api/houses').then((res) => {
          this.setState({
            houses: res.data
          })
        })
      }
      
    render(){
        let mappedhouses = this.state.houses.map((element,i) => {

            return(
                <div key = {i}>
                    <House  id = {element.id}
                            name = {element.name}
                            address = {element.address}
                            city = {element.city}
                            state = {element.state}
                            zipcode = {element.zipcode}/>
                </div> 
            )
        })
        return(
            <div>
                <h2>DashBoard</h2>
                <Link to = '/wizard'>
                    <button>Add New Property</button>
                </Link>
                <hr />
                Home Listings
                <br/>
                    {mappedhouses}
            </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
      number: state.num
    }
  }