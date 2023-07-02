import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type LinkProps<T> =
  | NextLinkProps<T>
  | (ComponentPropsWithoutRef<'a'> & {
      external: true;
    });

export const Link = <T,>({ children, ...props }: LinkProps<T>): ReactNode => {
  if ('external' in props) {
    const { external, ...anchorProps } = props;

    return (
      <a tabIndex={0} target="_blank" rel="noopener noreferrer" {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <NextLink tabIndex={0} {...props}>
      {children}
    </NextLink>
  );
};
