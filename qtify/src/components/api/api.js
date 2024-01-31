import axios from "axios";

export const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do'

export const fetchTopAlbums = async ()=>{
    try{
       let res =await axios.get(`${BACKEND_ENDPOINT}/albums/top`)  ;
       return res.data
    }catch(err){
       console.error(err)
    }
}

export const fetchNewAlbum = async ()=>{
   try {
      let res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
      return res.data
   } catch (err) {
      console.error(err)
   }
}

export const fetchSong = async ()=>{
   try {
      let res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
      return res.data
   } catch (err) {
      console.error(err)
      
   }
}