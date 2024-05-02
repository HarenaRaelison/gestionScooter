/* eslint-disable */
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import "./Client.css"

function Client() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className='pageClient'>
          
            <br />
            
            
               
              
                
              <div className='bouton'>
                <div className='dic1'>
                <TextField fullWidth label={<SearchIcon/>} id="fullWidth" placeholder='Recherche' />
                </div>
                <span className='espace'>  </span>
                <div className ="dic2">
                <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                    <AddIcon />
                </Fab>
                </div  >
              

              </div>
               
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            axios.post("http://localhost:8000/api/client/",formJson)
            handleClose();
          },
        }}
      >
        <DialogTitle>Client Add</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
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
            id="name"
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
            id="name"
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
            id="name"
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
    
              

            <div>
            
            </div>
        </div>
    )
}

export default Client
