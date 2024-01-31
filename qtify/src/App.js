import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar1/NavBar';
import { Hero } from './components/Hero/Hero';
import { useEffect, useState } from 'react';
import { fetchNewAlbum, fetchSong, fetchTopAlbums } from './components/api/api';
// import { Card } from '@mui/material';
import Card from './components/Card/Card';
import Section from './components/Section/Section';
import style from './App.module.css';

function App() {

  const [topAlbumData , setTopAlbumData]= useState([]);
  const [newAlbumData , setNewAlbumData]= useState([]);
  const [songData , setSongData] = useState([]);
  const [filteredDataValues , setFilteredDataValues] = useState([]);
  const [toggle , setToggel]= useState(false);
  const [value , setValue]=useState(0);

  const handleToggle = ()=>{
    setToggel(!toggle)
  }

  const handleChange = (Event , newValue)=>{
    console.log(newValue)
    setValue(newValue)
  }

  const generateSongData = (value)=>{
    let key;
    if(value===0){
      filteredData(songData)
      return
    }
    else if(value===1){
      key='rock'
    }
    else if(value===2){
      key ='pop'
    }
    const res = songData.filter((item)=>item.genre.key === key);
    filteredData(res)
  }

  useEffect(()=>{
    generateSongData(value)
  },[value])

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

  const generateAllSong = async ()=>{
    try {
      const data = await fetchSong()
      setSongData(data)
      setFilteredDataValues(data)
      console.log(data)
    } catch (error) {
      console.error('error:', error)  
    }
  }

  useEffect(()=>{
    generateTopAlbum()
    generateNewAlbum()
    generateAllSong()
  },[])

  const filteredData = (value)=>{
     setFilteredDataValues(value)
  }


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
      <Section filteredDataValues={topAlbumData} title='Top Album' type='album' />
      <Section filteredDataValues={newAlbumData} title='New Album' type='album'/>
      <Section data={songData} title='Songs' type='song'
       filteredData={filteredData} value={value}
       filteredDataValues={filteredDataValues}
       handleToggle={handleToggle}
       handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
