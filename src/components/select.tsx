'use client';

import { composeChildren } from '@/libs/primitive';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import { useMemo } from 'react';
import {
  Button,
  Header as HeaderPrimitive,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  Popover,
  Select,
  SelectValue,
  Text as TextPrimitive,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';
import Icon from './icon';
import * as TextField from './textfield';
import { Text } from './typography';

export type SelectRootProps = React.PrimitiveComponentProps<typeof Select>;
export type SelectValueProps = React.PrimitiveComponentProps<typeof Button> & SelectValueVariants;
export type SelectOptionsProps = React.PrimitiveComponentProps<typeof ListBox> & SelectOptionsVariants;
export type SelectOptionProps = React.PrimitiveComponentProps<typeof ListBoxItem>;
export type SelectOptionLabelProps = React.ComponentProps<typeof Text>;
export type SelectOptionDescriptionProps = React.ComponentProps<typeof Text>;
export type SelectOptionGroupProps = React.PrimitiveComponentProps<typeof ListBoxSection>;
export type SelectOptionGroupHeaderProps = React.ComponentProps<typeof Text>;

export type SelectValueVariants = VariantProps<typeof selectValueVariants>;
export type SelectOptionsVariants = VariantProps<typeof selectOptionsVariants>;

export const selectValueVariants = tv({
  base: [
    'flex h-10 items-center justify-between gap-2 rounded px-4 outline-none',
    'has-placeholder-shown:text-gray-11/70 motion-safe:transition-all',
    'border-gray-7 focus:border-accent-8 group-open/field:border-accent-8 border',

    'group-invalid/field:border-danger-7',
    'group-invalid/field:focus:border-danger-8',
    'group-invalid/field:group-open/field:border-danger-8',

    'group-open/field:slot-[icon]:rotate-180 slot-[icon]:motion-safe:transition-transform',

    'slot-[select-value-content]:flex slot-[select-value-content]:items-center',
    'slot-[select-value-content]:gap-2 slot-[select-value-content]:truncate',
  ],
  defaultVariants: { descriptionVisible: false },
  variants: { descriptionVisible: { false: 'slot-[select-option-description]:hidden' } },
});

export const selectOptionsVariants = tv({
  base: [
    'bg-gray-2 border-gray-6 slot-[select-options-list]:outline-none rounded border p-2 shadow-md select-none',
    'overflow-auto [scrollbar-color:var(--gray-9)_transparent] [scrollbar-width:thin]',
    'exiting:duration-0 entering:opacity-0 origin-(--trigger-anchor-point) motion-safe:transition-all',
    'placement-bottom:entering:-translate-y-1 placement-top:entering:translate-y-1',
    'placement-left:entering:translate-x-1 placement-right:entering:-translate-x-1',
  ],
  defaultVariants: { width: 'trigger', optionOrientation: 'vertical' },
  variants: {
    width: { trigger: 'w-(--trigger-width)' },
    optionOrientation: {
      vertical: 'slot-[select-option]:flex-col',
      horizontal: 'slot-[select-option]:flex-row slot-[select-option]:gap-2 slot-[select-option]:items-center',
    },
  },
});

export const Label = TextField.Label;
export const Description = TextField.Description;
export const ErrorMessage = TextField.ErrorMessage;

export function Root({ className, ...props }: SelectRootProps) {
  return (
    <Select
      data-slot="select"
      className={twMerge(
        'group/field flex w-full flex-col gap-1',
        'disabled:opacity-70 disabled:select-none',
        className,
      )}
      {...props}
    />
  );
}

export function Value({ className, descriptionVisible, ...props }: SelectValueProps) {
  return (
    <Button data-slot="select-value" className={selectValueVariants({ descriptionVisible, className })} {...props}>
      <SelectValue data-slot="select-value-content" />
      <Icon size="1" variant="soft" source={<ChevronDownIcon />} />
    </Button>
  );
}

export function Options({ className, width, optionOrientation, ...props }: SelectOptionsProps) {
  return (
    <Popover data-slot="select-options" className={selectOptionsVariants({ width, optionOrientation, className })}>
      <ListBox data-slot="select-options-list" {...props} />
    </Popover>
  );
}

export function Option({ children, className, ...props }: SelectOptionProps) {
  const textValue = useMemo(() => (typeof children === 'string' ? children.trim() : ''), [children]);
  return (
    <ListBoxItem
      data-slot="select-option"
      textValue={textValue}
      className={twMerge(
        'focus:bg-gray-4 relative flex rounded py-1.5 pr-4 pl-7 outline-none',
        'selected:text-accent-9 selected:font-medium',
        'selected:*:text-accent-9 selected:*:font-medium',
        'slot-[icon]:absolute slot-[icon]:left-1.5 slot-[icon]:top-1/2 slot-[icon]:-translate-y-1/2',
        'has-slot-[select-option-description]:slot-[icon]:top-4.5',
        className,
      )}
      {...props}
    >
      {(renderProps) => (
        <>
          {renderProps.isSelected && <Icon size="1" variant="accent" source={<CheckIcon />} />}
          {composeChildren(children, renderProps)}
        </>
      )}
    </ListBoxItem>
  );
}

export function OptionLabel(props: SelectOptionLabelProps) {
  return <Text data-slot="select-option-label" slot="label" as={TextPrimitive} {...props} />;
}

export function OptionDescription(props: SelectOptionDescriptionProps) {
  return (
    <Text
      data-slot="select-option-description"
      size="2"
      variant="soft"
      slot="description"
      as={TextPrimitive}
      {...props}
    />
  );
}

export function OptionGroup({ className, ...props }: SelectOptionGroupProps) {
  return (
    <ListBoxSection data-slot="select-option-group" className={twMerge('group/select-group', className)} {...props} />
  );
}

export function OptionGroupHeader({ className, ...props }: SelectOptionGroupHeaderProps) {
  return (
    <Text
      data-slot="select-option-group-header"
      size="2"
      variant="soft"
      weight="5"
      className={twMerge(
        'px-4 py-2',
        'group-not-first-of-type/select-group:border-t',
        'group-not-first-of-type/select-group:border-gray-6',
        'group-not-first-of-type/select-group:mt-2',
        'group-not-first-of-type/select-group:pt-4',
        className,
      )}
      as={HeaderPrimitive}
      {...props}
    />
  );
}
