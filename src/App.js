import React from 'react';
import './App.css';
import Footer from './Footer';
import { ThemeProvider } from './ThemeContext';
import Main from './Main';
import store from './redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <ThemeProvider>
      <Main />
      </ThemeProvider>
      </Provider>
      <Footer />
    </div>    
  );
}

export default App;
