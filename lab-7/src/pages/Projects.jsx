import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with HTML and CSS",
      link: "https://github.com/pavithra-ayeram/portfolio-website"
    },
    {
      title: "Blog Website",
      description: "A website to post your own blogs or read blogs posted by other people",
      link: "https://github.com/pavithra-ayeram/blog-website"
    }
  ];

  return (
    <div>
      <Heading>Projects</Heading>
      {projects.map((proj, i) => (
        <div key={i}>
          <SubHeading>{proj.title}</SubHeading>
          <Paragraph>{proj.description}</Paragraph>
          <Button onClick={() => window.open(proj.link, "_blank")}>
            View Project
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Projects;
