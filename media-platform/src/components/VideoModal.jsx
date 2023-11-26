// Modal.js
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "../App.css";

const Modal = ({ showModal, closeModal }) => {
  const [videoName, setVideoName] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);

  const handleSubmit = () => {
    // Implement your logic to handle the form submission here
    console.log("Video Name:", videoName);
    console.log("Description:", description);
    console.log("Video File:", videoFile);

    // Close the modal after submission
    closeModal();
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-opacity-25 bg-blur backdrop-filter backdrop-blur-md fixed inset-0"></div>
            <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-xl max-w-md w-full relative">
              <div className="flex justify-end p-4 absolute right-0 top-0">
                <button onClick={closeModal} className="text-white">
                  <FaTimes />
                </button>
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Video Details
                </h2>

                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      id="videoName"
                      className="modal_box p-2 bg-transparent border border-white rounded-md text-white"
                      placeholder="Video Name"
                      value={videoName}
                      onChange={(e) => setVideoName(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <textarea
                      id="description"
                      className="modal_box p-2 bg-transparent border border-white rounded text-white rounded-md"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <div className="file-input-container">
                    <label className="file-input-label">
                      {videoFile
                        ? `Video File: ${videoFile.name.substring(0, 30)}`
                        : "Choose a Video File"}
                      <input
                        type="file"
                        className="file-input"
                        onChange={(e) => setVideoFile(e.target.files[0])}
                      />
                    </label>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full mb-2"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
