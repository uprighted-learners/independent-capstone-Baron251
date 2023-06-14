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
    const [mod, setMod] = useState("")

    // if (props.stats.Strength = "14"){
    //     setMod("+2")
    // }
    // ! Too many Re-Renders. Figure it out tomorrow.

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
								<CardTitle tag="p">+0</CardTitle> {/* Too many Re-renders*/}
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									{props.stats.Strength}
								</CardBody>
							</Card>
							<Card>
								<CardTitle tag="p">+0</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.Dexterity}</h3>
								</CardBody>
							</Card>
							<Card>
								<CardTitle tag="p">+0</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.Constitution}</h3>
								</CardBody>
							</Card>
							<Card>
								<CardTitle tag="p">+0</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.Intelligence}</h3>
								</CardBody>
							</Card>
							<Card>
								<CardTitle tag="p">+0</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.Wisdom}</h3>
								</CardBody>
							</Card>
							<Card>
								<CardTitle tag="p">+0</CardTitle>
								<CardBody
									tag="h2"
									style={{ paddingTop: "1px", paddingBottom: "1px" }}
								>
									<h3>{props.stats.Charisma}</h3>
								</CardBody>
							</Card>
						</CardColumns>
					</Col>
				</Row>
			</Container>
		</>
	);
}
