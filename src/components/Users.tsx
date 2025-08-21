type User = {
  name: string;
  email: string;
  phone?: string;
  about?: string;
  gender?: string;
};

type Props = {
  users: User[];
};

function Users(props: Props) {
  //const Users = props.users;
  const { users } = props;

  return (
    <section>
      <div className="px-10 m-2">
        <h4>
          Filter by:{" "}
          <button
            type="button"
            className="border rounded-2xl px-2 bg-blue-50 cursor-pointer"
          >
            Male
          </button>{" "}
          <button className="border rounded-2xl px-2 bg-blue-50 cursor-pointer">
            Female
          </button>
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {users.map(({ name, email, phone, about }: User) => (
          <article className="border-4 border-solid rounded-3xl p-5 bg-gray-100">
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
            {about ? <h3>About: {about}</h3> : " "}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Users;
