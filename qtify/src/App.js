import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar1/NavBar';
import { Hero } from './components/Hero/Hero';
import { useEffect, useState } from 'react';
import { fetchNewAlbum, fetchTopAlbums } from './components/api/api';
// import { Card } from '@mui/material';
import Card from './components/Card/Card';
import Section from './components/Section/Section';
import style from './App.module.css';

function App() {

  const [topAlbumData , setTopAlbumData]= useState([]);
  const [newAlbumData , setNewAlbumData]= useState([]);

  const generateTopAlbum = async ()=>{
    try {
      const data = await fetchTopAlbums()
      setTopAlbumData(data)
      console.log(data)
    } catch (error) {
      console.error('error:', error);
    }
  }

  const generateNewAlbum = async ()=>{
    try{
      const data = await fetchNewAlbum()
      setNewAlbumData(data)
      console.log(data)
    }catch(err){
      console.error('error:', err)
    }
    
  }

  useEffect(()=>{
    generateTopAlbum()
    generateNewAlbum()
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
      <div className={style.sectionWraper}>
      <Section data={topAlbumData} title='Top Album' type='album' />
      <Section data={newAlbumData} title='New Album' type='album'/>
      </div>
    </div>
  );
}

export default App;
