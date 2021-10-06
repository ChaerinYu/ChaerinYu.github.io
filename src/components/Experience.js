import React from 'react';
import './Experience.scss';

function Experience() {
    return (
        <div>
            <p className="title">Experiences</p>
            <div className="expContents">
                <div className="upper-row">
                    <p className="job-title">
                        <a href="https://www.ssafy.com/" target="_blank" title="ssafy" rel="noreferrer">SSAFY 6th</a>
                    </p>
                    <p className="exp-type">Student</p>
                    <p className="time">2021.07~</p>
                </div>
                <p>
                    삼성 청년 SW 아카데미 6기에 합격하여 Web Full-Stack 교육을 받고 있습니다.
                </p>
                <div className="upper-row">
                    <p className="job-title">
                        <a href="http://www.emro.co.kr/" target="_blank" title="emro" rel="noreferrer">Emro</a>
                    </p>
                    <p className="exp-type">Permanent Employee</p>
                    <p className="time">2018.01~2021.05</p>
                </div>
                <p>
                    글로벌 웹표준 플랫폼을 근간으로 구매 및 품질 시스템을 구축하였으며 사내 솔루션 기반으로 화면을 직접 그리고 쿼리문을 작성하였습니다.
                    JAVA 기반 웹 서비스와 다양한 RDBMS(Oracle, MS-SQL, MySQL 등)을 이용하여 쿼리 작업을 진행하였으며 HTML, javascript, CSS 등 Front-end 개발에 참여했습니다.
                </p>

                <div className="upper-row">
                    <p className="job-title">
                        <a href="http://www.emro.co.kr/" target="_blank" title="emro" rel="noreferrer">Emro</a>
                    </p>
                    <p className="exp-type">Intern</p>
                    <p className="time">2017.07~2017.08</p>
                </div>
                <p>

                    학과에서 진행하는 인턴 프로그램에 참여하였습니다. 국내 구매 솔루션 1위 업체인 엠로에서 교육을 받고 사내 자체 솔루션인 SMARTsuite 개발 업무 일부를 진행했습니다.
                </p>
                <div className="upper-row">
                    <p className="job-title">
                        <a href="https://www.ntu.edu.sg/" target="_blank" title="NTU" rel="noreferrer">Nanyang Technological University(NTU)</a>
                    </p>
                    <p className="exp-type">Student Assistant</p>
                    <p className="time">2017.01~2017.02</p>
                </div>
                <p>
                    NTU는 싱가포르에서 가장 큰 대학이며 공과대학에서는 세계에서 가장 큰 대학입니다.
                    2017년 겨울방학 때 해외 인턴십에 참여하였으며, 안드로이드  웃음치료 모바일 어플리케이션인 '<a href="https://github.com/baesomi/Smihealing" target="_blank" title="Smihealing" rel="noreferrer">Smihealing</a>'이라는 프로젝트를 수행했습니다.
                </p>
            </div>
        </div>
    );
}

export default Experience;