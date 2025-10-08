'use client';

import { useMemo } from 'react';
import { mergeProps } from 'react-aria';
import {
  Group,
  InputContext,
  Input as InputPrimitive,
  LabelContext,
  TextArea as TextAreaPrimitive,
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
export type TextFieldInputGroupProps = React.PrimitiveComponentProps<typeof Group> & TextFieldInputSlotVariants;
export type TextFieldInputGroupButtonProps = React.ComponentProps<typeof Button> & TextFieldInputGroupSlotVariants;
export type TextFieldInputGroupTextProps = React.ComponentProps<typeof Text> & TextFieldInputGroupSlotVariants;
export type TextFieldInputProps = Omit<React.PrimitiveComponentProps<typeof InputPrimitive>, 'prefix'> &
  TextFieldInputSlotVariants & {
    prefix?: string | React.ComponentProps<typeof Icon>;
    suffix?: string | React.ComponentProps<typeof Icon>;
  };
export type TextFieldTextAreaProps = React.PrimitiveComponentProps<typeof TextAreaPrimitive> &
  TextFieldTextAreaSlotVariants;

export type TextFieldInputSlotVariants = VariantProps<typeof textFieldInputVariants>;
export type TextFieldInputGroupSlotVariants = VariantProps<typeof textFieldInputGroupSlotVariants>;
export type TextFieldTextAreaSlotVariants = VariantProps<typeof textFieldTextAreaVariants>;

export const textFieldInputVariants = tv({
  slots: {
    group: [
      'grid grid-cols-[auto_1fr_auto] [grid-template-areas:"prefix_input_suffix"]',
      'group/textfield-inputgroup items-center overflow-hidden rounded',
      'focus-within:border-accent-8 border-gray-7 border motion-safe:transition-all',
    ],
    input: [
      'border-gray-7 relative h-10 w-full rounded border [grid-area:input]',
      'has-focus:border-accent-8 motion-safe:transition-all',

      'group-invalid/textfield:border-danger-7',
      'group-invalid/textfield:has-focus:border-danger-8',

      'group-[*]/textfield-inputgroup:border-0',
      'group-[*]/textfield-inputgroup:bg-transparent',

      'slot-[input]:absolute slot-[input]:inset-0 slot-[input]:z-20',
      'slot-[input]:rounded-[inherit] slot-[input]:px-4 slot-[input]:outline-none',
      'slot-[input]:placeholder:text-gray-11 slot-[input]:placeholder:opacity-70',

      'slot-[affix]:absolute slot-[affix]:top-1/2 slot-[affix]:z-10 slot-[affix]:-translate-y-1/2',
      'slot-[affix]:text-gray-11 slot-[affix]:opacity-70 has-disabled:[slot-affix]:opacity-50',
      '*:data-[prefix]:left-3 *:data-[suffix]:right-3',

      'group-[:has([data-slot=prefix-button]):not(:has([data-prefix]))]/textfield-inputgroup:slot-[input]:pl-0',
      'group-[:has([data-slot=suffix-button]):not(:has([data-suffix]))]/textfield-inputgroup:slot-[input]:pr-0',
      'group-[:has([data-slot=suffix-button])]/textfield-inputgroup:*:data-[prefix]:left-0.5',
      'group-[:has([data-slot=suffix-button])]/textfield-inputgroup:*:data-[suffix]:right-0.5',
    ],
  },
  variants: { variant: { soft: {}, 'soft-outline': {}, outline: {} }, elevation: { '1': {}, '2': {}, '3': {} } },
  defaultVariants: { variant: 'outline' },
  compoundSlots: [
    { slots: ['group', 'input'], variant: 'soft', className: 'bg-gray-3' },
    { slots: ['group', 'input'], variant: 'soft-outline', className: 'bg-gray-3 border-transparent' },
    { slots: ['group', 'input'], variant: 'outline', className: 'bg-gray-1' },
    { slots: ['group', 'input'], elevation: '1', className: 'elevation-1' },
    { slots: ['group', 'input'], elevation: '2', className: 'elevation-2' },
    { slots: ['group', 'input'], elevation: '3', className: 'elevation-3' },
  ],
});

export const textFieldInputGroupSlotVariants = tv({
  slots: { button: 'px-1', text: 'bg-gray-2 border-[inherit] px-2.5' },
  defaultVariants: { position: 'prefix' },
  variants: { position: { prefix: {}, suffix: {} } },
  compoundSlots: [{ slots: ['button', 'text'], className: 'flex h-full items-center justify-center' }],
  compoundVariants: [
    { position: 'prefix', className: { text: 'border-r [grid-area:prefix]', button: '[grid-area:prefix]' } },
    { position: 'suffix', className: { text: 'border-l [grid-area:suffix]', button: '[grid-area:suffix]' } },
  ],
});

export const textFieldTextAreaVariants = tv({
  base: [
    'border-gray-7 min-h-24 w-full rounded border p-4 outline-none',
    'placeholder:text-gray-11 placeholder:opacity-70',
    'focus:border-accent-8 focus:border',
    'invalid:border-danger-7 invalid:focus:border-danger-8',
    '[scrollbar-color:var(--gray-3)_transparent] [scrollbar-width:thin]',
  ],
  defaultVariants: { variant: 'outline' },
  variants: {
    variant: { soft: 'bg-gray-3', 'soft-outline': 'bg-gray-3 border-transparent', outline: 'bg-gray-1' },
    elevation: { '1': 'elevation-1', '2': 'elevation-2', '3': 'elevation-3' },
    resize: { auto: 'field-sizing-content', none: 'resize-none' },
  },
});

export function Root({ className, ...props }: TextFieldRootProps) {
  return (
    <TextField
      className={twMerge(
        'group/textfield flex w-full flex-col gap-0.5',
        'disabled:opacity-70 disabled:select-none',
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

export function InputGroup({ className, variant, elevation, ...props }: TextFieldInputGroupProps) {
  const slots = useMemo(() => textFieldInputVariants({ variant, elevation }), [variant, elevation]);
  return <Group className={slots.group({ className })} {...props} />;
}

export function InputGroupButton({ className, position, ...props }: TextFieldInputGroupButtonProps) {
  const inputPrimitiveProps = useSlottedContext(InputContext) ?? {};
  const slots = useMemo(() => textFieldInputGroupSlotVariants({ position }), [position]);
  return (
    <div data-slot={`${position ?? 'prefix'}-button`} className={slots.button({ className })}>
      <Button size="icon" variant="accent-ghost" isDisabled={inputPrimitiveProps.disabled} {...props} />
    </div>
  );
}

export function InputGroupText({ className, position, ...props }: TextFieldInputGroupTextProps) {
  const slots = useMemo(() => textFieldInputGroupSlotVariants({ position }), [position]);
  return (
    <div data-slot={`${position ?? 'prefix'}-text`} className={slots.text({ className })}>
      <Text size="2" variant="soft" {...props} />
    </div>
  );
}

export function Input({ className, variant, elevation, prefix, suffix, ...props }: TextFieldInputProps) {
  const slots = useMemo(() => textFieldInputVariants({ variant, elevation }), [variant, elevation]);
  return (
    <div
      className={slots.input({
        className: [
          typeof prefix === 'object' && 'slot-[input]:pl-10',
          typeof suffix === 'object' && 'slot-[input]:pr-10',
          typeof prefix === 'string' && 'slot-[input]:pl-8',
          typeof suffix === 'string' && 'slot-[input]:pr-8',
          className,
        ],
      })}
    >
      {prefix && (
        <div data-slot="affix" data-prefix>
          {typeof prefix === 'object' ? <Icon size="1" variant="soft" {...prefix} /> : prefix}
        </div>
      )}
      <InputPrimitive data-slot="input" {...props} />
      {suffix && (
        <div data-slot="affix" data-suffix>
          {typeof suffix === 'object' ? <Icon size="1" variant="soft" {...suffix} /> : suffix}
        </div>
      )}
    </div>
  );
}

export function TextArea({ className, variant, elevation, resize, ...props }: TextFieldTextAreaProps) {
  return (
    <TextAreaPrimitive className={textFieldTextAreaVariants({ variant, elevation, resize, className })} {...props} />
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
