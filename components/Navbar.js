import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav style={{ padding: 16, borderBottom: '1px solid #ccc' }}>
      <Link href="/">Home</Link> | <Link href="/dashboard">Dashboard</Link>
      {session ? (
        <>
          {' '}| Signed in as {session.user.name}{' '}
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn('discord')}>Sign in with Discord</button>
      )}
    </nav>
  );
}
