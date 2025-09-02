import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "./Image";

function ProfileSummary({ name, summary, picture }) {
  return (
    <div>
      {picture && <Image src={picture} alt={`${name}'s profile`} width={120} />}
      <Heading>{name}</Heading>
      <Paragraph>{summary}</Paragraph>
    </div>
  );
}

export default ProfileSummary;
