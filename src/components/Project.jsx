import React from 'react'
import { Link } from "react-router-dom";
function Project() {
    return (
        <form style={{ backgroundColor: '' }}>
            <div className="modal-body">
                <h3>Project Description</h3><hr />
                <br />
                <h6>Project 1</h6>
                <input type="text" className="form-control" placeholder="Project name*" />
                <br />
                <input type="url" className="form-control" placeholder="Project link*" />
                <br />
                <input type="text" className="form-control" placeholder="Description*" />
            </div>
            <div className="modal-body">
                <h6>Project 2</h6>
                <input type="text" className="form-control" placeholder="Project name*" />
                <br />
                <input type="url" className="form-control" placeholder="Project link*" />
                <br />
                <input type="text" className="form-control" placeholder="Description*" />
                <br />
                <div align="right">
                    <Link className='btn btn-primary' to="/experience">Next</Link>
                </div>
            </div>
        </form>
    )
}

export default Project