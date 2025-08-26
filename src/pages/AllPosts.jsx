import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let unsubscribe;

    const fetchPosts = () => {
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
    };

    fetchPosts();

    try {
      unsubscribe = appwriteService.subscribeToPosts(() => {
        fetchPosts();
      });
    } catch (e) {
      console.log(e);
    }

    return () => {
      if (typeof unsubscribe === "function") unsubscribe();
    };
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <h1 className="text-2xl lg:text-3xl mb-10 uppercase font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:text-sky-500">
          All Posts
        </h1>
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
