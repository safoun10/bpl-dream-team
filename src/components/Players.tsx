import { use } from 'react';
import type { Player } from '../types/playerType';
import AvailablePlayers from './AvailablePlayers';

interface PlayersProps {
    playersData: Promise<Player[]>
}

const Players = ({ playersData }: PlayersProps) => {
    const players = use(playersData);
    return (
        <div className='mx-auto my-20 max-w-300'>
            <div className='flex items-center justify-between mb-10'>
                <div className='text-3xl font-bold'>Available Players</div>
                <div className='flex'>
                    <button className="rounded-tr-none rounded-br-none btn btn-active btn-success">Available</button>
                    <button className="rounded-tl-none rounded-bl-none btn btn-active">Selected</button>
                </div>
            </div>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;