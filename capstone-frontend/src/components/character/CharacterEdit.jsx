import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	Col,
	Container,
	Input,
	Row,
	Form,
	FormGroup,
	Label,
	Button,
	InputGroup,
} from "reactstrap";

export default function CharacterEdit(props) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [characterName, setCharacterName] = useState("");
	const [characterCla, setCharacterCla] = useState("");
	const [characterRace, setCharacterRace] = useState("");
	const [characterLevel, setCharacterLevel] = useState("");
	const [characterBackStory, setCharacterBackStory] = useState("");
	const [characterPhysicalAtt, setCharacterPhysicalAtt] = useState("");
	const [characterAge, setCharacterAge] = useState("");
	const [characterHair, setCharacterHair] = useState("");
	const [characterEyes, setCharacterEyes] = useState("");
	const [characterWeight, setCharacterWeight] = useState("");
	const [characterSkin, setCharacterSkin] = useState("");
	const [characterHeight, setCharacterHeight] = useState("");
	const [characterStats, setCharacterStats] = useState("");
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

			const { name, cla, race, level, backStory, physicalAtt, stats } =
				data.getCharacter;
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

			setCharacterName(name);
			setCharacterCla(cla);
			setCharacterRace(race);
			setCharacterLevel(level);
			setCharacterBackStory(backStory);
			// setCharacterPhysicalAtt(physicalAtt);
			setCharacterAge(age);
			setCharacterHair(hair);
			setCharacterEyes(eyes);
			setCharacterWeight(weight);
			setCharacterSkin(skin);
			setCharacterHeight(height);
			// setCharacterStats(stats);
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
			// physicalAtt: characterPhysicalAtt,
			age: characterAge,
			hair: characterHair,
			eyes: characterEyes,
			weight: characterWeight,
			skin: characterSkin,
			height: characterHeight,
			// stats: characterStats,
			strength: characterStrength,
			dexterity: characterDexterity,
			constitution: characterConstitution,
			intelligence: characterIntelligence,
			wisdom: characterWisdom,
			charisma: characterCharisma,
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
		<>
			<h1>Edit your Character</h1>
			<Form onSubmit={handleSubmit}>
				<Container style={{ display: "flex" }}>
					<FormGroup>
						<Label>Character Name</Label>
						<Input
							value={characterName}
							onChange={(e) => setCharacterName(e.target.value)}
							autoComplete="off"
							type="text"
						/>
					</FormGroup>

					<FormGroup>
						<Label>Class</Label>
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
					</FormGroup>
				</Container>

				<FormGroup>
					<Label>Race</Label>
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
				</FormGroup>
				<FormGroup>
					<Label>Level</Label>
					<Input
						value={characterLevel}
						onChange={(e) => setCharacterLevel(e.target.value)}
						type="number"
						max={"20"}
						min={"1"}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Backstory</Label>
					<Input
						value={characterBackStory}
						onChange={(e) => setCharacterBackStory(e.target.value)}
						type="textarea"
					/>
				</FormGroup>
				<FormGroup>
					<Label>Physical Traits</Label>
					<InputGroup>
						<Input
							value={characterAge}
							onChange={(e) => setCharacterAge(e.target.value)}
							type="number"
							min={1}
							placeholder="Age"
						/>
						<Input
							value={characterHair}
							onChange={(e) => setCharacterHair(e.target.value)}
							type="string"
							placeholder="Hair Color"
						/>
						<Input
							value={characterEyes}
							onChange={(e) => setCharacterEyes(e.target.value)}
							type="string"
							placeholder="Eye Color"
						/>
						<Input
							value={characterWeight}
							onChange={(e) => setCharacterWeight(e.target.value)}
							type="number"
							min={1}
							placeholder="lbs"
						/>
						<Input
							value={characterSkin}
							onChange={(e) => setCharacterSkin(e.target.value)}
							type="string"
							placeholder="Skin color"
						/>
						<Input
							value={characterHeight}
							onChange={(e) => setCharacterHeight(e.target.value)}
							type="string"
							placeholder="Height"
						/>
					</InputGroup>
				</FormGroup>
				<FormGroup>
					<Label>Attributes</Label>
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
				</FormGroup>
				<Button type="submit" color="success">
					Edit Character
				</Button>
			</Form>
		</>
	);
}
