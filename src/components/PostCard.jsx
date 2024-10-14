import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="mx-auto flex  max-w-screen-sm items-center justify-center">
        <div className="h-full w-full rounded-md bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 p-1">
          <div className="w-full h-full bg-gray-800 rounded-xl p-4">
            <div className="w-full justify-center mb-4">
              <img
                src={appwriteService.getFilePreview(featuredImage)}
                alt={title}
                className="rounded-xl lg:h-[200px] w-full"
              />
            </div>
            <h2 className="text-xl text-white capitalize font-bold">{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
