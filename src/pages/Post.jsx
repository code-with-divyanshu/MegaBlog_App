import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage).finally(() => {
          navigate("/");
        });
      }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row gap-16">
          <div className="w-full my-auto">
            <div className="w-full mb-6 text-white">
              <h1 className="text-2xl lg:text-3xl font-bold uppercase bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                {post.title}
              </h1>
            </div>
            <div className="browser-css text-white text-center lg:text-[18px]">
              {parse(post.content)}
            </div>
          </div>
          <div className="relative mx-auto flex w-full items-center justify-center">
            <div className="h-full w-full rounded-md bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 p-1">
              <div className="w-full h-full bg-gray-800 rounded-xl p-4">
                <img
                  src={String(appwriteService.getFileView(post.featuredImage))}
                  alt={post.title}
                  className="rounded-xl lg:h-[400px] w-full"
                />

                {isAuthor && (
                  <div className="absolute right-6 top-6">
                    <Link to={`/edit-post/${post.$id}`}>
                      <Button bgColor="bg-green-500" className="mr-3">
                        Edit
                      </Button>
                    </Link>
                    <Button bgColor="bg-red-500" onClick={deletePost}>
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
