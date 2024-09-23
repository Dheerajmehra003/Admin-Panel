import React, { useContext } from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { colorModeContext, tokens } from '../../Theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkMode'
import NotificationstOutlinedIcon from '@mui/icons-material/Notifications'
import SettingsOutlinedIcon from '@mui/icons-material/Settings'
import PersonOutlinedIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(colorModeContext);
  return ( <Box display='flex' justifyContent='space-between' p={2}>
    {/* search bar */}
    <Box 
    display="flex"
    backgroundColor={colors.primary[400]}
    borderRadius="3px"
    >
        <InputBase sx={{ml:2, flex:1 }} placeholder="search" />
        <IconButton type='button' sx={{p: 1}} >
            <SearchIcon />
        </IconButton>
    </Box>

    {/* Icons */}
    <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
            ):(
                <LightModeOutlinedIcon />
            )
        }
        </IconButton>
        <IconButton>
        <NotificationstOutlinedIcon />
        </IconButton>
        <IconButton>
         <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
         <PersonOutlinedIcon />
        </IconButton>            
    </Box>
  </Box>
  )
}

export default Topbar