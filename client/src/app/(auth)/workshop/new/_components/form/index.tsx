'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
import { Members } from '../members';
import { components } from '@/types/schema';

type TProps = { members: components['schemas']['User'][] };
type TMemberForm = { theme: string; url: string };

export const Form: FC<TProps> = ({ members }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [isRegular, setIsRegular] = useState(false);
  const [checkedMember, setCheckedMember] = useState<Map<string, components['schemas']['User'] & TMemberForm>>(
    new Map()
  );
  const [definedMember, setDefinedMember] = useState<Map<string, components['schemas']['User'] & TMemberForm>>(
    new Map()
  );

  const openModal = () => {
    if (document && document.getElementById('my_modal_1') !== null) {
      const dialogElement = document.getElementById('my_modal_1') as HTMLDialogElement;
      dialogElement.showModal();
    }
  };

  const onSubmit = async () => {
    await fetch(`${process.env.SERVER_URL}/workshop`, {
      method: 'POST',
      body: JSON.stringify({ title, description, date, isRegular, members: definedMember }),
      mode: 'cors',
      credentials: 'include',
    });
  };

  return (
    <div className="flex gap-5 flex-col">
      <div className="flex flex-col">
        <label htmlFor="workshop_name" className="pb-2">
          勉強会名
        </label>
        <input
          id="workshop_name"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="workshop name here"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="workshop_name" className="pb-2">
          説明
        </label>
        <textarea
          className="textarea textarea-secondary"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="workshop_datetime" className="pb-2">
          時間
        </label>
        <input
          id="workshop_datetime"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="date here"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
      </div>
      <div>
        <label className="cursor-pointer flex flex-col items-start w-16">
          <div className="pb-2">定期開催</div>
          <input
            type="checkbox"
            className="toggle toggle-secondary"
            checked={isRegular}
            onChange={(e) => setIsRegular(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <div className="flex items-center gap-3 pb-2">
          <label>登壇者の追加</label>
          <button className="btn btn-outline btn-secondary btn-sm" onClick={openModal}>
            +
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">メンバーの一覧</h3>
              <Members members={members} memberState={{ state: checkedMember, setState: setCheckedMember }} />
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn" onClick={() => setDefinedMember(new Map(checkedMember))}>
                    変更する
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>

        <div className=" flex gap-3 flex-col">
          {Array.from(definedMember.values()).map((definedMember) => {
            return (
              <div key={definedMember.id} className="flex gap-3 items-center">
                {definedMember.avatar?.split('/')[definedMember.avatar?.split('/').length - 1] !== 'NaN.png' ? (
                  <Image
                    src={definedMember.avatar as string}
                    alt="avatar_image"
                    width={25}
                    height={25}
                    className="rounded-full m-0"
                  />
                ) : (
                  <div className="w-[25px] h-[25px] rounded-full bg-secondary m-0" />
                )}
                <p className="m-0">{definedMember.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline btn-secondary w-full">作成</button>
      </div>
    </div>
  );
};
