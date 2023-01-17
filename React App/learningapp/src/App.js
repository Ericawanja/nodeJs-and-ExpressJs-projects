import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");
  const [pwdAlert, setPwdAlert] = useState(false)

  const handlePwd = (e) => {
    setPassword({ ...password, value: e.target.value, isTouched: true })
    let pwd = e.target.value.length
    if (pwd < 8 && pwd > 1) {

      setPwdAlert(true)
    } else {

      setPwdAlert(false)
    }
  }

  const getIsFormValid = () => {

    // Implement this function
    if (firstName.trim().length === 0) return false 
    if (lastName.trim().length === 0)  return false 
    if (email.trim().length === 0 || validateEmail(email)) return false 
    if (password.value.trim().length === 0) return false 
    if ((role != 'individual' && role != 'business')) return false 

    return true


  };

  const clearForm = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setRole("")
    setPassword({ value: "", isTouched: false })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input placeholder="Password" value={password.value} onChange={handlePwd} />
            {pwdAlert && <PasswordErrorMessage />}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
