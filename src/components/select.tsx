'use client';

import { composeChildren } from '@/libs/primitive';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import { useMemo } from 'react';
import {
  Button,
  Header as HeaderPrimitive,
  ListBox,
  ListBoxItem,
  ListBoxLoadMoreItem,
  ListBoxSection,
  Popover,
  Select,
  SelectValue,
  Text as TextPrimitive,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';
import Icon from './icon';
import Spinner from './spinner';
import * as TextField from './textfield';
import { Text } from './typography';

export type SelectRootProps = React.PrimitiveComponentProps<typeof Select>;
export type SelectTriggerProps = React.PrimitiveComponentProps<typeof Button> &
  SelectTriggerVariants & { valueProps?: React.ComponentProps<typeof SelectValue> };
export type SelectOptionsProps<T extends object> = React.PrimitiveComponentProps<typeof ListBox<T>> &
  SelectOptionsVariants;
export type SelectOptionProps = React.PrimitiveComponentProps<typeof ListBoxItem> & {
  icon?: React.ComponentProps<typeof Icon>;
};
export type SelectOptionLabelProps = React.ComponentProps<typeof Text>;
export type SelectOptionDescriptionProps = React.ComponentProps<typeof Text>;
export type SelectOptionGroupProps = React.PrimitiveComponentProps<typeof ListBoxSection>;
export type SelectOptionGroupHeaderProps = React.ComponentProps<typeof Text>;
export type SelectOptionLoadMoreProps = React.PrimitiveComponentProps<typeof ListBoxLoadMoreItem> & {
  spinner?: React.ComponentProps<typeof Spinner>;
};

export type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>;
export type SelectOptionsVariants = VariantProps<typeof selectOptionsVariants>;

export const selectTriggerVariants = tv({
  base: [
    'flex h-10 items-center justify-between gap-2 rounded px-4 outline-none',
    'has-placeholder-shown:text-gray-11/70 motion-safe:transition-all',
    'border-gray-7 focus:border-accent-8 group-open/field:border-accent-8 border',

    'group-invalid/field:border-danger-7',
    'group-invalid/field:focus:border-danger-8',
    'group-invalid/field:group-open/field:border-danger-8',

    'group-open/field:slot-[icon]:data-chevron:rotate-180',
    'slot-[icon]:data-chevron:motion-safe:transition-transform',

    'slot-[select-value-content]:truncate slot-[select-value-content]:relative',
    'slot-[select-value-content]:has-slot-[icon]:pl-6',
    'slot-[icon]:not-data-chevron:absolute slot-[icon]:not-data-chevron:left-0',
    'slot-[icon]:not-data-chevron:top-1/2 slot-[icon]:not-data-chevron:-translate-y-1/2',
  ],
  defaultVariants: { variant: 'outline', descriptionVisible: false, iconVisible: true },
  variants: {
    elevation: { '1': 'elevation-1', '2': 'elevation-2', '3': 'elevation-3' },
    variant: { soft: 'bg-gray-3 border-transparent', 'soft-outline': 'bg-gray-3', outline: 'bg-gray-1' },
    iconVisible: { false: 'slot-[icon]:not-data-chevron:hidden' },
    descriptionVisible: {
      true: 'slot-[select-option-description]:ml-2',
      false: 'slot-[select-option-description]:hidden',
    },
  },
});

export const selectOptionsVariants = tv({
  base: [
    'bg-gray-2 border-gray-6 rounded border p-2 shadow-md select-none',
    'overflow-auto [scrollbar-color:var(--gray-9)_transparent] [scrollbar-width:thin]',
    'slot-[select-options-list]:max-h-96 slot-[select-options-list]:outline-none',
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
        'group/field flex w-full flex-col gap-0.5',
        'disabled:opacity-70 disabled:select-none',
        className,
      )}
      {...props}
    />
  );
}

export function Trigger({
  className,
  elevation,
  variant,
  iconVisible,
  descriptionVisible,
  valueProps,
  ...props
}: SelectTriggerProps) {
  return (
    <Button
      data-slot="select-trigger"
      className={selectTriggerVariants({ elevation, variant, iconVisible, descriptionVisible, className })}
      {...props}
    >
      <SelectValue data-slot="select-value-content" {...valueProps} />
      <Icon data-chevron size="1" variant="soft" source={<ChevronDownIcon />} />
    </Button>
  );
}

export function Options<T extends object>({ className, width, optionOrientation, ...props }: SelectOptionsProps<T>) {
  return (
    <Popover data-slot="select-options" className={selectOptionsVariants({ width, optionOrientation, className })}>
      <ListBox data-slot="select-options-list" {...props} />
    </Popover>
  );
}

export function Option({ children, className, icon, href, ...props }: SelectOptionProps) {
  const textValue = useMemo(() => (typeof children === 'string' ? children.trim() : ''), [children]);
  const externalLink = useMemo(() => /^(?!\/|#).*/.test(href?.toString() ?? ''), [href]);
  return (
    <ListBoxItem
      data-slot="select-option"
      textValue={textValue}
      href={href}
      target={externalLink ? '_blank' : undefined}
      rel={externalLink ? 'noopener noreferrer' : undefined}
      className={twMerge(
        'focus:bg-gray-4 relative flex rounded py-1.5 pr-4 outline-none',
        'selected:text-accent-9 selected:font-medium selected:*:text-accent-9 selected:*:font-medium',
        'disabled:text-gray-11/50 disabled:*:text-gray-11/50 disabled:cursor-default',
        'slot-[icon]:absolute slot-[icon]:left-1.5 slot-[icon]:top-1/2 slot-[icon]:-translate-y-1/2',
        'slot-[icon]:not-data-check:size-3.5',
        'has-slot-[select-option-description]:slot-[icon]:top-4.5',
        icon ? 'slot-[icon]:data-check:right-1.5 slot-[icon]:data-check:left-[unset] pl-9' : 'pl-7',
        href && 'text-gray-11',
        className,
      )}
      {...props}
    >
      {(renderProps) => (
        <>
          {renderProps.isSelected && <Icon data-check size="1" variant="accent" source={<CheckIcon />} />}
          {icon && <Icon size="1" variant="soft" {...icon} />}
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
      slot="description"
      size="2"
      variant="soft"
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

export function OptionLoadMore({ children, className, spinner, ...props }: SelectOptionLoadMoreProps) {
  return (
    <ListBoxLoadMoreItem
      data-slot="select-option-load-more"
      className={twMerge('text-gray-11 flex items-center gap-2 p-4 pb-5 pl-7 text-sm', className)}
      {...props}
    >
      <Spinner size="1" {...spinner} />
      {children ?? 'Loading more...'}
    </ListBoxLoadMoreItem>
  );
}
