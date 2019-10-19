import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from "../Styles/Theme";
import Routes from './Routes';
import Button from './Button'
import Footer from './Footer';

const Bread = styled.div`
  margin:0 auto;
  widht:100%;
 
`
// max-width: ${props => props.theme.maxWidth};


export default () => {

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <Bread>
          <Footer/>
          </Bread>
        </Router>
      </>
    </ThemeProvider> 
  )
}

toast.configure()
// function App() { 
//   return (
//     <div className="App"> 
//     <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
//       <Button text={'button desne'} onClick={()=> {toast('ok!!!!')}} />
     
//     </div>
//   );
// }

// export default App;
