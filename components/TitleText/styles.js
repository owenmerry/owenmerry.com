import styled from 'styled-components';

export const WrapperStyle = styled.div`
padding-top: 60px;
padding-bottom: 60px;

/* general */
h2{
    font-size: 48px;
    max-width:495px;
    margin-bottom: 26px;
}

.icons{
    a{
        margin-right: 18px;
    }
}

    /** Device Styles */

    /* mobile styles */
    @media only screen and (max-width: 720px) {
        padding-top: 80px;
        padding-bottom: 80px;
        h2{
            font-size: 32px;
            padding-right: 10%;
        }
    }

`;
