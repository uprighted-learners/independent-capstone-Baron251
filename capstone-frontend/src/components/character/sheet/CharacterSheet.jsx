import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container } from "reactstrap";
import CharacterFields from "./CharacterFields";

export default function CharacterSheet(props) {
	const { id } = useParams();
	const [fields, setFields] = useState({});
	
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
			console.log("Data", data);
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
				stats={fields.stats}
			/>
		</>
	);
}
