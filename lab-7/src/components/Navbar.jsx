import { Link } from "react-router-dom";
import Paragraph from "./Paragraph";

function Navbar() {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/education", label: "Education" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/achievements", label: "Achievements" },
    { path: "/thermostat", label: "Thermostat" },
  { path: "/timer", label: "Timer" }
  ];

  return (
    <nav style={{ marginBottom: "20px" }}>
      {routes.map((route, i) => (
        <Link key={i} to={route.path} style={{ margin: "0 10px", textDecoration: "none" }}>
          <Paragraph>{route.label}</Paragraph>
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
