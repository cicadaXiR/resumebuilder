import React from 'react'
import { Link } from "react-router-dom";
function Education() {
    return (
        <>
            <form style={{ backgroundColor: '' }}>
                <div className="modal-body">
                    <h3>Educational Details</h3><hr />
                    <br />
                    <div className="row">
                        <div class="col">
                            <input type="text" className="form-control" placeholder="College/University"
                                style={{ width: "65%" }} />
                        </div>
                        <div class="col">
                            <input type="Date" className="form-control" />
                        </div>
                        <div class="col">
                            <input type="Date" className="form-control" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div class="col">
                            <input type="text" className="form-control" placeholder="Qualification*"
                                style={{ width: "65%" }} />
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="Description*"
                                style={{ width: "812px" }} />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div class="col">
                            <input type="text" className="form-control" placeholder="School*"
                                style={{ width: "65%" }} />
                        </div>
                        <div class="col">
                            <input type="Date" className="form-control" />
                        </div>
                        <div class="col">
                            <input type="Date" className="form-control" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div class="col">
                            <input type="text" className="form-control" placeholder="Qualification*"
                                style={{ width: "65%" }} />
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="Description*"
                                style={{ width: "812px" }} />
                        </div>
                    </div>
                    <br />
                    <div align="right">
                        <Link className='btn btn-primary' to="/project">Next</Link>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Education