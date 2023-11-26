// UserRegistrationAndLoginComponent.js
import { useState } from "react";
import "../App.css"; 

const UserRegistrationAndLoginComponent = () => {
  const [showRegistration, setShowRegistration] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleForm = () => {
    setShowRegistration(!showRegistration);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="auth-box mx-2 sm:mx-auto rounded shadow-md">
        {showRegistration ? (
          <div>
            <h2 className="text-2xl mb-4 text-white">Registration</h2>
            {/* Registration Form */}
            <form>
              {/* Add your registration form inputs here */}
              <input
                type="text"
                placeholder="Name"
                className="input text-black"
                autoComplete="text"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="input text-black"
                autoComplete="tel"
              />
              <input
                type="email"
                placeholder="Email Id"
                className="input text-black"
                autoComplete="email"
              />
              <input
                type="password"
                placeholder="Password"
                className="input text-black"
                autoComplete="current-password"
              />
              {/* Custom file input */}
              <div className="file-input-container">
                <label className="file-input-label">
                  {selectedFile
                    ? `Profile Image: ${selectedFile.name.substring(0, 30)}`
                    : "Choose a profile image"}
                  <input
                    type="file"
                    className="file-input"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <button type="submit" className="btn">
                Register
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl mb-4 text-white">Login</h2>
            {/* Login Form */}
            <form>
              {/* Add your login form inputs here */}
              <input
                type="text"
                placeholder="Email Id"
                className="input text-black"
                autoComplete="email"
              />
              <input
                type="password"
                placeholder="Password"
                className="input text-black"
                autoComplete="current-password"
              />
              <button type="submit" className="btn">
                Login
              </button>
            </form>
          </div>
        )}

        {/* Toggle between Registration and Login forms */}
        <div className="mt-4">
          <button onClick={toggleForm} className="text-white">
            {showRegistration ? "Switch to Login" : "Switch to Registration"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationAndLoginComponent;
