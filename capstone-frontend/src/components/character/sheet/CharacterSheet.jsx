import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container } from "reactstrap";
import CharacterFields from "./CharacterFields";

export default function CharacterSheet(props) {
	const { id } = useParams();
	const [fields, setFields] = useState({
		name: "No Name",
		class: "No Class",
		race: "No Race",
		level: "0",
		backStory: "No Backstory",
		physicalAtt: {
			Hair: "No Hair",
			Eyes: "No Eyes",
			Height: "No Height",
			Age: "No Age",
			Skin: "No Skin",
			Weight: "No Weight"
		},
		stats: {
			Strength: "",
			Dexterity: "",
			Constitution: "",
			Intelligence: "",
			Wisdom: "",
			Charisma: ""
		}
	});
	
	const url = `http://localhost:4000/character/${id}`;
	const navigate = useNavigate();

	const fetchFields = async () => {
		const requestOptions = {
			method: "GET",
			headers: new Headers({
				Authorization: props.token,
			}),
		};
		try {
			const response = await fetch(url, requestOptions);
			const data = await response.json();
			setFields(data.getCharacter);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		if (props.token) {
			fetchFields();
		}
	}, [props.token]);
	console.log("First Derp", fields.stats)
	return (
		<>
			<Container style={{ display: "flex", alignContent: "left", paddingBottom: "50px" }}>
				<Button style={{ marginTop: "20px"}}color="info" outline onClick={() => navigate(`/character`)}>
					Back to Character List
				</Button>
			</Container>
			
			<CharacterFields
				fetchFields={fetchFields}
				token={props.token}
				fields={fields}
				// stats={fields.stats}
			/>
		</>
	);
}
