import { twMerge } from 'tailwind-merge';

export default function Box({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={twMerge('flex flex-wrap', className)} {...props} />;
}
