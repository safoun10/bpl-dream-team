import { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { Player } from '../types/playerType';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface PlayersProps {
    playersData: Promise<Player[]>;
    money: number;
    setMoney: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersData, money, setMoney }: PlayersProps) => {
    const players = use(playersData);

    const [btnState, setBtnState] = useState("Available");
    const handleBtnType = (type: "Available" | "Selected") => {
        setBtnState(type)
    };

    return (
        <div className='mx-auto my-20 max-w-300'>
            <div className='flex items-center justify-between mb-20'>
                <div className='text-3xl font-bold'>
                    {
                        btnState === "Available" ?
                            "Available Players" :
                            "Selected Players"
                    }
                </div>
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
            {
                btnState === "Available" ?
                    <AvailablePlayers money={money} setMoney={setMoney} players={players}></AvailablePlayers> :
                    <SelectedPlayers></SelectedPlayers>
            }

        </div >
    );
};

export default Players;