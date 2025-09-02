import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";

function Experience() {
  const experiences = [
    {
      role: "UI/UX Intern",
      company: "Innara AI",
      year: "Summer 2025",
      description: "Refined UX via usability testing, improving navigation and feature discovery. Designed and optimized user flows using Figma; collaborated with developers to implement frontend components."
    }
  ];

  return (
    <div>
      <Heading>Experience</Heading>
      {experiences.map((exp, i) => (
        <div key={i}>
          <SubHeading>{exp.role}</SubHeading>
          <Paragraph>{exp.company} ({exp.year})</Paragraph>
          <Paragraph>{exp.description}</Paragraph>
        </div>
      ))}
    </div>
  );
}

export default Experience;
