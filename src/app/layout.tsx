import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className="flex min-h-screen flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
