import { type RenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { type VariantProps } from 'tailwind-variants';

export type ClassName<T> = RenderProps<T>['className'];
export type ClassNameProps<T> = Parameters<Extract<ClassName<T>, Function>>[0];

export type Children<T> = RenderProps<T>['children'];
export type ChildrenProps<T> = Parameters<Extract<Children<T>, Function>>[0];

export function composeClassName<T>(className: ClassName<T>, props: ClassNameProps<T>, classNames?: Array<string>) {
  return twMerge(typeof className === 'function' ? className(props) : className, classNames);
}

export function composeChildren<T>(children: Children<T>, props: ChildrenProps<T>) {
  return typeof children === 'function' ? children(props) : children;
}

export function composeVariants<V extends (props?: Record<string, unknown>) => string, C>(
  variants: V,
  variantProps: VariantProps<V>,
  className: ClassName<C>,
  classNames?: Array<string>,
) {
  return (props: ClassNameProps<C>) =>
    variants({ ...variantProps, className: composeClassName(className, props, classNames) });
}
