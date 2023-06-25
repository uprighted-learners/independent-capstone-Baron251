import { Card, CardText, CardTitle, Container, Col, Row } from "reactstrap";
import { useEffect } from "react";
import CharacterStats from "./CharacterStats";
export default function CharacterFields(props) {
	useEffect(() => {
		props.fetchFields();
	}, [props.token]);
	return (
		<>
			{/* Character Name */}
			<Container style={{ display: "flex", padding: "0px", flexDirection: "column" }}>
				<Card style={{ width: "20em", borderRadius: "15px 15px 15px 15px" }}>
					<CardTitle style={{ borderRadius: "15px 15px 0px 0px", marginBottom: "0px"}}>
						<b>Character Name:</b> {props.fields.name}
					</CardTitle>
				
					<CardTitle style={{ borderRadius: "0px", marginBottom: "0px"}}>
						<b>Race:</b> {props.fields.race}
					</CardTitle>
				
					<CardTitle style={{ borderRadius: "0px 0px 15px 15px", marginBottom: "0px"}}><b>Class:</b> {props.fields.cla}</CardTitle>
				</Card>
			</Container>

			{/* Proficiency + Level */}
			<Container style={{ height: "0px"}}>
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
							<b>Level:</b>
							{props.fields.level}
						</CardText>
					</Col>
				</Row>
			</Container>

			{/* Physical Attributes */}
			<Container style={{ width: "30%", marginRight: "50px", height: "0px" }}>
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

			{/* Character Stat block */}
			<Container className="backstory-view" style={{  maxWidth: "1900px", width: "1900px", height: "657px"}}>
				<CharacterStats
					stats={props.fields.stats}
					fetchFields={props.fetchFields}
					token={props.token}
				/>
				{/* Backstory */}
				<Card style={{ padding: "1em", minHeight: "10em", maxWidth: "30em", marginRight: "125px" }}>
					<CardText style={{ textAlign: "left"}}>
						<b>Back Story:</b> {props.fields.backStory}
					</CardText>
				</Card>
			</Container>
		</>
	);
}
