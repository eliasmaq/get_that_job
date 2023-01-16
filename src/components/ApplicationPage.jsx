import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { RiFocus3Line } from "react-icons/ri";
import { MdRadioButtonChecked } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaIndustry } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Rectangle1 from "../static/img/Companies-Logos/Rectangle1.png"
import { fonts } from "../styles";
import { typography } from "../styles";

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 960px;
	

`;

const StyledThe = styled("div")`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 279px;
height: 77px;
`;

const StyleDh1 = styled("h1")`
	${typography.sm};
	font-size: 24px;
`;

const StyledPa = styled("p")`
font-weight: 500;
font-size: 14px;
line-height: 24px;
gap: 13px;
	color: #616161;
`;

const StyledDiv2 = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
	width: 960px  ;
	`;

const StyledDiv3 = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	

`;

const StyledDiv4 = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: flex;
	width: 960px;
	margin-top: 54px;
`;

const StyledDiv5 = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: flex;
	width: 960px;
	margin-top: 16px;
`;

const StyledLabel = styled("label")`
	display: flex;
	flex-direction: row;
	gap: 16px;
	
`;

const ButtonNav = styled.button`
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 24px;
gap: 8px;
width: 233px;
height: 56px;
border: none;
background: #F48FB1;
border-radius: 16px;
color: #FFFFFF;
`;
const StyledButton = styled("button")`
box-sizing: border-box;

display: flex;
flex-direction: column;
align-items: center;
padding: 8px 32px 16px;
gap: 4px;

width: 281px;
height: 77px;

background: #FFFFFF;

border: 1px solid #BF5F82;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
border-radius: 8px;

font-weight: 400;
font-size: 24px;
line-height: 29px;
color: #373737;

`;

const ButtonNa = styled.button`
display: flex;
flex-direction: row;

align-items: center;
padding: 8px;
gap: 8px;
width: 233px;
height: 56px;
border: none;
background: #F48FB1;
border-radius: 8px;
color: #FFFFFF;
`;

const StyledH2 = styled("h2")`
${typography.sm};
font-weight: 400;
font-size: 24px;
line-height: 29px;
color: #BF5F82;
`;
 
const StyledLabel2 = styled("label")`
${typography.sm};
font-size: 16px;
color: #616161;
`
const StyledP = styled("p")`
${typography.sm};
margin-top: 16px;
font-size: 12px;
`;

const StyledIcon = styled("p")`
width: 40px;
height: 40px;
background: #F48FB1;
border-radius: 50px;
`;




function Application() {
  return (
<div style={{display:"flex", justifyContent: "center", border: "1px solid green", width: "100%"}}>
	<StyledDiv>
		<StyledDiv2>
			<div style={{display: "flex", gap: "20px"}}>
				<img src={Rectangle1} css={css`width: 75px; height: 75px; position: absolute; left: 15px; top: 20px; border-radius: 50%;`} />					
			    <StyledThe>
					<StyleDh1>The company name SA</StyleDh1>
					<div style={{width: "138px", height: "40px"}}>
						<StyledPa><RiFocus3Line style={{background: "#F48FB1", borderRadius: "50px",width: "30px",height: "30px",color: "white"}}></RiFocus3Line>FOLLOWING</StyledPa>
					</div>
					
				</StyledThe>
			</div>
				
					<div>
						<ButtonNav> SEND APLICATION</ButtonNav>
					</div>
		</StyledDiv2>

	    <StyledDiv3>
			<h1>The Job title </h1>
			<p >Posted 2 days ago</p>
		</StyledDiv3>	
		    <div style={{display:"flex", flexDirection: "row", justifyContent: "space-between", gap: "38px", marginTop: "18px"}}>
				<StyledButton>
					<StyledLabel2 >Category</StyledLabel2 >
					<FaIndustry/>Manufacturing
				</StyledButton>
				<StyledButton>
					<StyledLabel2 >Type</StyledLabel2 >
					<AiOutlineCalendar/>Full time
				</StyledButton>
				<StyledButton>
					<StyledLabel2 >Salary</StyledLabel2 >
					<RiMoneyDollarCircleLine/>	2,000 - 2,500
				</StyledButton>
			</div>
		

		<StyledDiv4>
			<StyledH2>Complete your application</StyledH2>
			<StyledP>Send your cv updated</StyledP>
				<StyledLabel>
					<input type="radio" name="miCheck"></input>	
					Use current CV
					<input type="radio" name="miCheck"></input>	
					Upload new CV
				</StyledLabel>
                    <form style={{marginTop: "16px"}}>
                        <input type="file" />
                    </form>  
		</StyledDiv4>		
			<StyledDiv5>
				<p>Professional experience (taken from your profile)</p>
				<textarea rows="16" cols="">					
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.									 
				</textarea>
				
				<p style={{marginTop: "16px"}}>Why are you interested in working at The company name SA</p>
				<textarea>         
						Mention things about The Company Name SA that excite you. 
						Why would you be a good candidate?					
				</textarea>

			</StyledDiv5>
				
				<ButtonNa style={{marginTop: "36px"}}>SEND APLICATION</ButtonNa>
			
	</StyledDiv>	
</div>
			
		
	);
}

export default Application;