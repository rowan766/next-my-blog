import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import { Post } from '@/types/post';

export default async function Home() {
  let posts: Post[] = [];
  let hasError = false;

  try {
    posts = await getAllPosts();
  } catch (error) {
    hasError = true;
    console.error('加载文章失败:', error);
  }

  const recentPosts: Post[] = posts.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">欢迎来到我的博客</h1>
        <p className="text-xl text-gray-600 mb-8">分享技术心得与生活感悟</p>
        <Link href="/posts/new" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block">
          开始写作
        </Link>
      </div>

      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">最新文章</h2>
          <Link href="/posts" className="text-blue-600 hover:underline">
            查看全部 →
          </Link>
        </div>

        {hasError ? (
          <div className="text-center text-red-600">
            <p>加载文章失败，请稍后重试</p>
          </div>
        ) : recentPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post: Post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <p>还没有文章，快去创建第一篇吧！</p>
          </div>
        )}
      </div>
    </div>
  );
}
