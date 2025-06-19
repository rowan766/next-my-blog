const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'postgresql://postgres:zh1280044839@database-2.cluster-c5u60a8g6uxx.us-east-2.rds.amazonaws.com:5432/postgres?sslmode=require&sslcert=&sslkey=&sslrootcert='
    }
  }
});

async function main() {
  try {
    console.log('正在连接数据库...');

    // 检查是否已有数据
    const existingPosts = await prisma.post.count();
    if (existingPosts > 0) {
      console.log('数据库中已有文章，跳过种子数据');
      return;
    }

    console.log('正在添加测试数据...');

    // 创建测试文章
    await prisma.post.createMany({
      data: [
        {
          title: '欢迎来到我的博客',
          content: '# 欢迎来到我的博客\n\n这是我的第一篇博客文章，欢迎大家的到来！\n\n## 关于这个博客\n\n这里我会分享一些技术学习心得和生活感悟。',
          excerpt: '欢迎来到我的博客，这里将分享我的学习和生活。',
          slug: 'welcome-to-my-blog'
        },
        {
          title: 'Next.js 开发心得',
          content: '# Next.js 开发心得\n\nNext.js 是一个很棒的 React 框架。\n\n## 主要优势\n\n- 服务端渲染\n- 静态生成\n- API 路由\n- 优秀的性能',
          excerpt: '分享使用 Next.js 开发的一些心得体会。',
          slug: 'nextjs-development-tips'
        }
      ]
    });

    console.log('✅ 测试数据添加成功!');
  } catch (error) {
    console.error('❌ 错误:', error.message);
  }
}

main().finally(async () => {
  await prisma.$disconnect();
});
