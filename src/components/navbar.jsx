import styled from "@emotion/styled";
import {
  RiSuitcaseLine,
  RiUserLine,
  RiLogoutCircleLine,
  RiGithubFill,
} from "react-icons/ri";
import { VscNewFile } from "react-icons/vsc";
import NavBarItem from "./navbarItem";
import { typography } from "../styles";
import getJob from "../static/img/logoNavbar.svg";

const NavbarC = styled("div")`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.3rem 0;
`;

const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 1rem 4rem 1rem 1rem;
  ${typography.text.xs}
  color: #616161;
`;

const Authors = styled.div`
  font-size: ;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Github = styled.div`
  font-size: 1.2rem;
`;

const ContainerImage = styled.div`
  padding: 0 1rem;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Navbar() {
  const optionIcon = {
    job: <RiSuitcaseLine />,
    create: <VscNewFile />,
    profile: <RiUserLine />,
    logout: <RiLogoutCircleLine />,
  };
  return (
    <NavbarC>
      <Main>
        <ContainerImage>
          <img src={getJob} alt="navbar-Title" />
        </ContainerImage>
        <ContainerItems>
          <NavBarItem
            to={"profile"}
            name={"Job Postings"}
            icon={optionIcon.job}
          />
          <NavBarItem
            to={"/"}
            name={"Create New Job"}
            icon={optionIcon.create}
          />
          <NavBarItem
            to={"favorites"}
            name={"Profile"}
            icon={optionIcon.profile}
          />

          <NavBarItem
            to={"favorites"}
            name={"Logout"}
            icon={optionIcon.logout}
          />
        </ContainerItems>
      </Main>

      <Footer>
        <p>2023 -Get That Job</p>
        <p>Codeable- Cohort X Final Project</p>
        <div>
          <p>Build with by:</p>
          <Authors>
            <Github>
              <RiGithubFill />
            </Github>
            <p>Sebastian Terleira</p>
          </Authors>

          <Authors>
            <Github>
              <RiGithubFill />
            </Github>
            <p>Elias Mesones</p>
          </Authors>
          <Authors>
            <Github>
              <RiGithubFill />
            </Github>
            <p>Patricia Mendoza</p>
          </Authors>

          <Authors>
            <Github>
              <RiGithubFill />
            </Github>
            <p>Camilo Huanca</p>
          </Authors>
        </div>
        <div>
          <p>Source Code:</p>
          <p>Ruby on Rails REST API</p>
          <p>React Responsive SPA</p>
        </div>
      </Footer>
    </NavbarC>
  );
}

export default Navbar;
