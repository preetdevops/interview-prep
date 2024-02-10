import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'lead' | 'large' | 'small' | 'muted' | 'sub-muted';
}

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}
export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}
export interface BlockquoteProps
  extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {}
export interface CodeProps extends React.HTMLAttributes<HTMLElement> {}
export interface UppercaseHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as = 'h2', ...args }, ref) => {
    switch (as) {
      case 'h1':
        return (
          <h1
            ref={ref}
            className={cn(
              'heading-h1 text-4xl font-extrabold tracking-tight lg:text-5xl',
              className,
            )}
            {...args}
          />
        );
      case 'h3':
        return (
          <h3
            ref={ref}
            className={cn(
              'heading-h3 text-2xl font-semibold tracking-tight',
              className,
            )}
            {...args}
          />
        );
      case 'h4':
        return (
          <h4
            ref={ref}
            className={cn(
              'heading-h4 text-xl font-semibold tracking-tight',
              className,
            )}
            {...args}
          />
        );
      default:
        return (
          <h2
            ref={ref}
            className={cn(
              'heading-h2 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
              className,
            )}
            {...args}
          />
        );
    }
  },
);

Heading.displayName = 'Heading';

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, as = 'p', ...args }, ref) => {
    switch (as) {
      case 'lead':
        return (
          <p
            ref={ref}
            className={cn('lead-text text-xl text-muted-foreground', className)}
            {...args}
          />
        );
      case 'large':
        return (
          <div
            ref={ref}
            className={cn('large-text text-lg font-semibold', className)}
            {...args}
          />
        );
      case 'small':
        return (
          <small
            ref={ref}
            className={cn(
              'small-text text-sm font-medium leading-none',
              className,
            )}
            {...args}
          />
        );
      case 'muted':
        return (
          <p
            ref={ref}
            className={cn(
              'muted-text text-sm text-muted-foreground',
              className,
            )}
            {...args}
          />
        );
      case 'sub-muted':
        return (
          <p
            ref={ref}
            className={cn('muted-text text-xs text-gray-400', className)}
            {...args}
          />
        );
      default:
        return (
          <p
            ref={ref}
            className={cn('paragraph-text leading-7', className)}
            {...args}
          />
        );
    }
  },
);

Text.displayName = 'Text';

export const List = forwardRef<HTMLUListElement, ListProps>(
  ({ className, ...args }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn('list my-6 ml-6 list-disc [&>li]:mt-2', className)}
        {...args}
      />
    );
  },
);

List.displayName = 'List';

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, ...args }, ref) => {
    return <li ref={ref} className={cn('list-item', className)} {...args} />;
  },
);

ListItem.displayName = 'ListItem';

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, ...args }, ref) => {
    return (
      <blockquote
        ref={ref}
        className={cn('blockquote mt-6 border-l-2 pl-6 italic', className)}
        {...args}
      />
    );
  },
);

Blockquote.displayName = 'Blockquote';

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, ...args }, ref) => {
    return <code ref={ref} className={cn('code', className)} {...args} />;
  },
);

Code.displayName = 'Code';

export const UppercaseHeading = forwardRef<
  HTMLHeadingElement,
  UppercaseHeadingProps
>(({ className, ...args }, ref) => {
  return (
    <h5
      ref={ref}
      className={cn(
        'uppercase-heading text-xs uppercase font-semibold text-neutral-500',
        className,
      )}
      {...args}
    />
  );
});

UppercaseHeading.displayName = 'UppercaseHeading';