import { FaFontAwesomeFlag } from "react-icons/fa";
import type { Player } from "../types/playerType";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbCricket } from "react-icons/tb";
import { BiCricketBall } from "react-icons/bi";

const EachPlayer = ({ player }: { player: Player }) => {
    return (
        <div className="w-full max-w-sm overflow-hidden transition-all duration-300 border shadow-md card bg-base-100 border-base-200 hover:shadow-xl rounded-xl">

            <div className="relative h-56 overflow-hidden bg-base-200">
                <img
                    src={player.img}
                    alt={player.name}
                    className="object-cover object-top w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute gap-1 font-semibold shadow-sm top-3 right-3 badge badge-neutral backdrop-blur-md bg-opacity-80">
                    <BsFillLightningChargeFill className="text-xs text-amber-400" />
                    <span>{player.rating} / 100</span>
                </div>
            </div>

            <div className="gap-4 p-5 card-body">

                <div>
                    <h3 className="text-xl font-bold tracking-tight card-title text-base-content">
                        {player.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1 text-sm text-base-content/70">
                        <div className="flex items-center gap-1.5 font-medium">
                            <FaFontAwesomeFlag className="text-xs" />
                            <span>{player.country}</span>
                        </div>
                        <span className="font-semibold tracking-wide uppercase badge badge-sm badge-soft px-5 py-3">
                            {player.playerType}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 p-3 text-xs font-medium bg-base-200/50 rounded-xl">
                    <div className="flex items-center gap-2 truncate text-base-content/80">
                        <TbCricket className="text-base text-primary shrink-0" />
                        <span className="truncate">{player.battingStyle}</span>
                    </div>
                    <div className="flex items-center gap-2 truncate text-base-content/80">
                        <BiCricketBall className="text-base text-secondary shrink-0" />
                        <span className="truncate">{player.bowlingStyle}</span>
                    </div>
                </div>

                <div className="flex items-end justify-between pt-2 mt-1 border-t border-base-200">
                    <div>
                        <span className="block text-xs font-medium tracking-wider uppercase text-base-content/60">Price</span>
                        <span className="text-2xl font-extrabold text-base-content">${player.price.toLocaleString()}</span>
                    </div>
                    <button className="px-5 transition-all shadow-sm btn btn-primary rounded-xl hover:shadow-md">
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EachPlayer;