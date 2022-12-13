import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import XYChart from '../view/charts/xychart/XYChart';
import Bar from '../view/charts/barchart/Bar'
import Pie from '../view/charts/piechart/PieChart';
import GroupSlice from '../view/charts/groupslice/GroupSlice';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>

      {'Copyright © '}
      <Link color="inherit" href="https://ekanatechnologies.com/">
        Ekana Technologies 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




function DashboardContent() {

  return (

      <Box sx={{ display: 'flex' }} style={{marginTop:"-8%"}}>
        <CssBaseline />
        <Toolbar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[400],
            flexGrow: 1,
            height: '100%',
            overflow: 'auto',
          }}
        >
    
          <Toolbar />
          
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <div  style={{display:'block',textAlign:"center",marginBottom:"30px",backgroundColor:'#edf3f5'}}>
            <h2 style={{fontWeight:'900'}}>CHARTS DASHBOARD</h2>
            </div>

            <Grid container spacing={2}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                    width:'auto',
                    backgroundColor:'#edf3f5'
                  }}
                >
                <h4>Bar Chart</h4>
                 <Bar/>
                </Paper>
              </Grid>
         
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                    width:'auto',
                    backgroundColor:'#edf3f5'
                  }}
                >
          
                <h4>Line Chart</h4>
                <XYChart/>
                </Paper>
              </Grid>

    {/* second div */}

              <Grid item xs={12} md={8} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                    width:'auto',
                    backgroundColor:'#edf3f5'
                  }}
                >
                 <h4>Pie Chart</h4>
               <Pie />
                 </Paper>
              </Grid>
         
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                    width:'auto',
                    backgroundColor:'#edf3f5'

                  }}
                >
                <h4>Radar chart</h4>
                <GroupSlice/>
                </Paper>
              </Grid>

              <Toolbar />


              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column',     backgroundColor:'#edf3f5' }}>
                 <h2>Footer</h2>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
  );
}

export default function Dashboards() {
  return <DashboardContent />;
}
