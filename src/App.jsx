import {
  Page,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import "./App.css";

import Main from "./Columns/Main";
import Highlight from "./Columns/Highlight";
import { 
  TYPOGRAPHY, 
  COLORS, 
  BUTTON_STYLES, 
  PDF_VIEWER_STYLES
} from "./Styles";

// Resume Document Component
const Resume = () => (
  <Document orientation="portrait">
    <Page size="A4" style={documentStyles.page}>
      <Main />
      <Highlight />
    </Page>
  </Document>
);

// PDF Document Styles
const documentStyles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: COLORS.background.white,
    fontSize: TYPOGRAPHY.sizes.body,
    color: COLORS.text.primary,
    fontFamily: TYPOGRAPHY.fontFamily,
  },
});

// Download Button Component
const DownloadButton = () => (
  <PDFDownloadLink
    document={<Resume />}
    fileName="divya_satar_resume.pdf"
    style={BUTTON_STYLES.download}
  >
    {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
  </PDFDownloadLink>
);

// PDF Viewer Component
const ResumeViewer = () => (
  <PDFViewer style={PDF_VIEWER_STYLES.container}>
    <Resume />
  </PDFViewer>
);

// Main App Component
function App() {
  return (
    <div className="app-container">
      <div className="controls">
        <DownloadButton />
      </div>
      <div className="viewer">
        <ResumeViewer />
      </div>
    </div>
  );
}

export default App;
