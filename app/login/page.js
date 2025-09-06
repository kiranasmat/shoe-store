"use client"
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
       
    })
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
         if (
           !formData.email ||
           !formData.password 
         
         ) {
           alert("Please fill all fields.");
           return;
         }

        try {
            const res = await fetch("/api/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: formData.email,
                password: formData.password,
              }),
            });
            const data = await res.json();
            if (data.success) {
              localStorage.setItem("token", data.token); // store JWT
                toast.success("Login successful!");
                 window.location.href = "/";
            } else {
               toast.error(data.message || "Login failed");
             }
        } catch (error) {
          
           alert("Server error. Please try again."); 
        }
    }

    return (
      <div className="container mt-5 bordered ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                
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
        
                  <button
                    className="btn btn-custom text-white w-100"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}