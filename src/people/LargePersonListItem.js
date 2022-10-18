export const LargePersonListItem = ({person}) => {
	const {name, age, hariColor, hobbies} = person;

	return(
		<>
			<h3>Name: {name}</h3>
			<p>Age: {age}</p>
			<p>Hair color: {hariColor}</p>
			<p>Hobbies:</p>
			<ul>
				{hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
			</ul>
		</>
	)
}