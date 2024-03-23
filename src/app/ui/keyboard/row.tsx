import Key from '@/app/ui/keyboard/key';

export default function RowOfKeys({
    keys,
    onEnterPress
}:{
    keys:Array<string>,
    onEnterPress:<T>(key: T)=>void
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