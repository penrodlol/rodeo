'use client';

import { composeChildren } from '@/libs/primitive';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { useMemo } from 'react';
import {
  Autocomplete,
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

export type SelectTriggerProps = React.PrimitiveComponentProps<typeof Button> &
  SelectTriggerVariants & {
    valueProps?: React.PrimitiveComponentProps<typeof SelectValue>;
    prefix?: React.ComponentProps<typeof TextField.InputAffix>['affix'];
    suffix?: React.ComponentProps<typeof TextField.InputAffix>['affix'];
  };
export type SelectContentProps<T extends object> = React.PrimitiveComponentProps<typeof Popover> &
  SelectContentVariants & { filterProps?: Omit<React.PrimitiveComponentProps<typeof Autocomplete<T>>, 'children'> };
export type SelectItemsProps<T extends object> = React.PrimitiveComponentProps<typeof ListBox<T>> & SelectItemsVariants;
export type SelectItemProps<T extends object> = React.PrimitiveComponentProps<typeof ListBoxItem<T>> & {
  icon?: React.ComponentProps<typeof Icon>;
};
export type SelectItemLoadMoreProps = React.PrimitiveComponentProps<typeof ListBoxLoadMoreItem> & {
  spinner?: React.ComponentProps<typeof Spinner>;
};

export type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>;
export type SelectContentVariants = VariantProps<typeof selectContentVariants>;
export type SelectItemsVariants = VariantProps<typeof selectItemsVariants>;

export const selectTriggerVariants = tv({
  base: [
    'relative flex h-10 w-full items-center justify-between gap-2 rounded px-4 outline-none',
    'has-placeholder-shown:text-gray-11/70 motion-safe:transition-all',
    'border-gray-7 focus:border-accent-8 group-open/field:border-accent-8 border',

    'group-invalid/field:border-danger-7',
    'group-invalid/field:focus:border-danger-8',
    'group-invalid/field:group-open/field:border-danger-8',

    'slot-[select-value]:truncate slot-[select-value]:relative',
    'slot-[select-value]:has-slot-[icon]:pl-6',
    'has-data-suffix:slot-[select-value]:pr-6',

    'slot-[select-value]:slot-[icon]:absolute slot-[select-value]:slot-[icon]:left-0',
    'slot-[select-value]:slot-[icon]:top-1/2 slot-[select-value]:slot-[icon]:-translate-y-1/2',

    'has-data-[prefix=object]:pl-11 has-data-[prefix=string]:pl-9',
    'slot-[affix]:data-suffix:right-11',
  ],
  defaultVariants: { variant: 'outline', iconVisible: true, descriptionVisible: false },
  variants: {
    elevation: { '1': 'elevation-1', '2': 'elevation-2', '3': 'elevation-3' },
    variant: { soft: 'bg-gray-3 border-transparent', 'soft-outline': 'bg-gray-3', outline: 'bg-gray-1' },
    iconVisible: { false: 'slot-[select-value]:slot-[icon]:hidden' },
    descriptionVisible: { true: 'slot-[select-item-description]:ml-2', false: 'slot-[select-item-description]:hidden' },
  },
});

export const selectContentVariants = tv({
  base: [
    'bg-gray-2 border-gray-6 flex flex-col gap-2 rounded border p-2 outline-none select-none',
    'overflow-auto [scrollbar-color:var(--gray-9)_transparent] [scrollbar-width:thin]',

    'exiting:duration-0 entering:opacity-0 origin-(--trigger-anchor-point) motion-safe:transition-all',

    'placement-bottom:entering:-translate-y-1 placement-top:entering:translate-y-1',
    'placement-left:entering:translate-x-1 placement-right:entering:-translate-x-1',
  ],
  defaultVariants: { width: 'trigger' },
  variants: { width: { trigger: 'w-(--trigger-width)', auto: 'w-auto' } },
});

export const selectItemsVariants = tv({
  base: 'max-h-96 outline-none',
  defaultVariants: { itemOrientation: 'vertical' },
  variants: {
    itemOrientation: {
      vertical: 'slot-[select-item]:flex-col',
      horizontal: 'slot-[select-item]:flex-row slot-[select-item]:gap-2 slot-[select-item]:items-center',
    },
  },
});

export const Label = TextField.Label;
export const Description = TextField.Description;
export const ErrorMessage = TextField.ErrorMessage;

export function Root({ className, ...props }: React.PrimitiveComponentProps<typeof Select>) {
  return <Select data-slot="select" className={TextField.textFieldRootVariants({ className })} {...props} />;
}

export function Trigger({
  className,
  elevation,
  variant,
  iconVisible,
  descriptionVisible,
  valueProps,
  prefix,
  suffix,
  ...props
}: SelectTriggerProps) {
  return (
    <Button
      data-slot="select-trigger"
      className={selectTriggerVariants({ elevation, variant, iconVisible, descriptionVisible, className })}
      {...props}
    >
      {prefix && <TextField.InputAffix position="prefix" affix={prefix} />}
      <SelectValue data-slot="select-value" {...valueProps} />
      {suffix && <TextField.InputAffix position="suffix" affix={suffix} />}
      <Icon size="1" variant="soft" source={<ChevronsUpDownIcon />} />
    </Button>
  );
}

export function Content<T extends object>({ className, width, filterProps, ...props }: SelectContentProps<T>) {
  const classNameInternal = useMemo(() => selectContentVariants({ width, className }), [width, className]);

  if (!filterProps) return <Popover data-slot="select-popover" className={classNameInternal} {...props} />;

  return (
    <Autocomplete<T> data-slot="select-autocomplete" {...filterProps}>
      <Popover data-slot="select-popover" className={classNameInternal} {...props} />
    </Autocomplete>
  );
}

export function Items<T extends object>({ className, itemOrientation, ...props }: SelectItemsProps<T>) {
  return (
    <ListBox<T>
      data-slot="select-items"
      renderEmptyState={() => <ItemNotFound />}
      className={selectItemsVariants({ itemOrientation, className })}
      {...props}
    />
  );
}

export function Item<T extends object>({ children, className, href, icon, ...props }: SelectItemProps<T>) {
  const textValue = useMemo(() => (typeof children === 'string' ? children.trim() : ''), [children]);
  const externalLink = useMemo(() => /^(?!\/|#).*/.test(href?.toString() ?? ''), [href]);

  return (
    <ListBoxItem<T>
      data-slot="select-item"
      textValue={textValue}
      href={href}
      target={externalLink ? '_blank' : undefined}
      rel={externalLink ? 'noopener noreferrer' : undefined}
      className={twMerge(
        'focus:bg-gray-4 relative flex rounded py-1.5 pr-4 pl-7 outline-none',

        'selected:text-accent-9 selected:font-medium selected:*:text-accent-9 selected:*:font-medium',
        'disabled:text-gray-11/50 disabled:*:text-gray-11/50 disabled:cursor-default',

        'slot-[icon]:absolute slot-[icon]:top-1/2 slot-[icon]:-translate-y-1/2',
        'has-slot-[select-item-description]:slot-[icon]:top-4.5 slot-[icon]:left-1.5',

        icon ? 'selected:slot-[icon]:first:right-1.5 selected:slot-[icon]:first:left-[unset] pl-9' : 'pl-7',
        href && 'text-gray-11',
        className,
      )}
      {...props}
    >
      {(renderProps) => (
        <>
          {renderProps.isSelected && <Icon size="1" variant="accent" source={<CheckIcon />} />}
          {icon && <Icon size="1" variant="soft" {...icon} />}
          {composeChildren(children, renderProps)}
        </>
      )}
    </ListBoxItem>
  );
}

export function ItemLabel(props: React.ComponentProps<typeof Text>) {
  return <Text data-slot="select-item-label" slot="label" as={TextPrimitive} {...props} />;
}

export function ItemDescription(props: React.ComponentProps<typeof Text>) {
  return (
    <Text
      data-slot="select-item-description"
      slot="description"
      size="2"
      variant="soft"
      as={TextPrimitive}
      {...props}
    />
  );
}

export function ItemLoadMore({ children, className, spinner, ...props }: SelectItemLoadMoreProps) {
  return (
    <ListBoxLoadMoreItem
      data-slot="select-item-load-more"
      className={twMerge('flex items-center gap-2 p-4 pb-5 pl-7', className)}
      {...props}
    >
      <Spinner size="1" variant="soft" {...spinner} />
      <Text variant="soft">{children ?? 'Loading more...'}</Text>
    </ListBoxLoadMoreItem>
  );
}

export function ItemNotFound({ children, className, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text
      data-slot="select-item-not-found"
      size="2"
      variant="soft"
      className={twMerge('flex items-center justify-center py-3', className)}
      as={TextPrimitive}
      {...props}
    >
      {children ?? 'No results found'}
    </Text>
  );
}

export function ItemsGroup<T extends object>({ className, ...props }: React.ComponentProps<typeof ListBoxSection<T>>) {
  return (
    <ListBoxSection<T>
      data-slot="select-items-group"
      className={twMerge('group/select-items-group', className)}
      {...props}
    />
  );
}

export function ItemsGroupHeader({ className, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text
      data-slot="select-items-group-header"
      size="2"
      variant="soft"
      weight="5"
      as={HeaderPrimitive}
      className={twMerge(
        'px-4 py-2',
        'group-not-first-of-type/select-items-group:border-t',
        'group-not-first-of-type/select-items-group:border-gray-6',
        'group-not-first-of-type/select-items-group:mt-2',
        'group-not-first-of-type/select-items-group:pt-4',
        className,
      )}
      {...props}
    />
  );
}
