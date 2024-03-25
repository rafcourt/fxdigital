import Key from '@/app/ui/keyboard/key';
import { keyPressEvent } from '../focusable';

export default function RowOfKeys({
    keys,
    onEnterPress
}:{
    keys:Array<string>,
    onEnterPress:(arg: keyPressEvent)=>void
}) {
    return (
        <div className="whitespace-nowrap overflow-hidden text-white mb-5">
        {
            keys.map((val,index)=>{
                return(<Key key={index} kbValue={val} onEnterPress={onEnterPress}></Key>)
            })
        }
    </div>
  );
}