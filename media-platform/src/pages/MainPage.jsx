import UserProfile from '../components/UserProfile';
import PostFeed from '../components/PostFeed';
import UserList from '../components/UserList';
import { FaSearch } from 'react-icons/fa';

import { userData, postData, userList } from "../pages/demoData";
import '../App.css'
function MainPage() {
  return (
    <div className="flex mt-4 mr-20 ml-20">
      <div className="w-1/4 sticky top-0">
        <UserProfile user={userData} />
      </div>
      <div className="w-1/2 overflow-y-auto h-screen custom-scrollbar">
        <div className="mb-6 mr-2 relative sticky top-0 bg-white">
          {/* Search bar for All Posts section with search icon */}
          <input
            type="text"
            placeholder="Search Posts"
            className="w-full p-2 border-solid border-2 border-blue-500 rounded-full pl-6 pr-8 searchbar"
          />
          <div className="absolute top-0 right-0 mt-3 mr-5">
            <FaSearch className="text-xl text-blue-500" />
          </div>
        </div>
        <PostFeed posts={postData} />
      </div>
      <div className="w-1/4 sticky top-0">
        <div className="mb-4 mx-2 relative sticky top-0">
          {/* Search bar for All Posts section with search icon */}
          <input
            type="text"
            placeholder="Search Peoples"
            className="w-full p-2 border-solid border-2 border-green-500 rounded-full pl-6 pr-8 searchbar"
          />
          <div className="absolute top-0 right-0 mt-3 mr-5">
            <FaSearch className="text-xl text-green-500" />
          </div>
        </div>

        <UserList
          users={userList}
        />
      </div>
    </div>
  );
}

export default MainPage;
