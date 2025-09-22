import { LucideIcon } from "lucide-react";

type Props = {
  icon: any; // TypeScript typing: icon must be a valid Lucide icon component
};

function Card(props: Props) {
  const { icon: Icon } = props; // JavaScript destructuring + variable renaming

  return (
    <div>
      <Icon size={32} color="#3B82F6" /> // Valid JSX: component name starts
      with uppercase
    </div>
  );
}

export default Card;
