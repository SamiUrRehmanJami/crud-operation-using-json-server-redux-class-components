import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteUser, loadUsers } from '../redux/actions';

export class Home extends Component {

    
    

    componentDidMount() {
        this.props.loadUsers();
      }

    handleDelete = (id) => {
        if (window.confirm("Are you want to delete it!")) {
              this.props.deleteUser(id);
        }
    };

  render() {

    const {users} = this.props;
    return (
        <div className="container"> 
        <br/>
        <br/>
        <br/>
        <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                    </tr>
                </thead>
                { <tbody>
                    {users && users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            {/* <div className="mx-1"> */}
                            <button type="button" onClick={() => this.handleDelete(user.id)} className="btn btn-outline-primary mt-1 mx-1">Delete</button>
                            <button type="button" onClick={() => this.props.history.push(`/updateUser/${user.id}`)} className="btn btn-outline-secondary mt-1 mx-1">Edit</button> 
                            {/* </div> */}
                         </tr> 

                     ))}
                </tbody> } 
            </table>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      users: state.users,
    };
  };

export default connect(mapStateToProps, {
    loadUsers, deleteUser,
  })(Home);
