import type { FC } from 'react';

import CameraIcon from './CameraIcon';
import DmIcon from './DmIcon';

type NavigationBarProps = {
  children?: React.ReactNode;
};

const NavigationBar: FC<NavigationBarProps> = () => {
  return (
    <nav className="navbar">
      <CameraIcon />
      <h1 className="text-4xl">Outstagram</h1>
      <DmIcon />
    </nav>
  );
};

export default NavigationBar;
