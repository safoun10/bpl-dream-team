import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import Logo from '../../assets/logo.png';

const Nav = ({ money }: { money: number }) => {

    return (
        <nav className="flex justify-between items-center max-w-300 mx-auto my-10 ">
            <div>
                <img className='max-w-12' src={Logo} alt="" />
            </div>
            <div className='flex justify-center items-center gap-10 text-gray-500'>
                <a href="" className='hover:text-gray-950'>home</a>
                <a href="" className='hover:text-gray-950'>fixture</a>
                <a href="" className='hover:text-gray-950'>teams</a>
                <a href="" className='hover:text-gray-950'>schedules</a>
                <div className='hover:text-gray-950 px-7 py-3 rounded-xl font-bold border-2 border-gray-300 hover:border-gray-950 duration-300 flex items-center gap-1'>
                    <RiMoneyDollarCircleFill /> {money}
                </div>
            </div>
        </nav>
    );
};

export default Nav;