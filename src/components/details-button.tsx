'use client';

// Utils
import { cn } from '@/lib/utils';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

// Types
type Company = { name: string; value: number; id?: number };

// Components
import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from 'lucide-react';

const DetailsButton = ({ company }: { company: Company }) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const companyId = searchParams.get('company');
  const timeframeId = searchParams.get('timeframe');
  const isActive = companyId === company.id?.toString();
  const qs = [
    isActive ? null : `company=${company.id?.toString()}`,
    timeframeId ? `timeframe=${timeframeId}` : null,
  ]
    .filter((el) => el)
    .join('&');

  return (
    <Button
      variant={isActive ? 'default' : 'secondary'}
      className='gap-x-10 transition-all'
      onClick={() => router.push(`${pathName}?${qs}`, { scroll: false })}
    >
      {company.name}
      <ChevronDownIcon
        className={cn('w-4 h-4 text-white', {
          'rotate-180': isActive,
        })}
      />
    </Button>
  );
};

export default DetailsButton;
