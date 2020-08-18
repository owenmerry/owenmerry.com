import styled from 'styled-components';

export const WrapperStyle = styled.div`

/* general */
text-align: center;
font-weight: bold;
display: flex;
justify-content: flex-end;

.holder{

    .title{
        font-size: 18px;
    }
    .number{
        font-size: 14px;
    }
}


    /** Device Styles */

    /* mobile styles */
    @media only screen and (max-width: 720px) {
        .holder{

            .title{
                font-size: 13px;
            }
            .number{
                font-size: 11px;
            }
        }
    }

`;
