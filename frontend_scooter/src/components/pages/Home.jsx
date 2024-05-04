import React, { useEffect, useState } from "react";
import BarChart from "../charts/BarChart";
import { styled } from "@mui/material/styles";
import { Paper, Box, Typography } from "@mui/material";
import axios from "axios";
const AnimatedPaper = styled(Paper)({
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)", // Scale up by 10% on hover
  },
});

function Home() {
  const [text, setText] = useState("Nombre de Scooter");
  const [text1,setText1] = useState("Nombre de Client")
  const handleFocus1 = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/nombreClient");
      
      setText1(res.data.toString());
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  };
  const handleFocus = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/nombreScooter");
        let resSum = 0;
        for (const ele of res.data) {
          resSum += ele.qteScooter;
        }
        setText(resSum.toString());
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    // Appelez la fonction fetchData une fois, lorsque le composant est monté




  return (
    <div style={{ display: "flex" }}>
      <div>
        <Box sx={{ display: "flex" }}>
          <BarChart />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
          <AnimatedPaper
            elevation={4}
            onDoubleClick={handleFocus}
            style={{
              position: "absolute",
              top: "calc(100px + 1cm)",
              right: "calc(-2cm + 3cm)",
              zIndex: 1,
              width: "7cm",
              height: "4cm",
              backgroundColor: "#13678A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", backgroundColor: "" }}
            >
              {text}
            </Typography>
          </AnimatedPaper>

          <AnimatedPaper
          onClick={handleFocus1}
            elevation={4}
            style={{
              position: "absolute",
              top: "calc(286px + 1cm)", // 1 cm en dessous du NavBar
              right: "calc(-2cm + 3cm)", // 2 cm de marge à droite
              zIndex: 1,
              width: "7cm", // Largeur de 7 cm
              height: "4cm", // Longueur de 4 cm
              backgroundColor: "#015958",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px", // Rayon de 8px pour les coins
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", backgroundColor: "" }}
            >
              {text1}
            </Typography>
          </AnimatedPaper>
        </Box>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
