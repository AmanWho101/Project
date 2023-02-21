import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Emplisting = () => {
            const [empdata, emdatachange] = useState(null);
            

            useEffect(()=>{
                emplist();
            },[])

const requestData = {
  url: "http://localhost:4000/employee",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  credentials: "include",
  crossDomain: true,
  mode: "cors",
  cache: "no-cache",


}

async function emplist() {

       await axios.request(requestData)
        .then((res) => {
          return res;
          })
          .then((data) => {
          emdatachange(data);
          })
  .catch((err)=>{
    console.log(err);
  })
      }


//  async function emplist(){
//         await fetch("http://localhost:4000/employee")
//           .then((res) => {
//             return res.json();
//           })
//           .then((res) => {
//             emdatachange(res);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }


  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
            <div>
                <Link to="employee/create" className="btn btn-success">
                Add New Employee (+)
                </Link>
            </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
            {
               !!empdata && empdata.data.map(item=>{
                    return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                            <a className="btn btn-success">Edit</a>
                            <a className="btn btn-danger">remove</a>
                            <a className="btn btn-primary">Detail</a>
                        </td>
                    </tr>
                    )
            }) 
                
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Emplisting;
