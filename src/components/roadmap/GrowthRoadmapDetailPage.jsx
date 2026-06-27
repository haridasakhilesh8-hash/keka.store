import KekaRoadmapLayout from "./KekaRoadmapLayout";

export default function GrowthRoadmapDetailPage({ growth }) {
  return (
    <KekaRoadmapLayout
      data={{ ...growth, typeLabel: "Growth Roadmap", roadmapType: "growth" }}
    />
  );
}
