const env: string = process.env.NODE_ENV;

// console.log(env);

const configs: any = {
  // 生产环境
  production: {
    url: 'https://api-dev.livelab.com.cn/',
  },
  // 开发环境
  development: {
    url: 'https://api-dev.livelab.com.cn/',
  },
};

export default configs[env];
