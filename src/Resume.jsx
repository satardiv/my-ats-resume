import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import Main from "./Columns/Main";
import Highlight from "./Columns/Highlight";
import { style } from "./Styles";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
    fontSize: style.bodyFontSize,
    color: style.bodyFontColor,
    fontFamily: "Helvetica",
  },
});

const Resume = () => (
  <Document orientation="portrait">
    <Page size="A4" style={styles.page}>
      <Main />
      <Highlight />
    </Page>
  </Document>
);

export default Resume;