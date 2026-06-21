import { useParams } from "react-router-dom";
import stageRoadmapsData from "../data/stageRoadmapsData";
import StageRoadmapDetailPage from "../components/roadmap/StageRoadmapDetailPage";
import RoadmapNotFound from "../components/roadmap/RoadmapNotFound";

export default function StageRoadmapPage() {
  const { slug } = useParams();
  const stage = stageRoadmapsData.find((s) => s.slug === slug);

  if (!stage) return <RoadmapNotFound />;

  return <StageRoadmapDetailPage stage={stage} />;
}
