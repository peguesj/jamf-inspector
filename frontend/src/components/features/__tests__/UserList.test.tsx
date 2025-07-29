import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from '../dashboard/UserList.tsx';

describe('UserList', () => {
  it('renders user names and emails', () => {
    const users = [
      { id: 1, username: 'alice', email: 'alice@example.com', full_name: 'Alice Smith' },
      { id: 2, username: 'bob', email: 'bob@example.com', full_name: 'Bob Jones' },
    ];
    render(<UserList users={users} />);
    expect(screen.getByText('alice')).toBeInTheDocument();
    expect(screen.getByText('bob')).toBeInTheDocument();
    expect(screen.getByText('alice@example.com')).toBeInTheDocument();
    expect(screen.getByText('bob@example.com')).toBeInTheDocument();
  });

  it('shows empty state if no users', () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });
});
