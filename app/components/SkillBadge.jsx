export default function SkillBadge({ skill }) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow text-center">
      <p className="font-semibold">{skill}</p>
    </div>
  );
}