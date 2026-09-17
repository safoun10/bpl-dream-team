import { Suspense, useState } from "react";
import Nav from "./components/Nav"
import Players from "./components/Players";
import type { Player } from "./types/playerType";

const playersData = async (): Promise<Player[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
}

function App() {

    const [money, setMoney] = useState(500);

    return (
        <div>
            <Nav money={money} />
            <Suspense fallback={<p>loading...</p>}>
                <Players money={money} setMoney={setMoney} playersData={playersData()} />
            </Suspense>
        </div>
    )
}

export default App
