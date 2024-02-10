export const EnvironmentVariable = {
    clerkAuth: {
        publishableKey: process.env['NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY'],
        secretKey: process.env['CLERK_SECRET_KEY']
    }
}