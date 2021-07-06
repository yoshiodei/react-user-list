import React, { Component } from 'react';

class UsersForm extends Component {

   constructor(props){
       super(props);

       this.state = {
               name: "",
               email: "",
               gen: ""
       }

       
   }

   handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
   }

   handleAdd = (e) =>{
      e.preventDefault(); 
      this.props.addUser(this.state);
   }

    render() {
        return (
            <>
              <form onSubmit={this.handleAdd}> 
                  <label>
                      Name: 
                      <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                  </label>
                  <label>
                      E-mail: 
                      <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                  </label>
                  <label>
                      Gen: 
                      <input type="number" name="gen" value={this.state.gen} onChange={this.handleChange}/>
                  </label>
                  <input type="submit" value="Submit Me" />
              </form>  
            </>
        );
    }
}

export default UsersForm;
