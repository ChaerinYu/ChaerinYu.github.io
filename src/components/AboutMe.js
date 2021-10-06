import React from 'react';
import './AboutMe.scss';
import { VscGithubInverted } from 'react-icons/vsc';

function AboutMe() {
    const onIconClick = e => {
        let id = e.target.id ? e.target.id : "";

        if(id != null || id !== "") {
            window.open('https://github.com/ChaerinYu', '_blank');
        }
    };

    return (
        <div className="contents">
            <p className="title">About Me</p>
            <img src={process.env.PUBLIC_URL + '/images/myphoto.png'} width="380px" className="myPhoto" alt="myphoto"></img>
            {/* <img src="/images/myphoto.png" width="380px" className="myPhoto" alt="myphoto"></img> */}
            <p className="AboutIntro">
                안녕하세요. 개발자 유채린 홈페이지 입니다.<br/><br/>
                저는 주로 닉네임을 챌린지(challenge) 또는 챌린저(challenger)를 사용하고 있습니다. 
                발음이 제 이름과 비슷하기도 하고 사전적 의미를 보면 '도전', '도전자'를 뜻하고 있어 제 특성을 잘 나타내는 듯 하여 애용하고 있습니다.<br/><br/>
                LOL(League of Legend)에서도 가장 높은 티어가 challenger이듯이 개발에 있어 저도 최상위 등급에 오를 때 까지 열심히 공부하고 연구할 계획입니다.<br/>
                <br/><br/><br/><br/>

            </p>

            <div className="footer">
                <VscGithubInverted className="icon" id="github" onClick={onIconClick}/>

                <p className="study">
                    <b style={{fontSize:'20px'}}>학력</b><br/>
                    가천대학교 소프트웨어설계경영학과 학사
                </p>
            </div>
        </div>
    );
}

export default AboutMe;