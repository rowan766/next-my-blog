import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            我的博客
          </Link>
          <div className="space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              首页
            </Link>
            <Link href="/posts" className="text-gray-600 hover:text-gray-800">
              文章
            </Link>
            <Link href="/posts/new" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              写文章
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              关于
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
