import Option from '@/app/ui/navigation/option';
import { useFocusable, FocusContext } from '@noriginmedia/react-spatial-navigation';

type menuOption = {
  text:string,
  route:string
}
const options: Array<menuOption> = [
  {text:"Home",route:"/home"},
  {text:"Search",route:"/home/search"}
];

export default function TopNav() {
  const { ref, focusKey } = useFocusable({ focusKey: 'TOPNAV' });
  return (
  <>
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} id="topnav" className="w-fit mx-auto py-8">
          {
            options.map((option:menuOption, index:number)=>{
              return(<Option key={`topNavOption-${index}`} text={option.text} route={option.route}></Option>)
            })
          }
      </div>
    </FocusContext.Provider>
  </>
  );
}