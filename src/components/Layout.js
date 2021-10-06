import React from 'react';
import './Layout.scss';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Project from './Project';
import Certificate from './Certificate';
import Photo from './Photo';

function Layout({menuType}) {
    return (
        <div className="Layout">
            <span hidden={ menuType !== 'aboutme' ? true : false}>
                <AboutMe></AboutMe>
            </span>
            <span hidden={ menuType !== 'experience' ? true : false}>
                <Experience></Experience>
            </span>
            <span hidden={ menuType !== 'projects' ? true : false}>
                <Project></Project>
            </span>
            <span hidden={ menuType !== 'certificate' ? true : false}>
                <Certificate></Certificate>
            </span>
            <span hidden={ menuType !== 'photo' ? true : false}>
                <Photo></Photo>
            </span>
        </div>
    );
}

export default Layout;