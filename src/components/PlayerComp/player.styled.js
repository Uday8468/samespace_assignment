import styled from "styled-components";


export const TotalPlayerCont = styled.div`
width: 480px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
@media (max-width: 1300px) {
  width:400px;
}
@media (max-width: 1100px) {
  width:350px;
}
`
export const PlayerCont = styled.div`
width:100%;
height:610px;
`

export const PlayerTitleCont = styled.div`
font-family: Inter;
font-size: 32px;
font-weight: 700;
line-height: 36px;
text-align: left;
color:#ffffff;
`

export const PlayerArtistCont = styled.div`
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
color:#ffffff;
opacity:0.6;
margin-top: 8px;
`
export const SongThumbnailCont = styled.div`
height:480px;
width:100%;
margin-top:32px;
`
export const ThumbailImg = styled.img`
width:100%;
height:100%;
`
export const TotalSeekingInput = styled.input`
-webkit-appearance: none;
  appearance: none; 
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  height: 6px;
  background: #ccc;
&::-webkit-slider-runnable-track {
  background: #FFFFFF;
  opacity:0.2;
  height: 6px;
}
&::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none; 
  height: 15px;
  width: 15px;
  background-color: #f50;
  border-radius: 50%;
  border: none;
  transition: .2s ease-in-out;
}
`

export const TotalSeekingDiv = styled.div`
height:6px;
width:100%;
background: #ffffff33;
border-radius:5px;
cursor:pointer;
`
export const SeekingDiv = styled.div`
width:${(props) => (props.status &&`${props?.status}%` )};
background:#ffffff;
border-radius:5px;
height:6px;
`

export const TotalSongBtnCont = styled.div`
height:48px;
width:100%;
display:flex;
align-items:center;
justify-content: space-between;
margin-top:32px;
`

export const SoundIconCont = styled.div`
background: #FFFFFF1A;
width: 48px;
height: 48px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
`

export const SoundIcon  = styled.img`
width:50%;
height:50%;

`

export const TotalControlsDiv = styled.div`
width:176px;
display:flex;
height:100%;
justify-content:space-between;
align-items:center;
`
export const PrevIconImg = styled.img`
width:32px;
height:32px;
cursor:pointer;
`