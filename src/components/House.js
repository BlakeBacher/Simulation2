import React from 'react';
import axios from 'axios'
export default function House(props){

    function deleteItem(id){
        axios.delete(`/api/deletehouse/${id}`)
        .then((res)=> {
            this.setState({houses:res.data})
        })
      }

   return(
        <div className = 'housediv'>
        Property Name:{props.name}
        <br/>
        Address:{props.address}
        <br/>
        City:{props.city}
        <br/>
        State:{props.state}
        <br/>
        Zipcode:{props.zipcode}
        <button className='deletebuthouse' onClick = {() => {deleteItem(props.id)}}>Delete</button>
        </div> 
        )
}
