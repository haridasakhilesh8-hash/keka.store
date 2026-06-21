import { useParams } from "react-router-dom";
import roleRoadmapsData from "../data/roleRoadmapsData";
import RoleRoadmapDetailPage from "../components/roadmap/RoleRoadmapDetailPage";
import RoadmapNotFound from "../components/roadmap/RoadmapNotFound";

export default function RoleRoadmapPage() {
  const { slug } = useParams();
  const role = roleRoadmapsData.find((r) => r.slug === slug);

  if (!role) return <RoadmapNotFound />;

  return <RoleRoadmapDetailPage role={role} />;
}
