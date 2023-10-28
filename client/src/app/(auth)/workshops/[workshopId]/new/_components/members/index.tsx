'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
import { components } from '@/types/schema';
import { TMemberState } from '@/types/state';

type TMemberForm = { theme: string; url: string };

type TProps = {
  members: components['schemas']['User'][];
  memberState: TMemberState<Map<string, components['schemas']['User'] & TMemberForm>>;
};

export const Members: FC<TProps> = ({ members, memberState }) => {
  return (
    <div className="flex flex-col gap-3">
      {members.map((member) => {
        return <Member member={member} key={member.id} memberState={memberState} />;
      })}
    </div>
  );
};

type TMemberProps = {
  member: components['schemas']['User'];
  memberState: TMemberState<Map<string, components['schemas']['User'] & TMemberForm>>;
};

const Member: FC<TMemberProps> = ({ member, memberState }) => {
  const [selected, setChecked] = useState(false);
  const isSetAvatar = member.avatar?.split('/')[member.avatar?.split('/').length - 1] !== 'NaN.png';

  return (
    <div className="form-control flex items-start justify-center" key={member.id}>
      <label className="cursor-pointer label">
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => {
            if (e.target.checked) {
              memberState.state.set(member.id, { ...member, theme: '', url: '' });
            } else {
              memberState.state.delete(member.id);
            }
            memberState.setState(new Map(memberState.state));
            setChecked(() => e.target.checked);
          }}
          className="checkbox checkbox-secondary"
        />
        <span className="label-text flex gap-3 items-center mx-3">
          {isSetAvatar ? (
            <Image
              src={member.avatar as string}
              alt="avatar_image"
              width={25}
              height={25}
              className="rounded-full m-0"
            />
          ) : (
            <div className="w-[25px] h-[25px] rounded-full bg-secondary m-0" />
          )}
          <p className="m-0">{member.name}</p>
        </span>
      </label>
    </div>
  );
};
