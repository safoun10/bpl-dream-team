import type { Dispatch, SetStateAction } from 'react';
import type { Player } from '../types/playerType';
import EachPlayer from './EachPlayer';

interface AvailablePlayersProps {
    players: Player[];
    money: number;
    setMoney: Dispatch<SetStateAction<number>>;
    selectedPlayers: Player[];
    setSelectedPlayers: Dispatch<SetStateAction<Player[]>>;

}

const AvailablePlayers = ({ players, money, setMoney, selectedPlayers, setSelectedPlayers }: AvailablePlayersProps) => {
    console.log(players);
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                players.map((player: Player) => {
                    return (
                        <EachPlayer
                            money={money} setMoney={setMoney} player={player} key={player.id}
                            selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
                        ></EachPlayer>
                    )
                })
            }
        </div>
    );
};

export default AvailablePlayers;