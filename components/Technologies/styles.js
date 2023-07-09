import styled from 'styled-components';

export const WrapperStyle = styled.div`

/* general */
padding-top: 60px;

.block{
    margin-bottom: 70px;
    max-width: 600px;
    .title{
        display:inline-flex;
        align-items: center;
        font-size: 16px;
        font-weight:bold;
        margin-bottom: 16px;
        span{
            border:solid 1px ${(props) => props.theme.colorBorder};
            border-radius: 14px;
            padding: 8px 12px;
            margin-left: 14px;
            font-size:12px;
        }
    }
    .grid{
        h3{
            font-size:16px;
            display: inline-block;
            border:solid 1px ${(props) => props.theme.colorBorder};
            border-radius: 14px;
            padding: 10px 20px;
            margin: 5px;
            margin-right: 10px;
            &.selected{
                border-radius: 0px;
                background-color: ${(props) => props.theme.color};
                color: ${(props) => props.theme.colorBackground};
                border:solid 1px ${(props) => props.theme.color};
            }
        }
    }
}



    /** Device Styles */

    /* mobile styles */
    @media only screen and (max-width: 720px) {
        .block{
            .title{}
            .grid{
                h3{
                    font-size:12px;
                    margin: 2px;
                    margin-right: 4px;
                }
            }
        }
    }

`;
