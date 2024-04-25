import HelmetMeta from '@components/Helmet/HelmetMeta';
import MatchesList from '@components/MatchesList/MatchesList';

export default function Matches() {
  const title = '';
  const description = '';

  return (
    <main>
      <HelmetMeta title={title} description={description} />
      <MatchesList />
    </main>
  );
}
