# Vercel Deployment Checklist

## Pre-Deployment Checklist

### Backend Environment Variables (Set in Vercel Dashboard)
- [ ] `MONGO_URI` - Your MongoDB connection string
- [ ] `JWT_SECRET_KEY` - Your JWT secret key
- [ ] `FRONTEND_URL` - Your frontend Vercel URL
- [ ] `BACKEND_URL` - Your backend Vercel URL
- [ ] `NODE_ENV` - Set to `production`

### Frontend Environment Variables (Set in Vercel Dashboard)
- [ ] `VITE_BACKEND_URL` - Your backend Vercel URL
- [ ] `VITE_API_BASE_URL` - Your backend Vercel URL + `/api`

## Deployment Steps

### 1. Backend Deployment
1. [ ] Push your backend code to GitHub
2. [ ] Connect your GitHub repo to Vercel
3. [ ] Set the root directory to `backend`
4. [ ] Set all environment variables in Vercel dashboard
5. [ ] Deploy and wait for completion

### 2. Test Backend Deployment
Test these endpoints after deployment:
- [ ] `https://your-backend-url.vercel.app/` - Should return API status
- [ ] `https://your-backend-url.vercel.app/api/debug` - Should list available routes
- [ ] `https://your-backend-url.vercel.app/api/health` - Should return health status
- [ ] `https://your-backend-url.vercel.app/api/tours/search/getFeaturedTours` - Should return tours

### 3. Frontend Deployment
1. [ ] Update frontend `.env` with correct backend URL
2. [ ] Push frontend code to GitHub
3. [ ] Connect frontend repo to Vercel
4. [ ] Set the root directory to `frontend`
5. [ ] Set environment variables in Vercel dashboard
6. [ ] Deploy and wait for completion

### 4. Test Full Application
- [ ] Frontend loads without errors
- [ ] API calls work from frontend
- [ ] Featured tours display correctly
- [ ] Authentication works
- [ ] All CRUD operations function

## Troubleshooting Common Issues

### 404 Errors on API Routes
1. Check Vercel function logs
2. Verify environment variables are set
3. Test individual endpoints
4. Check CORS configuration

### Database Connection Issues
1. Verify MONGO_URI is correct
2. Check MongoDB Atlas network access
3. Ensure database user has proper permissions

### CORS Issues
1. Verify frontend URL is in allowed origins
2. Check browser network tab for CORS errors
3. Ensure credentials are properly configured

## Important Files
- `backend/index.js` - Main server file
- `backend/vercel.json` - Vercel configuration
- `backend/.env` - Environment variables (don't commit)
- `frontend/.env` - Frontend environment variables (don't commit)
- `frontend/src/utils/config.js` - API base URL configuration