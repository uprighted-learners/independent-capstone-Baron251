import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Col, Row } from "reactstrap";
import CharacterFields from "./CharacterFields";
import background from "../../../assets/CharacterSheet-background.jpg.jpg";


export default function CharacterSheet(props) {
	const { id } = useParams();
	const [fields, setFields] = useState({
		name: "No Name",
		cla: "No Class",
		race: "No Race",
		level: "0",
		backStory: "No Backstory",
		physicalAtt: {
			hair: "No Hair",
			eyes: "No Eyes",
			height: "No Height",
			age: "No Age",
			skin: "No Skin",
			weight: "No Weight",
		},
		stats: {
			strength: "",
			dexterity: "",
			constitution: "",
			intelligence: "",
			wisdom: "",
			charisma: "",
		},
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
	// useEffect(() => {
	// 	if (props.token && fields !== null) {
	// 		fetchFields();
	// 	}
	// }, [props.token]);

	
	return (
		<div
			style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100vw", height: "100vh"}}
		>
			<Row>
				<Col xs="1">
					<Button
						style={{ marginTop: "20px" }}
						color="info"
						outline
						onClick={() => navigate(`/character`)}
					>
						Back to Character List
					</Button>
				</Col>
			</Row>
			<Row>
				<Col xs="1">
					<Button onClick={() => navigate(`/character/edit/${id}`)} color="warning" outline>
						Edit Character
					</Button>
				</Col>
			</Row>

			<CharacterFields
				fetchFields={fetchFields}
				token={props.token}
				fields={fields}
			/>

		</div>
	);
}
