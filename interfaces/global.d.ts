
declare interface GenericProps {
    stretch?: boolean;
}

declare interface BoxProps 
    extends React.HTMLAttributes<HTMLDivElement>, GenericProps {}