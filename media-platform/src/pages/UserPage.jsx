// App.js
import { useState } from "react";
import Modal from "../components/VideoModal";
//
import UserDetailsModal from "../components/UserDetailsModal";

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [showUserDeatilsModal, setShowUserDeatilsModal] = useState(false);

  const openUserDeatilsModal = () => {
    setShowUserDeatilsModal(true);
  };

  const closeUserDeatilsModal = () => {
    setShowUserDeatilsModal(false);
  };

  const user = {
    profileLogo:
      "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789-300x300.png", // Replace with the actual profile logo URL
    username: "JohnDoe",
    phone: "123-456-7890",
    email: "john.doe@example.com",
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
        onClick={openUserDeatilsModal}
      >
        Open User
      </button>

      <UserDetailsModal
        showModal={showUserDeatilsModal}
        closeModal={closeUserDeatilsModal}
        user={user}
      />

      <button
        className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
        onClick={openModal}
      >
        Add Video
      </button>

      <Modal showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default UserPage;
