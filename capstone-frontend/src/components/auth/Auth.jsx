import { Container, Button} from "reactstrap";
import { useState } from "react";
import FullButton from "../buttons/FullButton";
import AuthB from "../../assets/Auth-background.png"
// Signup is child of Auth.jsx
import Signup from "./signup/Signup";
// Login is child of Auth.jsx
import Login from "./login/Login";

export default function Auth(props) {
	// useState to hold button's state login/signup
	const [button, setButton] = useState("Signup");

	// function to switch button from login to signup with setButton
	const swapForm = () => {
		button === "Login" ? setButton("Signup") : setButton("Login");
	};

	const displayForm = () => {
		return button === "Login" ? (
			<Container>
				{/* <Row>
					<Col md="6"> */}
						<Signup updateToken={props.updateToken} />
					{/* </Col>
				</Row> */}
			</Container>
		) : (
			<Container style={{display: "flex", justifySelf: "center", width: "500px"}}>
				{/* <Row>
					<Col md="6"> */}
						<Login updateToken={props.updateToken} />
					{/* </Col>
				</Row> */}
			</Container>
		);
	};

	return (
		<div style={{backgroundImage: `url(${AuthB})`, backgroundSize: "cover", height: "58.55em", backgroundColor: "#F5DFB8"}}>
			<FullButton>
				<Button onClick={swapForm} color="dark" style={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
					{button}
				</Button>
				{displayForm()}
			</FullButton>
			
		</div>
	);
}
