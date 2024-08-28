
import React, { useEffect, useState } from 'react'
import { InputDiv, SearchImg, SearchInput, SongsListAlignCont, TabContainer, TabHeadingText, TotalSongLayoutCont, TotalSongsListCont } from './songslist.styled'
import searchIcon from "../Images/searchIcon.svg"
import SongItem from './SongItem/songItem';
const SongsListComp = (props) => {
    const { songsData, forYou, setForYou,setSongsData,originalForYou,originalTopTrack,selectedSong,setselectedSong } = props
    const { foryouList, topTracks } = songsData;
    const [inputValue,setInputValue] = useState("")
    const searchTheFunctionality = (s) => {
        let value = s.target.value;
        setInputValue(value)
      

    }
    useEffect(() => {

        if(inputValue){
            if(!forYou){
                let list = foryouList.filter((each) =>  each.name.includes(inputValue) || each.artist.includes(inputValue));
                setSongsData({...songsData,foryouList:list})
             }else{
                 let list = foryouList.filter((each) =>  each.name.includes(inputValue) || each.artist.includes(inputValue));
                setSongsData({...songsData,topTracks:list})
             }
        }else{
            setSongsData({...songsData,foryouList:originalForYou,topTracks:originalTopTrack})
        }
    },[inputValue])


    return (
        <TotalSongLayoutCont>
            <SongsListAlignCont>
            <TabContainer>
                <TabHeadingText onClick={() => {
                    setForYou(false)
                }} style={{ opacity: forYou ? "0.5" : "unset" }}>
                    For You
                </TabHeadingText>
                <TabHeadingText style={{ opacity: !forYou ? "0.5" : "unset" }} onClick={() => {
                    setForYou(true)
                }}>
                    Top Tracks
                </TabHeadingText>
            </TabContainer>
            <InputDiv>
                <SearchInput type="text" placeholder='Search Song, Artist' onChange={searchTheFunctionality}/>
                <SearchImg src={searchIcon} draggable={false} />
            </InputDiv>
            <TotalSongsListCont>
                {!forYou ? (
                    foryouList?.length > 0 && (
                        foryouList.map((each) => <SongItem details={each} key={each?.id} selectedSong={selectedSong} setselectedSong={setselectedSong}/>)
                    )
                ) : (
                    topTracks?.length > 0 && (
                        topTracks.map((each) => <SongItem details={each} key={each?.id} selectedSong={selectedSong} setselectedSong={setselectedSong}/>)
                    )
                )}


            </TotalSongsListCont>
            </SongsListAlignCont>
           
        </TotalSongLayoutCont>
    )
}

export default SongsListComp
