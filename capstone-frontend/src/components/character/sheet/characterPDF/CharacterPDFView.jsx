import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import CharacterPDFGen from "./CharacterPDFGen";
export default function CharacterPDFView(props) {
	return (
		<>
			<PDFDownloadLink document={<CharacterPDFGen fields={props.fields}/>} fileName="Character.pdf">
				{({ blob, url, loading, error }) =>
					loading ? "Loading document..." : "Download now!"
				}
			</PDFDownloadLink>
		</>
	);
}
