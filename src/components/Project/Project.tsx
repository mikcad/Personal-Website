import Card from 'react-bootstrap/Card';

interface ProjectProps {
  project: {
    name: string;
    image: string;
    technologies: string[];
    description: string;
    URL?: string;
    GitHub: string;
  };
}

const Project = ({ project }: ProjectProps) => {
  return (
    <Card className="project-card" style={{ width: '26rem' }}>
      <Card.Img className="project-img" variant="top" src={project.image} />
      <Card.Body>
        <Card.Title className="project-title">{project.name}</Card.Title>
        <hr />
        <Card.Subtitle className="project-subtitle mb-2">
          {project.technologies.join(' / ')}
        </Card.Subtitle>
        <hr />
        <Card.Text className="project-description">
          {project.description}
        </Card.Text>
        <hr />
        {project.URL && (
          <div className="d-inline-flex">
            <Card.Link className="links" target="_blank" href={project.URL}>
              Project
            </Card.Link>
            <p className="mx-2">//</p>
          </div>
        )}
        <Card.Link className="links" target="_blank" href={project.GitHub}>
          GitHub
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Project;
