import { FaTimes } from "react-icons/fa";

const UserDetailsModal = ({ showModal, closeModal, user }) => {
  const handleUpdateDetails = () => {
    // Implement your logic for updating details
    console.log("Update details clicked");
  };

  const handleDeleteAccount = () => {
    // Implement your logic for deleting the account
    console.log("Delete account clicked");
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="flex items-center justify-center min-h-screen p-10">
            <div className="bg-opacity-25 bg-blur backdrop-filter backdrop-blur-md fixed inset-0"></div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full relative">
              <div className="flex justify-end p-4 absolute right-0 top-0">
                <button onClick={closeModal} className="text-gray-700">
                  <FaTimes />
                </button>
              </div>

              <div className="p-4 text-start">
                <img
                  src={user.profileLogo} // Replace with the actual profile logo URL
                  alt="Profile Logo"
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold mb-4">{user.username}</h2>

                <div className="mb-2">
                  <p>
                    <strong>Phone:</strong> {user.phone}
                  </p>
                </div>

                <div className="mb-2">
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                </div>

                <div className="mb-4">
                  <p>
                    <strong>Password:</strong> ********
                  </p>
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
                    onClick={handleUpdateDetails}
                  >
                    Update Details
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-600"
                    onClick={handleDeleteAccount}
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetailsModal;
