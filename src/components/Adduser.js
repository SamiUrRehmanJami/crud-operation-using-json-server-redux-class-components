import React, { Component } from 'react';
import { addUser } from '../redux/actions';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

export class Adduser extends Component {
     constructor(props) {
         super(props);
         this.state = {
             name: "",
             address: "",
             email: "",
             contact: "",
         }
     }
     static propTypes = {
         history: PropTypes.object.isRequired,
         name : PropTypes.string,
         address : PropTypes.string,
         email : PropTypes.string,
         contact : PropTypes.number
      };
    //  history = useHistory();

     handleInputChange = (e) =>{
          let {name, value} = e.target;
        this.setState({
            ...this.state, [name]: value,
        });

     }

      handleSubmit = (e)=>{
           e.preventDefault();
        //   if(!this.name || !this.address || !this.email || !this.contact){
        //       this.props.setError({
        //           message : "Please input in all fields",
        //       });
        //   }
        //   else{
              this.props.addUser(this.state);
              this.props.history.push("/");
            //   this.setError({});
        //   }
      }

    render() {
        const { history } = this.props;
        return (
            <div className="container my-5">
                <br />
                <h2>Add User</h2>
                {this.error && <h3 style={{ color: "red" }}>{this.error}</h3>}
                <form className="col-md-4 mt-10 " onSubmit={this.handleSubmit}>

                    <div className="row mb-3">
                        <label htmlFor="name " className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" name="name" value={this.name} onChange={this.handleInputChange} className="form-control" id="name" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input type="text" name="address" onChange={this.handleInputChange} value={this.address} className="form-control" id="address" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" name="email" value={this.email} onChange={this.handleInputChange} className="form-control" id="email" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="contact" className="col-sm-2 col-form-label">Contact</label>
                        <div className="col-sm-10">
                            <input type="text" name="contact" value={this.contact} onChange={this.handleInputChange} className="form-control" id="contact" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default connect(null, {
    addUser,
  })(Adduser);
