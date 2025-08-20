import MESSAGES from "./Data/messages";
import USERS from "./Data/users.tsx";
import Messages from "./components/Messages";
import Users from "./components/users.tsx";

function App() {
  return (
    <>
      <Messages messages={MESSAGES} />
      <Users users={USERS} />
    </>
  );
}

export default App;
