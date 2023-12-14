import styled from "styled-components";
const StyledCard = styled.div`
    background-color: #231e39;
    border-radius: 5px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    color: #b3b8cd;
    padding-top: 30px;
    position: relative;
    width: 350px;
    max-width: 100%;
    text-align: center;
    margin: 10px 0;
    margin: 5px 0;
    text-transform: uppercase; 
    font-size: 14px;
    line-height: 21px;
    color: #231e39;
    background-color: #febb0b;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 7px;
    position: absolute;
    top: 30px;
    left: 30px;
    border: 1px solid #03bfcb;
    border-radius: 50%;
    padding: 7px;
`;
const StyledButp= styled.button`
background-color: #03bfcb;
border: 1px solid #03bfcb;
border-radius: 3px;
color: #231e39;
font-family: Montserrat, sans-serif;
font-weight: 500;
padding: 10px 25px;
`;
const StyledButg = styled.button`
background-color: transparent;
color: #02899c;
`;
const Styledsk = styled.div`
    background-color: #1f1a36;
    text-align: left;
    padding: 15px;
    margin-top: 30px;
    margin: 5px 0;
    text-transform: uppercase;
    list-style-type: none;
    margin: 0;
    padding: 0;
    border: 1px solid #2d2747;
    border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
`;
const ProfileCard = () => {
    return ( 
    <StyledCard>
	<span class="pro">PRO</span>
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Ricky Park</h3>
	<h6>New York</h6>
	<p>front-end developer</p>
	<div class="buttons">
		<StyledButp>
			Message
		</StyledButp>
		<StyledButg>
			Following
		</StyledButg>
	</div>
	<Styledsk>
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</Styledsk>
</StyledCard>
     );
}
 
export default ProfileCard;