"use client"
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
     const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword:""
    })
     useEffect(() => {
       const token = localStorage.getItem("token"); // JWT token
       if (token) {
         toast.info("You are already logged in!");
         router.push("/"); // redirect to dashboard
       }
     }, []);
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
         if (
           !formData.name ||
           !formData.email ||
           !formData.password ||
           !formData.confirmPassword
         ) {
           alert("Please fill all fields.");
           return;
         }

         if (formData.password !== formData.confirmPassword) {
           alert("Passwords do not match.");
           return;
         }
        try {
            const res = await fetch("/api/signup", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                password: formData.password,
              }),
            });
            const data = await res.json();
             if (data.success) {
               toast.success("User created successfully!");
             } else {
               toast.error(data.message || "Failed to create user.");
             }
        } catch (error) {
           console.error("Signup error:", error);
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
                  <button
                    className="btn btn-custom text-white w-100"
                    type="submit"
                  >
                    Submit
                  </button>
                  <div className="d-flex">
                    <p>Are you already registered?</p>
                    <Link href="/login">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}