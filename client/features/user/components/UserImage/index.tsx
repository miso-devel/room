import Image from 'next/image'
import type { FC } from 'react'

type UserImageProps = { name: string; avatarPath: string }

export const UserImage: FC<UserImageProps> = ({ name, avatarPath }) => {
  const splited = avatarPath?.split('/')

  return (
    <>
      {splited[splited.length - 1] !== 'NaN.png' ? (
        <Image src={avatarPath} alt={`${name}のアバター画像`} width={25} height={25} className='rounded-full' />
      ) : (
        <div className='h-[25px] w-[25px] rounded-full bg-secondary' />
      )}
    </>
  )
}
