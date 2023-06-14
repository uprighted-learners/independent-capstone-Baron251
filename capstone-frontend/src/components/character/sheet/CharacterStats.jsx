// ! Child of Character Fields. WIP
import { useEffect } from "react";

export default function CharacterStats(props) {

    useEffect(() => {
        props.fetchFields();
	}, [props.token]);
    console.log("Derp", props.stats);

	return (
		<>
			<h1>Character Stats</h1>
			<p>{props.stats.Strength}</p>
		</>
	);
}
