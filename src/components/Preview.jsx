import React from 'react'
import { useLocation } from 'react-router-dom';

function Preview() {
    const location = useLocation();
    const profileData = location.state;

    return (
        <>
            <div className="modal-body">
                <h4>Personal Details</h4>
                <p>{profileData.firstName} {profileData.lastName}</p>
                <p>{profileData.email}</p>
                <p>{profileData.mobile}</p>
                <p>{profileData.linkedIn}</p>
                <p>{profileData.git}</p>
                <h4>Educational Details</h4>
                <p>{profileData.cou} {profileData.startDate}</p>
                <p>{profileData.endDate}</p>
                <p>{profileData.qualification}</p>
                <p>{profileData.description}</p>
                <p>{profileData.school} {profileData.startDate1}</p>
                <p>{profileData.endDate1}</p>
                <p>{profileData.qualification1}</p>
                <p>{profileData.description1}</p>
                <h4>Project Details</h4>
                <p>{profileData.project1} {profileData.projectLink1}</p>
                <p>{profileData.projectDepn1}</p>
                <p>{profileData.project2}</p>
                <p>{profileData.projectLink2}</p>
                <p>{profileData.projectDepn2}</p>
            </div>
        </>
    )
}

export default Preview