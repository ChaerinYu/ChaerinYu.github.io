import React from 'react';
import './Photo.scss';

function Photo () {
    return (
        <div>
            <p className="title">Photo</p>
            <table className="photoContents">
                <tbody>
                    <tr>
                        <td colSpan="3" className="photo-sub">
                            Singapore
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="images/photo/singapore1.JPG" alt="singapore" width="500px"></img>
                        </td>
                        <td>
                            <img src="images/photo/singapore2.JPG" alt="singapore" width="500px"></img>
                        </td>
                        <td>
                            <img src="images/photo/singapore3.JPG" alt="singapore" width="500px"></img>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="images/photo/singapore4.JPG" alt="singapore" width="500px"></img>
                        </td>
                        <td>
                            <img src="images/photo/singapore5.JPG" alt="singapore" width="500px"></img>
                        </td>
                        <td>
                            <img src="images/photo/singapore6.JPG" alt="singapore" width="500px"></img>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Photo;