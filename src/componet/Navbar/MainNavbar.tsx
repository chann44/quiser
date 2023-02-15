import { useState } from "react";
import {NavbarContainer, Logo, BottomNavOptions} from "."
import {ProjectContainer, NoProject, AllProjects} from "../Project"

const MainNavbar = () => {
  const [noProject] = useState(false);
  return (
    <NavbarContainer>
      <Logo />
        <ProjectContainer>
        {noProject ? (
          <NoProject />
        ) : (
          <AllProjects />
        )}
        </ProjectContainer>
      <BottomNavOptions />
    </NavbarContainer>
  );
};

export default MainNavbar;
