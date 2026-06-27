import KekaRoadmapLayout from "./KekaRoadmapLayout";

export default function RoleRoadmapDetailPage({ role }) {
  return (
    <KekaRoadmapLayout
      data={{ ...role, typeLabel: "Role-Based Roadmap", roadmapType: "role" }}
    />
  );
}
