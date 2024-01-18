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
      className="rounded-md bg-middle fill-dark transition-all hover:bg-accent hover:fill-dark hover:text-dark"
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
          className="rounded-md border-2 border-bright"
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
              <Checkbox label={member.id} name="discordIds" value={member.id} key={member.id}>
                <div className="flex items-center gap-2">
                  {member.avatar?.split('/')[member.avatar?.split('/').length - 1] !== 'NaN.png' ? (
                    <Image
                      src={member.avatar as string}
                      alt="avatar_image"
                      width={25}
                      height={25}
                      className="m-0 rounded-full"
                    />
                  ) : (
                    <div className="m-0 h-[25px] w-[25px] rounded-full bg-secondary" />
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
