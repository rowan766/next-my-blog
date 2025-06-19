
module.exports = {
  apps: [{
    name: 'my-blog',
    script: 'npm',
    args: 'start',
    env: {
      PORT: 8088,
      HOST: '0.0.0.0',  // 重要：确保绑定到所有接口
      NODE_ENV: 'production'
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}