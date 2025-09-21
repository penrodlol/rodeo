'use client';

import { useMemo } from 'react';
import { useDateFormatter, useNumberFormatter } from 'react-aria';
import { tv, type VariantProps } from 'tailwind-variants';

export type TextProps<T extends React.ElementType> = React.ComponentProps<T> & TextVariants & { as?: T };
export type TextFormattedProps = Omit<React.ComponentProps<typeof Text<'p'>>, 'children'> & {
  value: Parameters<Intl.NumberFormat['format']>[0];
  options?: Parameters<typeof useNumberFormatter>[0];
};
export type TextFormattedDateTimeProps = Omit<React.ComponentProps<typeof Text<'time'>>, 'as' | 'children'> & {
  value: Parameters<Intl.DateTimeFormat['format']>[0] | string;
  options?: Parameters<typeof useDateFormatter>[0];
};

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

export function Text<T extends React.ElementType = 'p'>({
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

function TextFormatted({ value, options, ...props }: TextFormattedProps) {
  const formatter = useNumberFormatter(options);
  const formattedValue = useMemo(() => formatter.format(value), [formatter, value]);
  return <Text {...props} children={formattedValue} />;
}

export function Numeric({ value, options, ...props }: TextFormattedProps) {
  return <TextFormatted value={value} options={{ notation: 'compact', ...options }} {...props} />;
}

export function Percentage({ value, options, ...props }: TextFormattedProps) {
  return <TextFormatted value={value} options={{ style: 'percent', ...options }} {...props} />;
}

export function Currency({ value, options, ...props }: TextFormattedProps) {
  return <TextFormatted value={value} options={{ style: 'currency', currency: 'USD', ...options }} {...props} />;
}

export function Unit({ value, options, ...props }: TextFormattedProps) {
  return <TextFormatted value={value} options={{ style: 'unit', ...options }} {...props} />;
}

export function DateTime({ value, options, ...props }: TextFormattedDateTimeProps) {
  const valueDate = useMemo(() => (value instanceof Date ? value : new Date(value ?? 0)), [value]);
  const formatter = useDateFormatter({ month: '2-digit', day: '2-digit', year: 'numeric', ...options });
  const formattedValue = useMemo(() => formatter.format(valueDate), [formatter, valueDate]);
  return <Text as="time" dateTime={valueDate.toISOString()} children={formattedValue} {...props} />;
}
