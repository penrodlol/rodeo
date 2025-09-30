'use client';

import { mergeProps } from 'react-aria';
import {
  Group,
  InputContext,
  Input as InputPrimitive,
  LabelContext,
  TextContext,
  TextField,
  useSlottedContext,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';
import Button from './button';
import Icon from './icon';
import { Text } from './typography';

export type TextFieldRootProps = React.PrimitiveComponentProps<typeof TextField>;
export type TextFieldLabelProps = Omit<React.ComponentProps<typeof Text<'label'>>, 'as'>;
export type TextFieldInputGroupProps = React.PrimitiveComponentProps<typeof Group>;
export type TextFieldInputGroupButtonProps = React.ComponentProps<typeof Button> & TextFieldInputGroupSlotVariants;
export type TextFieldInputGroupTextProps = React.ComponentProps<typeof Text> & TextFieldInputGroupSlotVariants;
export type TextFieldInputProps = Omit<React.PrimitiveComponentProps<typeof InputPrimitive>, 'prefix'> & {
  prefix?: string | React.ComponentProps<typeof Icon>;
  suffix?: string | React.ComponentProps<typeof Icon>;
};

export type TextFieldInputGroupSlotVariants = VariantProps<typeof textFieldInputGroupSlotVariants>;

export const textFieldInputGroupSlotVariants = tv({
  base: 'border-gray-6 flex h-full items-center justify-center px-1',
  defaultVariants: { position: 'prefix' },
  variants: { position: { prefix: 'border-r [grid-area:prefix]', suffix: 'border-l [grid-area:suffix]' } },
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
        'has-[input:focus]:border-accent-8 border-gray-7 border',
        className,
      )}
      {...props}
    />
  );
}

export function InputGroupButton({ className, position, ...props }: TextFieldInputGroupButtonProps) {
  const inputPrimitiveProps = useSlottedContext(InputContext) ?? {};
  return (
    <div className={textFieldInputGroupSlotVariants({ position, className })}>
      <Button size="icon" variant="accent-ghost" isDisabled={inputPrimitiveProps.disabled} {...props} />
    </div>
  );
}

export function InputGroupText({ className, position, ...props }: TextFieldInputGroupTextProps) {
  return (
    <div className={textFieldInputGroupSlotVariants({ position, className: ['px-3', className] })}>
      <Text size="2" variant="soft" {...props} />
    </div>
  );
}

export function Input({ className, prefix, suffix, ...props }: TextFieldInputProps) {
  return (
    <div
      className={twMerge(
        'bg-gray-1 relative h-10 w-full rounded [grid-area:input] motion-safe:transition-all',
        'border-gray-7 has-focus:border-accent-8 border',
        'group-invalid/textfield:border-danger-7 group-invalid/textfield:hover:border-danger-8',
        'group-invalid/textfield:has-focus:border-danger-8',
        'group-[*]/textfield-inputgroup:border-0 group-[*]/textfield-inputgroup:bg-transparent',
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
