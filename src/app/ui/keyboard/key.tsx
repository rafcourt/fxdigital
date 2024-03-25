import FocusableElement, { keyPressEvent } from '@/app/ui/focusable';

const base = "w-16 h-fit inline-block relative text-center px-1 py-1 mx-2 rounded-l";
const normal = `${base} bg-blue-900`;
const focus = `${base} bg-blue-100 text-black`;

export default function FocusableKey({
    kbValue,
    onEnterPress
  }:{
    kbValue:string,
    onEnterPress:(arg: keyPressEvent)=>void
  }){
    return (
      <FocusableElement 
      focusKey={kbValue} 
      focusClassNames={focus} 
      normalClassNames={normal} 
      onEnterPress={onEnterPress}
      extraProps={{keyFace:kbValue}}>
        {kbValue}
      </FocusableElement>
    );
  };