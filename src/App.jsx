import {
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import "./App.css";

import Resume from "./Resume";

function App() {
  return (
    <>
      <PDFDownloadLink
        document={<Resume />}
        fileName="resume.pdf"
        style={{
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          borderRadius: "4px",
          textDecoration: "none",
          display: "inline-block",
          cursor: "pointer",
        }}
      >
        {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
      </PDFDownloadLink>
      <PDFViewer
        style={{
          width: "80vw",
          height: "80vh",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Resume />
      </PDFViewer>
    </>
  );
}

export default App;
