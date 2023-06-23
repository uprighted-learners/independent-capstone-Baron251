import { Card, CardText, CardTitle, Container, Col, Row } from "reactstrap";
import { useEffect } from "react";
import CharacterStats from "./CharacterStats";
export default function CharacterFields(props) {
	useEffect(() => {
		props.fetchFields();
	}, [props.token]);
	return (
		<>
			<Container style={{ display: "flex", padding: "0px" }}>
				<Card style={{ width: "20em" }}>
					<CardText>
						<b>Character Name:</b> {props.fields.name}
					</CardText>
				</Card>
			</Container>

			{/* Proficiency + Level */}
			<Container>
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
						<CardText>
							<b>Proficiency Bonus: </b>
						</CardText>
					</Col>
					<Col
						className="bg-light border"
						style={{
							borderRadius: "0px 5px 5px 0px",
							width: "50%",
						}}
					>
						<CardText>
							<b>Level:</b> <br />
							{props.fields.level}
						</CardText>
					</Col>
				</Row>
			</Container>

			{/* Physical Attributes */}
			<Container style={{ width: "30%", marginRight: "50px" }}>
				<Row>
					<Col
						className="bg-light border"
						style={{
							borderRadius: "5px 0px 0px 0px",
							width: "50%",
						}}
					>
						<CardText>
							<b>Height:</b> {props.fields.physicalAtt.height}
						</CardText>
					</Col>
					<Col
						className="bg-light border"
						style={{
							width: "50%",
						}}
					>
						<CardText>
							<b>Age:</b> {props.fields.physicalAtt.age}
						</CardText>
					</Col>
					<Col
						className="bg-light border"
						style={{
							borderRadius: "0px 5px 0px 0px",
							width: "50%",
						}}
					>
						<CardText>
							<b>Hair:</b> {props.fields.physicalAtt.hair}
						</CardText>
					</Col>
				</Row>

				<Row>
					<Col
						className="bg-light border"
						style={{
							borderRadius: "0px 0px 0px 5px",
							width: "50%",
						}}
					>
						<CardText>
							<b>Skin:</b> {props.fields.physicalAtt.skin}
						</CardText>
					</Col>
					<Col
						className="bg-light border"
						style={{
							width: "50%",
						}}
					>
						<CardText>
							<b>Weight:</b> {props.fields.physicalAtt.weight}
						</CardText>
					</Col>
					<Col
						className="bg-light border"
						style={{
							borderRadius: "0px 0px 5px 0px",
							width: "50%",
						}}
					>
						<CardText>
							<b>Eye Color:</b> {props.fields.physicalAtt.eyes}
						</CardText>
					</Col>
				</Row>
			</Container>

			{/* Backstory */}
		
			
			{/* Character Stat block */}
				<Container className="backstory" style={{ width: "100%" }}>
			<Container style={{ }}>
				<CharacterStats
					stats={props.fields.stats}
					fetchFields={props.fetchFields}
					token={props.token}
				/>
				<Card style={{ padding: "1em" }}>
					<CardText>
						<b>Back Story:</b> {props.fields.backStory}
					</CardText>
				</Card>
			</Container>
			</Container>
		</>
	);
}
