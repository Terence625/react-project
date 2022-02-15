interface ILogoutButtonProps {
  onClick: () => void;
}

export default function LogoutButton(props: ILogoutButtonProps) {
  return <button onClick={props.onClick}>Logout</button>;
}
