import Link from 'next/link';
import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">
        <Link href={`/posts/${post.slug}`} className="hover:text-blue-600">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{new Date(post.createdAt).toLocaleDateString('zh-CN')}</span>
        <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
          阅读更多
        </Link>
      </div>
    </div>
  );
}
