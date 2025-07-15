"use client"; // Allows form handling in the browser
import { useState } from "react";
import officers from "@/data/officers.json";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwiyApoBDd4AsgvXVCuFWDZPxpBoJcpO-zsTXbaRdw5cFCOyJ1k_idThWSa4Z-lmYxa/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.status === "success") {
      alert("Message submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Error submitting message: " + result.message);
    }
  } catch (error) {
    alert(error);
  }
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-[#7f0000]">Contact Us</h1>
      <p className="text-gray-700 mt-4">
        Interested in joining? Fill out the form below or contact our leadership directly.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-4 p-6 border border-gray-300 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-[#7f0000]">Contact Form</h2>
        
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded-md"
            rows={4}
            required
          />
        </div>

        <button type="submit" className="w-full bg-[#7f0000] text-white p-2 rounded-md hover:bg-[#5c0000]">
          Send Message
        </button>
      </form>
      {/* Officer Contact Info */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {officers.map((officer, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-[#7f0000]">{officer.title}</h2>
            <p><strong>Name:</strong> {officer.name}</p>
            <p><strong>Email:</strong> <a href={`mailto:${officer.email}`} className="text-[#7f0000] hover:underline">{officer.email}</a></p>
            <p><strong>Phone:</strong> {officer.phone}</p>
          </div>
          ))}
        </div>
    </main>
  );
}
