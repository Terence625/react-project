import ListItem from "./ListItem";

interface INumberListProps {
  numbers: number[];
}

export default function NumberList(props: INumberListProps) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number} />);
  return <ul>{listItems}</ul>;
}
