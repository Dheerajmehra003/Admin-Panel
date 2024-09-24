import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../../Data/MockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../Components/Header';


const index = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <>
    <Header title="TEAM" subtitle="Managing The Team Members" />
    <Box>
        <DataGrid 
        rows={mockDataTeam}
        
        />
    </Box>

    </>
  )
}

export default index