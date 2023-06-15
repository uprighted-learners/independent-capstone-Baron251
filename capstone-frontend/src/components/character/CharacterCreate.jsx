import { useRef } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default function CharacterCreate(props) {
  let classList = [null, "Barbarian", "Fighter", "Cleric", "Paladin", "Rogue", "Ranger", "Sorcerer", "Warlock", "Wizard", "Monk", "Druid"]
  let raceList = [null, "Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Half-Orc", "Halfling", "Human", "Tiefling"]

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

console.log(props)

	const handleSubmit = async (e) => {
		e.preventDefault()
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
		const str = strengthRef.current.value;
		const dex = dexterityRef.current.value;
		const con = constitutionRef.current.value;
		const int = intelligenceRef.current.value;
		const wis = wisdomRef.current.value;
		const cha = charismaRef.current.value;

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
			str,
			dex,
			con,
			int,
			wis,
			cha,
		});

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", props.token);

    const requestOption ={
      headers: myHeaders,
      body: bodyObj,
      method: "POST"
    };

    try {
      const res = await fetch(url, requestOption);
      const data = await res.json();
      console.log(data)
    } catch (err) {
      console.error(err)
    }

	};

	return (
		<>
			<h1>Creating your Character</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
        <Label>Character Name</Label>
        <Input innerRef={nameRef} autoComplete="off" type="text" required/>
        </FormGroup>
        <FormGroup>
        <Label>Class</Label>
        <Input innerRef={claRef} type="select" required>
          {classList.map((clas, i) => (
            <option key={i} value={clas}>
              {clas}
            </option>
          ))}
        </Input>
        </FormGroup>
        <FormGroup>
        <Label>Race</Label>
        <Input innerRef={raceRef} type="select" required>
          {raceList.map((rac, i) => (
            <option key={i} value={rac}>
              {rac}
            </option>
          ))}
        </Input>
        </FormGroup>
        <FormGroup>
        <Label>Level</Label>
        <Input innerRef={levelRef} type="number" max={"20"} min={"1"} required />
        </FormGroup>
        <FormGroup>
        <Label>Backstory</Label>
        <Input innerRef={backStoryRef} type="textarea"/>
        </FormGroup>
        <FormGroup>
        <Label>Physical Traits</Label>
        <Input innerRef={ageRef} type="number" min={1} required placeholder="Age"/>
        <Input innerRef={hairRef} type="string" placeholder="Hair Color"/>
        <Input innerRef={eyesRef} type="string" required placeholder="Eye Color"/>
        <Input innerRef={weightRef} type="number" required min={1}placeholder="lbs"/>
        <Input innerRef={skinRef} type="string" required placeholder="Skin color"/>
        <Input innerRef={heightRef} type="string" required placeholder="Height"/>
        </FormGroup>
        <FormGroup>
        <Label>Attributes</Label>
        <Input innerRef={strengthRef} type="number" min={1} max={20}/>
        <Input innerRef={dexterityRef} type="number" min={1} max={20}/>
        <Input innerRef={constitutionRef} type="number" min={1} max={20}/>
        <Input innerRef={intelligenceRef} type="number" min={1} max={20}/>
        <Input innerRef={wisdomRef} type="number" min={1} max={20}/>
        <Input innerRef={charismaRef} type="number" min={1} max={20}/>
        </FormGroup>
        <Button type="submit"></Button>
      </Form>
		</>
	);
}
