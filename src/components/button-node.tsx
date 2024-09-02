// Utils
import { cn } from '@/lib/utils';

// Components
import { UsersRoundIcon } from 'lucide-react';
import DetailsButton from '@/components/details-button';
import { Handle, Position } from '@xyflow/react';

const ButtonNode = ({ data }: { data: any }) => {
  const isIngoing = data.isIngoing ?? true;
  return (
    <div
      className={cn('flex items-center gap-x-4', {
        'flex-row-reverse': isIngoing,
      })}
    >
      <div
        className={cn('bg-grey-100 outline outline-4 outline-grey-100', {
          'rounded-r-full': !isIngoing,
          'rounded-l-full': isIngoing,
        })}
      >
        <DetailsButton company={data.company} />
        <Handle
          type='target'
          position={isIngoing ? Position.Right : Position.Left}
          id='a'
          className='opacity-0'
        />
      </div>

      <div className='flex items-center gap-2'>
        <UsersRoundIcon className='w-6 h-6 text-grey-300' />
        <span className='text-lg font-medium text-grey-900'>
          {data.company.value}
        </span>
      </div>
    </div>
  );
};

export default ButtonNode;
