import { FC } from 'react';
import Image from 'next/image';
import { components } from '@/types/schema';

type TProps = { members: components['schemas']['User'][] };

export const Members: FC<TProps> = ({ members }) => {
  return (
    <div className="flex flex-col gap-5">
      {members.map((member) => {
        return <Member member={member} key={member.id} />;
      })}
    </div>
  );
};

type TMemberProps = { member: components['schemas']['User'] };

const Member: FC<TMemberProps> = ({ member }) => {
  const isSetAvatar = member.avatar?.split('/')[member.avatar?.split('/').length - 1] !== 'NaN.png';
  return (
    <div key={member.id} className="flex gap-3 items-center">
      {isSetAvatar ? (
        <Image src={member.avatar as string} alt="me" width={30} height={30} className="rounded-full m-0" />
      ) : (
        <div className="w-[30px] h-[30px] rounded-full bg-secondary m-0" />
      )}
      <p className="m-0">{member.name}</p>
    </div>
  );
};
