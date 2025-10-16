type Props = {
  option1: string;
  option2: string;
  type: string;
};

function Select(props: Props) {
  return (
    <>
      <div>
        <h1 className="mb-3">{props.type}</h1>
        <select className="border rounded-lg w-full border-black/10 bg-white p-2">
          <option>{props.option1}</option>
          <option>{props.option2}</option>
        </select>
      </div>
    </>
  );
}

export default Select;
