import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import FullButton from "../../buttons/FullButton";

export default function Login({ updateToken }) {
	const userNameRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let body = JSON.stringify({
      userName: userNameRef.current.value,
      password: passwordRef.current.value
    })
	const url = "http://localhost:4000/user/login";

	try {
		const res = await fetch(url, {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: body
		});
		const data = await res.json()

		if(data.message === `Login Successful!`){
			updateToken(data.token)
			navigate("/character");
			alert(`Welcome ${data.user.userName}`)
		} else {
			alert(data.message)
		}
	} catch (err) {
		console.log(err)
	}
  }

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label>Username:</Label>
					<Input innerRef={userNameRef} placeholder="Username" autocomplete="off"/>
					<Label>Password:</Label>
					<Input innerRef={passwordRef} placeholder="Password" type="password" autoComplete="off"/>
				</FormGroup>
				<Button type="submit">Login</Button>
			</Form>
		</>
	);
}
