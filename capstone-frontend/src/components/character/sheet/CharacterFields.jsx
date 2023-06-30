import { Card, CardText, CardTitle, Container, Col, Row } from "reactstrap";
import { useEffect } from "react";
import CharacterStats from "./CharacterStats";
export default function CharacterFields(props) {
	let proficiency = Math.ceil(props.fields.level / 4 + 1);

	useEffect(() => {
		props.fetchFields();
	}, [props.token]);
	console.log(props.fields);
	return (
		<>
			{/* Character Name */}
			<Container
				style={{ display: "flex", padding: "0px", flexDirection: "column" }}
			>
				<Card
					style={{
						width: "20em",
						borderRadius: "15px 15px 15px 15px",
						backgroundColor: "rgba(52, 52, 52, 0.65)",
						color: "#F5A300",
					}}
				>
					<CardTitle
						style={{ borderRadius: "15px 15px 0px 0px", marginBottom: "0px" }}
					>
						<b>Character Name:</b> <span style={{ color: "#21C056" }}>{props.fields.name}</span>
					</CardTitle>

					<CardTitle style={{ borderRadius: "0px", marginBottom: "0px" }}>
						<b>Race:</b> <span style={{ color: "#21C056" }}>{props.fields.race}</span>
					</CardTitle>

					<CardTitle
						style={{ borderRadius: "0px 0px 15px 15px", marginBottom: "0px" }}
					>
						<b>Class:</b> <span style={{ color: "#21C056" }}>{props.fields.cla}</span>
					</CardTitle>
				</Card>
			</Container>

			{/* Proficiency + Level */}
			<Container style={{ height: "0px", marginLeft: "19em" }}>
				<Row
					style={{
						marginTop: "20px",
						width: "24.68%",
						backgroundColor: "rgba(52, 52, 52, 0.65)",
						color: "#F5A300",
						borderRadius: "5px 5px 5px 5px",
					}}
				>
					<Col
						style={{
							borderRadius: "5px 0px 0px 5px",
							width: "50%",
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
						}}
					>
						<CardText style={{ color: "#F5A300", fontSize: "14px" }}>
							<b>Proficiency Bonus: </b><span style={{ color: "#21C056" }}>+{proficiency}</span>
						</CardText>
					</Col>
					<Col
						style={{
							borderRadius: "0px 5px 5px 0px",
							width: "50%",
						}}
					>
						<CardText style={{ fontSize: "14px"}}>
							<b>Level: </b>
							<br/>
							<span style={{ color: "#21C056" }}>{props.fields.level}</span>
						</CardText>
					</Col>
				</Row>
			</Container>

			{/* Physical Attributes */}
			<Container style={{ width: "30%", marginRight: "50px", height: "0px" }}>
				<Row>
					<Col
						style={{
							borderRadius: "5px 0px 0px 0px",
							width: "50%",
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
						}}
					>
						<CardText>
							
								<b>Height: </b>
							
								<span style={{ color: "#21C056" }}>{props.fields.physicalAtt.height}</span>
						</CardText>
					</Col>
					<Col
						style={{
							width: "50%",
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
						}}
					>
						<CardText>
							
								<b>Age: </b>
							
								<span style={{ color: "#21C056" }}>{props.fields.physicalAtt.age}</span>
						</CardText>
					</Col>
					<Col
						style={{
							borderRadius: "0px 5px 0px 0px",
							width: "50%",
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
						}}
					>
						<CardText>
							<b>Hair: </b> <span style={{ color: "#21C056" }}>{props.fields.physicalAtt.hair}</span>
						</CardText>
					</Col>
				</Row>

				<Row>
					<Col
						style={{
							borderRadius: "0px 0px 0px 5px",
							width: "50%",
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
						}}
					>
						<CardText>
							<b>Skin: </b> <span style={{ color: "#21C056" }}>{props.fields.physicalAtt.skin}</span>
						</CardText>
					</Col>
					<Col
						style={{
							width: "50%",
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
						}}
					>
						<CardText>
							<b>Weight: </b> <span style={{ color: "#21C056" }}>{props.fields.physicalAtt.weight}</span>
						</CardText>
					</Col>
					<Col
						style={{
							borderRadius: "0px 0px 5px 0px",
							width: "50%",
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
						}}
					>
						<CardText>
							<b>Eye Color: </b> <span style={{ color: "#21C056" }}>{props.fields.physicalAtt.eyes}</span>
						</CardText>
					</Col>
				</Row>
			</Container>

			{/* Character Stat block */}
			<Container
				className="backstory-view"
				style={{ maxWidth: "1900px", width: "1900px", height: "648px" }}
			>
				<CharacterStats
					stats={props.fields.stats}
					fetchFields={props.fetchFields}
					token={props.token}
				/>
				{/* Backstory */}
				<Card
					style={{
						padding: "1em",
						minHeight: "10em",
						maxHeight: "10em",
						overflowY: "scroll",
						maxWidth: "30em",
						marginRight: "125px",
						backgroundColor: "rgba(52, 52, 52, 0.5)",
						color: "#F5A300",
					}}
				>
					<CardText style={{ textAlign: "left" }}>
						<b>Back Story:</b> <span style={{ color: "#21C056" }}>{props.fields.backStory}</span>
					</CardText>
				</Card>
			</Container>
		</>
	);
}
