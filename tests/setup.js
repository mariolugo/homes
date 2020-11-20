process.env = {
  ...process.env,
  NODE_ENV: 'test',
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    path: '/_next/image',
    loader: 'default',
  },
};
