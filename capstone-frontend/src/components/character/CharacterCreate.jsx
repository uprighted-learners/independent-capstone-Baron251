import { useRef } from "react";
import {
	Form,
	FormGroup,
	Input,
	InputGroup,
	Label,
	Button,
	Container,
} from "reactstrap";
import background from "../../assets/CharacterCreate-background.jpg"
export default function CharacterCreate(props) {
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

	const nameRef = useRef();
	const claRef = useRef();
	const raceRef = useRef();
	const levelRef = useRef();
	const backStoryRef = useRef();
	const ageRef = useRef();
	const hairRef = useRef();
	const eyesRef = useRef();
	const weightRef = useRef();
	const skinRef = useRef();
	const heightRef = useRef();
	const strengthRef = useRef();
	const dexterityRef = useRef();
	const constitutionRef = useRef();
	const intelligenceRef = useRef();
	const wisdomRef = useRef();
	const charismaRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		let url = "http://localhost:4000/character/";
		const name = nameRef.current.value;
		const cla = claRef.current.value;
		const race = raceRef.current.value;
		const level = levelRef.current.value;
		const backStory = backStoryRef.current.value;
		const age = ageRef.current.value;
		const hair = hairRef.current.value;
		const eyes = eyesRef.current.value;
		const weight = weightRef.current.value;
		const skin = skinRef.current.value;
		const height = heightRef.current.value;
		const strength = strengthRef.current.value;
		const dexterity = dexterityRef.current.value;
		const constitution = constitutionRef.current.value;
		const intelligence = intelligenceRef.current.value;
		const wisdom = wisdomRef.current.value;
		const charisma = charismaRef.current.value;

		let bodyObj = JSON.stringify({
			name,
			cla,
			race,
			level,
			backStory,
			// physicalAtt,
			age,
			hair,
			eyes,
			weight,
			skin,
			height,
			// stats,
			strength,
			dexterity,
			constitution,
			intelligence,
			wisdom,
			charisma,
		});

		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Authorization", props.token);

		const requestOption = {
			headers: myHeaders,
			body: bodyObj,
			method: "POST",
		};

		try {
			const res = await fetch(url, requestOption);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
			<h1>Creating your Character</h1>
			<Form onSubmit={handleSubmit} style={{ height: "55.04em"}}>

				<Container style={{ display: "flex" }}>

					<FormGroup>
						<Label style={{
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
							width: "100px",
							borderRadius: "5px",
							
						}}>Character Name</Label>
						<Input innerRef={nameRef} autoComplete="off" type="text" required placeholder="Name" />
					</FormGroup>

					<FormGroup>
						<Label style={{
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
							width: "100px",
							borderRadius: "5px",
							
						}}>Class</Label>
						<Input innerRef={claRef} type="select" required>
							{classList.map((clas, i) => (
								<option key={i} value={clas}>
									{clas}
								</option>
							))}
						</Input>
					</FormGroup>

				</Container>

				<FormGroup>
					<Label style={{
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
							width: "100px",
							borderRadius: "5px",
							
						}}>Race</Label>
					<Input innerRef={raceRef} type="select" required>
						{raceList.map((rac, i) => (
							<option key={i} value={rac}>
								{rac}
							</option>
						))}
					</Input>
				</FormGroup>
				<FormGroup>
					<Label style={{
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
							width: "100px",
							borderRadius: "5px",
							
						}}>Level</Label>
					<Input
						innerRef={levelRef}
						type="number"
						max={"20"}
						min={"1"}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label style={{
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
							width: "100px",
							borderRadius: "5px",
							
						}}>Backstory</Label>
					<Input innerRef={backStoryRef} type="textarea" placeholder="Backstory" />
				</FormGroup>
				<FormGroup >
					<Label style={{
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
							width: "100px",
							borderRadius: "5px",
							
						}}>Physical Traits</Label>
					<InputGroup>
						<Input
							innerRef={ageRef}
							type="number"
							min={1}
							required
							placeholder="Age"
						/>
						<Input
							innerRef={hairRef}
							type="string"
							required
							placeholder="Hair Color"
						/>
						<Input
							innerRef={eyesRef}
							type="string"
							required
							placeholder="Eye Color"
						/>
						<Input
							innerRef={weightRef}
							type="number"
							required
							min={1}
							placeholder="lbs"
						/>
						<Input
							innerRef={skinRef}
							type="string"
							required
							placeholder="Skin color"
						/>
						<Input
							innerRef={heightRef}
							type="string"
							required
							placeholder="Height"
						/>
					</InputGroup>
				</FormGroup>
				<FormGroup >
					<Label style={{
							backgroundColor: "rgba(52, 52, 52, 0.65)",
							color: "#F5A300",
							width: "100px",
							borderRadius: "5px",
							
						}}>Attributes</Label>
					<InputGroup>
						<Input
							innerRef={strengthRef}
							type="number"
							required
							placeholder="Strength"
						/>
						<Input
							innerRef={dexterityRef}
							type="number"
							required
							placeholder="Dexterity"
						/>
						<Input
							innerRef={constitutionRef}
							type="number"
							required
							placeholder="Constitution"
						/>
						<Input
							innerRef={intelligenceRef}
							type="number"
							required
							placeholder="Intelligence"
						/>
						<Input
							innerRef={wisdomRef}
							type="number"
							required
							placeholder="Wisdom"
						/>
						<Input
							innerRef={charismaRef}
							type="number"
							required
							placeholder="Charisma"
						/>
					</InputGroup>
				</FormGroup>
				<Button type="submit" color="success">Create Character</Button>
			</Form>
		</div>
	);
}
