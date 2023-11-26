import { useState } from 'react';
import { FaHeart, FaRegComment, FaUserCircle, FaRegClock } from 'react-icons/fa';
import '../App.css'

const PostFeed = ({ posts }) => {
    const [selectedPostId, setSelectedPostId] = useState(null);

    const handleCommentIconClick = (postId) => {
        setSelectedPostId(postId === selectedPostId ? null : postId);
    };

    const demoComments = [
        { id: 1, username: 'user1', text: 'Awesome post!', timestamp: '2 hours ago' },
        { id: 2, username: 'user2', text: 'Great shot!', timestamp: '1 hour ago' },
        { id: 3, username: 'user1', text: 'Awesome post!', timestamp: '2 hours ago' },
        { id: 4, username: 'user2', text: 'Great shot!', timestamp: '1 hour ago' },
        { id: 5, username: 'user1', text: 'Awesome post!', timestamp: '2 hours ago' },
        { id: 6, username: 'user2', text: 'Great shot!', timestamp: '1 hour ago' },
        { id: 7, username: 'user1', text: 'Awesome post!', timestamp: '2 hours ago' },
        { id: 8, username: 'user2', text: 'Great shot!', timestamp: '1 hour ago' },
        // Add more demo comments as needed
    ];

    return (
        <div>
            <h2 className="font-bold text-2xl mb-4 ml-2">Post Feed</h2>
            <div className="grid grid-cols-1 gap-4">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white p-4 rounded-md shadow-md">
                        <p className="font-bold text-lg mb-2">{post.caption}</p>
                        <img src={post.imageUrl} alt={post.caption} className="w-full h-64 object-cover mb-2" />
                        <p className="text-gray-600">@{post.username}</p>

                        {/* Like and Comment Icons */}
                        <div className="flex mt-2 items-center">
                            <span className="mr-2 flex items-center">
                                <FaHeart className="text-red-500 mr-1" />
                                <span>12</span> {/* Replace with the actual like count */}
                            </span>
                            <span
                                className="ml-4 cursor-pointer flex items-center"
                                role="button"
                                onClick={() => handleCommentIconClick(post.id)}
                            >
                                <FaRegComment className="text-blue-500 mr-1" />
                                <span>Comment</span>
                            </span>
                        </div>

                        {/* Comment Dropdown */}
                        {selectedPostId === post.id && (
                            <div className="bg-neutral-50 p-2 mt-2 rounded-md">
                                {/* Comment Input and Submit Button */}
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder="Add a comment..."
                                        className="border-solid border-2 border-pink-500 rounded-md p-2 w-full mr-1"
                                    />
                                    <button className="border-solid border-2 border-pink-500 bg-white text-black px-4 py-1 rounded">Submit</button>
                                </div>

                                {/* New section for displaying comments */}
                                <div className="mt-4">
                                    <h3 className="font-bold text-lg mb-2">Comments</h3>
                                    <div className="max-h-40 overflow-y-auto custom-scrollbar">
                                        {/* Mapping through demo comments */}
                                        {demoComments.map((comment) => (
                                            <div key={comment.id} className="mb-2">
                                                {/* First line */}
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <FaUserCircle className="text-gray-500 mr-1" />
                                                        <span className="font-semibold">{comment.username}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <FaRegClock className="text-gray-500 ml-2 mr-1" />
                                                        <span className="text-gray-500 text-sm">{comment.timestamp}</span>
                                                    </div>
                                                </div>
                                                {/* Second line */}
                                                <p className="text-gray-600">{comment.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostFeed;

