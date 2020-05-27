import React from 'react';
import NavigationBar from './components/NavigationBar'
import Header from './components/Header'
import CitiesList from './components/CitiesList'
// import 'normalize-css/normalize.css'
import './styles/styles.scss'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <CitiesList />
    </div>
  );
}

export default App;
