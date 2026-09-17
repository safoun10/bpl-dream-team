import { Suspense } from "react";
import Nav from "./components/Nav"
import Players from "./components/Players";
import type { Player } from "./types/playerType";

const playersData = async (): Promise<Player[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
}

function App() {

    return (
        <div>
            <Nav />
            <Suspense fallback={<p>loading...</p>}>
                <Players playersData={playersData()} />
            </Suspense>
        </div>
    )
}

export default App
