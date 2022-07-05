import Image from 'next/image';
import type { FC } from 'react';

type AvatarProps = {
  children: React.ReactNode;
  imageSize?: number;
  isGradient?: boolean;
};

const Avatar: FC<AvatarProps> = ({
  children,
  imageSize = 66,
  isGradient = true,
}) => {
  return (
    <div className="mx-2 flex flex-col items-center justify-center">
      <div
        className={`relative rounded-full flex flex-col justify-center items-center p-1 ${
          isGradient
            ? 'bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'
            : ''
        }`}
      >
        <Image
          alt="random"
          className="rounded-full"
          height={imageSize}
          layout="fixed"
          src="https://picsum.photos/200"
          width={imageSize}
        />
      </div>
      <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-center text-[12px] leading-[12px] text-[#262626]">
        {children}
      </p>
    </div>
  );
};

export default Avatar;
