import {
  FaCamera,
  FaUserCheck,
  FaUserTimes,
  FaListAlt,
  FaPlusCircle,
} from "react-icons/fa";

const UserProfile = ({ user }) => {
  return (
    <div className="px-4 relative">
      <div
        className="relative bg-blue-500 h-24 mb-4 rounded-xl overflow-hidden border-4 border-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1508898578281-774ac4893c0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZhY2Vib29rJTIwY292ZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D')`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-2 left-2">
          <div className="rounded-full overflow-hidden w-12 h-12 mt-2 ml-2 outline outline-offset-2 outline-white">
            <img
              src={user.profileImageUrl}
              alt={user.username}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <div className="bg-white p-2 rounded-full">
            <FaCamera className="text-black-500" />
          </div>
        </div>
      </div>
      <h2 className="font-bold text-xl mb-2">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <div className="mt-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="mr-2">
              <strong>100</strong> Posts
            </span>
            <span className="ml-2">
              <strong>500</strong> Connections
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center bg-blue-500 text-black px-4 py-1 rounded-full hover:bg-white border-solid border-2 border-blue-500">
            <FaPlusCircle className="text-sm mr-2" />
            <button>New Post</button>
          </div>
          <div className="flex items-center bg-green-500 text-black px-4 py-1 rounded-full hover:bg-white border-solid border-2 border-green-500">
            <FaListAlt className="text-sm mr-2" />
            <button>All Posts</button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">Connection Requests</h3>
        <div className="mt-4 flex flex-wrap overflow-y-auto max-h-52 custom-scrollbar">
          {user.posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-1 rounded-md shadow-md flex items-center mb-2 w-full"
            >
              <div className="rounded-full overflow-hidden w-5 h-5 mr-4">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <p className="text-sm mb-2">{post.caption}</p>
              </div>
              <div className="flex-shrink-0">
                <button className="text-green-600 hover:underline mr-4">
                  <FaUserCheck className="mr-1" />
                </button>
                <button className="text-blue-500 hover:underline">
                  <FaUserTimes className="mr-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
