import { createContext, useEffect, useState } from "react";

type SignUpFormContextType = {
    firstName : String,
    lastName : String,
    email: String,
    password: String,
    confirmPassword: String,
    handleFirstNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleLastNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleConfirmPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSignUp: () => void,
}

const SignUpFormContext = createContext<SignUpFormContextType>({
    firstName : '',
    lastName : '',
    email: '',
    password: '',
    confirmPassword: '',
    handleFirstNameChange: () => {},
    handleLastNameChange: () => {},
    handleEmailChange: () => {},
    handlePasswordChange: () => {},
    handleSignUp: () => {},
    handleConfirmPasswordChange: () => {}
});


type Props = {
    children?: React.ReactNode;
}

function SignUpProvider({ children }:Props){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }, []);
    
      const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
      };

      const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
      };

      const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };

      const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
      };
    
      const handleSignUp = () => {
        // Perform validation or API call with email and password
        // For demonstration purposes, let's log the values to the console
        if(password !== confirmPassword){
          console.log("Passwords do not match!")
          return ;
        }
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('ConfirmPassword:', confirmPassword);
    
        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        
      };

      const valueToShare = {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        handleEmailChange,
        handlePasswordChange,
        handleConfirmPasswordChange,
        handleFirstNameChange,
        handleLastNameChange,
        handleSignUp
      }

      return (
        <SignUpFormContext.Provider value={valueToShare}>
            {children}
        </SignUpFormContext.Provider>
      )
}

export {SignUpProvider};
export default SignUpFormContext;