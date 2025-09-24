# News API Setup Instructions

## Getting Live News Updates

To enable live news updates in the footer, you need to set up a News API key.

### Step 1: Get a Free News API Key

1. Visit [News API](https://newsapi.org/)
2. Sign up for a free account
3. Get your API key from the dashboard

### Step 2: Configure Environment Variables

Create a `.env.local` file in your project root and add:

```bash
NEXT_PUBLIC_NEWS_API_KEY=your-actual-api-key-here
```

### Step 3: Restart Your Development Server

```bash
npm run dev
```

## Features

- **Live News Updates**: Automatically fetches latest news
- **Auto-Rotation**: News items rotate every 5 seconds
- **Manual Navigation**: Users can navigate manually
- **Fallback Content**: Shows relevant content when API is unavailable
- **Mobile Responsive**: Optimized for all devices

## News Sources

The system fetches news related to:
- Fintech and financial technology
- Healthcare and medical innovation
- Diabetes education and management
- Digital financial inclusion
- Regulatory technology (RegTech)

## Fallback System

If the News API is not configured or fails, the system will display:
- Curated news related to Duncun Motanya's expertise
- Healthcare and fintech industry updates
- Community health initiatives
- Financial inclusion developments

## Customization

You can customize the news sources by modifying the query in `lib/newsApi.ts`:

```typescript
const response = await fetch(
  `${NEWS_API_BASE_URL}/everything?q=your-custom-query&language=en&sortBy=publishedAt&pageSize=5&apiKey=${NEWS_API_KEY}`
)
```

## API Limits

- Free tier: 1000 requests per day
- Rate limit: 100 requests per hour
- Caching: 5 minutes to optimize performance
