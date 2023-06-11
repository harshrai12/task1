import React from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import modalimg from "../Assets/atg_illustration.png";

function Rightbar() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
     
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
      
  return (
    <div className="button_bar">
    <button className='writeapost'>Write a post</button>
    <button className='join_group' onClick={handleOpen}>join group</button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container">
          <div className="col1">
          <div className="titles">
          <h4>Create Account</h4>
          </div>
          <div className="form">
          <div className="formname">
          <input type="text" className='forminput' placeholder='First Name' />
          <input type="text"  className='forminput' placeholder='Last Name' />
          </div>
          <input type="text"  className='forminput' placeholder='email' />
          <input type="text"  className='forminput' placeholder='password'/>
          <input type="confirm Password" className='forminput' placeholder='confim Password' />
          <button className='create_account'>Create Account</button>
          <button className='create_account_f'>sign in facebook</button>
          <button className='create_account_g'>sign in google</button>
          </div>
          </div>
          <div className="col2">
          <p>Already have an acoount sign in</p>
          <img src={modalimg} alt="" />
          </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default Rightbar
