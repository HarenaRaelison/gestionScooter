import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Button, Typography, Paper } from "@mui/material";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 12,
    padding: 20,
    width: 200, // Largeur personnalisée de la page en points
    height: 280, // Hauteur personnalisée de la page en points
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    color: "blue",
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
    color: "green",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: "black",
  },
  total: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  },
  background: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
  materialButton: {
    backgroundColor: "#2196f3",
    color: "#ffffff",
    padding: 10,
    borderRadius: 4,
    cursor: "pointer",
    textAlign: "center",
  },
});

const PDFFile = ({ data }) => {
  return (
    <Document>
      <Page size={{ width: 200, height: 280 }} style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Facture</Text>
          {data.map((transaction) => (
            <View key={transaction.id} style={styles.section}>
              <Text style={styles.title}>Date: {transaction.created_at.slice(0, 10)}</Text>
              <Text style={styles.text}>Nom du scooter: {transaction.scooter.nomScooter}</Text>
              <Text style={styles.text}>Nom du client: {transaction.client.nomCli}</Text>
              <Text style={styles.text}>Quantité achetée: {transaction.qteAchat}</Text>
              <Text style={styles.text}>Prix total: {transaction.scooter.prixScooter * transaction.qteAchat}</Text>
            </View>
          ))}
        </View>
        <View style={styles.total}>
          {/* Insérez ici le contenu pour le total */}
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;
