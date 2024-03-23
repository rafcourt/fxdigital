import KeyMap from '@/app/ui/keyboard/keys';
import RowOfKeys from '@/app/ui/keyboard/row';
import Input from '@/app/ui/keyboard/input';
import SearchButton from '@/app/ui/keyboard/search-button';
import { useState, useCallback } from 'react';

export default function Keyboard() {

  const [query, addSelectedKeyToQuery] = useState('');
  type T = {
    keyFace: string
  }
  const onKeyPress = useCallback(<T extends {keyFace:string}>(key: T) => {
    addSelectedKeyToQuery((query:string)=>{
      return query + key.keyFace;
    });
  }, []);

  return (
    <>
    <Input query={query}></Input>
    <div id="keyboard" className="mt-20 mx-auto w-fit">
      {
        KeyMap.map((rowOfKeys, index)=>{
          return(<RowOfKeys key={index} keys={rowOfKeys} onEnterPress={onKeyPress}></RowOfKeys>)
        })
      }
    </div>
    <SearchButton query={query}></SearchButton>
    </>
  );
}