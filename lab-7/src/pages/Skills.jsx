import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

function Skills() {
  const skills = ["React", "Node.js", "Python", "C++", "SQL", "Data Structures", "Algorithms"];

  return (
    <div>
      <Heading>Skills</Heading>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}><Paragraph>{skill}</Paragraph></li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
