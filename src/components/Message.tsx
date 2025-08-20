type Props = {
  about: string;
};

function Message(props: Props) {
  return (
    <>
      <p>{props.about}</p>
    </>
  );
}

export default Message;
