import Card from 'react-bootstrap/Card';

import './about.css';

const About = () => {
  return (
    <section
      id="about-content"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="wrapper">
        <h2 className="sub-title">about</h2>
        <h1>Who Is This Michael Character?</h1>
        <div className="content-container d-flex justify-content-center align-items-start mt-5">
          <div className="img-container">
            <img
              src="/mike.jpg"
              alt="image illustration of michael"
              height={300}
              width={300}
              className="rounded-circle"
            />
          </div>
          <article className="text-container">
            <h2>A technological driven developer</h2>
            <h4 className="general-text">
              # started playing games on computers when i was young (11) #
              opened a world of new technologies to me and from then began
              tinkering with computers which opened a path into programming. 
              # I started off by learning python in school through developing small apps like a classroom selector
              # after that I continued developing my python skills
              # got into the more technical aspects of computers, becoming interested in the ins and outs of what makes a computer a computer.
              # for my 16th bday I saved up enough money to finally build my first computer, going through the process of learning the componenets and how they interact with one another and each of theri pruposes.
            </h4>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
