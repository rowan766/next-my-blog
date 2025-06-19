const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres:zh1280044839@database-2.cluster-c5u60a8g6uxx.us-east-2.rds.amazonaws.com:5432/postgres',
  ssl: {
    rejectUnauthorized: false // 允许自签名证书
  }
});

async function testConnection() {
  try {
    console.log('正在连接数据库...');
    await client.connect();
    console.log('✅ 数据库连接成功!');

    // 测试简单查询
    const result = await client.query('SELECT NOW()');
    console.log('当前时间:', result.rows[0]);

    await client.end();
  } catch (err) {
    console.error('❌ 连接失败:', err.message);
  }
}

testConnection();
