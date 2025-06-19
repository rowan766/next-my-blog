export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  createdAt: Date;  // 注意：这里应该是 Date 类型，不是 string
  updatedAt?: Date; // 如果有的话
}