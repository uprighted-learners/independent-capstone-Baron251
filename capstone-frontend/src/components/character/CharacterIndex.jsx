import { useState, useEffect } from "react";
import CharacterCreate from "./CharacterCreate";
import CharacterTable from "./CharacterTable";
import {
	Col,
	Container,
	Row,
	Card,
	CardText,
	CardTitle,
	Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function CharacterIndex(props) {
	const [characters, setCharacters] = useState([]);
	const navigate = useNavigate();
	const fetchCharacters = async () => {
		const url = "http://localhost:4000/character/";

		const requestOptions = {
			method: "GET",
			headers: new Headers({
				Authorization: props.token,
			}),
		};

		try {
			const res = await fetch(url, requestOptions);
			const data = await res.json();
			setCharacters(data.getAllCharacters);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (props.token) {
			fetchCharacters();
		}
	}, [props.token]);
	console.log("Characters", characters)
	const handleClick = async (e) => {
		navigate("/character/creation");
	};
	return (
		<>
			<Container>
				<Row>
					<Col md="4">
						<Card>
							<CardTitle>Create a Character</CardTitle>
							<CardText>
								Hit the button below to start creating your new character. Or if
								you already have a character, look to the right to view, edit or
								delete one you've already made.
							</CardText>
							<Button onClick={handleClick}>Get Started</Button>
						</Card>
					</Col>
					<Col md="8">
						<CharacterTable
							characters={characters}
							token={props.token}
							fetchCharacters={fetchCharacters}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}
