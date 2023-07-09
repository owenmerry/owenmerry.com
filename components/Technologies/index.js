import { WrapperStyle } from './styles';
import { data } from './data';

const Technologies = ({theme}) => {
    return <WrapperStyle theme={theme}>
    {data.map((item, key) => (
        <div key={key} className='block'>
            <div className='title'>{item.title} {item.time && (<span>{item.time}</span>)}</div>
            <div className='grid'>
            {item.items.map((tech,key) => (
                <h3 key={key}
                class={tech.selected ? `selected` : ``}
                >{tech.title}</h3>
            ))}
            </div>
        </div>
    ))}
    </WrapperStyle>;
    };

export default Technologies;