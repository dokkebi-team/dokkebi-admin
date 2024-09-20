import * as React from "react";

interface ToolboxRootProps {
  children: React.ReactNode;
}

const ToolboxRoot = ({ children }: ToolboxRootProps) => {
  return (
    <div className="flex items-center justify-center space-x-2">{children}</div>
  );
};

interface ToolboxItemProps {}

const ToolboxItem = ({}: ToolboxItemProps) => {
  return <div></div>;
};

interface ToolboxButtonProps extends React.ComponentProps<"button"> {
  icon: React.ReactNode;
  text: string;
}

const ToolboxButton = ({ icon, text }: ToolboxButtonProps) => {
  return (
    <button className="h-full aspect-square flex flex-col items-center justify-center rounded-md p-1 gap-0.5 transition-colors bg-white text-gray-500 hover:bg-gray-200">
      {icon}
      <span className="text-xs">{text}</span>
    </button>
  );
};

interface ToolboxSeparatorProps {}

const ToolboxSeparator = ({}: ToolboxSeparatorProps) => {
  return <div />;
};
