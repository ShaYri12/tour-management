import app from './index.js';

// Simple test to verify routes are loaded
console.log('Testing route setup...');

// Check if routes are properly mounted
const routes = [];
app._router.stack.forEach((middleware) => {
  if (middleware.route) {
    routes.push({
      path: middleware.route.path,
      methods: Object.keys(middleware.route.methods)
    });
  } else if (middleware.name === 'router') {
    middleware.handle.stack.forEach((handler) => {
      if (handler.route) {
        routes.push({
          path: handler.route.path,
          methods: Object.keys(handler.route.methods)
        });
      }
    });
  }
});

console.log('Available routes:', routes);
console.log('Route setup complete!');