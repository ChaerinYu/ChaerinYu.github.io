import React from 'react';
// import classNames from 'classnames';
import './Menu.scss';
import MenuItem from './MenuItem';

function Menu({menuType, onClick}) {

    console.log('Menu.js: '+menuType);

    return (
        <ul>
            <li>
                <MenuItem id="aboutme" menuType={menuType} onClick={onClick}>About Me</MenuItem>
            </li>
            <li>
                <MenuItem id="experience" menuType={menuType} onClick={onClick}>Experience</MenuItem>
            </li>
            <li>
                <MenuItem id="projects" menuType={menuType} onClick={onClick}>Projects</MenuItem>
            </li>
            <li>
                <MenuItem id="certificate" menuType={menuType} onClick={onClick}>Certificates</MenuItem>
                {/* <MenuItem id="skills" menuType={menuType} onClick={onClick}>Skills</MenuItem> */}
            </li>
            <li>
                <MenuItem id="photo" menuType={menuType} onClick={onClick}>Photo</MenuItem>
            </li>
          {/* <li>
            <p 
                id="aboutme" onClick={() => onClick('aboutme')}
                className={menuType==='aboutme' ? classNames(menuType) : null}>
              About Me
            </p>
          </li>
          <li>
              <p id="experience" onClick={() => onClick('experience')}
                className={menuType==='experience' ? classNames(menuType) : null}>
                Experience
              </p>
          </li>
          <li>
              <p id="projects" onClick={() => onClick('projects')}
                className={menuType==='projects' ? classNames(menuType) : null}>
                  Projects
              </p>
          </li>
          <li>
              <p id="skills" onClick={() => onClick('skills')}
                className={menuType==='skills' ? classNames(menuType) : null}>
                  Skills
              </p>
          </li>
          <li>
              <p id="photo" onClick={() => onClick('photo')}
                className={menuType==='photo' ? classNames(menuType) : null}>
                  Photo
              </p>
          </li> */}
        </ul>
    );
}

export default Menu;