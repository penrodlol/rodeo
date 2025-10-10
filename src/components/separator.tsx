'use client';

import { VariantProps, tv } from 'tailwind-variants';

export type SeparatorProps = Omit<React.ComponentProps<'div'>, 'role'> & SeparatorVariants;

export type SeparatorVariants = VariantProps<typeof separatorVariants>;

export const separatorVariants = tv({
  base: 'bg-gray-6 rounded',
  defaultVariants: { orientation: 'horizontal' },
  variants: { orientation: { horizontal: 'h-px w-full', vertical: 'h-full w-px' } },
});

export default function Separator({ className, orientation, ...props }: SeparatorProps) {
  return (
    <div
      data-slot="separator"
      role="separator"
      aria-orientation={orientation}
      className={separatorVariants({ orientation, className })}
      {...props}
    />
  );
}
