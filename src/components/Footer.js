import { BottomNavigation, Typography } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
  return (
    <div >
      <BottomNavigation  sx={{ position: "fixed", bottom:"0", right:"0",width:"100%", padding:"15px 0px", marginTop:"20px"}}>
        <Typography variant="body1" mr={2}>coded by :Rawad Hamod 2024</Typography>
        <a href="mailto:rawadwhamod@gmail.com"><MailIcon mr={2}/></a>
        <a href="https://www.linkedin.com/in/rawad-hamod-9a8ab2261/"><LinkedInIcon mr={2} /></a>
        <a href="https://wa.me/963949257602"> <WhatsAppIcon/> </a>
      
      
      </BottomNavigation>
    </div>
  )
}

export default Footer
