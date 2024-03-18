export default function Option({
    text
  }:{
    text:string
  }) {
    const base = "inline-block text-center mx-auto px-6 py-2 mx-3 rounded-3xl";
    const normal = `${base} text-white bg-black`;
    const focus = `${base} text-black bg-yellow-50`;
    const active = `${base} text-black bg-gray-100`;
    return (
      <div className={normal}>{text}</div>
    );
  }