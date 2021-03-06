import React, { FunctionComponent } from 'react';
import { StyledAbout } from './styles';

const About: FunctionComponent = () => (
  <StyledAbout>
    <div className="about-body">
      <div id="backHome">
        <ul className="linkToPages">
          <li>
            <a href="/" data-testid="home-link">Home</a>
          </li>
        </ul>
      </div>
      <div className="about-project" data-testid="about-body">
        <p>
          Leaguealytics started off as a practice project with to learn some technologies,
          but soon ended up being a passion project.
        </p>
        <p>
          Leaguealytics focuses on end game data. The goal would be to provide
          insight and hopefully provide areas of improvement. Whether or not the information
          provided is used to improve gameplay or just for fun, that will be up to the user.
        </p>
        <p>
          GG.
        </p>
        <p className="notice" data-testid="notice">
          <strong>NOTE: </strong>
          Only summoners in the North America server is supported at the moment since this started off as just a practice project.
          Should there be a number of requests to support other regions, I will highly
          consider adding support for the remaining regions. Keep in mind that this would require
          addtional time and maintenance, especially being the only developer on this project.
        </p>
        <p className="disclaimer" data-testid="disclaimer">
          Disclaimer: Leaguealytics was created under Riot Games&lsquo;
          &ldquo;Legal Jibber Jabber&ldquo; policy using assets owned by Riot Games.
          Riot Games does not endorse or sponsor this project.
        </p>
      </div>
      <div className="icons" data-testid="social-icons">
        <a href="https://www.linkedin.com/in/thiskeeword" target="_blank" rel="noreferrer" data-testid="media-icon">
          <i className="fa fa-linkedin fa-lg li grow" id="icon-link" />
        </a>
        <a href="https://www.github.com/thisKeeWord" target="_blank" rel="noreferrer" data-testid="media-icon">
          <i className="fa fa-github-alt fa-lg gh grow" id="icon-link" />
        </a>
        <a href="https://www.instagram.com/theonlyleonardk" target="_blank" rel="noreferrer" data-testid="media-icon">
          <i className="fa fa-instagram fa-lg gh grow" id="icon-link" />
        </a>
        <a href="http://www.leonardkee.com" target="_blank" rel="noreferrer" data-testid="media-icon">
          <i className="fa fa-laptop fa-lg gh grow" id="icon-link" />
        </a>
      </div>
    </div>
  </StyledAbout>
);

export default About;
