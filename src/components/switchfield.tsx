'use client';

import { composeChildren } from '@/libs/primitive';
import { createContext, use, useEffect, useMemo, useState } from 'react';
import { mergeProps, useId } from 'react-aria';
import { GroupContext, SwitchContext, Switch as SwitchPrimitive } from 'react-aria-components';
import { tv, VariantProps } from 'tailwind-variants';
import { textFieldRootVariants } from './textfield';
import { Text } from './typography';

export type SwitchFieldRootProps = React.ComponentProps<'div'> & React.PrimitiveComponentProps<typeof SwitchPrimitive>;
export type SwitchFieldSwitchProps = React.PrimitiveComponentProps<typeof SwitchPrimitive> & SwitchFieldSwitchVariants;
export type SwitchFieldDescriptionProps = React.ComponentProps<typeof Text>;

export type SwitchFieldSwitchVariants = VariantProps<typeof switchFieldSwitchVariants>;

export type SwitchFieldContextValue = { setDescribedBy: (id?: string) => void };
export const SwitchFieldContext = createContext<SwitchFieldContextValue | undefined>(undefined);
export function useSwitchFieldContext() {
  const context = use(SwitchFieldContext);
  if (!context) throw new Error('useSwitchFieldContext must be used within a SwitchField.Root');
  return context;
}

export const switchFieldSwitchVariants = tv({
  slots: {
    base: 'flex max-w-max items-center gap-2 select-none disabled:opacity-70',
    control: [
      '@container relative shrink-0 rounded-full border px-0.5',
      'focus-visible:ring-accent-8 focus-visible:ring motion-safe:transition-all',
      'before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-[inherit]',
      'selected:before:translate-x-[calc(100cqw-100%)]',
      'selected:rtl:before:translate-x-[calc(-100cqw+100%)]',
      'before:motion-safe:transition-all',
    ],
  },
  defaultVariants: { size: '2', variant: 'accent-soft-outline' },
  variants: {
    elevation: {
      '1': { control: 'elevation-1 before:elevation-1' },
      '2': { control: 'elevation-2 before:elevation-1' },
      '3': { control: 'elevation-3 before:elevation-1' },
    },
    size: {
      '1': { control: 'h-4 w-7 before:size-2.5' },
      '2': { control: 'h-5 w-8 before:size-3' },
      '3': { control: 'h-6 w-10 before:size-4' },
    },
    // prettier-ignore
    variant: {
      'gray-solid': { control: 'bg-gray-9 before:bg-gray-contrast border-transparent' },
      'gray-soft': { control: 'bg-gray-3 before:bg-gray-9 border-transparent selected:bg-gray-9 selected:before:bg-gray-contrast' },
      'gray-soft-outline': { control: 'border-gray-7 bg-gray-3 before:bg-gray-9 selected:bg-gray-9 selected:before:bg-gray-contrast' },
      'gray-outline': { control: 'border-gray-7 before:bg-gray-9 selected:bg-gray-9 selected:before:bg-gray-contrast' },
      'accent-solid': { control: 'bg-accent-9 before:bg-accent-contrast border-transparent' },
      'accent-soft': { control: 'bg-accent-3 before:bg-accent-9 border-transparent selected:bg-accent-9 selected:before:bg-accent-contrast' },
      'accent-soft-outline': { control: 'border-accent-7 bg-accent-3 before:bg-accent-9 selected:bg-accent-9 selected:before:bg-accent-contrast' },
      'accent-outline': { control: 'border-accent-7 before:bg-accent-9 selected:bg-accent-9 selected:before:bg-accent-contrast' },
      'warn-solid': { control: 'bg-warn-9 before:bg-warn-contrast border-transparent focus-visible:ring-warn-8' },
      'warn-soft': { control: 'bg-warn-3 before:bg-warn-9 border-transparent selected:bg-warn-9 selected:before:bg-warn-contrast focus-visible:ring-warn-8' },
      'warn-soft-outline': { control: 'border-warn-7 bg-warn-3 before:bg-warn-9 selected:bg-warn-9 selected:before:bg-warn-contrast focus-visible:ring-warn-8' },
      'warn-outline': { control: 'border-warn-7 before:bg-warn-9 selected:bg-warn-9 selected:before:bg-warn-contrast focus-visible:ring-warn-8' },
      'danger-solid': { control: 'bg-danger-9 before:bg-danger-contrast border-transparent focus-visible:ring-danger-8' },
      'danger-soft': { control: 'bg-danger-3 before:bg-danger-9 border-transparent selected:bg-danger-9 selected:before:bg-danger-contrast focus-visible:ring-danger-8' },
      'danger-soft-outline': { control: 'border-danger-7 bg-danger-3 before:bg-danger-9 selected:bg-danger-9 selected:before:bg-danger-contrast focus-visible:ring-danger-8' },
      'danger-outline': { control: 'border-danger-7 before:bg-danger-9 selected:bg-danger-9 selected:before:bg-danger-contrast focus-visible:ring-danger-8' },
    },
  },
});

export function Root({ children, className, ...props }: SwitchFieldRootProps) {
  const [describedBy, setDescribedBy] = useState<string>();
  return (
    <SwitchFieldContext value={{ setDescribedBy }}>
      <SwitchContext value={{ 'aria-describedby': describedBy, ...props }}>
        <div data-slot="switchfield" className={textFieldRootVariants({ className })}>
          {children}
        </div>
      </SwitchContext>
    </SwitchFieldContext>
  );
}

export function Switch({ children, className, elevation, size, variant, ...props }: SwitchFieldSwitchProps) {
  const groupContext = use(GroupContext);
  const switchContext = use(SwitchContext);
  const slots = useMemo(() => switchFieldSwitchVariants({ elevation, size, variant }), [elevation, size, variant]);
  return (
    <SwitchPrimitive
      data-slot="switchfield-switch"
      className={slots.base({ className })}
      {...mergeProps(groupContext, switchContext, props)}
    >
      {(renderProps) => (
        <>
          <div
            data-slot="switchfield-switch-control"
            data-rac
            data-selected={renderProps.isSelected || undefined}
            data-focus-visible={renderProps.isFocusVisible || undefined}
            aria-hidden
            className={slots.control()}
          />
          {composeChildren(children, renderProps)}
        </>
      )}
    </SwitchPrimitive>
  );
}

export function Description({ id, ...props }: SwitchFieldDescriptionProps) {
  const { setDescribedBy } = useSwitchFieldContext();
  const internalId = id ?? useId();
  useEffect(() => (setDescribedBy(internalId), () => setDescribedBy(undefined)), [internalId, setDescribedBy]);
  return <Text data-slot="switchfield-description" size="2" variant="soft" id={internalId} {...props} />;
}
