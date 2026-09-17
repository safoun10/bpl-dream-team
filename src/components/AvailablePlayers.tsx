import type { Player } from '../types/playerType';
import EachPlayer from './EachPlayer';


const AvailablePlayers = ({ players }: { players: Player[] }) => {
    console.log(players);
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                players.map((player: Player) => {
                    return (
                        <EachPlayer player={player} key={player.id}></EachPlayer>
                    )
                })
            }
        </div>
    );
};

export default AvailablePlayers;