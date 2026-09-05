import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
} from "lucide-react";
import { useState } from "react";
import { likedPostHook } from "../hooks/likedPostHook";

export default function Feed({ post }) {
  const [isLiked, setIsLiked] = useState(post.isLiked);

  const { likePostClick, unlikedPostClick } = likedPostHook();

  const handleLike = async () => {
    try {
      if (isLiked) {
        await unlikedPostClick(post._id);
        setIsLiked(false);
      } else {
        await likePostClick(post._id);
        setIsLiked(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="w-full rounded-2xl border border-gray-500 bg-black">

      {/* Header */}
      <div className="flex items-center gap-3 px-3 py-3">
        <img
          src={post.avatar}
          alt={post.username}
          className="h-9 w-9 rounded-full border border-gray-500 object-cover"
        />

        <span className="font-semibold text-white">
          {post.user.username}
        </span>
      </div>

      {/* Image */}
      <div className="px-3">
        <div className="overflow-hidden rounded-xl border border-gray-500">
          <img
            src={post.imgUrl}
            alt=""
            className="block w-full object-cover"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-3 pt-3">

        {/* Left Actions */}
        <div className="flex items-center gap-4">

          {/* Like */}
          <button
            onClick={handleLike}
            className={`transition ${
              isLiked
                ? "text-red-500"
                : "text-white hover:text-gray-400"
            }`}
          >
            <Heart
              size={24}
              strokeWidth={1.8}
              fill={isLiked ? "currentColor" : "none"}
            />
          </button>

          {/* Comment */}
          <button className="text-white transition hover:text-gray-400">
            <MessageCircle size={24} strokeWidth={1.8} />
          </button>

          {/* Send */}
          <button className="text-white transition hover:text-gray-400">
            <Send size={24} strokeWidth={1.8} />
          </button>
        </div>

        {/* Bookmark */}
        <button className="text-white transition hover:text-gray-400">
          <Bookmark size={24} strokeWidth={1.8} />
        </button>
      </div>

      {/* Caption */}
      <div className="px-3 py-3">
        <p className="text-sm text-white">
          <span className="mr-2 font-semibold">
            {post.username}
          </span>

          {post.caption}
        </p>
      </div>

    </article>
  );
}
