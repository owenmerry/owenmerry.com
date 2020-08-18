import styled from 'styled-components';

export const WrapperStyle = styled.div`

/* general */
text-align: center;
position: sticky;
top:0px;
z-index: 10;
padding: 10px; 
background-color:white;

.button{
    display:inline-block;
    font-size: 16px;
    border-radius: 8px;
    padding: 18px 14px;
    color: #181818;
    cursor: pointer;
    font-weight: bold;
    &.selected{
        background-color: #181818;
        color: white;
    }
}

    /** Device Styles */

    /* mobile styles */
    @media only screen and (max-width: 720px) {
        .button{
            font-size:12px;
        }
    }

`;
