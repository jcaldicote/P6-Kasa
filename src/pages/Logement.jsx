import { useParams } from "react-router-dom";
import { useFetchLogement } from "../hooks/useApi";
import Layout from "../components/Layout";
import DevDump from "../components/DevDump";
import ErrorPage from "./ErrorPage.jsx";
import { Carousel } from "../components/Slideshow.jsx";
import "./Logement.scss";
import { Tag } from "../components/Tag.jsx";
import { Stars } from "../components/Stars.jsx";
export default function Logement() {
  let { logementId } = useParams();
  const { data, loading, error } = useFetchLogement(logementId);

  if (loading) return <div>Page is loading ...</div>;
  if (error || !data) return <ErrorPage />;

  const starCounts = Stars(data.rating);

  return (
    <>
      {/* <DevDump data={{ loading, data }} /> */}
      <div className="logement">
        <Carousel images={data.pictures} />
        <div className="logement-details">
          <div className="logement__main">
            <div className="logement__main_title">
              <h2>{data.title}</h2>
              <span className="logement__main_title__location">
                {data.location}
              </span>
              <div className="tag">
                {data.tags.map((t, index) => (
                  <Tag key={index} tag={t} />
                ))}
              </div>
            </div>
            <div className="logement__stats">
              <div className="logement__main_name">
                <span>{data.host.name}</span>
                <img src={data.host.picture} alt={data.host.name} />
              </div>
              <div className="count-box">
                {starCounts.map((count, index) => (
                  <span className="count-star" key={index}>
                    {count}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
