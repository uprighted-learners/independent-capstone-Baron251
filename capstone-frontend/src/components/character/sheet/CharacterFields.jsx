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
export default function CharacterFields(props) {
	return (
		<>
			<Container style={{ display: "flex", padding: "0px" }}>
				<Card
					style={{
						width: "20em",
					}}
				>
					<CardText>
						<h4>Character Name: {props.fields.name}</h4>
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
			<Container style={{ display: "flex-column"}}>
						{props.stats.Strength}
			</Container>
		</>
	);
}
