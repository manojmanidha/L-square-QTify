import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar1/NavBar';
import { Hero } from './components/Hero/Hero';
import { useEffect, useState } from 'react';
import { fetchTopAlbums } from './components/api/api';
// import { Card } from '@mui/material';
import Card from './components/Card/Card';
import Section from './components/Section/Section';

function App() {

  const [topAlbumData , setTopAlbumData]= useState([]);

  const generateTopAlbum = async ()=>{
    try {
      const data = await fetchTopAlbums()
      setTopAlbumData(data)
      console.log(data)
    } catch (error) {
      console.error('error:', error);
    }
  }

  useEffect(()=>{
    generateTopAlbum()
  },[])


  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      {/* {
        topAlbumData.map((topAlbum)=>(
          <Card data={topAlbum} type='album' key={topAlbum.id}/>
        ))
      } */}
      <Section data={topAlbumData} title='Top Album' type='album' />
    </div>
  );
}

export default App;
