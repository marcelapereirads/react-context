import React, { useContext } from 'react';
import { Box, Paper, Button } from '@material-ui/core';

import { text } from './constants.js';
import './App.css';

const ThemeContext = React.createContext();
const ButtonStyleContext = React.createContext('contained');

const App = () => (
  <ThemeContext.Provider value="secondary">
    <Container />
  </ThemeContext.Provider>
);

const Container = () => (
  <Box m={5}>
    <Paper elevation={3}>
      <Box p={3}>
        {text}
        <Box className="buttons__container">
          <ThemedButton>
            Agree
          </ThemedButton>
          <ButtonStyleContext.Provider value="outlined">
            <ThemedButton>
              Disagree
            </ThemedButton>
          </ButtonStyleContext.Provider>
        </Box>
      </Box>
    </Paper>
  </Box>
);

const ThemedButton = ({ children }) => {
  const buttonColor = useContext(ThemeContext);
  const buttonStyle = useContext(ButtonStyleContext);

  return (
    <Box className="button">
      <Button variant={buttonStyle} color={buttonColor}>
        {children}
      </Button>
    </Box>
  )
};

ThemedButton.defaultProps = {
  variant: 'contained'
}

export default App;
