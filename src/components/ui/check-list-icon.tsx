import { CheckIcon } from "lucide-react";

type ChecklistIconProps = {
  text?: string;
};

export const ChecklistItem = ({ text }: ChecklistIconProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
        <CheckIcon className="w-3 h-3 text-white" />
      </div>
      <span className="text-sm font-bold">{text}</span>
    </div>
  );
};
