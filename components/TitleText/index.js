import { WrapperStyle } from './styles';

const TitleText = () => {  
    return <WrapperStyle>
        <div>
            <h2>
                Hello, I’m Owen. I Am A Front-end Developer From Dublin, Livin’ In London.
            </h2>
            <div className='icons'>
                <a target='_blank' href='https://www.linkedin.com/in/owenmerry/'><img src='./icon-linkedin.svg' /></a>
                <a target='_blank' href='https://github.com/owenmerry'><img src='./icon-github.svg' /></a>
                <a target='_blank' href='https://www.npmjs.com/~owenmerry'><img src='./icon-npm.svg' /></a>
            </div>
        </div>
    </WrapperStyle>;
};

export default TitleText;