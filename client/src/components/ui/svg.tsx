import { SVGProps } from 'react';

export const MemberLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" {...props}>
      <path
        fill="black"
        d="M5.5 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm3-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm7 0h-1v2h1a3 3 0 1 1 0 6h-1v2h1a5 5 0 0 0 0-10ZM0 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2h-2v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2H0v-2Zm24 0a5 5 0 0 0-5-5h-1v2h1a3 3 0 0 1 3 3v2h2v-2Z"
      ></path>
    </svg>
  );
};

export const LearningLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 20 20" {...props}>
      <path
        fill="black"
        d="M6 3h8a1 1 0 0 1 1 1v5.022a5.5 5.5 0 0 1 1 .185V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.257a5.503 5.503 0 0 1-.657-1H6a1 1 0 0 1-1-1h4.207a5.48 5.48 0 0 1-.185-1H5V4a1 1 0 0 1 1-1Zm1 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7Zm6 1v1H7V5h6Zm6 9.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.98-1.966a.452.452 0 0 0-.447-.037a.49.49 0 0 0-.155.108a.51.51 0 0 0-.145.357v3.075a.503.503 0 0 0 .145.358a.562.562 0 0 0 .157.11a.45.45 0 0 0 .323.02a.522.522 0 0 0 .13-.064l2.296-1.567a.469.469 0 0 0 .163-.185a.536.536 0 0 0-.003-.487a.487.487 0 0 0-.167-.182l-2.297-1.506Z"
      ></path>
    </svg>
  );
};

export const HomeLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24" {...props}>
      <path fill="black" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"></path>
    </svg>
  );
};
