import Message from "../components/message";

type Messages = {
  id?: string;
  about: string;
};
type Props = {
  messages: Messages[];
};

function Messages(props: Props) {
  const messages = props.messages;
  return messages.map((message) => <Message about={message.about} />);
}

export default Messages;
