import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const MenuNav = ({sx}) => {
  return (
       <Box sx={{...sx}}
          >
            <Button sx={{fontSize: 20}}>Home</Button>
            <Button sx={{fontSize: 20}}>About Me</Button>
            <Button sx={{fontSize: 20}}>Skills</Button>
            <Button sx={{fontSize: 20}}>Projects</Button>
            <Button sx={{fontSize: 20}}>Resume</Button>
          </Box>
    
  )
}

export default MenuNav
