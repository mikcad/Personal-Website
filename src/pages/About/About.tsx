import Card from 'react-bootstrap/Card';

import './about.css';

const About = () => {
  return (
    <section id='about-content'>
      <div className="wrapper">
        <h2>about</h2>
        <h1>Who is Michael?</h1>
        <div className="content-container d-flex justify-content-center align-items-center mt-4">
          <div className="img-container">
            <img src="/public/mike.jpg" alt="image illustration of michael" height={300} width={300} className='rounded-circle'/>
          </div>
          <div className="text-container">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, est.
              Ratione minus facilis, sint aut est voluptates exercitationem cum
              temporibus quas porro, autem enim quisquam rerum quis quasi saepe
              quae!
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
