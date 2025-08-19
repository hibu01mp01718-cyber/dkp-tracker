import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import GuildSelector from '../components/GuildSelector';
import DKPTable from '../components/DKPTable';

export default function Dashboard() {
  const { data: session } = useSession();
  const [guildId, setGuildId] = useState(null);
  if (!session) {
    return <p>You must be signed in to view this page.</p>;
  }
  return (
    <div style={{ padding: 32 }}>
      <Navbar />
      <h2>Welcome, {session.user.name}</h2>
      <GuildSelector onSelect={setGuildId} />
      <DKPTable guildId={guildId} />
    </div>
  );
}
