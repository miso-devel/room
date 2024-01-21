import { FC } from 'react';
import Image from 'next/image';

type TSvgImageProps = {
  svgName: string;
  svgAlt: string;
  ariaLabel: string;
  className?: string;
  width?: number;
  height?: number;
};

export const SvgImage: FC<TSvgImageProps> = ({ svgName, svgAlt, ariaLabel, className, width, height }) => {
  return (
    <Image
      src={`/svg/${svgName}.svg`}
      alt={svgAlt}
      width={width ?? 30}
      height={height ?? 30}
      className={`${className} rounded-md border-2 border-transparent bg-middle fill-dark p-1 hover:border-dark hover:bg-accent`}
      aria-label={ariaLabel}
    />
  );
};
