import React from 'react';
import './Project.scss';

function Project () {
    return (
        <div>
            <p className="title">Projects</p>
            <div className="projectContents">
                <div className="upper-row">
                    <p className="job-title">
                        <a href="https://github.com/ChaerinYu/MyTodoList" target="_blank" title="emro" rel="noreferrer">My Todo List</a>
                    </p>
                    <p className="exp-type">React</p>
                    <p className="time">2021</p>
                </div>
                <p>
                    React로 만든 ToDo List입니다. 색상별 테마 변경이 가능하며 중요한 이벤트나 해결된(done) 이벤트 체크가 가능합니다.
                </p>
            </div>
        </div>
    );
}

export default Project;