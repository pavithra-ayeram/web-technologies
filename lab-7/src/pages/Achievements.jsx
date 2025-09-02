import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

function Achievements() {
  const achievements = [
    "Smart India Hackathon 2023 — Built real-time bus tracking and routing system",
    "Smart India Hackathon 2024 — Deep Learning model for plant and animal disease classification"
  ];

  return (
    <div>
      <Heading>Achievements</Heading>
      <ul>
        {achievements.map((ach, i) => (
          <li key={i}><Paragraph>{ach}</Paragraph></li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
