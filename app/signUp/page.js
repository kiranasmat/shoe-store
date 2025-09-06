"use client"
import { useState } from "react";

export default function Signup() {
    const [formData, setFormData] = useState({
        name: " ",
        email: " ",
        password: " ",
        confirmPassword:" "
    })
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Signup Data:", formData);
        alert("Signup successful!");
    }

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card-shadow">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Sign Up</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                        value={formData.name}
                        onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                   </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                        value={formData.email}
                        onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                        value={formData.password}
                        onChange={handleChange}
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      placeholder="Confirm your password"
                    />
                  </div>
                  <button className="btn btn-custom text-white w-100" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}