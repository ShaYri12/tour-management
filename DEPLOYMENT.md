# Deployment Guide for Tour Management App

## Environment Variables Setup

### Backend (.env)
Create a `.env` file in the backend directory with the following variables:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
PORT=8000
FRONTEND_URL=https://your-frontend-domain.vercel.app
BACKEND_URL=https://your-backend-domain.vercel.app
```

### Frontend (.env)
Create a `.env` file in the frontend directory with the following variables:
```
VITE_BACKEND_URL=https://your-backend-domain.vercel.app
VITE_API_BASE_URL=https://your-backend-domain.vercel.app/api
```

## Vercel Deployment Steps

### Backend Deployment
1. Navigate to the backend directory
2. Make sure your `.env` file is configured with production values
3. Deploy to Vercel using the Vercel CLI or GitHub integration
4. Set environment variables in Vercel dashboard:
   - MONGO_URI
   - JWT_SECRET_KEY
   - FRONTEND_URL
   - BACKEND_URL

### Frontend Deployment
1. Navigate to the frontend directory
2. Make sure your `.env` file is configured with production values
3. Deploy to Vercel using the Vercel CLI or GitHub integration
4. Set environment variables in Vercel dashboard:
   - VITE_BACKEND_URL
   - VITE_API_BASE_URL

## Local Development
For local development, create `.env.local` files:

### Backend (.env.local)
```
MONGO_URI=your_local_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
PORT=8000
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:8000
```

### Frontend (.env.local)
```
VITE_BACKEND_URL=http://localhost:8000
VITE_API_BASE_URL=http://localhost:8000/api
```

## Important Notes
- Make sure CORS is properly configured in the backend to allow your frontend domain
- Environment variables starting with `VITE_` are exposed to the client-side code
- Never commit `.env` files to version control
- Use `.env.example` files to document required environment variables