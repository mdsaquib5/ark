"use client";
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
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const res = await fetch("/api/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("Transmission received! We'll be in touch.");
                setFormData({ name: "", email: "", phone: "", brand: "", service: "", message: "" });
            } else {
                setStatus(`Error: ${data.message || "Failed to establish connection."}`);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus("Connection lost. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
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
                                    <input 
                                        type="text" 
                                        name="name"
                                        placeholder="Name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                    <input 
                                        type="text" 
                                        name="phone"
                                        placeholder="Phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                    />
                                    <input 
                                        type="text" 
                                        name="brand"
                                        placeholder="Your Brand" 
                                        value={formData.brand} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="full-fields">
                                    <select 
                                        name="service"
                                        value={formData.service} 
                                        onChange={handleChange} 
                                        required
                                    >
                                        <option value="">Select Service</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                    </select>
                                    <textarea 
                                        name="message"
                                        placeholder="Message" 
                                        rows={4} 
                                        value={formData.message} 
                                        onChange={handleChange}
                                    ></textarea>
                                    <button type="submit" disabled={loading}>
                                        <RiSendPlaneFill size={18} />
                                        {loading ? "Transmitting..." : "Establish Connection"}
                                    </button>
                                    {status && <p className={`status-msg ${status.includes("Error") ? "error" : "success"}`}>{status}</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalltoAction;