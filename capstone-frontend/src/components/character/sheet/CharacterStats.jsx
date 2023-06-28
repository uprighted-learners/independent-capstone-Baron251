// ! Child of Character Fields. WIP
import { useEffect } from "react";
import {
	Card,
	CardBody,
	CardColumns,
	Row,
	Col,
	Container,
	CardTitle,
	CardSubtitle,
} from "reactstrap";

export default function CharacterStats(props) {
	let strengthMod = Math.floor((props.stats.strength - 10) / 2);
	let dexterityMod = Math.floor((props.stats.dexterity - 10) / 2);
	let constitutionMod = Math.floor((props.stats.constitution - 10) / 2);
	let intelligenceMod = Math.floor((props.stats.intelligence - 10) / 2);
	let wisdomMod = Math.floor((props.stats.wisdom - 10) / 2);
	let charismaMod = Math.floor((props.stats.charisma - 10) / 2);

	let plusS = strengthMod > -1 ? "+" : "";
	let plusD = dexterityMod > -1 ? "+" : "";
	let plusC = constitutionMod > -1 ? "+" : "";
	let plusI = intelligenceMod > -1 ? "+" : "";
	let plusW = wisdomMod > -1 ? "+" : "";
	let plusCh = charismaMod > -1 ? "+" : "";

	useEffect(() => {
		props.fetchFields();
	}, [props.token]);

	return (
		<>
			{/* <Container
				style={{
					display: "flex",
					padding: "0px"
									
				}}
			> */}
			{/* Using H3s on the Mods to make the bar fit? */}
			<Row style={{ marginLeft: "195px" }}>
				<Col>
					<CardColumns>
						<Card style={{ backgroundColor: "rgba(52, 52, 52, 0.65)" }}>
							<CardTitle tag="p">
								<span style={{ color: "#E53B10" }}>
									{plusS}
									{strengthMod}
								</span>
							</CardTitle>
							<CardBody
								tag="h2"
								style={{ paddingTop: "1px", paddingBottom: "1px" }}
							>
								<span style={{ color: "#E53B10" }}>{props.stats.strength}</span>
							</CardBody>
							<CardSubtitle>
								<b>
									<span style={{ color: "#E53B10" }}>Strength</span>{" "}
								</b>
							</CardSubtitle>
						</Card>
						<Card style={{ backgroundColor: "rgba(52, 52, 52, 0.65)" }}>
							<CardTitle tag="p">
								<span style={{ color: "#21C056" }}>
									{plusD}
									{dexterityMod}
								</span>
							</CardTitle>
							<CardBody
								tag="h2"
								style={{ paddingTop: "1px", paddingBottom: "1px" }}
							>
								<span style={{ color: "#21C056" }}>
									{props.stats.dexterity}
								</span>
							</CardBody>
							<CardSubtitle>
								<b>
									<span style={{ color: "#21C056" }}>Dexterity</span>{" "}
								</b>
							</CardSubtitle>
						</Card>
						<Card style={{ backgroundColor: "rgba(52, 52, 52, 0.65)" }}>
							<CardTitle tag="p">
								<span style={{ color: "#C36609" }}>
									{plusC}
									{constitutionMod}
								</span>
							</CardTitle>
							<CardBody
								tag="h2"
								style={{ paddingTop: "1px", paddingBottom: "1px" }}
							>
								<span style={{ color: "#C36609" }}>
									{props.stats.constitution}
								</span>
							</CardBody>
							<CardSubtitle>
								<b>
									<span style={{ color: "#C36609" }}>Constitution</span>{" "}
								</b>
							</CardSubtitle>
						</Card>
						<Card style={{ backgroundColor: "rgba(52, 52, 52, 0.65)" }}>
							<CardTitle tag="p">
								<span style={{ color: "#018FB7" }}>
									{plusI}
									{intelligenceMod}
								</span>
							</CardTitle>
							<CardBody
								tag="h2"
								style={{ paddingTop: "1px", paddingBottom: "1px" }}
							>
								<span style={{ color: "#018FB7" }}>
									{props.stats.intelligence}
								</span>
							</CardBody>
							<CardSubtitle>
								<b>
									<span style={{ color: "#018FB7" }}>Intelligence</span>{" "}
								</b>
							</CardSubtitle>
						</Card>
						<Card style={{ backgroundColor: "rgba(52, 52, 52, 0.65)" }}>
							<CardTitle tag="p">
								<span style={{ color: "white" }}>
									{plusW}
									{wisdomMod}
								</span>
							</CardTitle>
							<CardBody
								tag="h2"
								style={{ paddingTop: "1px", paddingBottom: "1px" }}
							>
								<span style={{ color: "white" }}>{props.stats.wisdom}</span>
							</CardBody>
							<CardSubtitle>
								<b>
									<span style={{ color: "white" }}>Wisdom</span>{" "}
								</b>
							</CardSubtitle>
						</Card>
						<Card style={{ backgroundColor: "rgba(52, 52, 52, 0.65)" }}>
							<CardTitle tag="p">
								<span style={{ color: "#AD7CD8" }}>
									{plusCh}
									{charismaMod}
								</span>
							</CardTitle>
							<CardBody
								tag="h2"
								style={{ paddingTop: "1px", paddingBottom: "1px" }}
							>
								<span style={{ color: "#AD7CD8" }}>{props.stats.charisma}</span>
							</CardBody>
							<CardSubtitle>
								<b>
									<span style={{ color: "#AD7CD8" }}>Charisma</span>
								</b>
							</CardSubtitle>
						</Card>
					</CardColumns>
				</Col>
			</Row>
			{/* </Container> */}
		</>
	);
}
