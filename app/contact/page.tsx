"use client";
import { useState } from "react";
import officers from "@/data/officers.json";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyiDe2-oAjDRkcRg9CrG2h5xIMTV4iElTkr6Y0kloOvG5sWJXZOtP-hrhy3cGJYIpFe/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold text-[#7f0000]">Contact Us</h1>
      <p className="text-gray-700">
        Interested in joining? Fill out the form below or contact our leadership directly.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full p-2 rounded-md border border-gray-300"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#7f0000] text-white p-2 rounded-md hover:bg-[#5c0000]"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {submitted && (
          <p className="text-green-600 font-medium text-center">Thanks! We'll be in touch soon.</p>
        )}
      </form>

      {/* Officer Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {officers.map((officer, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-[#7f0000]">{officer.title}</h2>
            <p><strong>Name:</strong> {officer.name}</p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${officer.email}`}
                className="text-[#7f0000] hover:underline"
              >
                {officer.email}
              </a>
            </p>
            <p><strong>Phone:</strong> {officer.phone}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
