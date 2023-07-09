import { WrapperStyle } from './styles';
import { GitHubIcon, LinkedinIcon, NpmIcon } from './icons';

const TitleText = ({theme}) => {  
    return <WrapperStyle>
        <div>
            <h2>
                Hello, I’m Owen. I Am A Front-end Developer From Dublin, Livin’ In London.
            </h2>
            <div className='icons'>
                <a target='_blank' href='https://www.linkedin.com/in/owenmerry/'><LinkedinIcon color={theme.color}/></a>
                <a target='_blank' href='https://github.com/owenmerry'><GitHubIcon color={theme.color} /></a>
                <a target='_blank' href='https://www.npmjs.com/~owenmerry'><NpmIcon color={theme.color} colorBackground={theme.colorBackground}/></a>
            </div>
        </div>
    </WrapperStyle>;
};

export default TitleText;