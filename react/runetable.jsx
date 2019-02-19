// class dataRow extends React.component {
// 	render(){
// 		const rune = this.props.rune;
// 		return(
// 			<tr>
// 				<td>{rune.runeSet}</td>
// 				<td>{rune.runeSlot}</td>
// 			</tr>
// 		)
// 	}
// }


// const RUNES = [
// {
// 	runeset: "Energy",
// 	runeslot: "1"
// }, 
// {
// 	runeset: "Violent",
// 	runeslot: "3"
// }



// ];


// ReactDOM.render(
// 	<dataRow rune ={RUNES} />,
// 	document.getElementById('runesdata')
// );
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
	// <dataRow rune ={RUNES} />,
	element,
	document.getElementById('runesdata')
);



