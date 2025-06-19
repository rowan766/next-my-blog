import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">文章未找到</h1>
      <p className="text-gray-600 mb-8">抱歉，您要查找的文章不存在。</p>
      <Link href="/posts" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        返回文章列表
      </Link>
    </div>
  );
}
