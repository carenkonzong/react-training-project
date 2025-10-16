type Props = {
  type: string;
  attribute: string;
  placeholder?: string;
};

function Input(props: Props) {
  return (
    <div className="mb-10">
      <h3 className="mb-3">{props.attribute}</h3>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="border rounded-lg w-full border-black/10 bg-white p-2"
      />
    </div>
  );
}

export default Input;
