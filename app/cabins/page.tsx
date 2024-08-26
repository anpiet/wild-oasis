import { User } from '../types/user';

export const metadata = {
  title: 'Cabins',
};

const Page = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users');

  const users: User[] = await res.json();
  return (
    <>
      <h1>Cabins</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Page;
