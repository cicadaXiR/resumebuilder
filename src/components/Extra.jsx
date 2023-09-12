import React from 'react'
import { Link } from "react-router-dom";
function Extra() {
    return (
        <>
            <form style={{ backgroundColor: '' }}>
                <div className="modal-body">
                    <h3>Extra Details</h3><hr />
                    <br />
                    <h6>Skills/Languages</h6>
                    <div className="row">
                        <div class="col">
                            <input type="text" className="form-control" placeholder="skill 1"/>
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="skill 2"/>
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="skill 3"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div class="col">
                            <input type="text" className="form-control" placeholder="skill 4"/>
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="skill 5"/>
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="skill 6"/>
                        </div>
                    </div>
                    <h6>Intrest</h6>
                    <div className="row">
                        <div class="col">
                            <input type="text" className="form-control" placeholder="intrest 1"/>
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="intrest 2"/>
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="intrest 3"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div class="col">
                            <input type="text" className="form-control" placeholder="intrest 4"/>
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="intrest 5"/>
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="intrest 6"/>
                        </div>
                    </div>
                    <br/>
                    <div align="center">
                        <Link className='btn btn-success' to="preview"> preview</Link>
                    </div>
                </div>
                <br />   
            </form>
        </>
    )
}

export default Extra