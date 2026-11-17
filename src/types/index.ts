export type CategoryId = 
  | 'chocolate' 
  | 'vanilla' 
  | 'pistachio' 
  | 'fruit' 
  | 'special-editions';

export interface Product {
  id: string;
  name: string;
  frenchName: string;
  collection: CategoryId;
  collectionTitle: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImage: string;
  video?: string;
  audio?: string;
  badge?: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isNewRelease?: boolean;
  notes: {
    top: string;
    heart: string;
    base: string;
  };
  provenance: {
    region: string;
    country: string;
    source: string;
  };
  details: {
    description: string;
    tastingRitual: string;
    sommelierPairing: string;
    overrun: string; // e.g. "14% air density"
    cacaoPercentage?: string;
    dietary: string[]; // e.g. ["Vegetarian", "Gluten-Free", "Zero Stabilizers"]
    allergens: string[];
    nutrition: {
      servingSize: string;
      calories: number;
      fat: string;
      sugars: string;
      protein: string;
    };
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  sizeOption: 'single-pint' | 'tasting-flight' | 'grand-cru-pack';
  giftMessage?: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  publication?: string;
  rating: number;
  headline: string;
  comment: string;
  flavourMentioned: string;
  date: string;
  verified: boolean;
}

export interface Boutique {
  id: string;
  city: string;
  district: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  image: string;
  status: string;
  highlights: string[];
}
