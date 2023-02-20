import { Link } from "react-router-dom";

const EmpCreate = () =>{
    return(
        <div>
            
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <div className="container">
                        <div className="card">
                            <div className="card-title">
                                <h2 >employee Create</h2>
                            </div>
                            <div className="card-body">
                            <div>
                            <Link to="/" className="btn btn-success">
                             List All Employee
                            </Link>
                            </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )       
}

export default EmpCreate;