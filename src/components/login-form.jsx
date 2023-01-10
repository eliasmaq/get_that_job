/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles";
import HombreSaludo from "../static/img/LoginPage/HombreSaludo.png"
import { useState } from "react";
import LoginFormProfessional from "./FormLogin/login-form-professional";
import LoginFormRecruiter from "./FormLogin/login-form-recruiter";

const Wrapper = styled.div`
max-width: 1024px;
margin: auto;
display: flex;
flex-direction: row;
padding: 20px;
`

const LinkOn = styled.button`
border: none;
background: none;
cursor: pointer;
border-bottom: 3px red solid
`

const LinkOff = styled.button`
border: none;
background: none;
cursor: pointer;
height: 48px;
`

const NavContainer = styled.div`
display: flex;
justify-content: space-evenly;
font-family "Source Sans Pro", sans-serif;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
height: 50px;
background: #fff;
border-bottom-left-radius: 30px;
border-bottom-right-radius: 30px;
margin-bottom: 50px;
`
const WelcomeText = styled.p`
font-family: ${fonts.bedroom};
font-weight: 400;
font-size: 48px;
line-height: 59px;
color: #373737;
margin-bottom: 16px;
`

const Menssage = styled.p`
font-family: ${fonts.bedroom};
font-weight: 500;
font-size: 20px;
line-height: 28px;
color: #373737;
letter-spacing: 0.15px;
margin-bottom: 32px;
`

function LoginPage() {
	const [showLogin, setShowLogin] = useState("Professional")

	function handleLinkChange(event) {
    event.preventDefault();
    event.target.innerText !== showLogin
    ? setShowLogin(event.target.innerText)
    : setShowLogin(showLogin);
  }

  return (
		<>
		<Wrapper>
			<div css={css`display: flex; flex-direction: column;`}>
				<WelcomeText>Welcome back</WelcomeText>
				<Menssage>Login to you account as...</Menssage>
				<div onClick={handleLinkChange}>
					{showLogin === "Professional"
					? <NavContainer>
						<LinkOn onClick={handleLinkChange}>Professional</LinkOn>
						<LinkOff onClick={handleLinkChange}>Recruiter</LinkOff>
					</NavContainer>
					: <NavContainer>
						<LinkOff onClick={handleLinkChange}>Professional</LinkOff>
						<LinkOn onClick={handleLinkChange}>Recruiter</LinkOn>
					</NavContainer>}
				</div>

        {showLogin === "Professional" ? <LoginFormProfessional/> : <LoginFormRecruiter/>}
      </div>
			<div>
				<img src={HombreSaludo} alt="HobreSaludo"/>
			</div>
		</Wrapper>
		</>
	);
}

export default LoginPage;