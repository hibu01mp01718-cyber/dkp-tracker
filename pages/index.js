import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  return (
    <div style={{ padding: 32 }}>
      <h1>DKP Tracker</h1>
      {session ? (
        <>
          <p>Signed in as {session.user.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
          <br />
          <Link href="/dashboard">Go to Dashboard</Link>
        </>
      ) : (
        <button onClick={() => signIn('discord')}>Sign in with Discord</button>
      )}
    </div>
  );
}
