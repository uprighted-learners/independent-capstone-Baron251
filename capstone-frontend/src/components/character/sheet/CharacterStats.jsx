// ! Child of Character Fields. WIP
import { useEffect, useState } from "react";
import {
	Card,
	CardBody,
	CardColumns,
	Row,
	Col,
	Container,
	CardTitle,
} from "reactstrap";

export default function CharacterStats(props) {
const [mod, setMod] = useState("+0")

if (props.stats.strength === "14") {
	setMod("+2")
}
	
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
					display: "flex",
				}}
			>
				<Row>
					<Col>
						<CardColumns>
							<Card>
								<CardTitle tag="p">{mod}</CardTitle> 
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>{props.stats.strength}</CardBody>
							</Card>
							<Card>
								<CardTitle tag="p">+0</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.dexterity}</h3>
								</CardBody>
							</Card>
							<Card>
								<CardTitle tag="p">+0</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.constitution}</h3>
								</CardBody>
							</Card>
							<Card>
								<CardTitle tag="p">+0</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.intelligence}</h3>
								</CardBody>
							</Card>
							<Card>
								<CardTitle tag="p">+0</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.wisdom}</h3>
								</CardBody>
							</Card>
							<Card>
								<CardTitle tag="p">+0</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.charisma}</h3>
								</CardBody>
							</Card>
						</CardColumns>
					</Col>
				</Row>
			</Container>
		</>
	);
}
