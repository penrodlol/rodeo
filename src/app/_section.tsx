import { twMerge } from 'tailwind-merge';

export default function Section({ children, className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section className="border-gray-6 group border-b border-dashed" {...props}>
      <div
        className={twMerge(
          'border-gray-6 mx-auto w-full max-w-screen-2xl border-x border-dashed',
          'px-20 pt-14 pb-20 not-lg:px-8 group-last-of-type:pb-96 [&>:first-child]:mb-12',
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}
