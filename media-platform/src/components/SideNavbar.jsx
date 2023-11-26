import { FaBell } from 'react-icons/fa';

const SideNavbar = () => {
  return (
    <nav className="text-black px-24 py-4 flex justify-between items-center">
      {/* Left side: AppWriter logo */}
      <div className="text-black font-bold text-2xl">AppWritter</div>

      {/* Right side: Notification icon */}
      <div className="text-black">
        <FaBell className="text-2xl" />
      </div>
    </nav>
  );
};

export default SideNavbar;
