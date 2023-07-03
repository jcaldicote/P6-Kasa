import { useParams } from "react-router-dom";
import { useFetchLogement } from "../hooks/useApi";
import Layout from "../components/Layout";
import DevDump from "../components/DevDump";
import ErrorPage from "./ErrorPage.jsx";

export default function Logement() {
  let { logementId } = useParams();
  const { data, loading, error } = useFetchLogement(logementId);

  if (loading) return <div>Page is loading ...</div>;
  if (error || !data) return <ErrorPage />;

  return (
    <>
      <DevDump data={{ loading, data }} />
      <h1>Logement</h1>
    </>
  );
}
