import { FaUserTimes, FaFacebookMessenger } from "react-icons/fa";

const UserList = ({ users }) => {
  // Function to generate a random hex color code
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl mb-4">Connections</h2>
      <div className="overflow-y-auto max-h-80 custom-scrollbar">
        {" "}
        {/* Add this container with fixed height and scrollable */}
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-white p-2 rounded-md shadow-md flex justify-between items-center mb-2"
            >
              {/* User Image (First letter of username) with random color background */}
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4"
                style={{ background: getRandomColor() }}
              >
                <span className="text-white text-2xl font-bold">
                  {user.username.charAt(0).toUpperCase()}
                </span>
              </div>

              {/* User Info */}
              <div className="flex-grow">
                <span>{user.username}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex-shrink-0">
                <button className="text-green-500 hover:underline mr-4">
                  <FaUserTimes className="mr-1" />
                </button>
                <button className="text-blue-500 px-4 py-1 rounded">
                  <FaFacebookMessenger className="mr-1" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
