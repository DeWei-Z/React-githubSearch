import axios from 'axios'
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    search=()=>{
        const {value}=this.inputNode
       
        
        axios.get(`/api1/search/users?q=${value}`).then(
            response=>{
                PubSub.publish('search',response.data.items)
            },
            error=>{
                
                console.log(error)
            }
        )
    }


    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                  <input ref={c=>this.inputNode=c}   type="text" placeholder="enter the name you search"/>&nbsp;
                  <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
