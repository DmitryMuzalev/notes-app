import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgCrossIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m6 6 12 12m0-12L6 18'
    />
  </svg>
);
const Memo = memo(SvgCrossIcon);
export default Memo;
