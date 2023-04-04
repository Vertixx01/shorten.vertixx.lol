import { useLocation } from "@solidjs/router";
import getRedirect from "../db/functions/getRedirect";

const Redirect = () => {
    const location = useLocation();
    const from = location.pathname.replace("/", "");
    setTimeout(() => {
        getRedirect(from.toString()).then((res) => {
            window.location.href = res.data.from;
        });
    }, 1000);
    return (
        <div class="h-screen w-screen bg-[#121212] flex justify-center items-center">
            <h1 class="text-4xl text-[#f5f5f5] font-bold">Redirecting...</h1>
        </div>
    );
};

export default Redirect;
