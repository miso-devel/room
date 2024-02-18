import Image from 'next/image'
import type { FC } from 'react'

type SvgImageProps = {
  svgName: string
  svgAlt: string
  ariaLabel: string
  className?: string
  width?: number
  height?: number
}

export const SvgImage: FC<SvgImageProps> = ({ svgName, svgAlt, ariaLabel, className, width, height }) => {
  return (
    <Image
      src={`/svg/${svgName}.svg`}
      alt={svgAlt}
      width={width ?? 30}
      height={height ?? 30}
      className={`${className} rounded-full border-2 border-transparent bg-middle fill-dark p-1 hover:border-dark hover:bg-accent`}
      aria-label={ariaLabel}
    />
  )
}
