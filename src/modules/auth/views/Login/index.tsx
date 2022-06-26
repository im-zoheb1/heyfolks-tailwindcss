import { Link, useNavigate } from 'react-router-dom';

import { CoreButton, CoreEntryHelper, CoreEntrySection, CoreForm, CoreInput } from "components/Elements";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (): void => {
    navigate('/register'); 
  }

  return (
    <div className="h-screen flex">
      <CoreEntryHelper text="Don't have an account?">
        <Link to="/register">
          <CoreButton pilled transformOnHover variant="light">
            Sign Up
          </CoreButton>
        </Link>
      </CoreEntryHelper>
      <CoreEntrySection title="Log In">
        <CoreForm onSubmit={handleSubmit}>
          <div className="mb-10">
            <CoreInput required label="Username" placeholder="Username" type="email"></CoreInput>
          </div>
          <div className="mb-8">
            <CoreInput required label="Password" placeholder="Password" type="password"></CoreInput>
          </div>
          <div className="text-base mb-8 font-bold text-primary pointer text-right">
            <a className="cursor-pointer hover:underline">Forgot Password?</a>
          </div>
          <CoreButton className="px-10 py-4" pilled type="submit">Log In</CoreButton>
        </CoreForm>
      </CoreEntrySection>
    </div>
  );
}

export default Login;
