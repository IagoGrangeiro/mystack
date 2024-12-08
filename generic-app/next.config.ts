import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
		serverActions: {
			allowedOrigins: [
        'localhost:3000',
        "automatic-space-rotary-phone-pq6rwvvxw5pf7wr6-3000.app.github.dev"
      ]
		},
	}
};

export default nextConfig;
