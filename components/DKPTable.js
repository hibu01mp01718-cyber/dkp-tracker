import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function DKPTable({ guildId }) {
  const { data, error } = useSWR(guildId ? `/api/dkp?guild=${guildId}` : null, fetcher);
  if (!guildId) return <p>Select a guild to view DKP.</p>;
  if (error) return <p>Error loading DKP.</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <table style={{ background: '#fff', borderRadius: 8, padding: 16, width: '100%' }}>
      <thead>
        <tr>
          <th>User</th>
          <th>DKP</th>
        </tr>
      </thead>
      <tbody>
        {data.map(entry => (
          <tr key={entry._id}>
            <td>{entry.user?.name || 'Unknown'}</td>
            <td>{entry.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
