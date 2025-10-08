'use client';

import { composeChildren } from '@/libs/primitive';
import { Button as ButtonPrimitive } from 'react-aria-components';
import { VariantProps, tv } from 'tailwind-variants';
import Icon from './icon';

export type ButtonProps = React.PrimitiveComponentProps<typeof ButtonPrimitive> &
  ButtonVariants & { icon?: React.ComponentProps<typeof Icon> };

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const buttonVariants = tv({
  base: [
    'inline-flex shrink-0 items-center justify-center gap-2 rounded font-medium whitespace-nowrap select-none',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:ring-accent-8 focus-visible:ring focus-visible:outline-none',
    'motion-safe:pressed:scale-[0.97] motion-safe:transition-all',
  ],
  defaultVariants: { variant: 'accent-solid', size: '2' },
  variants: {
    elevation: { '1': 'elevation-1', '2': 'elevation-2', '3': 'elevation-3' },
    size: {
      '1': 'slot-[icon]:size-3 slot-[icon]:text-current/80 h-8 px-4 text-sm',
      '2': 'slot-[icon]:size-3.5 slot-[icon]:text-current/80 h-9 px-6',
      '3': 'slot-[icon]:size-4 slot-[icon]:text-current/80 h-10 px-8 text-lg',
      icon: 'slot-[icon]:size-4 size-8',
    },
    // prettier-ignore
    variant: {
      'gray-solid': 'bg-gray-9 text-gray-contrast hover:bg-gray-10',
      'gray-soft': 'bg-gray-3 text-gray-11 hover:bg-gray-4',
      'gray-soft-outline': 'bg-gray-3 text-gray-11 border-gray-7 hover:border-gray-8 border',
      'gray-outline': 'text-gray-11 border-gray-8 hover:bg-gray-3 border',
      'gray-ghost': 'text-gray-11 hover:bg-gray-3',
      'accent-solid': 'bg-accent-9 text-accent-contrast hover:bg-accent-10',
      'accent-soft': 'bg-accent-3 text-accent-11 hover:bg-accent-4',
      'accent-soft-outline': 'bg-accent-3 text-accent-11 border-accent-7 hover:border-accent-8 border',
      'accent-outline': 'text-accent-11 border-accent-8 hover:bg-accent-3 border',
      'accent-ghost': 'text-accent-11 hover:bg-accent-3',
      'warn-solid': 'bg-warn-9 text-warn-contrast hover:bg-warn-10 focus-visible:ring-warn-8',
      'warn-soft': 'bg-warn-3 text-warn-11 hover:bg-warn-4 focus-visible:ring-warn-8',
      'warn-soft-outline': 'bg-warn-3 text-warn-11 border-warn-7 hover:border-warn-8 focus-visible:ring-warn-8 border',
      'warn-outline': 'text-warn-11 border-warn-8 hover:bg-warn-3 focus-visible:ring-warn-8 border',
      'warn-ghost': 'text-warn-11 hover:bg-warn-3 focus-visible:ring-warn-8',
      'danger-solid': 'bg-danger-9 text-danger-contrast hover:bg-danger-10 focus-visible:ring-danger-8',
      'danger-soft': 'bg-danger-3 text-danger-11 hover:bg-danger-4 focus-visible:ring-danger-8',
      'danger-soft-outline': 'bg-danger-3 text-danger-11 border-danger-7 hover:border-danger-8 focus-visible:ring-danger-8 border',
      'danger-outline': 'text-danger-11 border-danger-8 hover:bg-danger-3 focus-visible:ring-danger-8 border',
      'danger-ghost': 'text-danger-11 hover:bg-danger-3 focus-visible:ring-danger-8',
    },
  },
});

export default function Button({ children, className, elevation, size, variant, icon, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive data-slot="button" className={buttonVariants({ elevation, size, variant, className })} {...props}>
      {(renderProps) => (
        <>
          {icon && <Icon {...icon} />}
          {composeChildren(children, renderProps)}
        </>
      )}
    </ButtonPrimitive>
  );
}
