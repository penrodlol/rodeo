'use client';

import { createContext, use, useEffect, useState } from 'react';
import { useId } from 'react-aria';
import { Group, GroupContext } from 'react-aria-components';
import { tv, VariantProps } from 'tailwind-variants';
import { Text } from './typography';

export type SwitchFieldGroupRootProps = React.PrimitiveComponentProps<typeof Group> & SwitchFieldGroupRootVariants;
export type SwitchFieldGroupLabelProps = React.ComponentProps<typeof Text>;

export type SwitchFieldGroupRootVariants = VariantProps<typeof switchFieldGroupRootVariants>;

export type SwitchFieldGroupContextValue = { setLabelledBy: (id?: string) => void };
export const SwitchFieldContext = createContext<SwitchFieldGroupContextValue | undefined>(undefined);
export function useSwitchFieldGroup() {
  const context = use(SwitchFieldContext);
  if (!context) throw new Error('useSwitchFieldGroup must be used within a SwitchFieldGroup');
  return context as SwitchFieldGroupContextValue;
}

export const switchFieldGroupRootVariants = tv({
  base: 'grid gap-4',
  defaultVariants: { orientation: 'vertical' },
  variants: {
    orientation: {
      horizontal: [
        'has-slot-[switchfield-group-label]:grid-rows-[repeat(2,max-content)]',
        'slot-[switchfield-group-label]:row-start-1',
        'slot-[switchfield]:row-start-1 slot-[switchfield-switch]:row-start-1',
        'has-slot-[switchfield-group-label]:slot-[switchfield]:row-start-2',
        'has-slot-[switchfield-group-label]:slot-[switchfield-switch]:row-start-2',
      ],
      vertical: [
        'slot-[switchfield-switch]:flex-row-reverse',
        'slot-[switchfield-switch]:justify-between',
        'slot-[switchfield-switch]:max-w-none',
      ],
    },
    elevation: { '1': 'elevation-1', '2': 'elevation-2', '3': 'elevation-3' },
    variant: {
      soft: 'bg-gray-2 rounded p-4',
      'soft-outline': 'bg-gray-2 border-gray-6 rounded border p-4',
      outline: 'border-gray-6 rounded border p-4',
    },
  },
});

export function Root({ className, orientation, elevation, variant, ...props }: SwitchFieldGroupRootProps) {
  const [labelledBy, setLabelledBy] = useState<string>();
  return (
    <SwitchFieldContext value={{ setLabelledBy }}>
      <GroupContext value={props}>
        <Group
          aria-labelledby={labelledBy}
          className={switchFieldGroupRootVariants({ orientation, elevation, variant, className })}
          {...props}
        />
      </GroupContext>
    </SwitchFieldContext>
  );
}

export function Label({ id, ...props }: SwitchFieldGroupLabelProps) {
  const context = useSwitchFieldGroup();
  const internalId = id ?? useId();
  useEffect(() => (context.setLabelledBy(internalId), () => context.setLabelledBy(undefined)), [internalId]);
  return <Text as="span" data-slot="switchfield-group-label" variant="soft" id={internalId} {...props} />;
}
