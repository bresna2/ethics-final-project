import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Divider,
} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import GroupsIcon from "@mui/icons-material/Groups"
import MenuBookIcon from "@mui/icons-material/MenuBook"
//import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import { CrisisAlert } from "@mui/icons-material"


const drawerWidth = 240

export default function Navbar() {

  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const menuItems = [
    {
      text: "Home",
      icon: <HomeIcon />,
      route: "bresna2/"
    },
    {
      text: "Dark Patterns",
      icon: <CrisisAlert />,
      route: "bresna2/dark-patterns"
    },
    {
      text: "Research",     
      icon: <MenuBookIcon/>,
      route: "bresna2/research"
    },
    // {
    //   text: "Personal Stories",
    //   icon: <GroupsIcon/>,
    //   route: "/stories"
    // },
    {
      text: "Discussion",
      icon: <GroupsIcon/>,
      route: "bresna2/discussion"
    },
    {
      text: "Solutions",
      icon: <LightbulbIcon/>,
      route: "bresna2/solutions"
    },
    {
      text: "Get Help",
      icon: <InfoIcon />,
      route: "bresna2/get-help"
    },

  ]

  return (
    <>
      {/* Top Bar */}
      <Toolbar
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>

        <Typography 
            variant="h5"           
            sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                textShadow: '2px 6px 8px rgba(0,0,0,0.4)',
                fontFamily: '"Archivo Black", sans-serif',
            }}
        >
          The Cost of Engagement
        </Typography>
      </Toolbar>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <Box
          sx={{ width: drawerWidth }}
          role="presentation"
          onClick={toggleDrawer}
        >
          <Typography
            variant="h5"
            sx={{ p: 2 }}
          >
            Navigation
          </Typography>

          <Divider />

          <List>
            {menuItems.map((item) => (
              <ListItemButton key={item.text} onClick={() => navigate(item.route)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

