import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import "./Client.css";
import EditIcon from "@mui/icons-material/Edit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
function Client({ history }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [field, setField] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/client");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((client) =>
      client.nomCli.toLowerCase().includes(field.toLowerCase())
    );
    setFilterData(filtered);
  }, [data, field]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickEdit = () => {
    // Ajoute ici la logique pour éditer un client
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    try {
      const res = await axios.post(
        "http://localhost:8000/api/client/",
        formJson
      );
      if (res) {
        handleClose();
        alert("client ajouté dans la base de donné");
        window.location.reload();
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
      alert("client present dans la base de donné");
      navigate("/achat");
    }
  };

  return (
    <div className="pageClient">
      <br />
      <div className="bouton">
        <div className="dic1">
          <TextField
            fullWidth
            label={<SearchIcon />}
            id="fullWidth"
            placeholder="Recherche"
            value={field}
            onChange={(e) => setField(e.target.value)}
            sx={{
              height: "0.5cm",
              width: "7cm",
            }}
          />
        </div>
        <span className="espace"> </span>
        <div className="dic2">
          <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
            <AddIcon />
          </Fab>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Client Add</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="nomCli"
            name="nomCli"
            label="nom Client"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="emailCli"
            name="emailCli"
            label="email Client"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="telCli"
            name="telCli"
            label="telephone Client"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="adrsCli"
            name="adrsCli"
            label="adresse du Client"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>

      <div id="tableau">
        <Box className="box">
          <Paper elevation={3} className="paper">
            <TableContainer>
              <Table className="custom-table">
                <TableHead>
                  <TableRow>
                    <TableCell className="custom-header">Nom Client</TableCell>
                    <TableCell className="custom-header">
                      Email Client
                    </TableCell>
                    <TableCell className="custom-header">
                      Telephone Client
                    </TableCell>
                    <TableCell className="custom-header">
                      Adresse Client
                    </TableCell>
                    <TableCell className="custom-header">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filterData.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell>{client.nomCli}</TableCell>
                      <TableCell>{client.emailCli}</TableCell>
                      <TableCell>{client.telCli}</TableCell>
                      <TableCell>{client.adrsCli}</TableCell>
                      <TableCell>
                        <EditIcon className="edit-icon"></EditIcon>
                        <DeleteIcon className="delete-icon"></DeleteIcon>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </div>
    </div>
  );
}

export default Client;
