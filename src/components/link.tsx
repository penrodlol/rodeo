'use client';

import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { VariantProps, tv } from 'tailwind-variants';
import Icon from './icon';
import { Text, textVariants } from './typography';

export type LinkProps = Omit<React.ComponentProps<typeof Text<'a'>>, 'as'> &
  LinkVariants & { icon?: React.ComponentProps<typeof Icon> };

export type LinkVariants = VariantProps<typeof linkVariants>;

export const linkVariants = tv({
  extend: textVariants,
  base: [
    'inline-flex items-center gap-1.5 rounded motion-safe:transition-colors',
    'focus-visible:ring-accent-8 focus-visible:ring focus-visible:outline-none',
  ],
  compoundVariants: [
    { variant: 'soft', class: 'hover:text-gray-12' },
    { variant: 'accent', class: 'hover:text-accent-12' },
    { variant: 'warn', class: 'hover:text-warn-12 focus-visible:ring-warn-8' },
    { variant: 'danger', class: 'hover:text-danger-12 focus-visible:ring-danger-8' },
  ],
});

export default function Link({ children, className, href, icon, ...props }: LinkProps) {
  const external = useMemo(() => /^(?!\/|#).*/.test(href?.toString() ?? ''), [href]);
  return (
    <Text
      as="a"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      className={linkVariants({ ...props, className })}
      {...props}
    >
      {icon && <Icon className={twMerge('size-3', icon.className)} {...icon} />}
      {children}
    </Text>
  );
}
