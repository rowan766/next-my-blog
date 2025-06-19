import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { title, content, excerpt } = data;

    // 验证必填字段
    if (!title || !content || !excerpt) {
      return NextResponse.json({ error: '标题、内容和摘要都是必填项' }, { status: 400 });
    }

    // 改进的 slug 生成（更短更安全）
    const baseSlug = title
      .toLowerCase()
      .replace(/[^\u4e00-\u9fa5a-z0-9]/g, '-') // 只保留中文、英文、数字
      .replace(/-+/g, '-') // 合并多个连字符
      .replace(/^-|-$/g, '') // 去掉首尾连字符
      .substring(0, 30); // 限制长度

    // 添加时间戳确保唯一性，但使用更短的格式
    const timestamp = Date.now().toString().slice(-6); // 只取后6位
    const slug = baseSlug ? `${baseSlug}-${timestamp}` : `post-${timestamp}`;

    // 创建文章
    const post = await prisma.post.create({
      data: {
        title,
        content,
        excerpt,
        slug
      }
    });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error('创建文章失败:', error);
    return NextResponse.json({ error: '创建文章失败' }, { status: 500 });
  }
}
