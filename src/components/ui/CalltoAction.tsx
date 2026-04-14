import { RiSendPlaneFill } from "react-icons/ri";

const CalltoAction = () => {
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
                            <form action="">
                                <div className="lead-form-grid">
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="text" placeholder="Phone" />
                                    <input type="text" placeholder="Your Brand" />
                                </div>
                                <div className="full-fields">
                                    <select name="" id="">
                                        <option value="">Select Service</option>
                                        <option value="">Web Development</option>
                                        <option value="">App Development</option>
                                        <option value="">UI/UX Design</option>
                                        <option value="">Digital Marketing</option>
                                    </select>
                                    <textarea placeholder="Message" rows={4}></textarea>
                                    <button type="submit"><RiSendPlaneFill size={18} />Establish Connection</button>
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