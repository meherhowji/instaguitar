import React, { useEffect, useState } from "react";
import { Page, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { COF } from "./COF";
import { svgAsPngUri } from "save-svg-as-png";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFF"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => {
  const [svgElement, setSvgElement] = useState("");

  useEffect(() => {
    svgAsPngUri(document.getElementById("cof"), {
      encoderOptions: 1
    }).then((uri) => {
      setSvgElement(uri);
    });
  }, []);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={svgElement} />
        </View>
      </Page>
    </Document>
  );
};

const PDFView = () => {
  return (
    <div>
      <MyDocument />
      <COF />
      <br />
      <br />
      <PDFDownloadLink
        document={<MyDocument />}
        fileName="guitar-printable.pdf"
      >
        Download
      </PDFDownloadLink>
    </div>
  );
};

export default PDFView;
