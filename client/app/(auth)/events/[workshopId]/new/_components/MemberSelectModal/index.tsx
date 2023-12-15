'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
import { schema } from '../../../../../../../types/common';
import { Checkbox } from '../../../../../../../components/ui/Form/Checkbox';
type TMemberSelectModalProps = { members: schema['User'][] };

const AddSvg: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="22"
      className="fill-dark hover:fill-dark bg-middle rounded-md hover:bg-accent hover:text-dark transition-all"
      viewBox="0 -960 960 960"
      width="22"
    >
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </svg>
  );
};

export const MemberSelectModal: FC<TMemberSelectModalProps> = ({ members }) => {
  const [modalState, setModalState] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-3 pb-2">
        <label>登壇者の追加</label>
        <button
          className="rounded-md border-bright border-2"
          onClick={(e) => {
            e.preventDefault();
            setModalState(true);
          }}
        >
          <AddSvg />
        </button>
      </div>
      {modalState && (
        <div className="flex flex-col gap-2 text-dark">
          {members.map((member) => {
            return (
              <Checkbox label={member.id} name="members" value={member.id} key={member.id}>
                <div className="flex gap-2 items-center">
                  {member.avatar?.split('/')[member.avatar?.split('/').length - 1] !== 'NaN.png' ? (
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
                  <p className="text-sm">{member.name}</p>
                </div>
              </Checkbox>
            );
          })}
        </div>
      )}
    </div>
  );
};
