import KeyMap from '@/app/ui/keyboard/keys';
import RowOfKeys from '@/app/ui/keyboard/row';
import Input from '@/app/ui/keyboard/input';
import SearchButton from '@/app/ui/keyboard/search-button';
import { useState, useCallback } from 'react';
import { keyPressEvent } from '../focusable';

export default function Keyboard() {

  const [query, addSelectedKeyToQuery] = useState('');

  const onKeyPress = useCallback(({keyFace}:keyPressEvent) => {
    addSelectedKeyToQuery((query:string)=>{
      return query + keyFace;
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