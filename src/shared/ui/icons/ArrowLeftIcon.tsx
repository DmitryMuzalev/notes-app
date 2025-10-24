import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
    <path
      fill='#000'
      fillRule='evenodd'
      d='M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7z'
      clipRule='evenodd'
    />
  </svg>
);
const Memo = memo(SvgArrowLeftIcon);
export default Memo;
