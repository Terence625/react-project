interface IListItemProps {
  value: number;
}

export default function ListItem(props: IListItemProps) {
  const value = props.value;
  return <li>{value}</li>;
}
