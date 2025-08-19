import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function GuildSelector({ onSelect }) {
  const { data, error } = useSWR('/api/guilds', fetcher);
  if (error) return <p>Error loading guilds.</p>;
  if (!data) return <p>Loading guilds...</p>;
  return (
    <select onChange={e => onSelect(e.target.value)} defaultValue="">
      <option value="" disabled>Select a guild</option>
      {data.map(guild => (
        <option key={guild.guildId} value={guild._id}>{guild.name}</option>
      ))}
    </select>
  );
}
