import React, { Component } from 'react'
import { getSingleUser, updateUser } from "../redux/actions"
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import axios from "axios";



export class Updateuser extends Component {

    constructor(props) {
        
        super(props);
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getId = this.getId.bind(this);
        
    
        this.state = {
            name: "",
            address: "",
            email: "",
            contact: "",
        }

    }
    static propTypes = {
        history: PropTypes.object.isRequired,
        name: PropTypes.string,
        address: PropTypes.string,
        email: PropTypes.string,
        contact: PropTypes.number
    };
     
    handleInputChange = (e) => {
        let { name, value } = e.target;
        this.setState(
            {
                 ...this.state, [name]: value,
            })
    }

    componentDidMount(){
         this.getId(this.props.match.params.id)
         if(this.state){
             this.setState({...this.state});
         }
        
        // this.props.getSingleUser(id);

     }
   
    getId(id) {
        axios.get(`${process.env.REACT_APP_API}/${id}`)
          .then((resp) => {
            this.setState({
              currentPost: resp.data,
            });
            console.log(resp.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }

    handleSubmit = (e)=>{
        e.preventDefault();
        // if(!name || !address || !email || !contact){
        //     setError("Please input in all fields");
        // }
        // else{
        this.props.updateUser(this.state.currentPost.id, this.state.currentPost)
        this.props.history.push("/");
        
       
        //     setError("");
        // }
    };

     
    
    render() {
        return (
            <div className="container  my-3">
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>Update User</h2>
                {this.error && <h3 style={{ color: "red" }}>{this.error}</h3>}
                <form className="col-md-4 mt-10" onSubmit={this.handleSubmit}>

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

                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch =>  ({
//     const id = dispatch();
//     getSingleUser: () => store.dispatch( getSingleUser(id) )
//   })
 const mapStateToProps = state => {
     const {user} = state;
     return {
         user: user,
     }
 }


// export function withRouter(Updateuser) {
//     return (props) => {
//       const id = useParams();
//       return <Updateuser {...props} params={id} />;
//     };
//   }

//  const mapDispatchToProps = dispatch=>({
//      getSingleUser: id=>dispatch(getSingleUser(id))
//  })
  
export default  connect(mapStateToProps,{
    getSingleUser, updateUser,
  })(Updateuser);
