import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";

function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "Shiv Nadar University, Chennai",
      year: "2023 – Present",
      details: "Focused on software engineering, algorithms, and system design."
    },
    {
      degree: "High School",
      school: "Alpha Matriculation Higher Secondary School",
      year: "2021 – 2023",
      details: "Studied Physics, Chemistry, Mathematics, and Computer Science."
    }
  ];

  return (
    <div>
      <Heading>Education</Heading>
      {education.map((edu, i) => (
        <div key={i}>
          <SubHeading>{edu.degree}</SubHeading>
          <Paragraph>{edu.school} ({edu.year})</Paragraph>
          <Paragraph>{edu.details}</Paragraph>
        </div>
      ))}
    </div>
  );
}

export default Education;
