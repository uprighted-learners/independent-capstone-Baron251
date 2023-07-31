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
import background from "../../assets/CharacterIndex-background.jpg";
import { useNavigate } from "react-router-dom";

export default function CharacterIndex(props) {
	const decoded = props.token ? jwt_decode(props.token) : "";
	console.log("Decoded Token", decoded.id);
	const owner_id = decoded.id;

	const [characters, setCharacters] = useState([]);

	const [table, setTable] = useState("All characters made so far");
	
	const navigate = useNavigate();

	const fetchCharacters = async () => {
		const url = `http://localhost:4000/character/characters/${owner_id}`;

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

	const fetchAllCharacters = async () => {
		const url = `http://localhost:4000/character/`;

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

	const swapFetch = () => {
		table === "All characters made so far" ? setTable("My characters") : setTable("All characters made so far");
		
	};

	useEffect(() => {
		if (props.token && table==="All characters made so far") {
			fetchCharacters()
		} else {
			fetchAllCharacters()
		}
	}, [props.token, table]);
	// console.log("Characters", characters)
	const handleClick = async (e) => {
		navigate("/character/creation");
	};

	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				height: "100vh",
			}}
		>
			<Container>
				<Row>
					<Col md="4">
						<Card
							style={{
								marginTop: "15em",
								backgroundColor: "rgba(52, 52, 52, 0.5)",
								color: "#F5DFB8",
							}}
						>
							<CardTitle>Create a Character</CardTitle>
							<CardText>
								Hit the button below to start creating your new character. Or if
								you already have a character, look to the right to view, edit or
								delete one you've already made.
							</CardText>
							<Button onClick={handleClick} color="success" outline>
								Get Started
							</Button>
							<Button onClick={swapFetch} color="info" outline>{table}</Button>
						</Card>
					</Col>
					<Col md="8">
						{/* GET MAX WIDTH ON VIEW/DELETE BUTTONS */}
						<CharacterTable
							characters={characters}
							token={props.token}
							fetchCharacters={fetchCharacters}
							fetchAllCharacters={fetchAllCharacters}
							ownerId={owner_id}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
