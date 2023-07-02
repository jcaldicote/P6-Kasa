import MainBanner from '../components/Banner';
import Layout from '../components/Layout';
import DevDump from '../components/DevDump';
import { useFetchLogements } from '../hooks/useApi';

export default function Home() {
  const { data, loading } = useFetchLogements();
  return (
    <Layout>
      <DevDump data={{ loading, data }} />
      <MainBanner />
    </Layout>
  );
}
