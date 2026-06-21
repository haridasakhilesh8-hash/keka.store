import { useParams } from "react-router-dom";
import technologyRoadmapsData from "../data/technologyRoadmapsData";
import TechnologyRoadmapDetailPage from "../components/roadmap/TechnologyRoadmapDetailPage";
import RoadmapNotFound from "../components/roadmap/RoadmapNotFound";

export default function TechnologyRoadmapPage() {
  const { slug } = useParams();
  const tech = technologyRoadmapsData.find((t) => t.slug === slug);

  if (!tech) return <RoadmapNotFound />;

  return <TechnologyRoadmapDetailPage tech={tech} />;
}
