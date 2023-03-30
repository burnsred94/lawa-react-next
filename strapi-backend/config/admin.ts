export default ({ env }) => ({
  url: env("APP_ADMIN_URL", env("APP_URL", "") + "/manager-zone"),
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
