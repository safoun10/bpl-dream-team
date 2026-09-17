import { Suspense, useState } from "react";
import Nav from "./components/Nav"
import Players from "./components/Players";
import type { Player } from "./types/playerType";
import { ToastContainer } from "react-toastify";

const playersFetch = async (): Promise<Player[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
}

function App() {
    const [playersData] = useState(() => playersFetch());

    const [money, setMoney] = useState(500);

    return (
        <div>
            <Nav money={money} />
            <Suspense fallback={<p>loading...</p>}>
                <Players money={money} setMoney={setMoney} playersData={playersData} />
            </Suspense>
            <ToastContainer position="top-center" closeOnClick={true} pauseOnHover={false} autoClose={1000} />
        </div>
    )
}

export default App
