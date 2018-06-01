import React from 'react';

export default function House(props){
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
        <button className='deletebuthouse'>Delete</button>
        </div> 
        )
}
