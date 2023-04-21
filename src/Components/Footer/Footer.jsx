import './Footer.css'
import {Box, Grid, Container, Typography, Button} from '@mui/material'


function Footer() {
  const elements = [
    {
      header: 'Help',
      links: ['Contact', 'Support', 'Privacy']
    },
    {
      header: 'Account',
      links: ['Login', 'Register', 'Nuevo']
    },
    {
      header: 'Messages',
      links: ['Backup', 'History', 'Roll']
    }
  ]

function generateFooterElements() {
    const footerElements = elements.map((column) => {
      return (
        <Grid item xs={12} md={4}>
          <Box borderBottom={1}>
            <Button sx={{fontSize:9 , color: 'white', fontWeight: 'bold'}}>
              {column.header}
            </Button>
          </Box>
          {column.links.map((link) => {
            return (
              <Box>
                <Button sx={{fontSize: 9, color: 'white' }}>{link}</Button>
              </Box>
            )
          })}
        </Grid>
      )
    })
    return footerElements
  }

  return (
    <footer className='footer'>
      <Box sx={{marginBottom:0, position: 'fixed', bottom: 0,height: 151, width: "100vw"}} >
      <Box bgcolor="primary.main" color="white" padding={1} >
        <Container>
          <Grid container columnSpacing={2}>
            {generateFooterElements()}
          </Grid>
        </Container>
      </Box>
      <Box textAlign={'center'} py={0.5} m={0} bgcolor="black" color={'white'}>
        <Typography  sx={{fontSize: 10}}>© Reboot Academy 2022 - All Rights Reserved</Typography>
      </Box>
      </Box>
    </footer>
  )
}
  




export default Footer
