import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Menu from './components/Menu';

function App() {
  const [menuType, setMenuType] = useState('aboutme');

  const onClick = param => {
    console.log('onClick: '+param.id);
    setMenuType(param.id);
  };

  return (
    <div>
      <header>
        <Menu onClick={onClick} menuType={menuType}></Menu>
        {/* <ul>
          <li>
            <p id="aboutme" onClick={onClick}>
              About Me
            </p>
          </li>
          <li><p id="experience" onClick={onClick}>Experience</p></li>
          <li><p id="projects" onClick={onClick}>Projects</p></li>
          <li><p id="skills" onClick={onClick}>Skills</p></li>
          <li><p id="photo" onClick={onClick}>Photo</p></li>
        </ul> */}
      </header>

      <div className="wrapper">
        <div className="App-title">
          <div className="App-title-name">
            CHAERIN
          </div>
          <div className="App-title-name2">
            CHALLENGER
          </div>
        </div>
        <div className="App-contents">
          <Layout menuType={menuType} />
        </div>
        <div className="App-footer">
        Copyright 2021. Chaerin Yu. All rights reserved.
        (Font Sources: <a href="https://gongu.copyright.or.kr/" target="_blank" title="공유마당" rel="noreferrer">공유마당</a>)
        </div>
      </div>

        {/* <div className="App-contents">
          <Layout />
        </div>
        <div className="App-footer"></div> */}
      </div>
  );
}

export default App;
