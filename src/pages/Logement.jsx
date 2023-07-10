import { useParams } from "react-router-dom";
import { useFetchLogement } from "../hooks/useApi";
import Layout from "../components/Layout";
import DevDump from "../components/DevDump";
import ErrorPage from "./ErrorPage.jsx";
import { Carousel } from "../components/Slideshow.jsx";
import "./Logement.scss";

export default function Logement() {
  let { logementId } = useParams();
  const { data, loading, error } = useFetchLogement(logementId);

  if (loading) return <div>Page is loading ...</div>;
  if (error || !data) return <ErrorPage />;

  return (
    <>
      {/* <DevDump data={{ loading, data }} /> */}
      <div className="logement">
        <Carousel images={data.pictures} />
        <div className="logement-details">
          <div className="logement__main">
            <div className="logement__main_title">
              <h2>{data.title}</h2>
              <span>{data.location}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
