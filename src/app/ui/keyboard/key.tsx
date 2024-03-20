

export default function Key({value}:{value:string}) {
    const base = "w-16 h-fit inline-block relative text-center px-1 py-1 mx-2 rounded-l";
    const normal = `${base} bg-blue-900`;
    const focus = `${base} bg-blue-100 text-black`;
    return (
    <div className={normal}>
        <p className="text-base">{value}</p>
    </div>
  );
}