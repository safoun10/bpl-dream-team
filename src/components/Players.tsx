import { use, useState } from 'react';
import type { Player } from '../types/playerType';
import AvailablePlayers from './AvailablePlayers';

interface PlayersProps {
    playersData: Promise<Player[]>
}

const Players = ({ playersData }: PlayersProps) => {
    const players = use(playersData);

    const [btnState, setBtnState] = useState("Available");
    const handleBtnType = (type: "Available" | "Selected") => {
        setBtnState(type)
    };

    return (
        <div className='mx-auto my-20 max-w-300'>
            <div className='flex items-center justify-between mb-10'>
                <div className='text-3xl font-bold'>Available Players</div>
                <div className='flex'>
                    <button
                        onClick={() => handleBtnType("Available")}
                        className={`rounded-tr-none rounded-br-none btn border-none
                        ${(btnState === "Available") ? "bg-lime-500 text-white" : ""}`}>
                        Available
                    </button>
                    <button
                        onClick={() => handleBtnType("Selected")}
                        className={`rounded-tl-none rounded-bl-none btn 
                        ${(btnState === "Selected") ? "bg-lime-500 text-white" : ""}`}>
                        Selected
                    </button>
                </div>
            </div>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div >
    );
};

export default Players;