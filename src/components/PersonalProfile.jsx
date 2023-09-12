
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PersonalProfile() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '',
    email: '', mobile: '', linkedIn: '', git: '',
    cou: '', startDate: '', endDate: '', qualification: '', description: '',
    school: '', startDate1: '', endDate1: '', qualification1: '', description1: '',
    project1:'',projectLink1:'',projectDepn1:'', project2:'',projectLink2:'',projectDepn2:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    navigate('/preview', { state: formData });
  };
  return (
    <>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "aliceblue" }}>
        <div className="modal-body">
          <h3>Personal Details</h3><hr />
          <br />
          <div className="row">
            <div class="col">
              <input type="text" className="form-control" placeholder="First name*"
                name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="Last name*"
                name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
          </div>
          <br />
          <div className="row">
            <div class="col">
              <input type="email" className="form-control" placeholder="Email*"
                name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="Mobile No.*"
                name="mobile" value={formData.mobile} onChange={handleChange} />
            </div>
          </div>
          <br />
          <div className="row">
            <div class="col">
              <input type="url" className="form-control" placeholder="LinkedIn*"
                name="linkedIn" value={formData.linkedIn} onChange={handleChange} />
            </div>
            <div class="col">
              <input type="url" className="form-control" placeholder="GitHub*"
                name="git" value={formData.git} onChange={handleChange} />
            </div>
          </div>
          <br />

          <h3>Educational Details</h3><hr />
          <br />
          <div className="row">
            <div class="col">
              <input type="text" className="form-control" placeholder="College/University"
                name="cou" value={formData.cou} onChange={handleChange} />
            </div>
            <div class="col">
              <input type="Date" className="form-control" name="startDate"
                value={formData.startDate} onChange={handleChange} />
            </div>
            <div class="col">
              <input type="Date" className="form-control" name="endDate"
                value={formData.endDate} onChange={handleChange} />
            </div>
          </div>
          <br />
          <div className="row">
            <div class="col">
              <input type="text" className="form-control" placeholder="Qualification*"
                name="qualification" value={formData.qualification} onChange={handleChange} />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="Description*" style={{ width: "812px" }}
                name="description" value={formData.description} onChange={handleChange} />
            </div>
          </div>
          <br />
          <div className="row">
            <div class="col">
              <input type="text" className="form-control" placeholder="School*"
                name="school" value={formData.school} onChange={handleChange} />
            </div>
            <div class="col">
              <input type="Date" className="form-control" name="startDate1"
                value={formData.startDate1} onChange={handleChange} />
            </div>
            <div class="col">
              <input type="Date" className="form-control" name="endDate1"
                value={formData.endDate1} onChange={handleChange} />
            </div>
          </div>
          <br />
          <div className="row">
            <div class="col">
              <input type="text" className="form-control" placeholder="Qualification*"
                name="qualification1" value={formData.qualification1} onChange={handleChange} />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="Description*" style={{ width: "812px" }}
                name="description1" value={formData.description1} onChange={handleChange} />
            </div>
          </div>
          <br />

          <h3>Project Description</h3><hr />
          <br />
          <h6>Project 1</h6>
          <input type="text" className="form-control" placeholder="Project name*" 
           name="project1" value={formData.project1} onChange={handleChange}/>
          <br />
          <input type="url" className="form-control" placeholder="Project link*" 
           name="projectLink1" value={formData.projectLink1} onChange={handleChange}/>
          <br />
          <input type="text" className="form-control" placeholder="Description*" 
           name="projectDepn1" value={formData.projectDepn1} onChange={handleChange}/>
        </div>
        <div className="modal-body">
          <h6>Project 2</h6>
          <input type="text" className="form-control" placeholder="Project name*" 
           name="project2" value={formData.project2} onChange={handleChange}/>
          <br />
          <input type="url" className="form-control" placeholder="Project link*" 
          name="projectLink2" value={formData.projectLink2} onChange={handleChange}/>
          <br />
          <input type="text" className="form-control" placeholder="Description*" 
          name="projectDepn2" value={formData.projectDepn2} onChange={handleChange}/>
          <br />
          <h3>Experience Details</h3><hr />
          <br />
          <h6>Experience - 1</h6>
          <div className="row">
            <div class="col">
              <input type="text" className="form-control" placeholder="Organization name"
              />
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
              />
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
          <h3>Extra Details</h3><hr />
          <br />
          <h6>Skills/Languages</h6>
          <div className="row">
            <div class="col">
              <input type="text" className="form-control" placeholder="skill 1" />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="skill 2" />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="skill 3" />
            </div>
          </div>
          <br />
          <div className="row">
            <div class="col">
              <input type="text" className="form-control" placeholder="skill 4" />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="skill 5" />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="skill 6" />
            </div>
          </div>
          <br />
          <h6>Intrest</h6>
          <div className="row">
            <div class="col">
              <input type="text" className="form-control" placeholder="intrest 1" />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="intrest 2" />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="intrest 3" />
            </div>
          </div>
          <br />
          <div className="row">
            <div class="col">
              <input type="text" className="form-control" placeholder="intrest 4" />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="intrest 5" />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="intrest 6" />
            </div>
          </div>
        </div>
        <br />
        <div align="center">
          <input type="submit" className='btn btn-success' value='preview' />
        </div>
        <br />
      </form>
    </>
  )
}

export default PersonalProfile