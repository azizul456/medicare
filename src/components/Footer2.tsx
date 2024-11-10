export default function Footer() {
    return (
        
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} • Medicare 24 • All Rights Reserved</p>
                <nav className="space-x-4 mt-2">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
}
