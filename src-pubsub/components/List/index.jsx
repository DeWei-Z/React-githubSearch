import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {

  state={users:[]}

  componentDidMount(){
    this.token=PubSub.subscribe('search',(msg,data)=>{
      this.setState({users:data})
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
   
    render() {
        const {users}=this.state
        console.log(users)
        return (
            <div className="row">
             {
               users.map(user=>{
                   return (
                          <div key={user.id}  className="card">
                   <a href={user.html_url} target="_blank" rel='noreferrer'>
                     <img src={user.avatar_url} style={{width:'100px'}} alt='pic'/>
                   </a>
                   <p className="card-text">{user.login}</p>
                          </div>
                   )
               })
      
             }
            </div>
   
        )
    }
}
