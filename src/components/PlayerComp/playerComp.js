import React, { useEffect, useRef, useState } from 'react'
import { PlayerArtistCont, PlayerCont, PlayerTitleCont, PrevIconImg, SeekingDiv, SongThumbnailCont, SoundIcon, SoundIconCont, ThumbailImg, TotalControlsDiv, TotalPlayerCont, TotalSeekingDiv, TotalSeekingInput, TotalSongBtnCont } from './player.styled'
import moreOptions from "../Images/moreOptions.svg"
import prevSong from "../Images/prevSong.svg"
import nextSong from "../Images/nextSong.svg"
import pauseIcon from "../Images/pauseIcon.svg"
import playIcon from "../Images/playIcon.svg"
import soundIconImg from '../Images/SoundIcon.svg'
const PlayerComp = (props) => {
    const { selectedSong,songsData,forYou,setselectedSong } = props;
    const { name, artist, url, cover } = selectedSong
    const audioRef = useRef(null)
    const seekRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false);
    const [percentage, setPercentage] = useState(0)
    const [duration,setDuration] = useState(0)
    useEffect(() => {
        const audio = audioRef.current;
        const updateTime = () => {
            //   setCurrentTime(audio.currentTime);
            //   setDuration(audio.duration);
            if(audio?.currentTime === audio?.duration){
                setIsPlaying(false)
            }
            let percentageVal = (audio?.currentTime / audio?.duration) * 100
            setDuration(audio?.duration)
            setPercentage(percentageVal)
        };
        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateTime);
        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateTime);
        };
    }, []);
    const prevSongFunc = () => {
        if(!forYou){
            let index = songsData?.foryouList.findIndex((each) => each?.id === selectedSong?.id)
            if(index <= 0 ){
                setselectedSong(songsData?.foryouList[0])
            }else{
                setselectedSong(songsData?.foryouList[index - 1])
            }
            
        }else{
            let index = songsData?.topTracks.findIndex((each) => each?.id === selectedSong?.id)
            if(index === songsData?.topTracks?.length - 1 ){
                setselectedSong(songsData?.topTracks[0])
            }else{
                setselectedSong(songsData?.topTracks[index + 1])
            }
        }
        
    }
    const nextSongFunc = () => {
        if(!forYou){
            let index = songsData?.foryouList.findIndex((each) => each?.id === selectedSong?.id)
            if(index === songsData?.foryouList?.length - 1 ){
                setselectedSong(songsData?.foryouList[0])
            }else{
                setselectedSong(songsData?.foryouList[index + 1])
            }
            
        }else{
            let index = songsData?.topTracks.findIndex((each) => each?.id === selectedSong?.id)
            if(index === songsData?.topTracks?.length - 1 ){
                setselectedSong(songsData?.topTracks[0])
            }else{
                setselectedSong(songsData?.topTracks[index + 1])
            }
        }
        
    }
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])
    return (
        <TotalPlayerCont>
            <PlayerCont>
                <PlayerTitleCont>
                    {name}
                </PlayerTitleCont>
                <PlayerArtistCont>
                    {artist}

                </PlayerArtistCont>
                <SongThumbnailCont>
                    <ThumbailImg src={`https://cms.samespace.com/assets/${cover}`} draggable={false} />
                </SongThumbnailCont>
            </PlayerCont>
            <TotalSeekingDiv onClick={(event) => {
                const rect = seekRef?.current?.getBoundingClientRect();
                const x = event.clientX - rect.left;
                let value = (duration * x)/seekRef?.current?.offsetWidth
                audioRef.current.currentTime = value

            }} ref={seekRef}>
                <SeekingDiv status={percentage} />
            </TotalSeekingDiv>
            <TotalSongBtnCont>
                <SoundIconCont>
                    <SoundIcon src={moreOptions} draggable={false} />
                </SoundIconCont>
                <TotalControlsDiv>
                    <PrevIconImg src={prevSong} draggable={false}  onClick={prevSongFunc}/>
                    <img src={isPlaying ? playIcon : pauseIcon} onClick={() => {
                        setIsPlaying(!isPlaying)
                    }} style={{cursor:"pointer"}}/>
                    <PrevIconImg src={nextSong} draggable={false} onClick={nextSongFunc}/>
                </TotalControlsDiv>
                <SoundIconCont>
                    <SoundIcon src={soundIconImg} draggable={false} />
                </SoundIconCont>
            </TotalSongBtnCont>
            <audio src={url} ref={audioRef}></audio>
        </TotalPlayerCont>
    )
}

export default PlayerComp
