import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService
      .getPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((eror) => {
        console.log(eror);
      });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="lg:flex lg:flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-4 lg:w-1/3">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
