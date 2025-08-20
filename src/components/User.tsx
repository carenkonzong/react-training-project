type Props = {
  name: string;
  email: string;
  phone: string;
  about: string;
};

function UserComponent(props: Props) {
  return (
    <>
      <div className="border m-5 grid">
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.about}</p>
      </div>
    </>
  );
}

export default UserComponent;
