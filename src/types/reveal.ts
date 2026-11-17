export type IngredientShape =
  | 'nut'
  | 'cherry'
  | 'raspberry'
  | 'strawberry'
  | 'cookie'
  | 'bilberry'
  | 'caramel'
  | 'rose'
  | 'pistachio'
  | 'pearl'
  | 'shard'
  | 'crumb';

export interface FloatingIngredientSpec {
  id: string;
  name: string;
  shape: IngredientShape;
  color: string;
  secondaryColor?: string;
  size: number;
  // Exploded target coordinates relative to center (in px)
  targetX: number;
  targetY: number;
  targetZ: number;
  targetRotate: number;
  // Delay in seconds for emergence in timeline
  emergeDelay: number;
  // Provenance / Craft label
  label?: string;
  labelPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export interface IngredientLeaderLabel {
  id: string;
  title: string;
  provenance: string;
  // Origin point of leader line on the exploded item (percentages relative to viewer: 0-100)
  anchorX: number;
  anchorY: number;
  // Destination position of label card
  labelX: number;
  labelY: number;
  side: 'left' | 'right';
}

export interface ProductRevealConfig {
  productId: string;
  productName: string;
  collectionName: string;
  country: string;
  // Shell separation styling
  shell: {
    color: string;
    textureGradient: string;
    thicknessColor: string;
    separationDistanceX: number; // px to float left/right
    separationDistanceY: number;
    rotateYDeg: number;
    name: string;
  };
  // Inner core styling
  core: {
    color: string;
    textureGradient: string;
    name: string;
    swirlColor: string;
    swirlName: string;
  };
  // Realistic floating ingredients
  ingredients: FloatingIngredientSpec[];
  // Champagne-gold callout labels with leader lines
  leaderLabels: IngredientLeaderLabel[];
  // Ambient glow palette
  glowColor: string;
  accentColor: string;
}
