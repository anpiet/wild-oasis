'use client';
import { useState } from 'react';
import { User } from '../types/user';

type CounterProps = {
  users: User[];
};
export const Counter = ({ users }: CounterProps) => {
  const [count, setCount] = useState(0);
  console.log(users);
  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
};
