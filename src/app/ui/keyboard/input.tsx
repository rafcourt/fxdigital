"use client"

const caret = "|";
export default function Input({query=''}:{query:string}) {
  return (
    <div id="input" className="whitespace-nowrap text-base mx-auto bg-white w-80 h-12 rounded-full text-center px-5 py-3">
        { query + caret }
    </div>
  );
}