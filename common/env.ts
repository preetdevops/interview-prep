export const EnvironmentVariable = {
  clerkAuth: {
    publishableKey: process.env["NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"],
    secretKey: process.env["CLERK_SECRET_KEY"],
  },
  backend: {
    url: process.env["NEXT_PUBLIC_BACKEND_HOST_URL"],
  },
};
