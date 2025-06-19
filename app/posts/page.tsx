import PostCard from '@/components/PostCard';
import { Post } from '@/types/post';

// 临时模拟数据
const mockPosts: Post[] = [
  {
    id: '1',
    title: '我的第一篇博客',
    content: '这是我的第一篇博客内容...',
    excerpt: '欢迎来到我的博客，这里将分享我的学习和生活。',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    slug: 'my-first-blog'
  },
  {
    id: '2',
    title: 'Next.js 学习笔记',
    content: 'Next.js 是一个很棒的框架...',
    excerpt: '学习 Next.js 的一些心得和技巧分享。',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
    slug: 'nextjs-learning-notes'
  }
];

export default function PostsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">所有文章</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
