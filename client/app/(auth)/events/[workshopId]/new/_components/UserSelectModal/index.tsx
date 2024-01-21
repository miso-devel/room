'use client';
import { FC, MouseEventHandler, useState } from 'react';
import { schema } from '../../../../../../../types/common';
import { Checkbox } from '../../../../../../../components/ui/Form/Checkbox';
import { UserProfile } from '../../../../../../../features/user/components/UserProfile';
import { SvgImage } from '../../../../../../../components/ui/Image/SvgImage';

type TUserSelectModalProps = { users: schema['User'][] };

export const UserSelectModal: FC<TUserSelectModalProps> = ({ users }) => {
  const [modalState, setModalState] = useState(false);

  const modalHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setModalState(() => !modalState);
  };

  return (
    <div>
      <div className="flex items-center gap-3 pb-2">
        <label>登壇者の追加</label>
        <button onClick={modalHandler}>
          <SvgImage svgName="add" svgAlt="登壇者の追加" ariaLabel="登壇者の追加" width={25} height={25} />
        </button>
      </div>
      {modalState && (
        <div className="flex flex-wrap gap-2">
          {users.map((user) => {
            return (
              <Checkbox label={user.id} name="discordIds" value={user.id} key={user.id}>
                <UserProfile name={user.name} avatarPath={user.avatar} />
              </Checkbox>
            );
          })}
        </div>
      )}
    </div>
  );
};
