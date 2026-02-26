/** @type {import('next').NextConfig} */
// Prevent process crash when stdout/stderr is closed (EPIPE errors).
// Some environments close the output stream; ignore EPIPE to keep the server running.
try {
  process.stdout.on &&
    process.stdout.on("error", (err) => {
      if (!err || err.code !== "EPIPE") throw err;
    });
  process.stderr.on &&
    process.stderr.on("error", (err) => {
      if (!err || err.code !== "EPIPE") throw err;
    });
} catch (e) {
  // If process.* is not available in this environment, fail silently.
}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

module.exports = nextConfig;
