import React from 'react';
import './Certificate.scss';

function Certificate() {
    return (
        <div>
            <p className="title">Certificates</p>
            <div className="certContents">
                <div className="upper-row">
                    <p className="job-title">
                        OPIC
                    </p>
                    <p className="exp-type">IM1</p>
                    <p className="time">2021</p>
                </div>
                <div className="upper-row">
                    <p className="job-title">
                        SQLD
                    </p>
                    <p className="exp-type">PASS</p>
                    <p className="time">2019</p>
                </div>
            </div>
        </div>
    );
}

export default Certificate;