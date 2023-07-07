import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Button, Container, Col, Row } from "reactstrap";
import CharacterFields from "./CharacterFields";
import CharacterPDFView from "./characterPDF/CharacterPDFView";
import background from "../../../assets/CharacterSheet-background.jpg.jpg";

export default function CharacterSheet(props) {
	const decoded = props.token ? jwt_decode(props.token) : "";
	console.log("Decoded Token", decoded.id);
	const owner_id = decoded.id;
	console.log("Props", props)
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
		owner_id: ""
	});
//! Can you see me?
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
	

	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				width: "100vw",
				height: "100vh",
			}}
		>
			<Row style={{ height: "50px" }}>
				<Col xs="1">
					<Button
						style={{ marginTop: "20px", width: "150px" }}
						color="info"
						outline
						onClick={() => navigate(`/character`)}
					>
						Back to Character List
					</Button>
				</Col>
			</Row>

			<Row style={{ height: "50px", paddingTop: "50px" }}>
				<Col xs="1">
					{owner_id === fields.owner_id ?
					<Button
						onClick={() => navigate(`/character/edit/${id}`)}
						color="warning"
						outline
						style={{ width: "150px" }}
					>
						Edit Character
					</Button> : <Button
						onClick={() => navigate(`/character/edit/${id}`)}
						color="warning"
						outline
						disabled
						style={{ width: "150px" }}
					>
						Edit Character
					</Button>}
				</Col>
			</Row>

			<Row style={{ height: "50px", paddingTop: "50px" }}>
				<Col xs="1" style={{ paddingLeft: "24px" }}>
					{owner_id === fields.owner_id ?
					<Button>
					<CharacterPDFView fields={fields}/>
					</Button> : <Button disabled>
					<CharacterPDFView fields={fields}/>
					</Button>}
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
