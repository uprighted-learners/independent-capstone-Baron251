import {
	Card,
	CardTitle,
	CardText,
	ListGroup,
	ListGroupItem,
	Container,
	Col,
	Row,
} from "reactstrap";
import { useEffect } from "react";
import CharacterStats from "./CharacterStats";
export default function CharacterFields(props) {
	useEffect(() => {
		props.fetchFields();
	}, [props.token]);
	return (
		<>
			<Container style={{ display: "flex", padding: "0px" }}>
				<Card
					style={{
						width: "20em",
					}}
				>
					<CardText>
						Character Name: {props.fields.name}
					</CardText>
				</Card>
			</Container>

			<Container style={{
				// width: "67.59px"
			}}>
				<Row
					style={{
						marginTop: "20px",
						
						width: "24.68%",
					}}
				>
					<Col
						className="bg-light border"
						style={{
							borderRadius: "5px 0px 0px 5px",
							width: "50%",
						}}
					>
						<CardText>Proficiency Bonus: +2</CardText>
					</Col>
					<Col
						className="bg-light border"
						style={{
							borderRadius: "0px 5px 5px 0px",
							width: "50%",
						}}
					>
						<CardText>Level: <br/>{props.fields.level}</CardText>
					</Col>
				</Row>
			</Container>
			{/* <Container style={{ display: "flex"}}> */}
						<CharacterStats stats={props.fields.stats} fetchFields={props.fetchFields} token={props.token}/>
			{/* </Container> */}
		</>
	);
}
