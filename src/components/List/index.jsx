import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const {users}=this.props
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
