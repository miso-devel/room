import { HomeLogo, MemberLogo, LearningLogo } from '../ui/svg';

export const Menus = () => {
  return (
    <div className="flex pr-3">
      <a href="/home" className="btn-ghost p-2 rounded-full">
        <HomeLogo />
      </a>
      <a href="/members" className="btn-ghost p-2 rounded-full">
        <MemberLogo />
      </a>
      <a href="/workshops" className="btn-ghost p-2 rounded-full">
        <LearningLogo />
      </a>
    </div>
  );
};
