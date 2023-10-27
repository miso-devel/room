'use client';
import { FC, useState } from 'react';

export const WorkshopForm: FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/workshops`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
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

      <div className="flex justify-center">
        <button className="btn btn-outline btn-secondary w-full" onClick={onSubmit}>
          作成
        </button>
      </div>
    </div>
  );
};
