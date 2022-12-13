import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home'

import {

  ThemeProvider,
  createTheme
} from "@mui/material/styles";
import EmailEdit from "./pages/EmailEdit";
//import Chart from "./pages/Chart";
import Dashboards from "./pages/Dashboards";
;


const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#fcfcf7"
        },
        
      }
    },

  }
});







function App() {
  return (
    <div>
      
    <BrowserRouter>
    <div className="App">
    <ThemeProvider theme={theme}>
      <Home/>
        </ThemeProvider>
    <Routes>
     <Route exact path="/" element={< EmailEdit/>}/>   
     <Route path="/dash" element={< Dashboards/>}/>  

    </Routes>
    </div>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
