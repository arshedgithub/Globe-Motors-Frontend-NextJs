'use client'
import { AccountCircle, Menu, ShoppingCart } from '@mui/icons-material'
import { Badge, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const AppBar = () => {

  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => router.push('/')}
        >
          <Menu />
        </IconButton>
        <img src="/globe-logo.png" alt="logo" style={{height: "40px"}} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>

        <IconButton size='large' color='inherit'>
          <Badge badgeContent={4} color='primary'>
            <ShoppingCart />
          </Badge>
        </IconButton>

        <IconButton size='large' color='inherit' onClick={() => router.push('/login')}>
          <AccountCircle />
        </IconButton>

      </Toolbar>
    </Box >
  )
}

export default AppBar;