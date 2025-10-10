'use client';

import { ChevronDownIcon } from 'lucide-react';
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

export type SelectValueProps = React.PrimitiveComponentProps<typeof Button> & SelectValueVariants;

export type SelectValueVariants = VariantProps<typeof selectValueVariants>;

export const selectValueVariants = tv({
  base: [
    'flex h-10 items-center justify-between rounded px-4 outline-none motion-safe:transition-all',
    'border-gray-7 focus:border-accent-8 group-open/field:border-accent-8 border',

    'group-invalid/field:border-danger-7',
    'group-invalid/field:focus:border-danger-8',
    'group-invalid/field:group-open/field:border-danger-8',

    'group-open/field:slot-[icon]:rotate-180 slot-[icon]:motion-safe:transition-transform',
  ],
});

export const Label = TextField.Label;
export const Description = TextField.Description;
export const ErrorMessage = TextField.ErrorMessage;

export function Root({ className, ...props }: React.PrimitiveComponentProps<typeof Select>) {
  return <Select data-slot="select" className={TextField.textFieldRootVariants({ className })} {...props} />;
}

export function Value({ className, ...props }: SelectValueProps) {
  return (
    <Button data-slot="value" className={selectValueVariants({ className })} {...props}>
      <SelectValue />
      <Icon size="1" variant="soft" source={<ChevronDownIcon />} />
    </Button>
  );
}

export function Options({ className, ...props }: React.PrimitiveComponentProps<typeof ListBox>) {
  return (
    <Popover
      data-slot="options-popover"
      className={twMerge(
        ['bg-gray-1 border-gray-6 w-(--trigger-width) rounded border p-2', 'slot-[options]:outline-none'],
        className,
      )}
    >
      <ListBox data-slot="options" {...props} />
    </Popover>
  );
}

export function Option({ className, ...props }: React.PrimitiveComponentProps<typeof ListBoxItem>) {
  return <ListBoxItem data-slot="option" className={twMerge('flex flex-col px-4 py-1.5', className)} {...props} />;
}

export function OptionLabel(props: React.ComponentProps<typeof Text>) {
  return <Text data-slot="label" as={TextPrimitive} {...props} />;
}

export function OptionDescription(props: React.ComponentProps<typeof Text>) {
  return <Text data-slot="description" size="2" variant="soft" as={TextPrimitive} {...props} />;
}

export function Section(props: React.PrimitiveComponentProps<typeof ListBoxSection>) {
  return <ListBoxSection data-slot="section" {...props} />;
}

export function Header({ className, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text
      data-slot="header"
      variant="soft"
      weight="5"
      className={twMerge('p-2 select-none', className)}
      as={HeaderPrimitive}
      {...props}
    />
  );
}
