import { Table, Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import FullButton from "../buttons/FullButton";

export default function CharacterTable(props) {
	const navigate = useNavigate();
	console.log(props);
	async function deleteCharacter(id) {
		const url = `http://localhost:4000/character/${id}`;
		const myHeaders = new Headers();
		myHeaders.append("Authorization", props.token);

		let requestOptions = {
			headers: myHeaders,
			method: "DELETE",
		};

		try {
			let response = await fetch(url, requestOptions);
			let data = await response.json();

			if (data) {
				props.fetchCharacters();
			}
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<>
			<h1>List of Characters</h1>
			<Container
				style={{
					height: "50em",
					width: "40em",
					overflow: "scroll",
					overflowX: "hidden",

				}}
			>
				<Table style={{backgroundColor: "rgba(52, 52, 52, 0)", }}>
					<thead>
						<tr>
							<th style={{backgroundColor: "rgba(52, 52, 52, 0)", color:"#F5DFB8"}}>Character Name</th>
							<th style={{backgroundColor: "rgba(52, 52, 52, 0)", color:"#F5DFB8"}}>Character Class</th>
						</tr>
					</thead>
					<tbody>
						{props.characters.map((character) => (
							<tr key={character._id} style={{backgroundColor: "rgba(52, 52, 52, 0)"}}>
								<th scope="row" style={{ backgroundColor: "rgba(52, 52, 52, 0.49)",fontSize: 20, color:"#F5DFB8" }}>
									{character.name}
								</th>
								<td style={{ fontSize: 20, backgroundColor: "rgba(52, 52, 52, 0.49)", color:"#F5DFB8" }}>
									{character.cla}
									<FullButton>
										<Button
											onClick={() => navigate(`/character/${character._id}`)}
											color="success"
										>
											<b>View Character</b>
										</Button>
										<Button
											onClick={() => deleteCharacter(character._id)}
											color="danger"
										>
											Delete Character
										</Button>
									</FullButton>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</>
	);
}
