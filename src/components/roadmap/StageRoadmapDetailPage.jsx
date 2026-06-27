import KekaRoadmapLayout from "./KekaRoadmapLayout";

export default function StageRoadmapDetailPage({ stage }) {
  return (
    <KekaRoadmapLayout
      data={{ ...stage, typeLabel: "Stage Roadmap", roadmapType: "stage" }}
    />
  );
}
