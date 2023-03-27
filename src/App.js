import React, {useEffect, useState} from 'react';
import './App.css';
import Topbar from './components/Topbar';
import MainContents from './components/MainContents'
function App() {
  const [search, setSearch] = useState({
    name: '',
    type: 'all'
  });

  const updateSearch = (option, value) => {
    const updatedValue = search;
    updatedValue[option] = value;
    setSearch({...updatedValue});
  }

  return (
    <div className="App">
      <Topbar updateSearch={updateSearch} ></Topbar>
      <MainContents search={search}></MainContents>
    </div>
  );
}

export default App;
