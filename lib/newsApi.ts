// News API service for fetching live news updates
export interface NewsArticle {
  id: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  source: {
    name: string
  }
  author?: string
}

export interface NewsResponse {
  status: string
  totalResults: number
  articles: NewsArticle[]
}

// News API configuration
const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY || 'your-news-api-key'
const NEWS_API_BASE_URL = 'https://newsapi.org/v2'

// Fallback news data for when API is not available
const FALLBACK_NEWS: NewsArticle[] = [
  {
    id: '1',
    title: 'Kenya Fintech Sector Sees Record Growth in 2024',
    description: 'The fintech industry in Kenya continues to expand with innovative solutions driving financial inclusion across the country.',
    url: 'https://iamduncun.co.ke/news',
    urlToImage: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
    publishedAt: new Date().toISOString(),
    source: { name: 'Fintech Kenya' },
    author: 'Duncun Motanya'
  },
  {
    id: '2',
    title: 'Healthcare Innovation Transforms Rural Communities',
    description: 'New digital health solutions are making healthcare more accessible in remote areas of Kenya.',
    url: 'https://iamduncun.co.ke/news',
    urlToImage: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
    publishedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    source: { name: 'Health Kenya' },
    author: 'Duncun Motanya'
  },
  {
    id: '3',
    title: 'Digital Financial Inclusion Reaches New Heights',
    description: 'Mobile money and digital banking solutions are transforming how Kenyans access financial services.',
    url: 'https://iamduncun.co.ke/news',
    urlToImage: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
    publishedAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    source: { name: 'Finance Today' },
    author: 'Duncun Motanya'
  },
  {
    id: '4',
    title: 'Diabetes Education Programs Expand Nationwide',
    description: 'Community health initiatives are providing crucial diabetes management education across Kenya.',
    url: 'https://iamduncun.co.ke/news',
    urlToImage: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
    publishedAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    source: { name: 'Health Weekly' },
    author: 'Duncun Motanya'
  },
  {
    id: '5',
    title: 'RegTech Solutions Transform Financial Sector',
    description: 'Regulatory technology is helping financial institutions comply with new regulations more efficiently.',
    url: 'https://iamduncun.co.ke/news',
    urlToImage: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
    publishedAt: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
    source: { name: 'Tech Kenya' },
    author: 'Duncun Motanya'
  }
]

// Fetch news from News API
export async function fetchNewsFromAPI(): Promise<NewsArticle[]> {
  try {
    // Check if we have a valid API key
    if (!NEWS_API_KEY || NEWS_API_KEY === 'your-news-api-key') {
      console.log('No News API key provided, using fallback data')
      return FALLBACK_NEWS
    }

    const response = await fetch(
      `${NEWS_API_BASE_URL}/everything?q=fintech OR healthcare OR diabetes OR "digital financial inclusion" OR "regulatory technology"&language=en&sortBy=publishedAt&pageSize=5&apiKey=${NEWS_API_KEY}`,
      {
        next: { revalidate: 300 } // Cache for 5 minutes
      }
    )

    if (!response.ok) {
      throw new Error(`News API error: ${response.status}`)
    }

    const data: NewsResponse = await response.json()
    
    if (data.status === 'ok' && data.articles.length > 0) {
      return data.articles.map((article, index) => ({
        ...article,
        id: `api-${index}`,
        urlToImage: article.urlToImage || 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'
      }))
    }

    return FALLBACK_NEWS
  } catch (error) {
    console.error('Error fetching news from API:', error)
    return FALLBACK_NEWS
  }
}

// Get news with caching
export async function getNews(): Promise<NewsArticle[]> {
  try {
    // Try to fetch from API first
    const apiNews = await fetchNewsFromAPI()
    return apiNews
  } catch (error) {
    console.error('Error getting news:', error)
    return FALLBACK_NEWS
  }
}

// Format date for display
export function formatNewsDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (diffInHours < 1) {
    return 'Just now'
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`
  } else if (diffInHours < 48) {
    return 'Yesterday'
  } else {
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }
}

// Truncate text for display
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}
