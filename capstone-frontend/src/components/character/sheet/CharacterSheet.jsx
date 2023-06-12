import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import CharacterFields from "./CharacterFields";

export default function CharacterSheet(props) {
	const { id } = useParams();
	const [fields, setFields] = useState();
	const url = `http://localhost:4000/character/${id}`;
	const navigate = useNavigate()

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
			console.log("Data", data)
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
			<h1>Character Sheet</h1>
			<CharacterFields  fetchFields={fetchFields} token={props.token} fields={fields}/>
			<Button
				
				color="info"
				outline
				onClick={() => navigate(`/character`)}
			>
				Back to Character List
			</Button>
		</>
	);
}
