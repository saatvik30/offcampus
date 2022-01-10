module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '642602108830dda153a4108438994723'),
  },
});
