import { SignUp } from '@clerk/nextjs';

const SignUpView: React.FunctionComponent = () => {
  return (
    <div className="h-screen flex flex-row items-center justify-center">
      <SignUp afterSignUpUrl={'/home'} redirectUrl={'/home'} />
    </div>
  );
};

export default SignUpView;