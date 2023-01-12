import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { HiOutlineChevronDown } from "react-icons/hi";
import { RiPauseCircleLine, RiMailOpenLine, RiPhoneLine } from "react-icons/ri";

import { useState } from "react";

const Container = styled.div`
  min-height: 102px;
  width: 997px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 1rem;
`;

const Header = styled.section`
  display: flex;
  gap: 3rem;
`;

const Title = styled.p`
  ${typography.head.xs}
  font-family:Montserrat;
  font-weight: 500;
`;

const ContainerMain = styled.div`
  width: 888px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 0;
  transition: all 0.5s;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.2s linear;
  transform-origin: top;
  ${({ active }) =>
    active
      ? "  margin-top: 12px; visibility: visible; opacity: 1; height:auto;"
      : ""};
`;

const SubTitle = styled.p`
  ${typography.text.md}
  font-family:Montserrat;
  color: #bf5f82;
`;

const ContainerText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Icon = styled.div`
  margin: 0.5rem 0.25rem;
  cursor: pointer;
  align-self: end;
  transition: all 0.5s;
  font-size: 1.4rem;
  ${({ active }) => (active ? "rotate: -180deg;" : "")}
`;

const Details = styled.div`
  display: flex;
  gap: 0.5rem;
  ${typography.text.sm}
  font-family:inter;
  color: #8e8e8e;
`;

const JobCandidates = styled.div`
  width: 80px;
  height: 47px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ colorDesi }) => (colorDesi ? "color:#F48FB1;" : "")}
`;

const ContainerCandidates = styled.section`
  display: flex;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;
const TextIcon = styled.p`
  ${typography.text.sm}
`;

const ProfileData = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #8e8e8e;
  ${typography.text.sm}
`;

const ButtonSearch = styled.button`
  all: unset;
  width: 180px;
  height: 30px;
  padding: 6px 16px;
  border-radius: 20px;
  color: #616161;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid #f48fb1;
  border-radius: 1rem;
  ${typography.text.sm}
  cursor:pointer;
  &:hover {
    background-color: #db5c8b;

    color: #fff;
  }
`;

const ContainerButtons = styled.section`
  display: flex;
  gap: 1rem;
`;

const CardApplies = () => {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay(!display);
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <section>
            <Title>Guybrush Threepwood</Title>
            <Details>
              <span>Migthy Pirate</span>
            </Details>
          </section>
          <section>
            <ProfileData>
              <IconWrapper>
                <RiMailOpenLine />
              </IconWrapper>
              <span>guy.brush@mail.com</span>
            </ProfileData>
            <ProfileData>
              <IconWrapper>
                <RiPhoneLine />
              </IconWrapper>
              <span>guy.brush@mail.com</span>
            </ProfileData>
          </section>
          <ContainerCandidates>
            <JobCandidates>
              <IconWrapper>
                <RiMailOpenLine />
              </IconWrapper>
              <TextIcon>{`Sent 5 days ago`}</TextIcon>
            </JobCandidates>

            <JobCandidates colorDesi={"pink"}>
              <IconWrapper>
                <RiPauseCircleLine />
              </IconWrapper>
              <TextIcon>{`Waiting for review`}</TextIcon>
            </JobCandidates>
          </ContainerCandidates>

          <ContainerButtons>
            <ButtonSearch>MARK AS STARTED</ButtonSearch>
          </ContainerButtons>
        </Header>
        <ContainerMain active={display}>
          <ContainerText>
            <SubTitle>Professional experience</SubTitle>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut est
              eligendi quidem ratione, hic pariatur adipisci ducimus quis error
              perspiciatis nisi suscipit dolorum cum molestiae veritatis rem!
              Totam rem repellat, possimus beatae excepturi nam dicta commodi
              omnis accusantium enim laborum sit fugit distinctio fuga officia
              voluptatem assumenda consectetur repudiandae eius aliquid ipsam
              provident quo! Explicabo soluta molestiae tempora velit error ex
              vel, debitis facere quam consequatur rerum illo a id officia
              nesciunt sit temporibus dolorem cum, suscipit iusto neque quos
              ducimus maiores molestias! Iste optio tenetur cum dolorum
              architecto sed molestiae eius voluptates, dolor laborum reiciendis
              tempore, voluptatem cupiditate commodi?
            </p>
          </ContainerText>

          <ContainerText>
            <SubTitle>
              Why are you interested in working at The company name SA
            </SubTitle>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut est
              eligendi quidem ratione, hic pariatur adipisci ducimus quis error
              perspiciatis nisi suscipit dolorum cum molestiae veritatis rem!
              Totam rem repellat, possimus beatae excepturi nam dicta commodi
              oribus dolorem cum, suscipit iusto neque quos ducimus maiores
              molestias! Iste optio tenetur cum dolorum architecto sed molestiae
              eius voluptates, dolor laborum reiciendis tempore, voluptatem
              cupiditate commodi?
            </p>
          </ContainerText>
        </ContainerMain>
      </Wrapper>

      <Icon active={display}>
        <HiOutlineChevronDown onClick={handleDisplay} />
      </Icon>
    </Container>
  );
};

export default CardApplies;
