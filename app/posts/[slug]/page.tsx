import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-4">发布时间：{new Date(post.createdAt).toLocaleDateString('zh-CN')}</div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap leading-relaxed">{post.content}</div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-gray-600">
            最后更新: {
              post.updatedAt 
                ? new Date(post.updatedAt).toLocaleDateString('zh-CN')
                : new Date(post.createdAt).toLocaleDateString('zh-CN')
            }
          </p>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">加载失败</h1>
        <p className="text-red-600">文章加载失败，请稍后重试。</p>
      </div>
    );
  }
}
