import styled from 'styled-components';

export const WrapperStyle = styled.div`

/* general */
padding-top: 60px;

.grid{
    display:grid;
    grid-template-columns: 1fr 1fr;
    .box{
        position: relative;
        padding-bottom: 50px;
        h3{
            margin: 10px 0px;
        }
        p{
            margin: 10px 0px;
        }
        &:before{
            content: '';
            height:10px;
            width:10px;
            border-radius: 50%;
            background-color:${(props) => props.theme.color};
            position:absolute;
            left:-5px;
            top:40px;
        }
        &:after{
            content: '';
            height: calc(100% - 26px);
            width:2px;
            background-color:${(props) => props.theme.color};
            position:absolute;
            left:-1px;
            top:57px;
        }
        &.box-left{
            text-align:right;
            padding-right: 30px;
            &:before{
                left: inherit;
                right:-5px;
            }
            &:after{
                left: inherit;
                right:-1px;
            }
            }
        &.box-right{
            text-align:left;
            padding-left: 30px;
            }
        &.box-none{
            &:before{
                content: none;
            }
            &:after{
                content: none;
            }
        }
        &.box-end{
            &:after{
                content: none;
            }
        }
        &.box-moved{
            h3{
                position: relative;
                top: 14px;
                background-color: ${(props) => props.theme.color};
                color: ${(props) => props.theme.colorBackground};
                padding: 10px 20px;
                display:inline-block;
                .move-icon{
                    width:20px;
                }
            }
        }
    }
}

    /** Device Styles */

    /* mobile styles */
    @media only screen and (max-width: 720px) {
        .grid{
            .box{
                h3{
                    font-size:14px;
                    margin: 5px 0px;
                }
                p{
                    font-size:12px;
                    margin: 3px 0px;
                }
                &.box-moved{
                    h3{
                        text-align: center;
                    }
                }
            }
        }
    }

`;
