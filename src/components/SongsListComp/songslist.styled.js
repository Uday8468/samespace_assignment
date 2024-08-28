import styled from "styled-components";

export const TotalSongLayoutCont = styled.div`
height:100vh;
width:432px;
padding-top:32px;

display: flex;
    flex-direction: column;
@media (max-width: 1300px) {
  width:400px;
}
@media (min-height:1000px){
justify-content:center;

}
@media (max-width: 1100px) {
  width:300px;
}
`
export const SongsListAlignCont = styled.div`
display:flex;
flex-direction:column;
width:100%;
height: 100%;
`

export const TabContainer = styled.div`
height:32px;
width:100%;
gap:40px;
display:flex;
align-items:center;
margin-left:16px;
`
export const TabHeadingText = styled.p`
font-family: Inter;
font-size: 24px;
font-weight: 700;
line-height: 32px;
text-align: left;
color:#ffffff;
margin:0;
cursor:pointer;
`
export const InputDiv = styled.div`
background: #FFFFFF14;
width:100%;
height:48px;
position:relative;
    border-radius: 8px;
    margin-top: 32px;
`
export const SearchInput = styled.input`
border-radius:8px;
height: 100%;
    width: 80%;
    background: transparent;
    border: none;
    font-family: Inter;
font-size: 18px;
font-weight: 400;
line-height: 28px;
text-align: left;
color:#ffffff;
padding:10px 16px;
outline:none;
`
export const SearchImg = styled.img`
position: absolute;
    right: 16px;
    top: 8px;
`

export const TotalSongsListCont = styled.div`
width:100%;
height: 500px;
flex-grow:1;
    overflow-y: scroll;
    overflow-x:hidden;
    margin-top: 24px;
&::-webkit-scrollbar {
    width: 6px;
}
&::-webkit-scrollbar-thumb {
    background-color: rgb(217, 217, 217);
    border-radius: 6px;
}
`

export const PlayerAlignDiv = styled.div`
display: flex;
    flex-grow: 1;
    justify-content: center;
    gap: 15%;
`