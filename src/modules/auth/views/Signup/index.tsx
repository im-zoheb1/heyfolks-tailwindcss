import React from 'react';
import { Link } from 'react-router-dom';
import { CoreForm, CoreButton, CoreInput, CoreEntryHelper, CoreEntrySection } from "components/Elements";

const Signup: React.FC = (): JSX.Element => {
  return (
    <div className="flex h-screen">
      <CoreEntrySection title="Sign Up">
        <CoreForm>
          <div className="mb-10">
            <CoreInput required label="Full Name" placeholder="Full Name" type="text"></CoreInput>
          </div>
          <div className="mb-10">
            <CoreInput required label="Username" placeholder="Username" type="text"></CoreInput>
          </div>
          <div className="mb-10">
            <CoreInput required label="Email Address" placeholder="Email Address" type="email"></CoreInput>
          </div>
          <div className="mb-10">
            <CoreInput required label="Password" placeholder="Password" type="password"></CoreInput>
          </div>
          <div className="mb-12">
            <CoreInput required label="Confrim Password" placeholder="Confirm Password" type="password"></CoreInput>
          </div>
          <CoreButton className="px-10 py-4" pilled type="submit">Sign Up</CoreButton>
        </CoreForm>
      </CoreEntrySection>
      <CoreEntryHelper text="Already have an account?">
        <Link to="/auth">
          <CoreButton pilled transformOnHover variant="light">
            Sign In
          </CoreButton>
        </Link>
      </CoreEntryHelper>
    </div>
  );
}

export default Signup;
