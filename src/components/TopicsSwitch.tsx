interface TopicsSwitchProps {
  setDisplay: (arg0: boolean) => void;
}

export function TopicsSwitch({ setDisplay }: TopicsSwitchProps) {
  return (
    <div className="container flex items-center justify-center scale-75 md:scale-90 lg:scale-100">
      <div className="tabs flex relative bg-[#FFEFDC] rounded-full p-2">
        <>
          <input type="radio" id="radio-1" name="tabs" defaultChecked className="hidden" onClick={() => setDisplay(true)} />

          <label
            className="tab w-40 h-16 text-base leading-4 text-[#CAA982] font-medium cursor-pointer z-[2] flex justify-center items-center"
            htmlFor="radio-1">
            Beginner
          </label>
        </>

        <>
          <input type="radio" id="radio-2" name="tabs" className="hidden" onClick={() => setDisplay(false)} />

          <label
            className="tab w-40 h-16 text-base leading-4 text-[#CAA982] font-medium cursor-pointer z-[2] flex justify-center items-center"
            htmlFor="radio-2">
            Intermediate
          </label>
        </>

        <span className="glider absolute flex h-16 rounded-full transition w-40 duration-200 ease-out bg-orange "></span>
      </div>
    </div>
  );
}
