import React from "react";
import {
	Document,
	Text,
	Page,
	StyleSheet,
	View,
	Font,
	Image,
} from "@react-pdf/renderer";
// import background from "../../../../assets/Blurg.png";

const styles = StyleSheet.create({
	page: {
		marginTop: 30,
		fontSize: 30,
		padding: 20,
	},
	layout: {
		marginTop: 30,
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
	statLayout: {
		display: "flex",
		marginTop: 30,
		width: "50px",
		textAlign: "center"
	},
	NRC: {
		flexDirection: "column",
		alignItems: "center",
		border: "3px",
		fontSize: "16px",
		height: "55px",
	},
	PL: {
		border: "3px",
		fontSize: "16px",
		height: "45px",
		marginTop: "10px"
	},
	physical: {
		border: "3px",
		fontSize: "12px",
		height: "40px",
		width: "200px",
		flexDirection: "row",
		textAlign: "center",
		alignContent: "center"
	},
	physical2: {
		borderLeft: "3px", borderRight: "3px", borderTop: "0px", borderBottom: "3px",
		fontSize: "12px",
		height: "40px",
		width: "200px",
		flexDirection: "row",
		textAlign: "center",
	},
	// pageBackground: {
	// 	position: 'absolute',
	// 	minWidth: '100%',
	// 	minHeight: '100%',
	// 	display: 'block',
	// 	height: '100%',
	// 	width: '100%',
	//   },
});
export default function CharacterPDFGen(props) {
	let strengthMod = Math.floor((props.fields.stats.strength - 10) / 2);
	let dexterityMod = Math.floor((props.fields.stats.dexterity - 10) / 2);
	let constitutionMod = Math.floor((props.fields.stats.constitution - 10) / 2);
	let intelligenceMod = Math.floor((props.fields.stats.intelligence - 10) / 2);
	let wisdomMod = Math.floor((props.fields.stats.wisdom - 10) / 2);
	let charismaMod = Math.floor((props.fields.stats.charisma - 10) / 2);

	let plusS = strengthMod > -1 ? "+" : "";
	let plusD = dexterityMod > -1 ? "+" : "";
	let plusC = constitutionMod > -1 ? "+" : "";
	let plusI = intelligenceMod > -1 ? "+" : "";
	let plusW = wisdomMod > -1 ? "+" : "";
	let plusCh = charismaMod > -1 ? "+" : "";

	let proficiency = Math.ceil(props.fields.level / 4 + 1);
	return (
		<Document>
			<Page style={styles.page}>
				<View style={styles.layout}>
					<View style={{flexDirection: "column"}}>
					{/* NRC */}
					<View style={styles.NRC}>
						<Text>{props.fields.name}</Text>
						<Text>{props.fields.race}</Text>
						<Text>{props.fields.cla}</Text>
					</View>

					{/* Prof + Level */}
					<View style={styles.PL}>
						<Text style={{ borderBottom: "2px" }}>
							Level:{props.fields.level}
						</Text>
						<Text style={{ borderTop: "2px" }}>
							Proficiency Bonus: +{proficiency}
						</Text>
					</View>
					</View>
					{/* Physical Attributes */}
					<View>
						<View style={styles.physical}>
							<Text style={{ borderLeft: "0px", borderRight: "2px", borderTop: "0px", borderBottom: "0px", width:"35%"}}>Hair Color{"\n"} {props.fields.physicalAtt.hair} </Text>
							<Text style={{ borderLeft: "0px", borderRight: "2px", borderTop: "0px", borderBottom: "0px", width:"35%"}}>Age{"\n"} {props.fields.physicalAtt.age} </Text>
							<Text style={{ borderLeft: "0px", borderRight: "0px", borderTop: "0px", borderBottom: "0px", width:"35%"}}>Weight(lbs){"\n"} {props.fields.physicalAtt.weight} </Text>
						</View>
						<View style={styles.physical2}>
							<Text style={{ borderLeft: "0px", borderRight: "2px", borderTop: "0px", borderBottom: "0px", width:"35%"}}>Height{"\n"} {props.fields.physicalAtt.height} </Text>
							<Text style={{ borderLeft: "0px", borderRight: "2px", borderTop: "0px", borderBottom: "0px", width:"35%"}}>Skin Color{"\n"} {props.fields.physicalAtt.skin} </Text>
							<Text style={{ borderLeft: "0px", borderRight: "0px", borderTop: "0px", borderBottom: "0px", width:"35%"}}>Eye Color{"\n"} {props.fields.physicalAtt.eyes} </Text>
						</View>
					</View>
				</View>
			
				{/* Stats */}
				<View style={styles.statLayout}>
					<Text style={{ border: "2px", width: "100%"}}>
						{plusS}
						{strengthMod}{"\n"}{props.fields.stats.strength}
					</Text>
					<Text style={{ border: "2px"}}>
						{plusD}
						{dexterityMod}{"\n"}{props.fields.stats.dexterity}
					</Text>
					<Text style={{ border: "2px"}}>
						{plusC}
						{constitutionMod}{"\n"}{props.fields.stats.constitution}
					</Text>
					<Text style={{ border: "2px"}}>
						{plusI}
						{intelligenceMod}{"\n"}{props.fields.stats.intelligence}
					</Text>
					<Text style={{ border: "2px"}}>
						{plusW}
						{wisdomMod}{"\n"}{props.fields.stats.wisdom}
					</Text>
					<Text style={{ border: "2px"}}>
						{plusCh}
						{charismaMod}{"\n"}{props.fields.stats.charisma}
					</Text>
				</View>
				{/* <Image
          src={background} style={styles.pageBackground}
          /> */}
			</Page>
			<Page style={styles.page}>
				<View style={styles.layout}>
					<View style={{ border: "3px" }}>
						<Text style={{ fontSize: "12px" }}>{props.fields.backStory}</Text>
					</View>
				</View>
			</Page>
		</Document>
	);
}
