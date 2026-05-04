import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 pt-4 px-4">
                <div className="mx-auto max-w-6xl w-full">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LayoutPage;