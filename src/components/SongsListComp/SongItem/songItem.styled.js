import styled from "styled-components";


export const TotalSongCont = styled.div`
padding:16px;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:80px;
cursor:pointer;
`

export const TotalSongDetailsCont = styled.div`
display:flex;
gap:16px;
justify-content: space-between;
    width: 100%;
    align-items: center;
`
export const SongLogoCont = styled.div`
width:48px;
height:48px;
display:flex;
justify-content:center;
align-items:center;

`
export const SongImg = styled.img`
border-radius:50%;
width:100%;
height:100%;
`
export const TotalSongTitleCont = styled.div`
display:flex;
flex-direction:column;
`

export const SongName = styled.div`
font-family: Inter;
font-size: 18px;
font-weight: 400;
line-height: 24px;
text-align: left;
color:#ffffff;
`
export const SongArtist =styled(SongName)`
opacity:0.6;
font-size:14px;
`

export const DurationText = styled.div`
font-family: Inter;
font-size: 18px;
font-weight: 400;
line-height: 24px;
text-align: right;
color: #FFFFFF;
opacity:0.6;
`

export const SongAlignCont = styled.div`
display: flex;
    align-items: center;
    gap: 16px;
`