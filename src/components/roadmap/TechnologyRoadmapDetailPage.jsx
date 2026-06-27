import KekaRoadmapLayout from "./KekaRoadmapLayout";

export default function TechnologyRoadmapDetailPage({ tech }) {
  return (
    <KekaRoadmapLayout
      data={{ ...tech, typeLabel: "Technology Roadmap", roadmapType: "technology" }}
    />
  );
}
