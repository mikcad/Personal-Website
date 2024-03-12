import { NavLink } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <>
      <header id="home-header">
        <div className="wrapper">
          <h1 className="hero-header">
            <span>Hi, I'm Michael </span> <span>// </span>{' '}
            <span>Front-End Developer </span>
            <span>||</span> <span>PC-Builder </span>
          </h1>
          <p className="hero-text">
            I <b>love</b> technology and the <b>magic</b> that it can create 💻
            I'm an enjoyer of sports and currently obsessed with volleyball 🏐
          </p>
          <NavLink to={'/about'}>
            <p>Read More {'>>>'}</p>
          </NavLink>
        </div>
      </header>
      <div className="content-divider"></div>
      <main id="main-section">
        <section id="skills-tools" className="skills-tools">
          <div className="wrapper">
            <h2 className="sub-title">skills & tools</h2>
            <h1>My Toolbox & Things I Can Do</h1>
            <p>
              These are the set of skills and technologies that I've been
              polishing, <b>and still am</b>, which I use to bring ideas into
              reality:
            </p>
            <div className="container-icons d-flex justify-content-center column-gap-4">
              <SkillCards imgSrc={'devicon-html5-plain'} skillName="HTML5" />
              <SkillCards imgSrc={'devicon-css3-plain'} skillName="CSS3" />
              <SkillCards
                imgSrc={'devicon-javascript-plain'}
                skillName="JavaScript"
              />
              <SkillCards
                imgSrc={'devicon-typescript-plain'}
                skillName="TypeScript"
              />
              <SkillCards imgSrc={'devicon-jquery-plain'} skillName="jQuery" />
              <SkillCards imgSrc={'devicon-react-original'} skillName="React" />
              <SkillCards
                imgSrc={'devicon-bootstrap-plain'}
                skillName="Bootstrap"
              />
              <SkillCards
                imgSrc={'devicon-reactbootstrap-original'}
                skillName="React Bootstrap"
              />
              <SkillCards
                imgSrc={'devicon-github-original'}
                skillName="GitHub"
              />
              <SkillCards imgSrc={'devicon-git-plain'} skillName="Git" />
              <SkillCards imgSrc={'fas fa-cogs'} skillName="RESTfulAPIs" />
              <SkillCards imgSrc={'fas fa-terminal'} skillName="Command Line" />
              <SkillCards
                imgSrc={'devicon devicon-visualstudio-plain'}
                skillName="VS Code"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

interface SkillCardsProps {
  className?: string;
  imgSrc: string;
  skillName: string;
}

const SkillCards = ({ className, imgSrc, skillName }: SkillCardsProps) => {
  return (
    <div className={'box-icon'}>
      <i className={`dev-icon ${imgSrc}`}></i>
      <p className="mt-2">{skillName}</p>
    </div>
  );
};

export default Home;
