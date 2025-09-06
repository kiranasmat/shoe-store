import { NextResponse } from "next/server";
import connectDB from "@/app/lib/dbConnected";
import User from "@/app/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
      console.log("Request body:", body);
    const { name, email, password } = body;

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Connect to DB
    await connectDB();

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return NextResponse.json(
      { success: true, message: "User created successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Signup API error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
