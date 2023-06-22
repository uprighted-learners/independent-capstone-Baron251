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
	CardSubtitle
} from "reactstrap";

export default function CharacterStats(props) {

	let strengthMod = Math.floor((props.stats.strength-10)/2)
	let dexterityMod = Math.floor((props.stats.dexterity-10)/2)
	let constitutionMod = Math.floor((props.stats.constitution-10)/2)
	let intelligenceMod = Math.floor((props.stats.intelligence-10)/2)
	let wisdomMod = Math.floor((props.stats.wisdom-10)/2)
	let charismaMod = Math.floor((props.stats.charisma-10)/2)

	let plusS = strengthMod > -1 ? "+" : ""
	let plusD = dexterityMod > -1 ? "+" : ""
	let plusC= constitutionMod > -1 ? "+" : ""
	let plusI = intelligenceMod > -1 ? "+" : ""
	let plusW = wisdomMod > -1 ? "+" : ""
	let plusCh = charismaMod > -1 ? "+" : ""
	


	useEffect(() => {
		props.fetchFields();
	}, [props.token]);

	return (
		<>
			<Row>
				<Col>
					<h1>Attributes</h1>
				</Col>
			</Row>
			<Container
				style={{
					display: "flex", paddingBottom: "50px"
				}}
			>
				<Row>
					<Col>
						<CardColumns>
							<Card>
								<CardTitle tag="p">{plusS}{strengthMod}</CardTitle> 
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>{props.stats.strength}</CardBody>
								<CardSubtitle>Strength</CardSubtitle>
							</Card>
							<Card>
								<CardTitle tag="p">{plusD}{dexterityMod}</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.dexterity}</h3>
								</CardBody>
								<CardSubtitle>Dexterity</CardSubtitle>
							</Card>
							<Card>
								<CardTitle tag="p">{plusC}{constitutionMod}</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.constitution}</h3>
								</CardBody>
								<CardSubtitle>Constitution</CardSubtitle>
							</Card>
							<Card>
								<CardTitle tag="p">{plusI}{intelligenceMod}</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.intelligence}</h3>
								</CardBody>
								<CardSubtitle>Intelligence</CardSubtitle>
							</Card>
							<Card>
								<CardTitle tag="p">{plusW}{wisdomMod}</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.wisdom}</h3>
								</CardBody>
								<CardSubtitle>Wisdom</CardSubtitle>
							</Card>
							<Card>
								<CardTitle tag="p">{plusCh}{charismaMod}</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.charisma}</h3>
								</CardBody>
								<CardSubtitle>Charisma</CardSubtitle>
							</Card>
						</CardColumns>
					</Col>
				</Row>
			</Container>
		</>
	);
}
