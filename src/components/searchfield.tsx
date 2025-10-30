'use client';

import { XIcon } from 'lucide-react';
import { SearchField } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import Button from './button';
import * as TextField from './textfield';

export const Label = TextField.Label;
export const InputGroup = TextField.InputGroup;
export const InputGroupText = TextField.InputGroupText;
export const InputGroupButton = TextField.InputGroupButton;
export const ErrorMessage = TextField.ErrorMessage;
export const Description = TextField.Description;

export type SearchFieldRootProps = React.PrimitiveComponentProps<typeof SearchField>;
export type SearchFieldInputProps = React.ComponentProps<typeof TextField.Input> & {
  clearButtonVisible?: boolean;
  clearButtonProps?: React.ComponentProps<typeof Button>;
};

export function Root({ className, ...props }: SearchFieldRootProps) {
  return <SearchField data-slot="searchfield" className={TextField.textFieldRootVariants({ className })} {...props} />;
}

export function Input({ className, clearButtonVisible, clearButtonProps, ...props }: SearchFieldInputProps) {
  return (
    <TextField.Input
      className={twMerge(
        'slot-[input]:pr-10',
        'slot-[input]:[&::-webkit-search-cancel-button]:hidden',
        'slot-[input]:[&::-webkit-search-decoration]:hidden',

        'slot-[button]:absolute slot-[button]:top-1/2 slot-[button]:-translate-y-1/2',
        'slot-[button]:z-30 slot-[button]:right-1',

        'has-data-suffix:slot-[button]:right-9',
        'has-data-suffix:has-slot-[button]:slot-[input]:pr-18',

        'group-empty/field:slot-[button]:hidden',

        className,
      )}
      {...props}
    >
      {clearButtonVisible !== false && (
        <Button size="icon" variant="gray-ghost" icon={{ source: <XIcon /> }} {...clearButtonProps} />
      )}
    </TextField.Input>
  );
}
