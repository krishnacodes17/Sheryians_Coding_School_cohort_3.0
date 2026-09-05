import Feed from "../components/Feed";
import { postFeed } from "../hooks/postHook";

const posts = [
  {
    id: 1,
    username: "john_doe",
    avatar: "https://i.pravatar.cc/100?img=12",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    caption: "Beautiful day 🌄",
  },
  {
    id: 2,
    username: "jane_doe",
    avatar: "https://i.pravatar.cc/100?img=32",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    caption: "Weekend vibes 🌊",
  },
];

export default function FeedPage() {
  const { data, feedData,isLoading } = postFeed();

  return isLoading ? (
    <h1 className="text-white">Loading data...</h1>
  ) : (
    <main className="min-h-screen bg-black px-4 py-8 text-white">
      <div className="mx-auto flex max-w-md flex-col gap-6">
        {feedData?.map((post) => (
          <Feed key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
}
