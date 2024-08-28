import React, { useEffect, useState } from 'react'
import { DurationText, SongAlignCont, SongArtist, SongImg, SongLogoCont, SongName, TotalSongCont, TotalSongDetailsCont, TotalSongTitleCont } from './songItem.styled'
import { formatDuration } from '../../utils/utils';

const SongItem = (props) => {
    const {details,selectedSong,setselectedSong} = props
    const {cover,artist,name,url} = details;
    const [duration, setDuration] = useState(0);
    
  useEffect(() => {
    const audio = new Audio(url);
    const handleLoadedMetadata = () => {
      setDuration(formatDuration(audio.duration));
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);
  return (
    <TotalSongCont onClick={() => {
        setselectedSong(details)
    }}>
        <TotalSongDetailsCont>
            <SongAlignCont>
            <SongLogoCont>
                <SongImg src={`https://cms.samespace.com/assets/${cover}`} width={"100%"} height={"100%"}/>
            </SongLogoCont>
            <TotalSongTitleCont>
                <SongName>{name}</SongName>
                <SongArtist>{artist}</SongArtist>
            </TotalSongTitleCont>
            </SongAlignCont>
            <DurationText>{duration}</DurationText>
        </TotalSongDetailsCont>
    </TotalSongCont>
  )
}

export default SongItem
