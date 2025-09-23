'use client';

import { composeChildren, composeVariants } from '@/libs/primitive';
import { useMemo } from 'react';
import { Link as LinkPrimitive } from 'react-aria-components';
import { VariantProps, tv } from 'tailwind-variants';
import * as Button from './button';
import Icon from './icon';
import { textVariants } from './typography';

export type LinkProps = React.ComponentProps<typeof LinkPrimitive> &
  LinkVariants & { icon?: React.ComponentProps<typeof Icon>; buttonVariants?: Button.ButtonVariants };

export type LinkVariants = VariantProps<typeof linkVariants>;

export const linkVariants = tv({
  extend: textVariants,
  base: [
    'inline-flex items-center gap-1.5 rounded [&_svg]:size-3',
    'focus-visible:ring-accent-8 focus-visible:ring focus-visible:outline-none',
    'motion-safe:transition-colors',
  ],
  compoundVariants: [
    { variant: 'soft', class: 'hover:text-gray-12' },
    { variant: 'accent', class: 'hover:text-accent-12' },
    { variant: 'warn', class: 'hover:text-warn-12 focus-visible:ring-warn-8' },
    { variant: 'danger', class: 'hover:text-danger-12 focus-visible:ring-danger-8' },
  ],
});

export default function Link({ children, className, href, icon, buttonVariants, ...props }: LinkProps) {
  const external = useMemo(() => /^(?!\/|#).*/.test(href?.toString() ?? ''), [href]);

  return (
    <LinkPrimitive
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      className={
        buttonVariants
          ? composeVariants(Button.buttonVariants, buttonVariants, className)
          : composeVariants(linkVariants, props, className)
      }
      {...props}
    >
      {(renderProps) => (
        <>
          {composeChildren(children, renderProps)}
          {icon && <Icon {...icon} />}
        </>
      )}
    </LinkPrimitive>
  );
}
