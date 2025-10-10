'use client';

import { ChevronDownIcon } from 'lucide-react';
import { Button, ListBox, ListBoxItem, Popover, Select, SelectValue } from 'react-aria-components';
import Icon from './icon';
import { Description as TextFieldDescription, Label as TextFieldLabel } from './textfield';

export type SelectRootProps = React.PrimitiveComponentProps<typeof Select>;
export type SelectValueProps = React.PrimitiveComponentProps<typeof Button>;
export type SelectOptionsProps = React.PrimitiveComponentProps<typeof ListBox>;
export type SelectOptionProps = React.PrimitiveComponentProps<typeof ListBoxItem>;

export const Label = TextFieldLabel;
export const Description = TextFieldDescription;

export function Root(props: SelectRootProps) {
  return <Select {...props} />;
}

export function Value(props: SelectValueProps) {
  return (
    <Button {...props}>
      <SelectValue />
      <Icon size="1" variant="soft" source={<ChevronDownIcon />} />
    </Button>
  );
}

export function Options(props: SelectOptionsProps) {
  return (
    <Popover>
      <ListBox {...props} />
    </Popover>
  );
}

export function Option(props: SelectOptionProps) {
  return <ListBoxItem {...props} />;
}
