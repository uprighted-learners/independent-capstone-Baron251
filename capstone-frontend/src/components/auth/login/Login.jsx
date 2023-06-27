import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


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
			console.log(data.user)
			navigate("/character");
			// alert(`Welcome ${data.user.userName}`)
		} else {
			alert(data.message)
		}
	} catch (err) {
		console.log(err)
	}
  }

	return (
		<>
			<Form onSubmit={handleSubmit} style={{ width: "100%", marginTop: "250px", backgroundColor: "rgba(52, 52, 52, 0.49)", borderRadius: "10px", fontSize: 30}}>
				<FormGroup>
					<Label style={{ color: "#F5A300"}}>Username:</Label>
					<Input innerRef={userNameRef} placeholder="Username" autoComplete="off"/>
					<Label style={{ color: "#F5A300"}}>Password:</Label>
					<Input innerRef={passwordRef} placeholder="Password" type="password" autoComplete="off"/>
				</FormGroup>
				<Button type="submit" style={{ fontSize: 20 }}>Login</Button>
			</Form>
		</>
	);
}
