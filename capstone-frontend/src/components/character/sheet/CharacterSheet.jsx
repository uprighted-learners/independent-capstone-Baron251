import { useState, useEffect } from 'react'
import { Container } from 'reactstrap'

export default function CharacterSheet(props) {
   const [field, setFields] = useState([])
   
    const fetchCharacters = async () => {
		const url = "http://localhost:4000/character/:id";

		const requestOptions = {
			method: "GET",
			headers: new Headers({
				Authorization: props.token,
			}),
		};

		try {
			const res = await fetch(url, requestOptions);
			const data = await res.json();
            console.log(data)
			setFields(data.getCharacter)
		} catch (err) {
			console.log(err);
		}
	};
  return (
    <>
    <Container>
      
    </Container>
    </>
  )
}
