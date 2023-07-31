import { useRef, useState } from "react";
import {
	Form,
	FormGroup,
	Input,
	Label,
	Button,
	Container,
	Row,
	Col,
	Table,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

import { useNavigate } from "react-router-dom";
import background from "../../assets/CharacterCreate-background.jpg";
export default function CharacterCreate(props, { direction, ...args }) {
	// ! Stat useState
	const [random1, setRandom1] = useState(0);
	const [random2, setRandom2] = useState(0);
	const [random3, setRandom3] = useState(0);
	const [random4, setRandom4] = useState(0);
	const [random5, setRandom5] = useState(0);
	const [random6, setRandom6] = useState(0);
	const [random7, setRandom7] = useState(0);
	const [random8, setRandom8] = useState(0);
	const [random9, setRandom9] = useState(0);
	const [random10, setRandom10] = useState(0);
	const [random11, setRandom11] = useState(0);
	const [random12, setRandom12] = useState(0);
	const [random13, setRandom13] = useState(0);
	const [random14, setRandom14] = useState(0);
	const [random15, setRandom15] = useState(0);
	const [random16, setRandom16] = useState(0);
	const [random17, setRandom17] = useState(0);
	const [random18, setRandom18] = useState(0);
	const [random19, setRandom19] = useState(0);
	const [random20, setRandom20] = useState(0);
	const [random21, setRandom21] = useState(0);
	const [random22, setRandom22] = useState(0);
	const [random23, setRandom23] = useState(0);
	const [random24, setRandom24] = useState(0);

	const [attribute1, setAttribute1] = useState(0);
	const [attribute2, setAttribute2] = useState(0);
	const [attribute3, setAttribute3] = useState(0);
	const [attribute4, setAttribute4] = useState(0);
	const [attribute5, setAttribute5] = useState(0);
	const [attribute6, setAttribute6] = useState(0);

	const [button, setButton] = useState("Randomize")
	// ! End of the stat useState

	// ! Dropdown skill menu useState
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prev) => !prev);

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
	// ! List of skills sorted by attribute
	let strList = ["athletics"];
	let dexList = ["acrobatics", "sleight of hand", "stealth"];
	let intList = ["arcana", "history", "investigation", "nature", "religion"];
	let wisList = [
		"animal handling",
		"insight",
		"medicine",
		"perception",
		"survival",
	];
	let chaList = ["deception", "intimidation", "performance", "persuasion"];

	const navigate = useNavigate();

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

	const DnDFetch = async (e) => {
		const lowerCla = claRef.current.value.toLowerCase();
		let url = `https://www.dnd5eapi.co/api/classes/${lowerCla}`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.error(err);
		}
	};

	const claProf = async (onChange) => {
		const lowerCla = claRef.current.value.toLowerCase();
		if (lowerCla === "barbarian") {
		}
	};

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
			age,
			hair,
			eyes,
			weight,
			skin,
			height,
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
			navigate("/character");
		} catch (err) {
			console.error(err);
		}
	};

	// ! Line 482 is when this is used
	function randomNum() {
		// The "D6"s that get rolled
		setRandom1(Math.floor(Math.random() * 6 + 1));
		setRandom2(Math.floor(Math.random() * 6 + 1));
		setRandom3(Math.floor(Math.random() * 6 + 1));
		setRandom4(Math.floor(Math.random() * 6 + 1));
		setRandom5(Math.floor(Math.random() * 6 + 1));
		setRandom6(Math.floor(Math.random() * 6 + 1));
		setRandom7(Math.floor(Math.random() * 6 + 1));
		setRandom8(Math.floor(Math.random() * 6 + 1));
		setRandom9(Math.floor(Math.random() * 6 + 1));
		setRandom10(Math.floor(Math.random() * 6 + 1));
		setRandom11(Math.floor(Math.random() * 6 + 1));
		setRandom12(Math.floor(Math.random() * 6 + 1));
		setRandom13(Math.floor(Math.random() * 6 + 1));
		setRandom14(Math.floor(Math.random() * 6 + 1));
		setRandom15(Math.floor(Math.random() * 6 + 1));
		setRandom16(Math.floor(Math.random() * 6 + 1));
		setRandom17(Math.floor(Math.random() * 6 + 1));
		setRandom18(Math.floor(Math.random() * 6 + 1));
		setRandom19(Math.floor(Math.random() * 6 + 1));
		setRandom20(Math.floor(Math.random() * 6 + 1));
		setRandom21(Math.floor(Math.random() * 6 + 1));
		setRandom22(Math.floor(Math.random() * 6 + 1));
		setRandom23(Math.floor(Math.random() * 6 + 1));
		setRandom24(Math.floor(Math.random() * 6 + 1));
		let stat1 = [random1, random2, random3, random4];
		let stat2 = [random5, random6, random7, random8];
		let stat3 = [random9, random10, random11, random12];
		let stat4 = [random13, random14, random15, random16];
		let stat5 = [random17, random18, random19, random20];
		let stat6 = [random21, random22, random23, random24];
		// Ordering the array from smallest to largest value
		stat1.sort();
		stat2.sort();
		stat3.sort();
		stat4.sort();
		stat5.sort();
		stat6.sort();
		// Cutting off the first(smallest) value of the array
		stat1.splice(0, 1);
		stat2.splice(0, 1);
		stat3.splice(0, 1);
		stat4.splice(0, 1);
		stat5.splice(0, 1);
		stat6.splice(0, 1);

		// Adding up the values in the array
		let initialValue = 0;
		const finalStat1 = stat1.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			initialValue
		);
		const finalStat2 = stat2.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			initialValue
		);
		const finalStat3 = stat3.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			initialValue
		);
		const finalStat4 = stat4.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			initialValue
		);
		const finalStat5 = stat5.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			initialValue
		);
		const finalStat6 = stat6.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			initialValue
		);
		// console.log("Stat 1 reduce: ", finalStat1);
		setAttribute1(finalStat1);
		setAttribute2(finalStat2);
		setAttribute3(finalStat3);
		setAttribute4(finalStat4);
		setAttribute5(finalStat5);
		setAttribute6(finalStat6);
	}
	const swapForm = () => {
		button === "Randomize" ? setButton("Fixed") : setButton("Randomize")
	}
	// !!! Map and splice(?) an array with the `finalStat#`s. Also see `Jeopardy JS` for reference on array methods to you could use
	const statForm = () => {
		return button === "Randomize" ? (
			<thead>
				<tr>
					<th>
						<Input innerRef={strengthRef} type="select" required></Input>
					</th>
					<th>
						<Input innerRef={dexterityRef} type="select" required></Input>
					</th>
					<th>
						<Input innerRef={constitutionRef} type="select" required></Input>
					</th>
					<th>
						<Input innerRef={intelligenceRef} type="select" required></Input>
					</th>
					<th>
						<Input innerRef={wisdomRef} type="select" required></Input>
					</th>
					<th>
						<Input innerRef={charismaRef} type="select" required></Input>
					</th>
				</tr>
				{/* Stats */}
				<Label>
							<span style={{ backgroundColor: "white" }}>
								{attribute1} {attribute2} {attribute3} {attribute4} {attribute5}{" "}
								{attribute6}
							</span>
						</Label>
						<Button onClick={randomNum}>Generate stats</Button>
			</thead>
		) : (
			<thead>
				<tr>
					<th>
						<Input
							innerRef={strengthRef}
							type="number"
							max={20}
							min={1}
							required
						/>
					</th>
					<th>
						<Input
							innerRef={dexterityRef}
							type="number"
							max={20}
							min={1}
							required
						/>
					</th>
					<th>
						<Input
							innerRef={constitutionRef}
							type="number"
							max={20}
							min={1}
							required
						/>
					</th>
					<th>
						<Input
							innerRef={intelligenceRef}
							type="number"
							max={20}
							min={1}
							required
						/>
					</th>
					<th>
						<Input
							innerRef={wisdomRef}
							type="number"
							max={20}
							min={1}
							required
						/>
					</th>
					<th>
						<Input
							innerRef={charismaRef}
							type="number"
							max={20}
							min={1}
							required
						/>
					</th>
				</tr>
			</thead>
		);
	};
	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				height: "100vh",
			}}
		>
			<Container
				className="title"
				style={{
					color: "#F5A300",
					backgroundColor: "rgba(52, 52, 52, 0.65)",
					width: "25%",
					borderRadius: "5px",
				}}
			>
				<h1>Creating your Character</h1>
			</Container>

			<Form
				onSubmit={handleSubmit}
				style={{ paddingTop: "100px", height: "52.09em" }}
			>
				<Container className="NRLC">
					<FormGroup>
						<Row>
							<Col>
								<Label
									style={{
										backgroundColor: "rgba(52, 52, 52, 0.65)",
										color: "#F5A300",
										width: "160px",
										borderRadius: "5px",
									}}
								>
									Character Name
								</Label>
								<Input
									innerRef={nameRef}
									autoComplete="off"
									type="text"
									required
									placeholder="Name"
								/>
							</Col>
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
									onChange={DnDFetch}
									innerRef={claRef}
									type="select"
									required
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
								<Input innerRef={raceRef} type="select" required>
									{raceList.map((rac, i) => (
										<option key={i} value={rac}>
											{rac}
										</option>
									))}
								</Input>
							</Col>
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
									innerRef={levelRef}
									type="number"
									max={"20"}
									min={"1"}
									required
								/>
							</Col>
						</Row>
					</FormGroup>

					{/* Physical traits */}
					<FormGroup>
						<Container>
							<Label
								style={{
									backgroundColor: "rgba(52, 52, 52, 0.65)",
									color: "#F5A300",
									width: "160px",
									borderRadius: "5px",
								}}
							>
								Physical Traits
							</Label>

							<Row>
								<Col style={{ padding: "0px" }}>
									<Input
										style={{ borderRadius: "5px 0px 0px 0px" }}
										innerRef={ageRef}
										type="number"
										min={1}
										required
										placeholder="Age"
									/>
								</Col>
								<Col style={{ padding: "0px" }}>
									<Input
										style={{ borderRadius: "0px 0px 0px 0px" }}
										innerRef={hairRef}
										type="string"
										required
										placeholder="Hair Color"
									/>
								</Col>
								<Col style={{ padding: "0px" }}>
									<Input
										style={{ borderRadius: "0px 5px 0px 0px" }}
										innerRef={eyesRef}
										type="string"
										required
										placeholder="Eye Color"
									/>
								</Col>
							</Row>
							<Row>
								<Col style={{ padding: "0px" }}>
									<Input
										style={{ borderRadius: "0px 0px 0px 5px" }}
										innerRef={weightRef}
										type="number"
										required
										min={1}
										placeholder="lbs"
									/>
								</Col>
								<Col style={{ padding: "0px" }}>
									<Input
										style={{ borderRadius: "0px 0px 0px 0px" }}
										innerRef={skinRef}
										type="string"
										required
										placeholder="Skin color"
									/>
								</Col>
								<Col style={{ padding: "0px" }}>
									<Input
										style={{ borderRadius: "0px 0px 5px 0px" }}
										innerRef={heightRef}
										type="string"
										required
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
					<Button onClick={swapForm} color="dark">{button}</Button>
{statForm()}
						
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
						<Table bordered hover size="sm" dark style={{ textAlign: "left" }}>
							{/* <thead>
								<tr>
									<th>
										<Input
											innerRef={strengthRef}
											type="number"
											max={20}
											min={1}
											required
										/>
									</th>
									<th>
										<Input
											innerRef={dexterityRef}
											type="number"
											max={20}
											min={1}
											required
										/>
									</th>
									<th>
										<Input
											innerRef={constitutionRef}
											type="number"
											max={20}
											min={1}
											required
										/>
									</th>
									<th>
										<Input
											innerRef={intelligenceRef}
											type="number"
											max={20}
											min={1}
											required
										/>
									</th>
									<th>
										<Input
											innerRef={wisdomRef}
											type="number"
											max={20}
											min={1}
											required
										/>
									</th>
									<th>
										<Input
											innerRef={charismaRef}
											type="number"
											max={20}
											min={1}
											required
										/>
									</th>
								</tr>
							</thead> */}

							{/* Skills */}
							{/* FormGroup > legend tag, in map we want input and label */}

							<thead>
								<tr>
									<th style={{ textAlign: "center" }}>
										<span style={{ color: "#E53B10" }}>Strength</span>
									</th>
									<th style={{ textAlign: "center" }}>
										<span style={{ color: "#21C056" }}>Dexterity</span>
									</th>
									<th style={{ textAlign: "center" }}>
										<span style={{ color: "#C36609" }}>Constitution</span>
									</th>
									<th style={{ textAlign: "center" }}>
										<span style={{ color: "#018FB7" }}>Intelligence</span>
									</th>
									<th style={{ textAlign: "center" }}>
										<span style={{ color: "white" }}>Wisdom</span>
									</th>
									<th style={{ textAlign: "center" }}>
										<span style={{ color: "#AD7CD8" }}>Charisma</span>
									</th>
								</tr>
							</thead>
							<Dropdown isOpen={dropdownOpen} toggle={toggle}>
								<DropdownToggle caret>Skills</DropdownToggle>
								<DropdownMenu {...args} persist>
									<DropdownItem toggle={false}>
										<tbody>
											<tr>
												<td>
													{strList.map((skill, i) => (
														<FormGroup check>
															<Input name={skill} type="checkbox" />
															{"   "}
															<Label check key={i} value={skill}>
																{skill}
															</Label>
														</FormGroup>
													))}
												</td>
												<td>
													{dexList.map((skill, i) => (
														<FormGroup check>
															<Input name={skill} type="checkbox" />
															{"   "}
															<Label check key={i} value={skill}>
																{skill}
															</Label>
														</FormGroup>
													))}
												</td>
												<td style={{ paddingRight: "90px" }}></td>
												<td>
													{intList.map((skill, i) => (
														<FormGroup check>
															<Input name={skill} type="checkbox" />
															{"   "}
															<Label check key={i} value={skill}>
																{skill}
															</Label>
														</FormGroup>
													))}
												</td>
												<td>
													{wisList.map((skill, i) => (
														<FormGroup check>
															<Input name={skill} type="checkbox" />
															{"   "}
															<Label check key={i} value={skill}>
																{skill}
															</Label>
														</FormGroup>
													))}
												</td>
												<td>
													{chaList.map((skill, i) => (
														<FormGroup check>
															<Input name={skill} type="checkbox" />
															{"   "}
															<Label check key={i} value={skill}>
																{skill}
															</Label>
														</FormGroup>
													))}
												</td>
											</tr>
										</tbody>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</Table>
					</FormGroup>
					{/* FormGroup > ledgend tag, in map we want input and label */}

					{/* <h1>SKILL LIST</h1>	*/}
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
							innerRef={backStoryRef}
							type="textarea"
							placeholder="Backstory:"
						/>
					</FormGroup>
				</Container>
				<Button type="submit" color="success">
					Create Character
				</Button>
			</Form>
		</div>
	);
}
