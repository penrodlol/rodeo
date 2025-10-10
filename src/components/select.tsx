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
import Icon from './icon';
import * as TextField from './textfield';
import { Text } from './typography';

export const Label = TextField.Label;
export const Description = TextField.Description;
export const ErrorMessage = TextField.ErrorMessage;

export function Root({ className, ...props }: React.PrimitiveComponentProps<typeof Select>) {
  return <Select data-slot="select" className={TextField.textFieldRootVariants({ className })} {...props} />;
}

export function Value(props: React.PrimitiveComponentProps<typeof Button>) {
  return (
    <Button data-slot="value" {...props}>
      <SelectValue />
      <Icon size="1" variant="soft" source={<ChevronDownIcon />} />
    </Button>
  );
}

export function Options(props: React.PrimitiveComponentProps<typeof ListBox>) {
  return (
    <Popover data-slot="options">
      <ListBox {...props} />
    </Popover>
  );
}

export function Option(props: React.PrimitiveComponentProps<typeof ListBoxItem>) {
  return <ListBoxItem data-slot="option" {...props} />;
}

export function OptionLabel(props: React.ComponentProps<typeof Text>) {
  return <Text data-slot="label" as={TextPrimitive} {...props} />;
}

export function OptionDescription(props: React.ComponentProps<typeof Text>) {
  return <Text data-slot="description" as={TextPrimitive} {...props} />;
}

export function Section(props: React.PrimitiveComponentProps<typeof ListBoxSection>) {
  return <ListBoxSection data-slot="section" {...props} />;
}

export function Header(props: React.ComponentProps<typeof Text>) {
  return <Text data-slot="header" as={HeaderPrimitive} {...props} />;
}
