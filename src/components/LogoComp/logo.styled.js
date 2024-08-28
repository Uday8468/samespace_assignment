
import styled from 'styled-components';


export const LayoutAlignDiv = styled.div`
width:100%;
height:100%;
display:flex;
overflow-x:hidden;
background:${(props) => (props.color &&`linear-gradient(108.18deg, ${props?.color} 2.46%, #000000 99.84%)` )};
`
export const TotalLogoCont = styled.div`
width:135px;
height:100vh;
padding:32px;
display:flex;
flex-direction:column;
justify-content:space-between;
`