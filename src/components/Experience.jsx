import React from 'react'
import { Link } from "react-router-dom";
function Experience() {
    return (
        <form style={{ backgroundColor: '' }}>
            <div className="modal-body">
                <h3>Experience Details</h3><hr />
                <br />
                <h6>Experience - 1</h6>
                <div className="row">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Organization name"
                            style={{ width: "65%" }} />
                    </div>
                    <div class="col">
                        <select className="form-control">
                            <option>Position</option>
                            <option>Software Developer</option>
                            <option>Product Manager</option>
                            <option></option>
                        </select>
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder='Duration' />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Description*" />
                    </div>
                </div>
                <br />
                <h6>Experience - 2</h6>
                <div className="row">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Organization name*"
                            style={{ width: "65%" }} />
                    </div>
                    <div class="col">
                        <select className="form-control">
                            <option>Position</option>
                            <option>Software Developer</option>
                            <option>Product Manager</option>
                            <option></option>
                        </select>
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder='Duration' />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Description*" />
                    </div>
                </div>
                <br />
                <div align="right">
                    <Link className='btn btn-primary' to="/extra">Next</Link>
                </div>
            </div>
        </form>
    )
}

export default Experience