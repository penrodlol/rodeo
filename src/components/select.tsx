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

export function Root(props: React.PrimitiveComponentProps<typeof Select>) {
  return <Select {...props} />;
}

export function Value(props: React.PrimitiveComponentProps<typeof Button>) {
  return (
    <Button {...props}>
      <SelectValue />
      <Icon size="1" variant="soft" source={<ChevronDownIcon />} />
    </Button>
  );
}

export function Options(props: React.PrimitiveComponentProps<typeof ListBox>) {
  return (
    <Popover>
      <ListBox {...props} />
    </Popover>
  );
}

export function Option(props: React.PrimitiveComponentProps<typeof ListBoxItem>) {
  return <ListBoxItem {...props} />;
}

export function OptionLabel(props: React.ComponentProps<typeof Text>) {
  return <Text slot="label" as={TextPrimitive} {...props} />;
}

export function OptionDescription(props: React.ComponentProps<typeof Text>) {
  return <Text slot="description" as={TextPrimitive} {...props} />;
}

export function Section(props: React.PrimitiveComponentProps<typeof ListBoxSection>) {
  return <ListBoxSection {...props} />;
}

export function Header(props: React.ComponentProps<typeof Text>) {
  return <Text as={HeaderPrimitive} {...props} />;
}
