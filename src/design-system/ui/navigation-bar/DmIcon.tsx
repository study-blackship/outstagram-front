import type { FC } from 'react';

type DmIconProps = {
  children?: React.ReactNode;
};

const DmIcon: FC<DmIconProps> = () => {
  return (
    <svg
      className="h-[24px] w-[24px]"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DmIcon;
