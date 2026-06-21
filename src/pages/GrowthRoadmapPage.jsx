import { useParams } from "react-router-dom";
import growthRoadmapsData from "../data/growthRoadmapsData";
import GrowthRoadmapDetailPage from "../components/roadmap/GrowthRoadmapDetailPage";
import RoadmapNotFound from "../components/roadmap/RoadmapNotFound";

export default function GrowthRoadmapPage() {
  const { slug } = useParams();
  const growth = growthRoadmapsData.find((g) => g.slug === slug);

  if (!growth) return <RoadmapNotFound />;

  return <GrowthRoadmapDetailPage growth={growth} />;
}
