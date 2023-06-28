import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	Container,
	Input,
	Form,
	FormGroup,
	Label,
	Button,
	InputGroup,
	Row,
	Col,
} from "reactstrap";
import background from "../../assets/CharacterEdit-background.jpg";

export default function CharacterEdit(props) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [characterName, setCharacterName] = useState("");
	const [characterCla, setCharacterCla] = useState("");
	const [characterRace, setCharacterRace] = useState("");
	const [characterLevel, setCharacterLevel] = useState("");
	const [characterBackStory, setCharacterBackStory] = useState("");

	const [characterAge, setCharacterAge] = useState("");
	const [characterHair, setCharacterHair] = useState("");
	const [characterEyes, setCharacterEyes] = useState("");
	const [characterWeight, setCharacterWeight] = useState("");
	const [characterSkin, setCharacterSkin] = useState("");
	const [characterHeight, setCharacterHeight] = useState("");

	const [characterStrength, setCharacterStrength] = useState("");
	const [characterDexterity, setCharacterDexterity] = useState("");
	const [characterConstitution, setCharacterConstitution] = useState("");
	const [characterIntelligence, setCharacterIntelligence] = useState("");
	const [characterWisdom, setCharacterWisdom] = useState("");
	const [characterCharisma, setCharacterCharisma] = useState("");

	let classList = [
		null,
		"Barbarian",
		"Fighter",
		"Cleric",
		"Paladin",
		"Rogue",
		"Ranger",
		"Sorcerer",
		"Warlock",
		"Wizard",
		"Monk",
		"Druid",
	];
	let raceList = [
		null,
		"Dragonborn",
		"Dwarf",
		"Elf",
		"Gnome",
		"Half-Elf",
		"Half-Orc",
		"Halfling",
		"Human",
		"Tiefling",
	];

	const url = `http://localhost:4000/character/${id}`;

	const fetchCharacters = async () => {
		const requestOptions = {
			method: "GET",
			headers: new Headers({
				Authorization: props.token,
			}),
		};

		try {
			const res = await fetch(url, requestOptions);
			const data = await res.json();

			const { name, cla, race, level, backStory } = data.getCharacter;
			const { age, hair, eyes, weight, skin, height } =
				data.getCharacter.physicalAtt;
			const {
				strength,
				dexterity,
				constitution,
				intelligence,
				wisdom,
				charisma,
			} = data.getCharacter.stats;
			console.log("Age", age);
			setCharacterName(name);
			setCharacterCla(cla);
			setCharacterRace(race);
			setCharacterLevel(level);
			setCharacterBackStory(backStory);

			setCharacterAge(age);
			setCharacterHair(hair);
			setCharacterEyes(eyes);
			setCharacterWeight(weight);
			setCharacterSkin(skin);
			setCharacterHeight(height);

			setCharacterStrength(strength);
			setCharacterDexterity(dexterity);
			setCharacterConstitution(constitution);
			setCharacterIntelligence(intelligence);
			setCharacterWisdom(wisdom);
			setCharacterCharisma(charisma);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		if (props.token) {
			fetchCharacters();
		}
	}, [props.token]);

	async function handleSubmit(e) {
		e.preventDefault();
		let url = `http://localhost:4000/character/${id}`;

		let bodyObj = JSON.stringify({
			name: characterName,
			cla: characterCla,
			race: characterRace,
			level: characterLevel,
			backStory: characterBackStory,
			physicalAtt: {
				age: characterAge,
				hair: characterHair,
				eyes: characterEyes,
				weight: characterWeight,
				skin: characterSkin,
				height: characterHeight,
			},
			stats: {
				strength: characterStrength,
				dexterity: characterDexterity,
				constitution: characterConstitution,
				intelligence: characterIntelligence,
				wisdom: characterWisdom,
				charisma: characterCharisma,
			},
		});

		const requestOptions = {
			headers: new Headers({
				Authorization: props.token,
				"Content-Type": "application/json",
			}),
			body: bodyObj,
			method: "PATCH",
		};

		try {
			const res = await fetch(url, requestOptions);
			const data = await res.json();
			console.log(data);
			navigate(`/character/${id}`);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				height: "58.55em",
				paddingTop: "50px",
			}}
		>
			<Container className="title">
				<h1
					style={{
						color: "#F5A300",
						backgroundColor: "rgba(52, 52, 52, 0.65)",
						width: "25%",
						borderRadius: "5px",
					}}
				>
					Edit your Character
				</h1>
			</Container>
			<Form onSubmit={handleSubmit}>
				<Container className="NRLC">
					<FormGroup>
						<Row>
							{/* Character Name */}
							<Col>
								<Label
									style={{
										backgroundColor: "rgba(52, 52, 52, 0.65)",
										color: "#F5A300",
										width: "100px",
										borderRadius: "5px",
									}}
								>
									Character Name
								</Label>
								<Input
									value={characterName}
									onChange={(e) => setCharacterName(e.target.value)}
									autoComplete="off"
									type="text"
								/>
							</Col>
							{/* Class */}
							<Col>
								<Label
									style={{
										backgroundColor: "rgba(52, 52, 52, 0.65)",
										color: "#F5A300",
										width: "100px",
										borderRadius: "5px",
									}}
								>
									Class
								</Label>
								<Input
									value={characterCla}
									onChange={(e) => setCharacterCla(e.target.value)}
									type="select"
								>
									{classList.map((clas, i) => (
										<option key={i} value={clas}>
											{clas}
										</option>
									))}
								</Input>
							</Col>
						</Row>
						<Row style={{ paddingTop: "5px" }}>
							{/* Race */}
							<Col>
								<Label
									style={{
										backgroundColor: "rgba(52, 52, 52, 0.65)",
										color: "#F5A300",
										width: "100px",
										borderRadius: "5px",
									}}
								>
									Race
								</Label>

								<Input
									value={characterRace}
									onChange={(e) => setCharacterRace(e.target.value)}
									type="select"
								>
									{raceList.map((rac, i) => (
										<option key={i} value={rac}>
											{rac}
										</option>
									))}
								</Input>
							</Col>

							{/* Level */}
							<Col>
								<Label
									style={{
										backgroundColor: "rgba(52, 52, 52, 0.65)",
										color: "#F5A300",
										width: "100px",
										borderRadius: "5px",
									}}
								>
									Level
								</Label>
								<Input
									value={characterLevel}
									onChange={(e) => setCharacterLevel(e.target.value)}
									type="number"
									max={"20"}
									min={"1"}
								/>
							</Col>
						</Row>
					</FormGroup>

					{/* Physical Attributes */}
					<FormGroup>
						<Container>
							<Label
								style={{
									backgroundColor: "rgba(52, 52, 52, 0.65)",
									color: "#F5A300",
									width: "100px",
									borderRadius: "5px",
								}}
							>
								Physical Traits
							</Label>

							<Row>
								<Col style={{ padding: "0px" }}>
									<Input
										style={{ borderRadius: "5px 0px 0px 0px" }}
										value={characterAge}
										onChange={(e) => setCharacterAge(e.target.value)}
										type="number"
										min={1}
										placeholder="Age"
									/>
								</Col>
								<Col style={{ padding: "0px" }}>
									<Input
										style={{ borderRadius: "0px" }}
										value={characterHair}
										onChange={(e) => setCharacterHair(e.target.value)}
										type="string"
										placeholder="Hair Color"
									/>
								</Col>
								<Col style={{ padding: "0px" }}>
									<Input
										style={{ borderRadius: "0px 5px 0px 0px" }}
										value={characterEyes}
										onChange={(e) => setCharacterEyes(e.target.value)}
										type="string"
										placeholder="Eye Color"
									/>
								</Col>
							</Row>
							<Row>
								<Col style={{ padding: "0px" }}>
									<Input
										style={{ borderRadius: "0px 0px 0px 5px" }}
										value={characterWeight}
										onChange={(e) => setCharacterWeight(e.target.value)}
										type="number"
										min={1}
										placeholder="lbs"
									/>
								</Col>
								<Col style={{ padding: "0px" }}>
									<Input
										style={{ borderRadius: "0px 0px 0px 0px" }}
										value={characterSkin}
										onChange={(e) => setCharacterSkin(e.target.value)}
										type="string"
										placeholder="Skin color"
									/>
								</Col>
								<Col style={{ padding: "0px" }}>
									<Input
										style={{ borderRadius: "0px 0px 5px 0px" }}
										value={characterHeight}
										onChange={(e) => setCharacterHeight(e.target.value)}
										type="string"
										placeholder="Height"
									/>
								</Col>
							</Row>
						</Container>
					</FormGroup>
				</Container>

				{/* Backstory */}
				<Container className="backstory" style={{ height: "20em" }}>
					<FormGroup style={{ width: "50%" }}>
						{/* Stats */}
						<Label
							style={{
								backgroundColor: "rgba(52, 52, 52, 0.65)",
								color: "#F5A300",
								width: "100px",
								borderRadius: "5px",
							}}
						>
							Attributes
						</Label>
						<InputGroup>
							<Input
								value={characterStrength}
								onChange={(e) => setCharacterStrength(e.target.value)}
								type="number"
								placeholder="Strength"
							/>
							<Input
								value={characterDexterity}
								onChange={(e) => setCharacterDexterity(e.target.value)}
								type="number"
								placeholder="Dexterity"
							/>
							<Input
								value={characterConstitution}
								onChange={(e) => setCharacterConstitution(e.target.value)}
								type="number"
								placeholder="Constitution"
							/>
							<Input
								value={characterIntelligence}
								onChange={(e) => setCharacterIntelligence(e.target.value)}
								type="number"
								placeholder="Intelligence"
							/>
							<Input
								value={characterWisdom}
								onChange={(e) => setCharacterWisdom(e.target.value)}
								type="number"
								placeholder="Wisdom"
							/>
							<Input
								value={characterCharisma}
								onChange={(e) => setCharacterCharisma(e.target.value)}
								type="number"
								placeholder="Charisma"
							/>
						</InputGroup>
						<Label
							style={{
								wordSpacing: "50px",
								backgroundColor: "rgba(52, 52, 52, 1)",
								width: "40em",
								borderRadius: "5px",
							}}
						>
							<b>
								<span style={{ color: "#E53B10" }}>Strength</span>{" "}
								<span style={{ color: "#21C056" }}>Dexterity</span>{" "}
								<span style={{ color: "#C36609" }}>Constitution</span>{" "}
								<span style={{ color: "#018FB7" }}>Intelligence</span>{" "}
								<span style={{ color: "white" }}>Wisdom</span>{" "}
								<span style={{ color: "#AD7CD8" }}>Charisma</span>
							</b>
						</Label>
					</FormGroup>
					<FormGroup>
						<Label
							style={{
								backgroundColor: "rgba(52, 52, 52, 0.65)",
								color: "#F5A300",
								width: "100px",
								borderRadius: "5px",
							}}
						>
							Backstory
						</Label>
						<Input
							style={{ width: "30em", maxHeight: "10em", minHeight: "10em" }}
							value={characterBackStory}
							onChange={(e) => setCharacterBackStory(e.target.value)}
							type="textarea"
						/>
					</FormGroup>
				</Container>
				<Button type="submit" color="success">
					Edit Character
				</Button>
			</Form>
		</div>
	);
}
