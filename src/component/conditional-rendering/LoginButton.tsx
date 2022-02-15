interface ILoginButtonProps {
  onClick: () => void;
}

export default function LoginButton(props: ILoginButtonProps) {
  return <button onClick={props.onClick}>Login</button>;
}
