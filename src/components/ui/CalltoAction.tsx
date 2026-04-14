'use client';

import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const CalltoAction = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        brand: "",
        service: "",
        message: ""
    });

    const [status, setStatus] = useState<{
        type: "idle" | "loading" | "success" | "error";
        message: string;
    }>({ type: "idle", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.name || !formData.email || !formData.service) {
            setStatus({ type: "error", message: "Please fill in Name, Email and Service." });
            return;
        }

        setStatus({ type: "loading", message: "Establishing connection..." });

        try {
            console.log("Transmission initialized...", formData);
            const response = await fetch("/api/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ type: "success", message: "Transmission received. Our agents will respond shortly." });
                setFormData({ name: "", email: "", phone: "", brand: "", service: "", message: "" });
            } else {
                throw new Error(data.message || "Uplink failed.");
            }
        } catch (error: any) {
            console.error("Transmission Error:", error);
            setStatus({ type: "error", message: error.message || "Connection lost. Please try again later." });
        }
    };

    return (
        <div className="section">
            <div className="container">
                <div className="cta-bg glass">
                    <div className="form-title">
                        <div className="section-title">Book your project</div>
                        <p>Let's build something extraordinary together.</p>
                    </div>
                    <div className="lead-form">
                        <form onSubmit={handleSubmit}>
                            <div className="lead-form-grid">
                                <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                <input name="phone" type="text" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                                <input name="brand" type="text" placeholder="Your Brand" value={formData.brand} onChange={handleChange} />
                            </div>
                            <div className="full-fields">
                                <select name="service" value={formData.service} onChange={handleChange} required>
                                    <option value="">Select Service</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                </select>
                                <textarea name="message" placeholder="Message" rows={4} value={formData.message} onChange={handleChange}></textarea>

                                {status.message && (
                                    <div className={`form-alert ${status.type}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button type="submit" disabled={status.type === "loading"}>
                                    <RiSendPlaneFill size={18} />
                                    {status.type === "loading" ? "Transmitting..." : "Establish Connection"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .form-alert {
                    padding: 12px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    font-size: 14px;
                    text-align: center;
                    border: 1px solid transparent;
                }
                .form-alert.loading {
                    background: rgba(59, 130, 246, 0.1);
                    color: #3b82f6;
                    border-color: #3b82f6;
                }
                .form-alert.success {
                    background: rgba(16, 185, 129, 0.1);
                    color: #10b981;
                    border-color: #10b981;
                }
                .form-alert.error {
                    background: rgba(239, 68, 68, 0.1);
                    color: #ef4444;
                    border-color: #ef4444;
                }
                button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            `}</style>
        </div>
    )
}

export default CalltoAction;