import { useParams } from "react-router-dom";
import { useFetchLogement } from "../hooks/useApi";
import Layout from "../components/Layout";
import DevDump from "../components/DevDump";

export default function Logement() {
  // let { id } = useParams();
  // const { data, loading } = useFetchLogement(id);
  return (
    <>
      {/* <DevDump data={{ loading, data }} /> */}
      <h1>Logement</h1>
    </>
  );
}
