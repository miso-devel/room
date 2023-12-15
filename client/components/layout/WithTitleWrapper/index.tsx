import { FC } from 'react';
type TThemeProps = { title?: string; additionalElms?: React.ReactNode; children: React.ReactNode };

export const WithTitleWrapper: FC<TThemeProps> = ({ title, additionalElms, children }) => {
  return (
    <>
      {title && (
        <div className="flex items-center gap-3 pb-5">
          <h1 className="text-3xl">{title}</h1>
          {additionalElms}
        </div>
      )}
      {children}
    </>
  );
};
