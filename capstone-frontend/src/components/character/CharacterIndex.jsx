import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
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
import background from '../../assets/CharacterIndex-background.jpg'
import { useNavigate, useParams } from "react-router-dom";

export default function CharacterIndex(props) {
	const decoded = props.token ? jwt_decode(props.token) : ""
	console.log("Decoded Token", decoded.id)
	const owner_id = decoded.id
	const [characters, setCharacters] = useState([]);
	const navigate = useNavigate();
	const fetchCharacters = async () => {
		const url = `http://localhost:4000/character/${owner_id}`;

		const requestOptions = {
			method: "GET",
			headers: new Headers({
				Authorization: props.token,
			}),
		};

		try {
			const res = await fetch(url, requestOptions);
			const data = await res.json();
			setCharacters(data.getCharacters);
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
		<div style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "58.55em"}}>
			<Container>
				<Row>
					<Col md="4">
						<Card style={{marginTop: "15em"}}>
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
		</div>
	);
}
