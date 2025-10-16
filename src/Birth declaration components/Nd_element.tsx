type Props = {
  head: string;
  subhead: string;
  children?: React.ReactNode;
};

function Nd_element({ head, subhead, children }: Props) {
  return (
    <div className="flex justify-center pt-5">
      <div className="max-w-[1024px] bg-[#fbfbfb] border w-full p-8 pb-0 shadow-lg rounded-2xl border-black/10">
        <h1 className="text-2xl font-bold mb-1 ">{head}</h1>
        <h2 className="mb-8 text-gray-500">{subhead}</h2>
        {children}
      </div>
    </div>
  );
}

export default Nd_element;
