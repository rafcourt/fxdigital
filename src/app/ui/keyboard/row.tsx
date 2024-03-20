import Key from '@/app/ui/keyboard/key';

export default function RowOfKeys({
    keys
}:{
    keys:Array<string>
}) {
  
  return (
    <div className="whitespace-nowrap overflow-hidden text-white mb-5">
        {
            keys.map((val,index)=>{
                return(<Key key={index} value={val}></Key>)
            })
        }
    </div>
  );
}