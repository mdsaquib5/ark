import Link from "next/link";

export default function NotFound() {
    return (
        <main className="nf-container">
            <div className="nf-content">
                <h1 className="nf-error-code">404</h1>
                <div className="nf-divider"></div>
                <h2 className="nf-message">Page Not Found</h2>
                <p className="nf-description">
                    The page you are looking for has been moved or doesn't exist.
                    Let's get you back on track.
                </p>
                <Link href="/" className="nf-button">
                    Return to Home
                </Link>
            </div>

            <div className="nf-glow-1"></div>
            <div className="nf-glow-2"></div>
        </main>
    );
}

