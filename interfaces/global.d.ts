
declare interface GenericProps {
    stretch?: boolean;
}

declare interface BoxProps 
    extends React.HTMLAttributes<HTMLDivElement>, GenericProps {}

declare type UserType = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
}

declare type PreferredLevelType = "entry" | "internship" | "mid" | "senior" | "lead";

declare type UserPlatformDetailsType = {
    interestedRoles: string[];
    preferredLevel: PreferredLevelProps;
}

declare type ApplicationUserType = UserType & UserPlatformDetailsType;