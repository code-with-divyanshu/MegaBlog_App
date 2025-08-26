import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Button, Container, PostCard } from "../components";
import { blog } from "../assets";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    let unsubscribe;

    if (!authStatus) {
      setPosts([]);
      return () => {};
    }

    const fetchPosts = () => {
      appwriteService
        .getPosts()
        .then((posts) => {
          if (posts) {
            setPosts(posts.documents);
          }
        })
        .catch((error) => {
          console.log(error);
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
  }, [authStatus]);

  if (!authStatus || posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-col lg:flex-row justify-center items-center py-10 gap-10">
            <div className="w-full">
              <h1 className="uppercase text-4xl my-8 lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:text-sky-500">
                Mega Blog App
              </h1>
              <p className="text-gray-300">
                Mega Blog App is a modern blogging platform crafted to empower
                writers, creators, and developers. With its sleek design,
                responsive layout, and customizable features, it offers
                everything you need to manage and showcase your content
                effortlessly. Enjoy rich text formatting, media embedding, and
                an organized content management system—all in one place. The app
                supports a variety of blog categories, making it versatile for
                personal blogs, tech blogs, lifestyle stories, and more. Join
                the Mega Blog App community and take your online presence to the
                next level!
              </p>
            </div>
            <div className="h-full w-full rounded-md bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 p-1">
              <div className="w-full h-full bg-gray-800 rounded-xl p-4">
                <img src={blog} alt="Blog Image" className="rounded-xl" />
              </div>
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-2xl uppercase font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:text-sky-500">
              Create Account or Login to Read and Write Blog
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            <div>
              <a
                href="/signup"
                className="w-full capitalize font-semibold p-4 text-white hover:text-amber-900 rounded-md bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-400"
              >
                Create New Account
              </a>
            </div>
            <div>
              <a
                href="/login"
                className="w-full capitalize font-semibold p-4 text-white hover:text-amber-900 rounded-md bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-400"
              >
                Login to existing account
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
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

export default Home;
