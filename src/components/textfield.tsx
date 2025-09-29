'use client';

import { mergeProps } from 'react-aria';
import {
  Group,
  Input as InputPrimitive,
  LabelContext,
  TextContext,
  TextField,
  useSlottedContext,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';
import Icon from './icon';
import { Text } from './typography';

export type TextFieldRootProps = React.PrimitiveComponentProps<typeof TextField>;
export type TextFieldLabelProps = Omit<React.ComponentProps<typeof Text<'label'>>, 'as'>;
export type TextFieldInputGroupProps = React.PrimitiveComponentProps<typeof Group>;
export type TextFieldInputGroupSlotProps = React.ComponentProps<'div'> & TextFieldInputGroupSlotVariants;
export type TextFieldInputProps = Omit<React.PrimitiveComponentProps<typeof InputPrimitive>, 'prefix'> & {
  prefix?: string | React.ComponentProps<typeof Icon>;
  suffix?: string | React.ComponentProps<typeof Icon>;
};

export type TextFieldInputGroupSlotVariants = Pick<VariantProps<typeof textFieldInputGroupSlotVariants>, 'border'>;

export const textFieldInputGroupSlotVariants = tv({
  base: 'flex h-full items-center justify-center px-1',
  defaultVariants: { border: true },
  variants: {
    border: { true: 'border-gray-7' },
    prefix: { true: '[grid-area:prefix]' },
    suffix: { true: '[grid-area:suffix]' },
  },
  compoundVariants: [
    { border: true, prefix: true, className: 'border-r' },
    { border: true, suffix: true, className: 'border-l' },
  ],
});

export function Root({ className, ...props }: TextFieldRootProps) {
  return (
    <TextField
      className={twMerge(
        'group/textfield flex w-full flex-col gap-0.5',
        'disabled:pointer-events-none disabled:[--opacity:70%]',
        className,
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }: TextFieldLabelProps) {
  const primitiveProps = useSlottedContext(LabelContext);
  return (
    <Text
      as="label"
      className={twMerge(
        'flex max-w-max gap-1 pb-1 select-none',
        'group-required/textfield:after:content-["*"]',
        'group-required/textfield:after:text-danger-11',
        className,
      )}
      {...mergeProps(primitiveProps, props)}
    />
  );
}

export function InputGroup({ className, ...props }: TextFieldInputGroupProps) {
  return (
    <Group
      className={twMerge(
        'grid grid-cols-[auto_1fr_auto] [grid-template-areas:"prefix_input_suffix"]',
        'group/textfield-inputgroup items-center rounded motion-safe:transition-all',
        'has-[input:focus]:inset-ring-accent-8 inset-ring-gray-7 inset-ring',
        className,
      )}
      {...props}
    />
  );
}

export function InputGroupPrefix({ className, border, ...props }: TextFieldInputGroupSlotProps) {
  return <div className={textFieldInputGroupSlotVariants({ border, prefix: true, className })} {...props} />;
}

export function InputGroupSuffix({ className, border, ...props }: TextFieldInputGroupSlotProps) {
  return <div className={textFieldInputGroupSlotVariants({ border, suffix: true, className })} {...props} />;
}

export function Input({ className, prefix, suffix, ...props }: TextFieldInputProps) {
  return (
    <div
      className={twMerge(
        'bg-gray-1 relative h-10 w-full rounded [grid-area:input] motion-safe:transition-all',
        'inset-ring-gray-7 has-focus:inset-ring-accent-8 inset-ring',
        'group-invalid/textfield:inset-ring-danger-7 group-invalid/textfield:hover:inset-ring-danger-8',
        'group-invalid/textfield:has-focus:inset-ring-danger-8',
        'group-[*]/textfield-inputgroup:bg-transparent group-[*]/textfield-inputgroup:inset-ring-0',
        '[&_input]:absolute [&_input]:inset-0 [&_input]:z-20 [&_input]:rounded-[inherit] [&_input]:px-4',
        '[&_input]:placeholder:text-gray-11 [&_input]:outline-none [&_input]:placeholder:[--opacity:70%]',
        '[&_:where(svg,span)]:absolute [&_:where(svg,span)]:top-1/2 [&_:where(svg,span)]:z-10 [&_:where(svg,span)]:-translate-y-1/2',
        '[&_:where(svg,span)]:text-gray-11 [&_:where(svg,span)]:[--opacity:70%] has-disabled:[&_svg]:[--opacity:50%]',
        '[&_:where(svg,span):has(+input)]:left-3 [&_:where(svg,span):not(:has(+input))]:right-3',
        typeof prefix === 'object' && '[&_input]:pl-10',
        typeof suffix === 'object' && '[&_input]:pr-10',
        typeof prefix === 'string' && '[&_input]:pl-8',
        typeof suffix === 'string' && '[&_input]:pr-8',
        className,
      )}
    >
      {prefix &&
        (typeof prefix === 'object' ? <Icon size="1" variant="soft" {...prefix} /> : <span aria-hidden>{prefix}</span>)}
      <InputPrimitive {...props} />
      {suffix &&
        (typeof suffix === 'object' ? <Icon size="1" variant="soft" {...suffix} /> : <span aria-hidden>{suffix}</span>)}
    </div>
  );
}

export function Description(props: React.ComponentProps<typeof Text>) {
  const primitiveProps = useSlottedContext(TextContext, 'description');
  return <Text size="2" variant="soft" {...mergeProps(primitiveProps, props)} />;
}

export function ErrorMessage(props: React.ComponentProps<typeof Text>) {
  const primitiveProps = useSlottedContext(TextContext, 'errorMessage');
  return <Text size="2" variant="danger" {...mergeProps(primitiveProps, props)} />;
}
