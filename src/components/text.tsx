'use client';

import { tv, type VariantProps } from 'tailwind-variants';

export type TextProps<T extends React.ElementType> = React.ComponentProps<T> & TextVariants & { as?: T };

export type TextVariants = VariantProps<typeof textVariants>;

export const textVariants = tv({
  base: 'max-w-prose',
  defaultVariants: { font: 'sans', size: '2', weight: '4' },
  variants: {
    font: { sans: 'font-sans', serif: 'font-serif', mono: 'font-mono' },
    italic: { true: 'italic' },
    underline: { true: 'underline underline-offset-6' },
    variant: {
      soft: 'text-gray-11',
      accent: 'text-accent-11 selection:bg-accent-5',
      warn: 'text-warn-11 selection:bg-warn-5',
      danger: 'text-danger-11 selection:bg-danger-5',
    },
    size: {
      '1': 'text-2xs',
      '2': 'text-xs',
      '3': 'text-sm',
      '4': 'text-base',
      '5': 'text-lg',
      '6': 'text-xl',
      '7': 'text-2xl',
      '8': 'text-3xl',
      '9': 'text-4xl',
      '10': 'text-5xl',
      '11': 'text-6xl',
      '12': 'text-7xl',
      '13': 'text-8xl',
    },
    weight: {
      '1': 'font-thin',
      '2': 'font-extralight',
      '3': 'font-light',
      '4': 'font-normal',
      '5': 'font-medium',
      '6': 'font-semibold',
      '7': 'font-bold',
      '8': 'font-extrabold',
      '9': 'font-black',
    },
  },
});

export default function Text<T extends React.ElementType = 'p'>({
  as,
  className,
  font,
  italic,
  underline,
  variant,
  size,
  weight,
  ...props
}: TextProps<T>) {
  const Tag = as ?? 'p';
  return <Tag className={textVariants({ font, italic, underline, variant, size, weight, className })} {...props} />;
}
