import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Emplisting = () => {
            const [empdata, emdatachange]=useState(null);

            useEffect(()=>{
                emplist();
            },[])

 async function emplist(){
    

        await fetch("http://localhost:8000/employee")
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            emdatachange(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
 

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
                   empdata.map(item=>{
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
