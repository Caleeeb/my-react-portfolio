import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    setCurrentPage
  } = props;


  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setCurrentPage('About')}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="projects" href="#project" onClick={() => setCurrentPage('Project')}>
              Projects
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contact" href="#contact" onClick={() => setCurrentPage('Contact')}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;