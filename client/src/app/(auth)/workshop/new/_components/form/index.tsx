'use client';
import { TMember } from '@/types/app';
import { FC } from 'react';
import { Members } from '../members';

type TProps = { members: TMember[] };

export const Form: FC<TProps> = ({ members }) => {
  const openModal = () => {
    if (document && document.getElementById('my_modal_1') !== null) {
      const dialogElement = document.getElementById('my_modal_1') as HTMLDialogElement;
      dialogElement.showModal();
    }
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
          placeholder="workshop name here"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
      </div>

      <div className="flex items-center gap-3">
        <label>登壇者の追加</label>
        <button className="btn btn-outline btn-secondary btn-sm" onClick={openModal}>
          +
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">メンバーの一覧</h3>
            <Members members={members} />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <button className="btn btn-outline btn-secondary">作成</button>
    </div>
  );
};
