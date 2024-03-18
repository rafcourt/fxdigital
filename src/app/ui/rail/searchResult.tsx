import Option from '@/app/ui/navigation/option';

const options: Array<string> = [
  "Home",
  "Search"
];

export default function TopNav() {
  return (
    <div id="topnav">
      <>
        {
          options.map((text:string, index:number)=>{
            return(<Option key={`topNavOption-${index}`} text={`${text}`}></Option>)
          })
        }
      </>
    </div>
  );
}
