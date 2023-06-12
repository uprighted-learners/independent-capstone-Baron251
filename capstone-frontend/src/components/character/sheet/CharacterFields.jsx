import { Table } from "reactstrap";
import { useEffect } from "react";
export default function CharacterFields(props) {
    
    console.log("Fields?",props.fields._id)
    
	return (
		<>
			<h1>Character Fields</h1>
			<Table>
				<thead>
					<tr>
						<th>{props.fields.name}</th>
						<th>{props.fields.class}</th>
						<th>{props.fields.level}</th>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
			</Table>
		</>
	);
}
