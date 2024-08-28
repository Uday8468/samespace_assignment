import logo from './logo.svg';
import './App.css';
import LogoComp from './components/LogoComp/logo';
import { LayoutAlignDiv } from './components/LogoComp/logo.styled';
import SongsListComp from './components/SongsListComp/songsList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PlayerComp from './components/PlayerComp/playerComp';
import { PlayerAlignDiv } from './components/SongsListComp/songslist.styled';
let originalForYou;
let originalTopTrack;
function App() {
  const [songsData, setSongsData] = useState({
    foryouList:[],
    topTracks:[]
  });
  const [forYou,setForYou] = useState(false);
  const [selectedSong,setselectedSong] = useState({});
  const getSongsData = async () => {
    try {
      const response = await axios.get('https://cms.samespace.com/items/songs');
      let tracks = response?.data?.data.filter((each) => each?.top_track);

      originalForYou = response?.data?.data;
      setselectedSong(originalForYou[0])
      originalTopTrack = tracks
      setSongsData({...songsData,foryouList:response?.data?.data,topTracks:tracks})
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    getSongsData()
  }, [])
  return (
    <div className="App">
      <LayoutAlignDiv color={selectedSong?.accent}>
        <LogoComp />
        <PlayerAlignDiv>
        <SongsListComp songsData={songsData} forYou={forYou} setForYou={setForYou} setSongsData={setSongsData} originalForYou={originalForYou} originalTopTrack={originalTopTrack} selectedSong={selectedSong} setselectedSong={setselectedSong}/>
        <PlayerComp selectedSong={selectedSong} setselectedSong={setselectedSong} forYou={forYou} songsData={songsData}/>
        </PlayerAlignDiv>
        
      </LayoutAlignDiv>

    </div>
  );
}

export default App;
