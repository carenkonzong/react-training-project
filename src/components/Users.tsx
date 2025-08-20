import UserComponent from "./User";

type User = {
  name: string;
  email: string;
  phone?: string;
  about?: string;
};

type Props = {
  users: User[];
};

/* function Users(props: Props) {
  const Users = props.users;
  return Users.map((User) => (
    <UserComponent name={User.name} email={User.email} phone={User.phone} />
  ));
} */

function Users(props: Props) {
  const Users = props.users;

  return (
    <section className="grid grid-cols-2">
      {Users.map((user: User) => (
        <article className="border m-5">
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <h3>{user.phone}</h3>
          <h3>{user.about}</h3>
        </article>
      ))}
    </section>
  );
}

export default Users;
