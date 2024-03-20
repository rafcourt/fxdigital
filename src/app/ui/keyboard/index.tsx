import KeyMap from '@/app/ui/keyboard/keys';
import RowOfKeys from '@/app/ui/keyboard/row';
import Input from '@/app/ui/keyboard/input';

export default function Keyboard() {
  
  return (
    <>
    <Input></Input>
    <div id="keyboard" className="mt-20 mx-auto w-fit">
      {
        KeyMap.map((rowOfKeys, index)=>{
          return(<RowOfKeys key={index} keys={rowOfKeys}></RowOfKeys>)
        })
      }
    </div>
    <div className="mx-auto bg-blue-900 text-white w-32 h-12 rounded-full text-center overflow-hidden px-5">
      <p className="whitespace-nowrap text-base overflow-hidden w-full mt-3">Search</p>
    </div>
    </>
  );
}