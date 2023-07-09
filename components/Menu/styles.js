import styled from 'styled-components';

export const WrapperStyle = styled.div`

/* general */
text-align: center;
position: sticky;
top:0px;
z-index: 10;
padding: 10px; 
background-color: ${(props) => props.theme.colorBackground};

.button{
    display:inline-block;
    font-size: 16px;
    border-radius: 8px;
    padding: 18px 14px;
    color: ${(props) => props.theme.color};
    cursor: pointer;
    font-weight: bold;
    &.selected{
        background-color: ${(props) => props.theme.color};
        color: ${(props) => props.theme.colorBackground};
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
