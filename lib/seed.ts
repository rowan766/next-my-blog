import { prisma } from './prisma';

export async function seedPosts() {
  try {
    // 检查是否已有数据
    const existingPosts = await prisma.post.count();
    if (existingPosts > 0) {
      console.log('数据库中已有文章，跳过种子数据');
      return;
    }

    // 创建测试文章
    await prisma.post.createMany({
      data: [
        {
          title: '欢迎来到我的博客',
          content: '# 欢迎来到我的博客\n\n这是我的第一篇博客文章...',
          excerpt: '欢迎来到我的博客，这里将分享我的学习和生活。',
          slug: 'welcome-to-my-blog'
        },
        {
          title: 'Next.js 开发心得',
          content: '# Next.js 开发心得\n\nNext.js 是一个很棒的框架...',
          excerpt: '分享使用 Next.js 开发的一些心得体会。',
          slug: 'nextjs-development-tips'
        }
      ]
    });

    console.log('✅ 测试数据添加成功!');
  } catch (error) {
    console.error('❌ 添加测试数据失败:', error);
  }
}
