import type { Dispatch, SetStateAction } from "react";
import type { Player } from "../types/playerType";
import { FaRegTrashCan } from "react-icons/fa6";

interface SelectedPlayersProps {
    selectedPlayers: Player[];
    setSelectedPlayers: Dispatch<SetStateAction<Player[]>>;
    money: number;
    setMoney: Dispatch<SetStateAction<number>>;

}

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, money, setMoney }: SelectedPlayersProps) => {

    const handleDelete = (player: Player) => {
        const newList = selectedPlayers.filter((each) => each.id !== player.id);
        setSelectedPlayers(newList);
        setMoney(money + player.price);
    }

    return (
        <ul className="list bg-base-100 rounded-box shadow-md">
            {
                selectedPlayers.map((player) => {
                    return (
                        <li key={player.id} className="list-row grid grid-cols-3 justify-between items-center px-16">
                            <div className="flex justify-start items-center gap-8">
                                <div className="text-4xl font-thin opacity-30 tabular-nums">{player.id}</div>
                                <div>
                                    <img className="size-20 object-contain rounded-box" src={player.img} />
                                </div>
                            </div>
                            <div className="list-col-grow font-bold">
                                <div>{player.name}</div>
                                <div className="text-xs uppercase font-semibold opacity-60">{player.playerType}</div>
                            </div>
                            <div className="text-xl uppercase font-semibold">${player.price}</div>
                            <button
                                onClick={() => handleDelete(player)}
                                className="btn btn-square border text-red-600 border-red-600">
                                <FaRegTrashCan />
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default SelectedPlayers;