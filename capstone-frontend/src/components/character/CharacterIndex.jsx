import { useState, useEffect } from "react";
import CharacterCreate from "./CharacterCreate";
import CharacterTable from "./CharacterTable";
import { Col, Container, Row } from "reactstrap";

export default function CharacterIndex(props) {
	const [characters, setCharacters] = useState([]);

	const fetchCharacters = async () => {
		const url = "http://localhost:4000/characters/";

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
	return (
		<>
			<Container>
				<Row>
					<Col md="4">
						<CharacterCreate />
					</Col>
					<Col md="8">
						<CharacterTable />
					</Col>
				</Row>
			</Container>
		</>
	);
}
