interface IMailboxProps {
  unreadMessages: Array<string>;
}

export default function Mailbox(props: IMailboxProps) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Mailbox</h1>
      {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
    </div>
  );
}
