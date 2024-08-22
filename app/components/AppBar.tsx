'use client'
import { AccountCircle, Menu, ShoppingCart } from '@mui/icons-material'
import { Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <img src="./globe-logo.png" alt="logo" style={{height: "40px"}} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>

        <IconButton size='large' color='inherit'>
          <Badge badgeContent={4} color='primary'>
            <ShoppingCart />
          </Badge>
        </IconButton>

        <IconButton size='large' color='inherit'>
          <AccountCircle />
        </IconButton>

      </Toolbar>
    </Box >
  )
}

export default AppBar;