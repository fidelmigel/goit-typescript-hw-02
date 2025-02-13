export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  description: string | null;
}

export interface ApiUnsplash {
  total: number;
  total_pages: number;
  results: Image[];
}
