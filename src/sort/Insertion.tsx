import './sortStyle.css';

import { SortProp,Bar } from './Types';

export default function(prop:SortProp){
    let array:Bar[] = [];
    for(let i = 0; i < 10 ; ++i){
        array.push({
            val : i+1,
            red: false,
            green : false
        });
    }
    return (
        <div className='show'>
            {array.map( (val,id) =>{
                return <div className={"sortElement "+ (val.red?"red":"green")} style={{height:20*val.val}}></div>
            })}
        </div>
    );
}