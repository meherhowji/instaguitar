import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { VictoryPie } from 'victory'
import './App.css';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFF'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <VictoryPie
          innerRadius={100}
          data={[
              { x: "Cats", y: 35 },
              { x: "Dogs", y: 40 },
              { x: "Birds", y: 55 }
            ]}
        />
      </View>
    </Page>
  </Document>
);

function App() {
  return (
    <div className="app">
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
      <br />
      <br />
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        Download
      </PDFDownloadLink>
    </div>
  );
}

export default App;
