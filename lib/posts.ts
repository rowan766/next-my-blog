import { prisma } from './prisma';
import { Post } from '@/types/post';

// 获取所有文章
export async function getAllPosts(): Promise<Post[]> {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    // 直接返回，不需要类型断言
    return posts;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

// 根据slug获取单篇文章
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: slug
      }
    });
    return post;
  } catch (error) {
    console.error('获取文章失败:', error);
    return null;
  }
}

// 创建新文章
export async function createPost(data: { 
  title: string; 
  content: string; 
  excerpt: string; 
  slug: string 
}): Promise<Post> {
  const post = await prisma.post.create({
    data
  });
  return post;
}