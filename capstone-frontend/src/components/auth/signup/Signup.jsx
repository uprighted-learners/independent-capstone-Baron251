import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup({ updateToken }) {
	const firstNameRef = useRef();
	const userNameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		const firstName = firstNameRef.current.value;
		const userName = userNameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		let bodyObj = JSON.stringify({
			firstName,
			userName,
			email,
			password,
		});

		const url = `http://localhost:4000/user/signup`;

		const headers = new Headers();
		headers.append("Content-Type", "application/json");

		const requestOptions = {
			headers,
			body: bodyObj,
			method: "POST",
		};

		try {
			const response = await fetch(url, requestOptions);
			const data = await response.json();
            console.log(data)
			if (data.message === "Success! User Created!") {
				updateToken(data.token);
				navigate("/character");
			} else {
				alert(data.message);
			}
		} catch (err) {
			console.error(err.message);
		}
	} //! Handle submit

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Row>
					<Col>
						<FormGroup>
							<Label>First Name:</Label>
							<Input
								innerRef={firstNameRef}
								autoComplete={"off"}
								placeholder="First Name"
							/>
							<Label>Username:</Label>
							<Input
								innerRef={userNameRef}
								autoComplete={"off"}
								placeholder="Username"
							/>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Label>Email:</Label>
                            <Input innerRef={emailRef} autoComplete={"off"} placeholder="Email" type="email"/>
                            <Label>Password:</Label>
                            <Input innerRef={passwordRef} autoComplete={"off"} placeholder="Password" type="password"/>
						</FormGroup>
					</Col>
				</Row>
                <Button type="submit">Signup</Button>
			</Form>
		</>
	);
}
