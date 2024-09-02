// Utils
import { cn } from '@/lib/utils';

// Components
import Image from 'next/image';

import { UsersRoundIcon } from 'lucide-react';
import { Handle, Position } from '@xyflow/react';

// TODO: dinamically generate Handle component based on the number of nodes we must point at
const LogoNode = ({
  data,
  isIngoing = true,
}: {
  data: {
    employee: number;
    handlesCount: number;
    company: {
      name: string;
      slug: string;
    };
  };
  isIngoing?: boolean;
}) => {
  let top = 25;
  let renderedLogoHeight = 135;

  return (
    <div
      className={cn('flex items-center gap-4', {
        'flex-row-reverse': isIngoing,
      })}
    >
      <div className='flex items-center gap-2'>
        <UsersRoundIcon className='w-6 h-6 text-grey-300' />
        <span className='text-lg font-medium text-grey-900'>
          {data.employee}
        </span>
      </div>

      <div className='rounded-xl bg-grey-100 px-12 py-10 outline outline-4 outline-grey-100'>
        <Image
          src={'/images/company-logos/' + data.company.slug + '.png'}
          alt={data.company.name}
          width={90}
          height={109}
        />

        {Array.from({ length: data.handlesCount }).map((_, index) => (
          <>
            <Handle
              type='source'
              position={isIngoing ? Position.Left : Position.Right}
              id={(index + 2).toString()}
              style={{ top: top + renderedLogoHeight / 2 }}
              className='opacity-0'
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default LogoNode;
