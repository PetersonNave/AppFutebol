import React, { Component} from 'react';
import styled from 'styled-components';
import StarFull from '../assets/star.svg';
import StarHalf from '../assets/star_half.svg';
import StarEmpty from '../assets/star_empty.svg';

const StarArea = styled.View`

    flex-direction: row;
    align-items: center;

`;

const StarText = styled.Text`

    font-size: 12px;
    font-weight:bold;
    margin-left: 5px;
    color: #737373;
`;


const StarView = styled.View``;

export default ({stars}) => {

let s = [0, 0, 0, 0, 0];

let floor = Math.floor(stars);
let left = stars - floor;

for(var i=0; i<floor; i++){
    s[i]=2;
}
if(left>0){
    s[i]=1;
}

return(

 <StarArea>
{s.map((i,k) => (
    <StarView key={k}>
        {i===0 && <StarEmpty width="18px" height="18px" fill="#FF9200"/> }
        {i===1 && <StarHalf width="18px" height="18px" fill="#FF9200"/> }
        {i===2 && <StarFull width="18px" height="18px" fill="#FF9200"/> }
    </StarView>
        
))}

    <StarText>{stars}</StarText>
 </StarArea>
);

}