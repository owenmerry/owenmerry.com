import { WrapperStyle } from './styles';
import { data } from './data';


const JobBlock = (props) => {

return <>
    <h3>{props.data.job}</h3>
    {props.data.date && (<h3>{props.data.date}</h3>)}
    <p>{props.data.company}</p>
    <p>{props.data.location}</p>
</>;

};

const Timeline = () => {
    return <WrapperStyle>
        <div className='grid'>
            {data.map((item, key) => (
                <>
                    <div className={'box box-left '+ 
                        (item.pos !== 'left' ? 'box-none' : '') + ' ' +
                        (item.type === 'moved' ? 'box-moved' : '') + ' ' + 
                        (item.end ? 'box-end' : '') }>
                            {item.pos === 'left' && (<JobBlock data={item} />)}
                    </div>
                    <div className={'box box-right '+ 
                        (item.pos !== 'right' ? 'box-none' : '') + ' ' +
                        (item.type === 'moved' ? 'box-moved' : '') + ' ' +
                        (item.end ? 'box-end' : '')}>
                            {item.pos === 'right' && (<JobBlock data={item} />)}
                    </div>
                </>
            ))}
        </div>
    </WrapperStyle>;
};

export default Timeline;