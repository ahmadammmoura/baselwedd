/** @type {import('next').NextConfig} */
const nextConfig = {
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: [
                {
                  key: 'viewport',
                  value: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
                },
              ],
            },
          ];
        },
}

module.exports = nextConfig
