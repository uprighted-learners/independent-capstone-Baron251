import { Table, Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function CharacterTable(props) {
	const navigate = useNavigate();
	console.log("Props", props.characters);
	return (
		<>
			<h1>List of Characters</h1>
			<Container>
				<Table>
					<thead>
						<tr>
							<th>Character Name</th>
							<th>Character Class</th>
						</tr>
					</thead>
					<tbody>
						{props.characters.map(character => (
							<tr key={character._id}>
								<th scope="row">{character.name}</th>
								<td>{character.class}</td>
								<td>
									<Button
										onClick={() => navigate(`/character/${character._id}`)}
										color="success"
									>
										<b>View Character</b>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</>
	);
}
