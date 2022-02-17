interface IBlogProps {
  posts: Array<{
    id: number;
    title: string;
    content: string;
  }>;
}

export default function Blog(props: IBlogProps) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id} id={post.id.toString()}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
