import './home.css';

const Home = () => {
  return (
    <>
      <header id="home-header" className="d-flex align-items-center">
        <div className="wrapper">
          <h1 className="hero-header">
            <span>Hi, I'm Michael </span> <span>// </span>{' '}
            <span>Front-End Developer </span>
            <span>||</span> <span>PC-Builder </span>
          </h1>
          <p className="hero-text">
            I love technology and the magic that it can create 💻 I'm an enjoyer
            of sports and currently obsessed with volleyball 🏐
          </p>
        </div>
      </header>

      <main>
        <section id="skills-tools" className="skills-tools">
          <div className="wrapper">
            <h2 className='sub-title'>skills & tools</h2>
            <h1>My Toolbox & Things I Can Do</h1>
            <p>
              These are the set of skills and technologies that I can use to
              bring ideas into reality:
            </p>
            <div className="container-icons d-flex">
              <SkillCards imgSrc={'devicon-html5-plain'} skillName="HTML5" />
              <SkillCards imgSrc={'devicon-css3-plain'} skillName="CSS3" />
              <SkillCards
                imgSrc={'devicon-javascript-plain'}
                skillName="JavaScript"
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

const SkillCards: React.FC<SkillCardsProps> = ({
  className,
  imgSrc,
  skillName,
}) => {
  return (
    <div className={'box-icon'}>
      <i className={`dev-icon ${imgSrc}`}></i>
      <p>{skillName}</p>
    </div>
  );
};

export default Home;
