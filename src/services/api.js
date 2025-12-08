const sampleCategories = [
  { id: "cat1", name: "Literature", icon: "fas fa-book", bookCount: 12 },
  { id: "cat2", name: "Science", icon: "fas fa-flask", bookCount: 8 },
  { id: "cat3", name: "Economics", icon: "fas fa-coins", bookCount: 10 },
  { id: "cat4", name: "Children", icon: "fas fa-child", bookCount: 6 },
];

const sampleBooks = [
  {
    id: "1",
    title: "Journey to Knowledge",
    author: "John Doe",
    price: 150000,
    originalPrice: 200000,
    discount: 25,
    category: "Literature",
    rating: 4.5,
    reviews: 120,
    source: "bestseller",
    description: "Explore the world through engaging stories.",
    image: "https://via.placeholder.com/400x500?text=Journey+to+Knowledge",
  },
  {
    id: "2",
    title: "Science Wonders",
    author: "Jane Smith",
    price: 220000,
    category: "Science",
    rating: 4.2,
    reviews: 80,
    source: "new",
    description: "A practical guide to modern science.",
    image: "https://via.placeholder.com/400x500?text=Science+Wonders",
  },
  {
    id: "3",
    title: "Smart Finance",
    author: "Alex Nguyen",
    price: 180000,
    category: "Economics",
    rating: 4.7,
    reviews: 64,
    source: "bestseller",
    description: "Manage personal finance with confidence.",
    image: "https://via.placeholder.com/400x500?text=Smart+Finance",
  },
  {
    id: "4",
    title: "Kid's Adventure",
    author: "Mary Tran",
    price: 90000,
    category: "Children",
    rating: 4.3,
    reviews: 30,
    source: "new",
    description: "Fun stories for young readers.",
    image: "https://via.placeholder.com/400x500?text=Kid%27s+Adventure",
  },
];

const promotions = {
  specialOffer: {
    title: "Mid-year Sale 30% Off",
    description: "Apply for all orders over 200,000 VND.",
    startDate: "01/06/2025",
    endDate: "30/06/2025",
    countdown: { days: 3, hours: 12, minutes: 15, seconds: 40 },
  },
};

const stats = {
  totalBooks: 2500,
  customers: 120000,
  support: 24,
  satisfaction: "99%",
};

let feedbackStore = [
  {
    id: "fb1",
    bookId: "1",
    userId: "u1",
    userName: "Demo User",
    rate: 5,
    comment: "Great book for weekend reading.",
    createdAt: new Date().toISOString(),
  },
];

const delay = (result) =>
  new Promise((resolve) => setTimeout(() => resolve(result), 150));

export async function fetchDatabase() {
  return delay({ books: sampleBooks, categories: sampleCategories });
}

export async function fetchFeaturedBooks() {
  return delay(sampleBooks.slice(0, 4));
}

export async function fetchNewBooks() {
  return delay(sampleBooks.filter((b) => b.source === "new"));
}

export async function fetchBestsellerBooks() {
  return delay(sampleBooks.filter((b) => b.source === "bestseller"));
}

export async function fetchCategories() {
  return delay(sampleCategories);
}

export async function fetchPromotions() {
  return delay(promotions);
}

export async function fetchStats() {
  return delay(stats);
}

export async function fetchBookById(id) {
  const found = sampleBooks.find((b) => String(b.id) === String(id));
  return delay(found || null);
}

export async function fetchFeedbacksByBookId(bookId) {
  return delay(feedbackStore.filter((fb) => String(fb.bookId) === String(bookId)));
}

export async function createFeedbackOnServer(feedback) {
  feedbackStore = [...feedbackStore, feedback];
  return delay(feedback);
}


