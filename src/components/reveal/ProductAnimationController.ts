import { ProductRevealConfig } from '../../types/reveal';

export const PRODUCT_REVEAL_CONFIGS: Record<string, ProductRevealConfig> = {
  // PRODUCT 01 – UTOPIA DOUBLE HAZELNUT & WHITE PRALINE COUTURE BAR
  'cei-bar-utopia-double-hazelnut': {
    productId: 'cei-bar-utopia-double-hazelnut',
    productName: 'Utopia Double Hazelnut & White Praline Couture Bar',
    collectionName: 'Roasted Nut Shells Collection',
    country: 'Italy',
    shell: {
      color: '#F4ECE0',
      textureGradient: 'linear-gradient(135deg, #FFF9F0 0%, #EFE3D0 50%, #D8C3A5 100%)',
      thicknessColor: '#6B4226',
      separationDistanceX: 52,
      separationDistanceY: 10,
      rotateYDeg: 28,
      name: 'Ivory White Chocolate Shell'
    },
    core: {
      color: '#DFCDAE',
      textureGradient: 'linear-gradient(180deg, #EADDC9 0%, #DFCDAE 60%, #C9B28F 100%)',
      name: 'Creamy Hazelnut Gelato Centre',
      swirlColor: '#C48234',
      swirlName: 'White Praline & Molten Caramel Fudge'
    },
    ingredients: [
      {
        id: 'hz-nut-1',
        name: 'Slow-Roasted Langhe Hazelnut',
        shape: 'nut',
        color: '#A36A3B',
        secondaryColor: '#D5B77A',
        size: 19,
        targetX: -65,
        targetY: -45,
        targetZ: 60,
        targetRotate: -22,
        emergeDelay: 0.2
      },
      {
        id: 'hz-caramel-1',
        name: 'Molten Caramel Fudge Ribbon',
        shape: 'caramel',
        color: '#D59836',
        size: 17,
        targetX: 68,
        targetY: -35,
        targetZ: 70,
        targetRotate: 18,
        emergeDelay: 0.3
      },
      {
        id: 'hz-praline-1',
        name: 'White Praline Shard',
        shape: 'shard',
        color: '#FAF3E3',
        size: 15,
        targetX: -62,
        targetY: 34,
        targetZ: 50,
        targetRotate: 35,
        emergeDelay: 0.4
      },
      {
        id: 'hz-nut-2',
        name: 'Caramelized Hazelnut Halves',
        shape: 'nut',
        color: '#8C582B',
        secondaryColor: '#FFD27D',
        size: 17,
        targetX: 64,
        targetY: 42,
        targetZ: 55,
        targetRotate: -15,
        emergeDelay: 0.5
      },
      {
        id: 'hz-drizzle-1',
        name: 'Dark Chocolate Drizzle Drop',
        shape: 'caramel',
        color: '#26150E',
        size: 14,
        targetX: 30,
        targetY: -64,
        targetZ: 65,
        targetRotate: 10,
        emergeDelay: 0.6
      },
      {
        id: 'hz-crumb-1',
        name: 'Roasted Hazelnut Brittle',
        shape: 'crumb',
        color: '#B07D48',
        size: 13,
        targetX: -32,
        targetY: 60,
        targetZ: 45,
        targetRotate: 45,
        emergeDelay: 0.7
      }
    ],
    leaderLabels: [
      {
        id: 'l1',
        title: 'Ivory White Chocolate Shell',
        provenance: 'Double-Enrobed Cocoa Butter',
        anchorX: 25,
        anchorY: 30,
        labelX: 8,
        labelY: 18,
        side: 'left'
      },
      {
        id: 'l2',
        title: 'Hazelnut Gianduja Centre',
        provenance: 'Langhe Hills, Piedmont, Italy',
        anchorX: 45,
        anchorY: 50,
        labelX: 8,
        labelY: 62,
        side: 'left'
      },
      {
        id: 'l3',
        title: 'Molten Caramel Fudge',
        provenance: 'Slow-Simmered Copper Kettle',
        anchorX: 58,
        anchorY: 38,
        labelX: 92,
        labelY: 22,
        side: 'right'
      },
      {
        id: 'l4',
        title: 'Slow-Roasted Langhe Hazelnuts',
        provenance: 'IGP Tonda Gentile Trilobata',
        anchorX: 72,
        anchorY: 65,
        labelX: 92,
        labelY: 70,
        side: 'right'
      }
    ],
    glowColor: 'radial-gradient(circle, rgba(213, 152, 54, 0.45) 0%, rgba(213, 183, 122, 0.15) 60%, transparent 100%)',
    accentColor: '#D59836'
  },

  // PRODUCT 02 – UTOPIA DOUBLE AMARENA CHERRY & 75% DARK CACAO BAR
  'cei-bar-utopia-double-cherry': {
    productId: 'cei-bar-utopia-double-cherry',
    productName: 'Utopia Double Amarena Cherry & 75% Dark Cacao Bar',
    collectionName: 'Botanicals & Fruits Collection',
    country: 'Italy & Venezuela',
    shell: {
      color: '#1A0D10',
      textureGradient: 'linear-gradient(135deg, #2E151A 0%, #1A0D10 55%, #0F080A 100%)',
      thicknessColor: '#8C1D33',
      separationDistanceX: 54,
      separationDistanceY: 12,
      rotateYDeg: 28,
      name: '75% Dark Chocolate Outer Shell'
    },
    core: {
      color: '#341A22',
      textureGradient: 'linear-gradient(180deg, #44222C 0%, #341A22 55%, #241117 100%)',
      name: 'Grand Cru Dark Chocolate Gelato',
      swirlColor: '#8B142A',
      swirlName: 'Italian Amarena Wild Cherry Coulis'
    },
    ingredients: [
      {
        id: 'ch-pearl-1',
        name: 'Tart Amarena Cherry Pearl',
        shape: 'cherry',
        color: '#911D36',
        size: 19,
        targetX: -66,
        targetY: -42,
        targetZ: 70,
        targetRotate: -15,
        emergeDelay: 0.2
      },
      {
        id: 'ch-shard-1',
        name: '75% Dark Cacao Shard',
        shape: 'shard',
        color: '#1C0F13',
        size: 16,
        targetX: 66,
        targetY: -38,
        targetZ: 60,
        targetRotate: 30,
        emergeDelay: 0.3
      },
      {
        id: 'ch-coulis-1',
        name: 'Glossy Cherry Coulis Drop',
        shape: 'caramel',
        color: '#B32442',
        size: 16,
        targetX: -58,
        targetY: 36,
        targetZ: 65,
        targetRotate: -10,
        emergeDelay: 0.4
      },
      {
        id: 'ch-pearl-2',
        name: 'Italian Whole Amarena Cherry',
        shape: 'cherry',
        color: '#800F25',
        size: 17,
        targetX: 62,
        targetY: 44,
        targetZ: 55,
        targetRotate: 22,
        emergeDelay: 0.5
      },
      {
        id: 'ch-shard-2',
        name: 'Grand Cru Dark Cocoa Flake',
        shape: 'shard',
        color: '#2B141B',
        size: 14,
        targetX: 28,
        targetY: -62,
        targetZ: 65,
        targetRotate: -40,
        emergeDelay: 0.6
      },
      {
        id: 'ch-crumb-1',
        name: 'Tart Cherry Sugar Crystals',
        shape: 'crumb',
        color: '#C72C48',
        size: 12,
        targetX: -30,
        targetY: 58,
        targetZ: 45,
        targetRotate: 15,
        emergeDelay: 0.7
      }
    ],
    leaderLabels: [
      {
        id: 'l1',
        title: '75% Dark Chocolate Shell',
        provenance: 'Chuao Valley Criollo Cacao',
        anchorX: 25,
        anchorY: 30,
        labelX: 8,
        labelY: 18,
        side: 'left'
      },
      {
        id: 'l2',
        title: 'Dark Chocolate Gelato',
        provenance: 'Grand Cru Micro-Overrun',
        anchorX: 45,
        anchorY: 52,
        labelX: 8,
        labelY: 62,
        side: 'left'
      },
      {
        id: 'l3',
        title: 'Amarena Cherry Coulis',
        provenance: 'Emilia-Romagna, Italy',
        anchorX: 58,
        anchorY: 38,
        labelX: 92,
        labelY: 22,
        side: 'right'
      },
      {
        id: 'l4',
        title: 'Tart Cherry Pearls',
        provenance: 'Acoustic Snap Crisp Garnish',
        anchorX: 72,
        anchorY: 66,
        labelX: 92,
        labelY: 70,
        side: 'right'
      }
    ],
    glowColor: 'radial-gradient(circle, rgba(168, 24, 52, 0.5) 0%, rgba(85, 10, 25, 0.2) 60%, transparent 100%)',
    accentColor: '#C92A4A'
  },

  // PRODUCT 03 – WHITE CHOCOLATE & WILD ALPINE RASPBERRY RIBBON BAR
  'cei-bar-raspberry-ribbon': {
    productId: 'cei-bar-raspberry-ribbon',
    productName: 'White Chocolate & Wild Alpine Raspberry Ribbon Bar',
    collectionName: 'Botanicals & Fruits Collection',
    country: 'Switzerland & France',
    shell: {
      color: '#FAF3E8',
      textureGradient: 'linear-gradient(135deg, #FFFFFF 0%, #F8EFE0 50%, #ECD8BE 100%)',
      thicknessColor: '#C92A4A',
      separationDistanceX: 52,
      separationDistanceY: 10,
      rotateYDeg: 28,
      name: 'Silky Ivory White Chocolate Shell'
    },
    core: {
      color: '#FBF7EE',
      textureGradient: 'linear-gradient(180deg, #FFFFFF 0%, #FBF6EB 60%, #EFE5D0 100%)',
      name: 'Clotted Jersey Cream Gelato',
      swirlColor: '#C92A4A',
      swirlName: 'Wild Alpine Raspberry Molten Ribbon'
    },
    ingredients: [
      {
        id: 'rb-berry-1',
        name: 'Freeze-Dried Alpine Raspberry',
        shape: 'raspberry',
        color: '#C92A4A',
        size: 18,
        targetX: -64,
        targetY: -44,
        targetZ: 65,
        targetRotate: 20,
        emergeDelay: 0.2
      },
      {
        id: 'rb-ribbon-1',
        name: 'Alpine Raspberry Coulis Drop',
        shape: 'caramel',
        color: '#E8526F',
        size: 16,
        targetX: 66,
        targetY: -35,
        targetZ: 70,
        targetRotate: -15,
        emergeDelay: 0.3
      },
      {
        id: 'rb-shard-1',
        name: 'Ivory Cocoa Butter Curl',
        shape: 'shard',
        color: '#FFF8F0',
        size: 15,
        targetX: -58,
        targetY: 35,
        targetZ: 50,
        targetRotate: 38,
        emergeDelay: 0.4
      },
      {
        id: 'rb-pearl-1',
        name: 'Crispy White Chocolate Pearl',
        shape: 'pearl',
        color: '#F4ECE0',
        size: 13,
        targetX: 62,
        targetY: 42,
        targetZ: 55,
        targetRotate: -20,
        emergeDelay: 0.5
      },
      {
        id: 'rb-berry-2',
        name: 'Wild Mountain Raspberry Fragment',
        shape: 'raspberry',
        color: '#D8385A',
        size: 15,
        targetX: 28,
        targetY: -62,
        targetZ: 65,
        targetRotate: 12,
        emergeDelay: 0.6
      },
      {
        id: 'rb-crumb-1',
        name: 'Alpine Berry Sugar Shards',
        shape: 'crumb',
        color: '#E8526F',
        size: 12,
        targetX: -32,
        targetY: 58,
        targetZ: 45,
        targetRotate: -35,
        emergeDelay: 0.7
      }
    ],
    leaderLabels: [
      {
        id: 'l1',
        title: 'Silky Ivory Shell',
        provenance: 'Swiss Alps Cocoa Butter',
        anchorX: 25,
        anchorY: 30,
        labelX: 8,
        labelY: 18,
        side: 'left'
      },
      {
        id: 'l2',
        title: 'Clotted Cream Gelato',
        provenance: 'Brittany Jersey Dairy Core',
        anchorX: 45,
        anchorY: 52,
        labelX: 8,
        labelY: 62,
        side: 'left'
      },
      {
        id: 'l3',
        title: 'Alpine Raspberry Ribbon',
        provenance: 'Wild Harvested Mountain Coulis',
        anchorX: 58,
        anchorY: 38,
        labelX: 92,
        labelY: 22,
        side: 'right'
      },
      {
        id: 'l4',
        title: 'Freeze-Dried Raspberries',
        provenance: 'Tart Crispy Fruit Gems',
        anchorX: 72,
        anchorY: 65,
        labelX: 92,
        labelY: 70,
        side: 'right'
      }
    ],
    glowColor: 'radial-gradient(circle, rgba(230, 57, 70, 0.45) 0%, rgba(255, 182, 193, 0.15) 60%, transparent 100%)',
    accentColor: '#E63946'
  },

  // PRODUCT 04 – BRETON STRAWBERRY SHORTCAKE & PRALINE CRUNCH BAR
  'cei-bar-strawberry-shortcake': {
    productId: 'cei-bar-strawberry-shortcake',
    productName: 'Breton Strawberry Shortcake & Praline Crunch Bar',
    collectionName: 'Botanicals & Fruits Collection',
    country: 'France',
    shell: {
      color: '#E6B87D',
      textureGradient: 'linear-gradient(135deg, #F5D3A4 0%, #E6B87D 50%, #C89552 100%)',
      thicknessColor: '#C23B4E',
      separationDistanceX: 52,
      separationDistanceY: 10,
      rotateYDeg: 28,
      name: 'Buttery Breton Shortcake Coating'
    },
    core: {
      color: '#FAF4EC',
      textureGradient: 'linear-gradient(180deg, #FFFDF9 0%, #FAF3EA 50%, #F5A3B7 100%)',
      name: 'Sweet Cream Gelato Core',
      swirlColor: '#C23B4E',
      swirlName: 'Ruby Gariguette Strawberry Sorbet Core'
    },
    ingredients: [
      {
        id: 'sb-biscuit-1',
        name: 'Breton Sablé Biscuit Pearl',
        shape: 'crumb',
        color: '#E8B87A',
        size: 17,
        targetX: -65,
        targetY: -44,
        targetZ: 65,
        targetRotate: -25,
        emergeDelay: 0.2
      },
      {
        id: 'sb-straw-1',
        name: 'Crystallised Gariguette Strawberry',
        shape: 'strawberry',
        color: '#D95374',
        size: 18,
        targetX: 66,
        targetY: -36,
        targetZ: 70,
        targetRotate: 20,
        emergeDelay: 0.3
      },
      {
        id: 'sb-praline-1',
        name: 'Caramelized Praline Crunch',
        shape: 'crumb',
        color: '#D4A373',
        size: 15,
        targetX: -56,
        targetY: 38,
        targetZ: 50,
        targetRotate: 15,
        emergeDelay: 0.4
      },
      {
        id: 'sb-core-1',
        name: 'Ruby Wild Strawberry Bead',
        shape: 'strawberry',
        color: '#C23B4E',
        size: 15,
        targetX: 62,
        targetY: 42,
        targetZ: 55,
        targetRotate: -30,
        emergeDelay: 0.5
      },
      {
        id: 'sb-butter-1',
        name: 'AOC Breton Butter Biscuit Shard',
        shape: 'crumb',
        color: '#F2CCA0',
        size: 14,
        targetX: 30,
        targetY: -60,
        targetZ: 65,
        targetRotate: 38,
        emergeDelay: 0.6
      },
      {
        id: 'sb-cream-1',
        name: 'Sweet Clotted Cream Droplet',
        shape: 'caramel',
        color: '#FFF8F0',
        size: 13,
        targetX: -32,
        targetY: 58,
        targetZ: 45,
        targetRotate: -10,
        emergeDelay: 0.7
      }
    ],
    leaderLabels: [
      {
        id: 'l1',
        title: 'Buttery Breton Coating',
        provenance: 'AOC French Sablé Crust',
        anchorX: 25,
        anchorY: 30,
        labelX: 8,
        labelY: 18,
        side: 'left'
      },
      {
        id: 'l2',
        title: 'Sweet Cream Gelato',
        provenance: 'Bourbon Vanilla Bean Infusion',
        anchorX: 45,
        anchorY: 52,
        labelX: 8,
        labelY: 62,
        side: 'left'
      },
      {
        id: 'l3',
        title: 'Gariguette Sorbet Core',
        provenance: 'Provence Ruby Strawberries',
        anchorX: 58,
        anchorY: 38,
        labelX: 92,
        labelY: 22,
        side: 'right'
      },
      {
        id: 'l4',
        title: 'Sablé Biscuit Pearls',
        provenance: 'Buttery Praline Crunch',
        anchorX: 72,
        anchorY: 65,
        labelX: 92,
        labelY: 70,
        side: 'right'
      }
    ],
    glowColor: 'radial-gradient(circle, rgba(247, 127, 0, 0.4) 0%, rgba(245, 163, 183, 0.2) 60%, transparent 100%)',
    accentColor: '#F77F00'
  },

  // PRODUCT 05 – MIDNIGHT NOIR DARK CACAO & COOKIES CREAM BAR
  'cei-bar-midnight-cookies-cream': {
    productId: 'cei-bar-midnight-cookies-cream',
    productName: 'Midnight Noir Dark Cacao & Cookies Cream Bar',
    collectionName: 'Roasted Nut Shells Collection',
    country: 'France & Madagascar',
    shell: {
      color: '#12100E',
      textureGradient: 'linear-gradient(135deg, #24201C 0%, #12100E 50%, #080706 100%)',
      thicknessColor: '#3A3430',
      separationDistanceX: 54,
      separationDistanceY: 12,
      rotateYDeg: 28,
      name: 'Dense Dark Cacao Outer Coating'
    },
    core: {
      color: '#F7F2EB',
      textureGradient: 'linear-gradient(180deg, #FFFFFF 0%, #F5EFE6 55%, #EADECF 100%)',
      name: 'Tahitian Bourbon Vanilla Gelato',
      swirlColor: '#1A1816',
      swirlName: 'Dark Cocoa Biscuit Ribbons & Ganache'
    },
    ingredients: [
      {
        id: 'mn-crumb-1',
        name: 'Dark Cocoa Cookie Crumb',
        shape: 'cookie',
        color: '#1A1816',
        size: 18,
        targetX: -65,
        targetY: -44,
        targetZ: 65,
        targetRotate: 30,
        emergeDelay: 0.2
      },
      {
        id: 'mn-pearl-1',
        name: 'Grand Cru Chocolate Pearl',
        shape: 'pearl',
        color: '#2C2724',
        size: 16,
        targetX: 66,
        targetY: -36,
        targetZ: 70,
        targetRotate: -15,
        emergeDelay: 0.3
      },
      {
        id: 'mn-vanilla-1',
        name: 'Tahitian Vanilla Caviar Pearl',
        shape: 'pearl',
        color: '#FAF6EE',
        size: 13,
        targetX: -56,
        targetY: 36,
        targetZ: 50,
        targetRotate: 20,
        emergeDelay: 0.4
      },
      {
        id: 'mn-shard-1',
        name: 'Grand Cru Cacao Shard',
        shape: 'shard',
        color: '#11100F',
        size: 16,
        targetX: 62,
        targetY: 42,
        targetZ: 55,
        targetRotate: -30,
        emergeDelay: 0.5
      },
      {
        id: 'mn-ribbon-1',
        name: 'Crunchy Black Cookie Ribbon',
        shape: 'cookie',
        color: '#3A3430',
        size: 15,
        targetX: 28,
        targetY: -62,
        targetZ: 65,
        targetRotate: 12,
        emergeDelay: 0.6
      },
      {
        id: 'mn-crumb-2',
        name: 'Midnight Artisan Biscuit Dust',
        shape: 'crumb',
        color: '#1A1816',
        size: 13,
        targetX: -32,
        targetY: 58,
        targetZ: 45,
        targetRotate: -20,
        emergeDelay: 0.7
      }
    ],
    leaderLabels: [
      {
        id: 'l1',
        title: 'Dense Dark Cacao Shell',
        provenance: 'Normandy Grand Cru Cacao',
        anchorX: 25,
        anchorY: 30,
        labelX: 8,
        labelY: 18,
        side: 'left'
      },
      {
        id: 'l2',
        title: 'Bourbon Vanilla Core',
        provenance: 'Tahitian Orchid Caviar',
        anchorX: 45,
        anchorY: 52,
        labelX: 8,
        labelY: 62,
        side: 'left'
      },
      {
        id: 'l3',
        title: 'Dark Cacao Ganache',
        provenance: 'Molten Cookie Biscuit Swirl',
        anchorX: 58,
        anchorY: 38,
        labelX: 92,
        labelY: 22,
        side: 'right'
      },
      {
        id: 'l4',
        title: 'Cocoa Cookie Crumbs',
        provenance: 'Crushed Midnight Biscuit Pearls',
        anchorX: 72,
        anchorY: 65,
        labelX: 92,
        labelY: 70,
        side: 'right'
      }
    ],
    glowColor: 'radial-gradient(circle, rgba(90, 70, 55, 0.45) 0%, rgba(20, 18, 16, 0.3) 60%, transparent 100%)',
    accentColor: '#D5B77A'
  },

  // PRODUCT 06 – NORDIC WILD BILBERRY & INDIGO SWIRL BAR
  'cei-bar-nordic-blueberry': {
    productId: 'cei-bar-nordic-blueberry',
    productName: 'Nordic Wild Bilberry & Indigo Swirl Bar',
    collectionName: 'Botanicals & Fruits Collection',
    country: 'Sweden & Finland',
    shell: {
      color: '#F4EFEB',
      textureGradient: 'linear-gradient(135deg, #FFFFFF 0%, #F5ECE0 50%, #D8CEDB 100%)',
      thicknessColor: '#3A1C71',
      separationDistanceX: 52,
      separationDistanceY: 10,
      rotateYDeg: 28,
      name: 'Ivory White Chocolate Shell'
    },
    core: {
      color: '#FCF9F2',
      textureGradient: 'linear-gradient(180deg, #FFFFFF 0%, #FAF5ED 55%, #EBE1F0 100%)',
      name: 'Pure Sweet Alpine Cream',
      swirlColor: '#3A1C71',
      swirlName: 'Scandinavian Wild Bilberry Swirl'
    },
    ingredients: [
      {
        id: 'bl-berry-1',
        name: 'Nordic Wild Bilberry',
        shape: 'bilberry',
        color: '#243B55',
        size: 18,
        targetX: -65,
        targetY: -44,
        targetZ: 65,
        targetRotate: -10,
        emergeDelay: 0.2
      },
      {
        id: 'bl-coulis-1',
        name: 'Indigo Berry Swirl Coulis',
        shape: 'caramel',
        color: '#3A1C71',
        size: 16,
        targetX: 66,
        targetY: -36,
        targetZ: 70,
        targetRotate: 20,
        emergeDelay: 0.3
      },
      {
        id: 'bl-crisp-1',
        name: 'Indigo Bilberry Crisp',
        shape: 'crumb',
        color: '#4D62CD',
        size: 14,
        targetX: -56,
        targetY: 36,
        targetZ: 50,
        targetRotate: -25,
        emergeDelay: 0.4
      },
      {
        id: 'bl-cream-1',
        name: 'Alpine Sweet Cream Pearl',
        shape: 'pearl',
        color: '#FFFDF7',
        size: 13,
        targetX: 62,
        targetY: 42,
        targetZ: 55,
        targetRotate: 15,
        emergeDelay: 0.5
      },
      {
        id: 'bl-berry-2',
        name: 'Scandinavian Forest Bilberry',
        shape: 'bilberry',
        color: '#1B2456',
        size: 16,
        targetX: 28,
        targetY: -62,
        targetZ: 65,
        targetRotate: 35,
        emergeDelay: 0.6
      },
      {
        id: 'bl-shard-1',
        name: 'Ivory Bilberry-Speckled Shell Shard',
        shape: 'shard',
        color: '#E8E1F2',
        size: 13,
        targetX: -32,
        targetY: 58,
        targetZ: 45,
        targetRotate: -15,
        emergeDelay: 0.7
      }
    ],
    leaderLabels: [
      {
        id: 'l1',
        title: 'Ivory White Shell',
        provenance: 'Speckled Bilberry Crisps',
        anchorX: 25,
        anchorY: 30,
        labelX: 8,
        labelY: 18,
        side: 'left'
      },
      {
        id: 'l2',
        title: 'Sweet Alpine Cream',
        provenance: 'Pure Sweet Milk Gelato',
        anchorX: 45,
        anchorY: 52,
        labelX: 8,
        labelY: 62,
        side: 'left'
      },
      {
        id: 'l3',
        title: 'Indigo Bilberry Swirl',
        provenance: 'Arctic Wild Berry Reduction',
        anchorX: 58,
        anchorY: 38,
        labelX: 92,
        labelY: 22,
        side: 'right'
      },
      {
        id: 'l4',
        title: 'Wild Nordic Bilberries',
        provenance: 'Sweden & Finland Taiga',
        anchorX: 72,
        anchorY: 65,
        labelX: 92,
        labelY: 70,
        side: 'right'
      }
    ],
    glowColor: 'radial-gradient(circle, rgba(58, 28, 113, 0.5) 0%, rgba(75, 108, 183, 0.25) 60%, transparent 100%)',
    accentColor: '#687CE5'
  },

  // PRODUCT 07 – CHUAO DARK CHOCOLATE & SALTED CARAMEL HAZELNUT BAR
  'cei-bar-chuao-caramel': {
    productId: 'cei-bar-chuao-caramel',
    productName: 'Chuao Dark Chocolate & Salted Caramel Hazelnut Bar',
    collectionName: 'Roasted Nut Shells Collection',
    country: 'Venezuela & Italy',
    shell: {
      color: '#180E0A',
      textureGradient: 'linear-gradient(135deg, #2E1A12 0%, #180E0A 55%, #0B0604 100%)',
      thicknessColor: '#D59836',
      separationDistanceX: 54,
      separationDistanceY: 12,
      rotateYDeg: 28,
      name: '78% Venezuelan Dark Chocolate Shell'
    },
    core: {
      color: '#FBF5E8',
      textureGradient: 'linear-gradient(180deg, #FFFDF8 0%, #FAF2E2 55%, #EADBBE 100%)',
      name: 'Madagascar Vanilla Bean Gelato Core',
      swirlColor: '#D59836',
      swirlName: 'Slow-Cooked Fleur de Sel Golden Caramel'
    },
    ingredients: [
      {
        id: 'ch-caramel-1',
        name: 'Molten Sea Salt Caramel Ribbon',
        shape: 'caramel',
        color: '#D59836',
        size: 19,
        targetX: -65,
        targetY: -42,
        targetZ: 70,
        targetRotate: -20,
        emergeDelay: 0.2
      },
      {
        id: 'ch-nut-1',
        name: 'Kiln-Roasted Caramelized Hazelnut',
        shape: 'nut',
        color: '#8C582B',
        secondaryColor: '#E29578',
        size: 18,
        targetX: 66,
        targetY: -36,
        targetZ: 65,
        targetRotate: 25,
        emergeDelay: 0.3
      },
      {
        id: 'ch-cacao-1',
        name: '78% Chuao Criollo Cacao Shard',
        shape: 'shard',
        color: '#1A0E0A',
        size: 16,
        targetX: -56,
        targetY: 36,
        targetZ: 55,
        targetRotate: 35,
        emergeDelay: 0.4
      },
      {
        id: 'ch-caramel-2',
        name: 'Fleur de Sel Golden Caramel Droplet',
        shape: 'caramel',
        color: '#FFD27D',
        size: 14,
        targetX: 62,
        targetY: 42,
        targetZ: 60,
        targetRotate: -15,
        emergeDelay: 0.5
      },
      {
        id: 'ch-brittle-1',
        name: 'Langhe Hazelnut Brittle Crunch',
        shape: 'nut',
        color: '#A36A3B',
        secondaryColor: '#FFD27D',
        size: 14,
        targetX: 28,
        targetY: -62,
        targetZ: 65,
        targetRotate: -30,
        emergeDelay: 0.6
      },
      {
        id: 'ch-vanilla-1',
        name: 'Bourbon Vanilla Bean Orchid Caviar',
        shape: 'crumb',
        color: '#5A3818',
        size: 12,
        targetX: -32,
        targetY: 58,
        targetZ: 45,
        targetRotate: 15,
        emergeDelay: 0.7
      }
    ],
    leaderLabels: [
      {
        id: 'l1',
        title: '78% Chuao Dark Shell',
        provenance: 'Single-Estate Criollo Cacao',
        anchorX: 25,
        anchorY: 30,
        labelX: 8,
        labelY: 18,
        side: 'left'
      },
      {
        id: 'l2',
        title: 'Madagascar Vanilla Gelato',
        provenance: 'Sambava Cold-Macerated Core',
        anchorX: 45,
        anchorY: 52,
        labelX: 8,
        labelY: 62,
        side: 'left'
      },
      {
        id: 'l3',
        title: 'Fleur de Sel Caramel Ribbon',
        provenance: 'Guérande Sea Salt Copper Kettle',
        anchorX: 58,
        anchorY: 38,
        labelX: 92,
        labelY: 22,
        side: 'right'
      },
      {
        id: 'l4',
        title: 'Caramelized Hazelnuts',
        provenance: 'Slow-Kiln Roasted Langhe Nuts',
        anchorX: 72,
        anchorY: 65,
        labelX: 92,
        labelY: 70,
        side: 'right'
      }
    ],
    glowColor: 'radial-gradient(circle, rgba(198, 125, 56, 0.5) 0%, rgba(213, 183, 122, 0.2) 60%, transparent 100%)',
    accentColor: '#D59836'
  },

  // PRODUCT 08 – PERSIAN DAMASK ROSE & BRONTE PISTACHIO COUTURE BAR
  'cei-bar-rose-pistachio': {
    productId: 'cei-bar-rose-pistachio',
    productName: 'Persian Damask Rose & Bronte Pistachio Couture Bar',
    collectionName: 'Petals & Drizzles Collection',
    country: 'Iran & Sicily, Italy',
    shell: {
      color: '#1C0F13',
      textureGradient: 'linear-gradient(135deg, #2E151E 0%, #1C0F13 55%, #0F080A 100%)',
      thicknessColor: '#89B06B',
      separationDistanceX: 54,
      separationDistanceY: 12,
      rotateYDeg: 28,
      name: '75% Dark Chocolate Outer Shell'
    },
    core: {
      color: '#CAD8B8',
      textureGradient: 'linear-gradient(180deg, #E2EDD3 0%, #CAD8B8 60%, #A8BD93 100%)',
      name: 'Creamy Bronte Pistachio Interior',
      swirlColor: '#FFF8F0',
      swirlName: 'Ivory White Chocolate Ribbons'
    },
    ingredients: [
      {
        id: 'rp-petal-1',
        name: 'Crystallised Pink Damask Rose Petal',
        shape: 'rose',
        color: '#D95374',
        size: 19,
        targetX: -65,
        targetY: -44,
        targetZ: 70,
        targetRotate: -25,
        emergeDelay: 0.2
      },
      {
        id: 'rp-pistachio-1',
        name: 'DOP Sicilian Bronte Pistachio Kernel',
        shape: 'pistachio',
        color: '#70A288',
        secondaryColor: '#A5C87E',
        size: 17,
        targetX: 66,
        targetY: -36,
        targetZ: 65,
        targetRotate: 20,
        emergeDelay: 0.3
      },
      {
        id: 'rp-ribbon-1',
        name: 'Ivory White Chocolate Drizzle Curl',
        shape: 'shard',
        color: '#FFF8F0',
        size: 15,
        targetX: -56,
        targetY: 36,
        targetZ: 50,
        targetRotate: 30,
        emergeDelay: 0.4
      },
      {
        id: 'rp-petal-2',
        name: 'Fragrant Damask Rose Petal Leaf',
        shape: 'rose',
        color: '#FFB3C6',
        size: 16,
        targetX: 62,
        targetY: 42,
        targetZ: 60,
        targetRotate: -15,
        emergeDelay: 0.5
      },
      {
        id: 'rp-pistachio-2',
        name: 'Toasted Emerald Bronte Nut Pearl',
        shape: 'pistachio',
        color: '#588157',
        secondaryColor: '#D5B77A',
        size: 15,
        targetX: 28,
        targetY: -62,
        targetZ: 65,
        targetRotate: -35,
        emergeDelay: 0.6
      },
      {
        id: 'rp-shard-1',
        name: '75% Dark Single-Origin Cocoa Shard',
        shape: 'shard',
        color: '#24140E',
        size: 13,
        targetX: -32,
        targetY: 58,
        targetZ: 45,
        targetRotate: 20,
        emergeDelay: 0.7
      }
    ],
    leaderLabels: [
      {
        id: 'l1',
        title: '75% Dark Chocolate Shell',
        provenance: 'Single-Origin Venezuelan Cacao',
        anchorX: 25,
        anchorY: 30,
        labelX: 8,
        labelY: 18,
        side: 'left'
      },
      {
        id: 'l2',
        title: 'Bronte Pistachio Gelato',
        provenance: 'Mount Etna Volcanic Rock DOP',
        anchorX: 45,
        anchorY: 52,
        labelX: 8,
        labelY: 62,
        side: 'left'
      },
      {
        id: 'l3',
        title: 'Ivory Chocolate Ribbons',
        provenance: 'Unfolding Cocoa Butter Velvet',
        anchorX: 58,
        anchorY: 38,
        labelX: 92,
        labelY: 22,
        side: 'right'
      },
      {
        id: 'l4',
        title: 'Damask Rose Petals',
        provenance: 'Organic Steam-Distilled Kashan',
        anchorX: 72,
        anchorY: 65,
        labelX: 92,
        labelY: 70,
        side: 'right'
      }
    ],
    glowColor: 'radial-gradient(circle, rgba(224, 87, 128, 0.45) 0%, rgba(112, 162, 136, 0.2) 60%, transparent 100%)',
    accentColor: '#D5B77A'
  }
};
