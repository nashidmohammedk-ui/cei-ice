import { Product, Review, Boutique } from '../types';

export const CATEGORIES = [
  { id: 'all', title: 'All Couture Bars', description: 'The complete collection of handcrafted artisan ice cream bars on engraved birchwood sticks.' },
  { id: 'bespoke-petals', title: 'Petals & Drizzles', description: 'Garnished with edible floral petals, pistachio pearls, and white chocolate ribbons.' },
  { id: 'crunch-nuts', title: 'Roasted Nut Shells', description: 'Crackled single-origin dark chocolate embedded with slow-roasted hazelnuts and macadamias.' },
  { id: 'gold-reserve', title: '24K Gold Reserve', description: 'Hand-adorned with genuine 24K edible gold leaf and grand cru truffles.' },
  { id: 'botanical-fruit', title: 'Botanicals & Fruits', description: 'Sun-drenched tropical fruits, ceremonial Kyoto matcha, and wild forest berries.' },
  { id: 'special-editions', title: 'Rare Gastronomic Specials', description: 'Barrel-aged Islay malt, Alba white truffle, and Modena balsamic infusions.' }
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'cei-bar-rose-pistachio',
    name: 'Persian Damask Rose & Bronte Pistachio Couture Bar',
    frenchName: 'Bâtonnet Couture Rose de Damas, Pistache de Bronte & Sceau d’Ivoire',
    collection: 'bespoke-petals' as any,
    collectionTitle: 'Petals & Drizzles Collection',
    tagline: '75% dark chocolate shell with ivory chocolate ribbons, crystallised pink Damask rose petals, Bronte pistachios, and white chocolate CEI medallion.',
    price: 8.5,
    rating: 4.99,
    reviewsCount: 412,
    badge: 'Maison Masterpiece',
    isBestSeller: true,
    isFeatured: true,
    isNewRelease: true,
    image: '/images/cei-rose-pistachio-bar.jpg',
    secondaryImage: '/images/cei-rose-pistachio-macro.jpg',
    notes: {
      top: 'Crystallised Rose Petals, Sicilian Pistachio Pearls',
      heart: 'Ivory White Chocolate Drizzle, Brownie Cookie Crumble',
      base: '75% Dark Venezuelan Chocolate, Bourbon Vanilla Gelato'
    },
    provenance: {
      region: 'Kashan & Mount Etna',
      country: 'Iran & Sicily, Italy',
      source: 'Organic Steam-Distilled Rose Petals & DOP Pistachio'
    },
    details: {
      description: 'Inspired by the royal courts of Persia and classical Parisian patisserie. Each bar is hand-dipped in 75% dark single-origin chocolate, zig-zag drizzled with ivory white chocolate and pistachio cream, then elaborately adorned with crushed fragrant Damask rose petals, emerald pistachio bits, and dark brownie crumble. Crowned with an embossed white chocolate CEI medallion seal.',
      tastingRitual: 'Serve chilled in our gold-foil presentation tray. Inhale the floral rose bouquet before biting through the crackling chocolate shell.',
      sommelierPairing: 'Ruinart Rosé Champagne or Turkish Cardamom Mint Tea.',
      overrun: '11% micro-density',
      cacaoPercentage: '75% Single Origin',
      dietary: ['Vegetarian', 'Gluten-Free', 'Zero Artificial Emulsifiers'],
      allergens: ['Milk', 'Tree Nuts (Pistachio)'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 290,
        fat: '18g',
        sugars: '22g',
        protein: '4.8g'
      }
    }
  },
  {
    id: 'cei-bar-chuao-caramel',
    name: 'Chuao Dark Chocolate & Salted Caramel Hazelnut Bar',
    frenchName: 'Bâtonnet Signature Chocolat Noir Chuao, Caramel & Noisettes Grillées',
    collection: 'crunch-nuts' as any,
    collectionTitle: 'Roasted Nut Shells Collection',
    tagline: 'Crackled 78% Venezuelan chocolate shell studded with caramelized hazelnuts, revealing Madagascar vanilla gelato and slow-cooked sea salt caramel swirl.',
    price: 7.5,
    rating: 4.98,
    reviewsCount: 528,
    badge: 'Iconic Hero Selection',
    isBestSeller: true,
    isFeatured: true,
    image: '/images/cei-chuao-tray-bar.jpg',
    secondaryImage: '/images/hero-ice-cream-bar.jpg',
    notes: {
      top: 'Roasted Hazelnut Brittle, Salted Caramel Ripple',
      heart: '78% Chuao Criollo Crackled Chocolate, Jersey Cream',
      base: 'Madagascar Tahitensis Orchid Caviar, Light Oak Smoke'
    },
    provenance: {
      region: 'Chuao Coast & Langhe Hills',
      country: 'Venezuela & Italy',
      source: 'Direct Criollo Cacao & Tonda Gentile Hazelnuts'
    },
    details: {
      description: 'The iconic handheld adventure. Hand-dipped in thick 78% Venezuelan Criollo chocolate generously coated in kiln-roasted caramelized hazelnuts. A generous bite shatters the shell to reveal velvety Madagascar vanilla bean gelato interlaced with thick Fleur de Sel golden caramel.',
      tastingRitual: 'Allow to temper for 60 seconds after opening the dry-ice case so the chocolate shell shatters with a crisp acoustic snap while the caramel stays luscious.',
      sommelierPairing: 'Single Malt Peated Islay Scotch or Espresso Macchiato.',
      overrun: '12% micro-density',
      cacaoPercentage: '78% Single Origin',
      dietary: ['Vegetarian', 'Gluten-Free', 'Zero Gums'],
      allergens: ['Milk', 'Tree Nuts (Hazelnuts)'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 305,
        fat: '19g',
        sugars: '23g',
        protein: '4.5g'
      }
    }
  },
  {
    id: 'cei-bar-gold-truffle',
    name: '24K Gold Leaf & Double Belgian Truffle Bar',
    frenchName: 'Bâtonnet Réserve Feuilles d’Or 24K & Truffe Noire Grand Cru',
    collection: 'gold-reserve' as any,
    collectionTitle: '24K Gold Reserve Collection',
    tagline: 'Adorned with genuine 24K edible gold leaf, Valrhona dark chocolate fudge drip, crispy cacao pearls, and caramelized hazelnut brittle.',
    price: 12.0,
    rating: 4.99,
    reviewsCount: 184,
    badge: 'Ultra-Luxury Reserve',
    isBestSeller: true,
    isFeatured: true,
    isNewRelease: true,
    image: '/images/cei-gold-truffle-bar.jpg',
    secondaryImage: '/images/hero-ice-cream-bar.jpg',
    notes: {
      top: '24K Edible Gold Flakes, Crispy Cacao Pearls',
      heart: 'Molten Belgian Dark Chocolate Ganache, Hazelnut Brittle',
      base: 'Velvet Gianduja Gelato, Bourbon Vanilla Core'
    },
    provenance: {
      region: 'Brussels & Florence',
      country: 'Belgium & Italy',
      source: 'Edible Gold Atelier & Single-Origin Cacao'
    },
    details: {
      description: 'The pinnacle of decadent opulence. Each bar is hand-gilded with sheets of pure 24-karat edible gold leaf over a double-enrobed Belgian dark chocolate shell. Accented by molten chocolate ganache drips and crunchy caramelized hazelnut pearls.',
      tastingRitual: 'Best presented at twilight celebrations. Let the gold leaf melt smoothly on the lips as the dark truffle ganache blooms.',
      sommelierPairing: 'Vintage Dom Pérignon Champagne or 20-Year Tawny Port.',
      overrun: '10% dense silk',
      cacaoPercentage: '80% Grand Cru',
      dietary: ['Vegetarian', 'Gluten-Free'],
      allergens: ['Milk', 'Tree Nuts (Hazelnuts)'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 320,
        fat: '21g',
        sugars: '21g',
        protein: '5.1g'
      }
    }
  },
  {
    id: 'cei-bar-white-macadamia',
    name: 'White Chocolate & Australian Macadamia Bar',
    frenchName: 'Bâtonnet Chocolat Blanc Ivoire, Macadamia & Baies Sauvages',
    collection: 'crunch-nuts' as any,
    collectionTitle: 'Roasted Nut Shells Collection',
    tagline: 'Ivory cocoa butter shell studded with golden roasted Queensland macadamias, filled with Jersey vanilla gelato & wild Scandinavian lingonberry swirl.',
    price: 7.5,
    rating: 4.96,
    reviewsCount: 312,
    badge: 'Summer Signature',
    isBestSeller: true,
    image: '/images/cei-white-chocolate-macadamia.jpg',
    secondaryImage: '/images/cei-hazelnut-bar.jpg',
    notes: {
      top: 'Buttery Roasted Macadamia Halves, Tart Berry Glaze',
      heart: 'Ivory Cocoa Butter Shell, Sweet Jersey Cream',
      base: 'Sun-Cured Bourbon Vanilla, Clotted Milk'
    },
    provenance: {
      region: 'Queensland & Småland Forests',
      country: 'Australia & Sweden',
      source: 'Direct-Trade Macadamia Orchards'
    },
    details: {
      description: 'Crafted for connoisseurs of buttery textures. Australian rainforest macadamia halves are caramelized in mountain honey and embedded into velvety white chocolate. Inside, sweet cream gelato is interlaced with ruby-red wild lingonberry coulis.',
      tastingRitual: 'Savor as the rich white chocolate melts smoothly into the tart berry core.',
      sommelierPairing: 'Champagne Demi-Sec or Cold-Brew Jasmine Pearl Tea.',
      overrun: '13% micro-density',
      dietary: ['Vegetarian', 'Gluten-Free'],
      allergens: ['Milk', 'Tree Nuts (Macadamia)'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 295,
        fat: '19g',
        sugars: '23g',
        protein: '4.0g'
      }
    }
  },
  {
    id: 'cei-bar-bronte-pistachio',
    name: 'Imperial Bronte Pistachio & 24K Gold Bar',
    frenchName: 'Bâtonnet Pistache Volcanique de Bronte & Éclats d’Or',
    collection: 'gold-reserve' as any,
    collectionTitle: '24K Gold Reserve Collection',
    tagline: 'Volcanic Etna Bronte pistachio gelato enrobed in dark chocolate and roasted emerald pistachio praline crunch.',
    price: 9.0,
    rating: 4.99,
    reviewsCount: 467,
    badge: 'Crowning Masterpiece',
    isBestSeller: true,
    isFeatured: true,
    image: '/images/cei-dark-chocolate-hero.jpg',
    secondaryImage: '/images/cei-rose-pistachio-bar.jpg',
    notes: {
      top: 'Toasted Green Pistachio, Sweet Almond',
      heart: 'Velvet Sicilian Nut Paste, Clotted Cream',
      base: 'Volcanic Mineral Earth, Sea Salt Finish'
    },
    provenance: {
      region: 'Bronte, Mount Etna',
      country: 'Italy (Sicily)',
      source: 'DOP Protected Orchard'
    },
    details: {
      description: 'Nicknamed the "Green Gold of Sicily", these pistachios grow directly in the mineral-rich volcanic basalt rock of Mount Etna. Stone-ground in granite mills for 48 hours to preserve their vibrant chartreuse color and unctuous natural oils.',
      tastingRitual: 'Savor with our custom gold tasting tray. Experience the velvety density without any synthetic stabilizers.',
      sommelierPairing: 'Marsala Superiore Riserva or chilled Franciacorta Rosé.',
      overrun: '11% micro-density',
      dietary: ['Gluten-Free', 'Vegetarian'],
      allergens: ['Milk', 'Tree Nuts (Pistachio)'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 295,
        fat: '18g',
        sugars: '20g',
        protein: '5.8g'
      }
    }
  },
  {
    id: 'cei-bar-utopia-double-hazelnut',
    name: 'Utopia Double Hazelnut & White Praline Couture Bar',
    frenchName: 'Bâtonnet Haute Couture Utopia Double Noisette du Piémont & Praliné Ivoire',
    collection: 'crunch-nuts' as any,
    collectionTitle: 'Roasted Nut Shells Collection',
    tagline: 'Double-enrobed ivory chocolate shell crackled with slow-roasted Langhe hazelnuts, enveloping rich hazelnut gianduja gelato and molten caramel chocolate fudge.',
    price: 8.5,
    rating: 5.0,
    reviewsCount: 389,
    badge: 'Utopia Couture Reserve',
    isBestSeller: true,
    isFeatured: true,
    isNewRelease: true,
    image: '/images/cei-utopia-double-hazelnut.jpg',
    secondaryImage: '/images/hero-ice-cream-bar.jpg',
    notes: {
      top: 'Slow-Roasted Langhe Hazelnuts, Ivory Praline Crust',
      heart: 'Molten Caramelized Chocolate Fudge Ribbon',
      base: 'Piedmont Hazelnut Gianduja Gelato'
    },
    provenance: {
      region: 'Langhe Hills, Piedmont',
      country: 'Italy',
      source: 'Protected IGP Tonda Gentile Trilobata Hazelnuts'
    },
    details: {
      description: 'The monumental hazelnut creation. Handcrafted with double layers of velvety ivory cocoa butter and dark chocolate praline, abundantly studded with kiln-roasted Piedmont hazelnuts on our signature engraved CEI birchwood stick.',
      tastingRitual: 'Let temper for 60 seconds. Experience the crackle of double praline shell followed by the rush of molten caramel and hazelnut cream.',
      sommelierPairing: 'Single Malt Highland Scotch or Double Ristretto Espresso.',
      overrun: '10% dense silk',
      dietary: ['Vegetarian', 'Gluten-Free', 'Zero Gums'],
      allergens: ['Milk', 'Tree Nuts (Hazelnuts)'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 315,
        fat: '21g',
        sugars: '22g',
        protein: '5.2g'
      }
    }
  },
  {
    id: 'cei-bar-utopia-double-cherry',
    name: 'Utopia Double Amarena Cherry & 75% Dark Cacao Bar',
    frenchName: 'Bâtonnet Haute Couture Utopia Double Cerise Amarena & Cacao Noir 75%',
    collection: 'botanical-fruit' as any,
    collectionTitle: 'Botanicals & Fruits Collection',
    tagline: 'Thick 75% dark chocolate shell studded with crunchy tart cherry pearls, revealing dark chocolate gelato interlaced with vibrant Italian Amarena cherry coulis.',
    price: 8.5,
    rating: 5.0,
    reviewsCount: 342,
    badge: 'Utopia Couture Reserve',
    isBestSeller: true,
    isFeatured: true,
    isNewRelease: true,
    image: '/images/cei-utopia-double-cherry.jpg',
    secondaryImage: '/images/cei-dark-chocolate-hero.jpg',
    notes: {
      top: 'Crunchy Amarena Pearls, 75% Single-Origin Dark Shell',
      heart: 'Italian Amarena Wild Cherry Coulis Ribbon',
      base: 'Grand Cru Dark Chocolate Gelato'
    },
    provenance: {
      region: 'Emilia-Romagna & Chuao Valley',
      country: 'Italy & Venezuela',
      source: 'Wild Pitted Amarena Cherries & Single-Origin Criollo'
    },
    details: {
      description: 'A dark, passionate symphony of contrast. Crisp 75% dark chocolate crunches to reveal rich chocolate gelato bursting with ruby-hued tart Amarena cherry coulis, mounted on the signature engraved CEI stick.',
      tastingRitual: 'Best served chilled in our gold-foil presentation tray. Inhale the tart cherry aroma before biting into the crackling dark shell.',
      sommelierPairing: 'Vintage Barolo or Black Forest Kirschwasser.',
      overrun: '11% micro-density',
      cacaoPercentage: '75% Single Origin',
      dietary: ['Vegetarian', 'Gluten-Free'],
      allergens: ['Milk', 'Soy Lecithin'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 300,
        fat: '19g',
        sugars: '24g',
        protein: '4.6g'
      }
    }
  },
  {
    id: 'cei-bar-raspberry-ribbon',
    name: 'White Chocolate & Wild Alpine Raspberry Ribbon Bar',
    frenchName: 'Bâtonnet Chocolat Blanc Ivoire, Ruban de Framboises Sauvages & Éclats Croquants',
    collection: 'botanical-fruit' as any,
    collectionTitle: 'Botanicals & Fruits Collection',
    tagline: 'Silky ivory cocoa butter shell studded with freeze-dried Alpine raspberries and white chocolate crumbles, filled with clotted cream gelato and molten raspberry coulis swirl.',
    price: 7.5,
    rating: 4.98,
    reviewsCount: 275,
    badge: 'Artisan Atelier Special',
    isBestSeller: true,
    isNewRelease: true,
    image: '/images/cei-raspberry-swirl-bar.jpg',
    secondaryImage: '/images/cei-white-chocolate-macadamia.jpg',
    notes: {
      top: 'Crystallised Alpine Raspberry Shards, Crispy White Pearls',
      heart: 'Ivory Cocoa Velvet & Molten Crimson Coulis Ribbon',
      base: 'Clotted Jersey Double Cream Gelato'
    },
    provenance: {
      region: 'Swiss Alps & Brittany',
      country: 'Switzerland & France',
      source: 'Wild Alpine Raspberries & Clotted Cream'
    },
    details: {
      description: 'Handcrafted with fragrant wild mountain raspberries swirled into dense clotted Jersey cream, enrobed in ivory cocoa butter and finished with crispy raspberry crumble on our engraved CEI wooden stick.',
      tastingRitual: 'Allow to temper for 45 seconds for the white chocolate shell to yield to the luscious berry swirls.',
      sommelierPairing: 'Crémant d’Alsace or Cold-Brew Hibiscus Infusion.',
      overrun: '12% micro-density',
      dietary: ['Vegetarian', 'Gluten-Free'],
      allergens: ['Milk'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 285,
        fat: '17g',
        sugars: '23g',
        protein: '4.2g'
      }
    }
  },
  {
    id: 'cei-bar-strawberry-shortcake',
    name: 'Breton Strawberry Shortcake & Praline Crunch Bar',
    frenchName: 'Bâtonnet Sablé Breton aux Fraises Gariguette & Éclats Croustillants',
    collection: 'botanical-fruit' as any,
    collectionTitle: 'Botanicals & Fruits Collection',
    tagline: 'Encrusted in buttery French sablé biscuit pearls and crystallised Gariguette strawberries, revealing sweet cream gelato and a vibrant ruby wild strawberry sorbet core.',
    price: 7.0,
    rating: 4.97,
    reviewsCount: 318,
    badge: 'Summer Nostalgia Masterpiece',
    isBestSeller: true,
    isNewRelease: true,
    image: '/images/cei-strawberry-shortcake-bar.jpg',
    secondaryImage: '/images/cei-rose-pistachio-bar.jpg',
    notes: {
      top: 'French Sablé Biscuit Pearls, Crystallised Strawberries',
      heart: 'Sweet Madagascar Vanilla Bean Gelato',
      base: 'Ruby Gariguette Wild Strawberry Sorbet Core'
    },
    provenance: {
      region: 'Brittany & Provence',
      country: 'France',
      source: 'Gariguette Strawberries & AOC Breton Butter'
    },
    details: {
      description: 'An elevated reimagining of the classic strawberry crunch bar. A dual-layer core of ruby strawberry sorbet and sweet cream gelato, fully enrobed in golden caramelized French sablé biscuit crumbles on our engraved CEI stick.',
      tastingRitual: 'Bite through the crunchy sablé crust to reach the contrasting tart strawberry center.',
      sommelierPairing: 'Sparkling Rosé Prosecco or Iced Earl Grey Tea.',
      overrun: '13% micro-density',
      dietary: ['Vegetarian'],
      allergens: ['Milk', 'Wheat (Gluten)'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 275,
        fat: '15g',
        sugars: '22g',
        protein: '3.9g'
      }
    }
  },
  {
    id: 'cei-bar-midnight-cookies-cream',
    name: 'Midnight Noir Dark Cacao & Cookies Cream Bar',
    frenchName: 'Bâtonnet Noir Cacao Minuit & Gelato aux Biscuits Croquants',
    collection: 'crunch-nuts' as any,
    collectionTitle: 'Roasted Nut Shells Collection',
    tagline: 'Heavily encrusted in dense dark cocoa cookie crumbs and grand cru chocolate pearls, with Tahitian bourbon vanilla bean gelato packed with crunchy chocolate biscuit ribbons.',
    price: 7.5,
    rating: 4.99,
    reviewsCount: 462,
    badge: 'Midnight Reserve',
    isBestSeller: true,
    isNewRelease: true,
    image: '/images/cei-midnight-cookie-cream-bar.jpg',
    secondaryImage: '/images/hero-ice-cream-bar.jpg',
    notes: {
      top: 'Black Cocoa Cookie Crumble & Crispy Cacao Pearls',
      heart: 'Single-Origin Dark Cacao Ganache Ripple',
      base: 'Tahitian Bourbon Vanilla Bean Gelato'
    },
    provenance: {
      region: 'Normandy & Madagascar',
      country: 'France & Madagascar',
      source: 'Dark Cacao Biscuits & Tahitensis Vanilla Caviar'
    },
    details: {
      description: 'The definitive midnight indulgence. Velvet Tahitian vanilla bean gelato folded with crunchy dark cocoa cookies, entirely enrobed in a dense crust of artisan black biscuit pearls on the laser-engraved CEI birch stick.',
      tastingRitual: 'Savor slowly as the dark cookie crunch gives way to velvety cool vanilla cream.',
      sommelierPairing: 'Imperial Oatmeal Stout or Cold-Brew Nitro Espresso.',
      overrun: '11% micro-density',
      dietary: ['Vegetarian'],
      allergens: ['Milk', 'Wheat (Gluten)'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 310,
        fat: '18g',
        sugars: '24g',
        protein: '4.8g'
      }
    }
  },
  {
    id: 'cei-bar-nordic-blueberry',
    name: 'Nordic Wild Bilberry & Indigo Swirl Bar',
    frenchName: 'Bâtonnet Myrtilles Sauvages Nordiques & Tourbillon Indigo',
    collection: 'botanical-fruit' as any,
    collectionTitle: 'Botanicals & Fruits Collection',
    tagline: 'Ivory white chocolate shell speckled with indigo bilberry crisps, resting on pure sweet cream gelato with an intensely concentrated Scandinavian wild blueberry reduction.',
    price: 8.0,
    rating: 4.98,
    reviewsCount: 236,
    badge: 'Arctic Botanical Special',
    isBestSeller: true,
    isNewRelease: true,
    image: '/images/cei-nordic-blueberry-bar.jpg',
    secondaryImage: '/images/cei-white-chocolate-macadamia.jpg',
    notes: {
      top: 'Indigo Bilberry Crisps, Ivory White Cocoa Shell',
      heart: 'Concentrated Scandinavian Wild Blueberry Coulis',
      base: 'Sweet Alpine Double Cream Gelato'
    },
    provenance: {
      region: 'Lapland & Småland Taiga Forests',
      country: 'Sweden & Finland',
      source: 'Hand-Foraged Arctic Wild Bilberries'
    },
    details: {
      description: 'Hand-foraged wild Arctic bilberries offer ten times the antioxidant intensity of cultivated blueberries. Swirled through sweet Alpine cream and coated in ivory cocoa butter speckled with indigo berry crisps on the engraved CEI birch stick.',
      tastingRitual: 'Let temper for 30 seconds to enjoy the deep berry aroma and smooth white chocolate crackle.',
      sommelierPairing: 'Nordic Aquavit or Chilled Lingonberry Sparkling Water.',
      overrun: '12% micro-density',
      dietary: ['Vegetarian', 'Gluten-Free'],
      allergens: ['Milk'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 280,
        fat: '16g',
        sugars: '21g',
        protein: '4.1g'
      }
    }
  },
  {
    id: 'cei-bar-alphonso-mango',
    name: 'Alphonso Mango & Passionfruit White Chocolate Bar',
    frenchName: 'Bâtonnet Mangue Alphonso de Ratnagiri & Chocolat Blanc Passion',
    collection: 'botanical-fruit' as any,
    collectionTitle: 'Botanicals & Fruits Collection',
    tagline: 'Sun-drenched "King of Mangoes" churned with tangy purple passionfruit coulis and toasted coconut crunch.',
    price: 7.0,
    rating: 4.94,
    reviewsCount: 228,
    badge: '100% Plant-Based Option',
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: '/images/cei-white-chocolate-macadamia.jpg',
    notes: {
      top: 'Ripe Tropical Peach, Wild Lime Zest',
      heart: 'Alphonso Velvet Nectar, Saffron Hue',
      base: 'Tart Passionfruit Seeds, Toasted Coconut'
    },
    provenance: {
      region: 'Ratnagiri Coast',
      country: 'India',
      source: 'Organic Coastal Groves'
    },
    details: {
      description: 'Crafted exclusively during the 6-week window when the sea-breeze ripened Alphonso mango reaches peak sugar brix. Blended with fragrant passionfruit reduction and enrobed in a crisp white chocolate coconut shell.',
      tastingRitual: 'Best enjoyed immediately upon removing from the dry-ice wrapper to experience the bright tropical acidity.',
      sommelierPairing: 'Dry Riesling Mosel Kabinett or Sparkling Jasmine Infusion.',
      overrun: '14% silk density',
      dietary: ['Vegetarian', 'Gluten-Free', 'All-Natural'],
      allergens: ['Milk', 'Coconut'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 240,
        fat: '12g',
        sugars: '24g',
        protein: '3.2g'
      }
    }
  },
  {
    id: 'cei-bar-islay-malt',
    name: 'Smoked Single Malt Islay & Bourbon Pecan Bar',
    frenchName: 'Bâtonnet Whisky Single Malt Islay Fumé & Noix de Pécan Grillées',
    collection: 'special-editions' as any,
    collectionTitle: 'Rare Gastronomic Specials',
    tagline: '16-year peated Scottish single malt infused in dark chocolate with maple-glazed pecans and smoked salt.',
    price: 9.5,
    rating: 4.96,
    reviewsCount: 164,
    badge: 'Contains 1.2% ABV',
    isFeatured: true,
    image: '/images/cei-hazelnut-bar.jpg',
    secondaryImage: '/images/hero-ice-cream-bar.jpg',
    notes: {
      top: 'Peat Smoke, Sea Spray, Heather',
      heart: 'Aged Single Malt Whisky, Dark Demerara',
      base: 'Crunchy Glazed Pecans, Smoked Guérande Salt'
    },
    provenance: {
      region: 'Islay & Texas',
      country: 'Scotland & USA',
      source: 'Heritage Islay Distillery'
    },
    details: {
      description: 'An audacious creation designed for the digestif hour. Authentic peated Islay single malt is infused straight into our dark chocolate sweet cream, creating an uncanny natural silkiness accented by maple-glazed Georgia pecans.',
      tastingRitual: 'Pair with espresso after dinner. Must be served strictly below -16°C due to alcohol lowering the freeze point.',
      sommelierPairing: 'Double espresso or a neat dram of cask-strength Islay whisky.',
      overrun: '12% micro-density',
      dietary: ['Vegetarian', 'Gluten-Free'],
      allergens: ['Milk', 'Tree Nuts (Pecans)'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 310,
        fat: '19g',
        sugars: '20g',
        protein: '4.2g'
      }
    }
  },
  {
    id: 'cei-bar-kyoto-matcha',
    name: 'Kyoto Ceremonial Uji Matcha & Black Sesame Bar',
    frenchName: 'Bâtonnet Matcha Cérémonial d’Uji & Croquant de Sésame Noir',
    collection: 'botanical-fruit' as any,
    collectionTitle: 'Botanicals & Fruits Collection',
    tagline: 'First-harvest shade-grown green tea from Kyoto enrobed in ivory matcha chocolate with caramelized black sesame brittle.',
    price: 8.5,
    rating: 4.97,
    reviewsCount: 198,
    badge: 'Artisanal Reserve',
    image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: '/images/cei-rose-pistachio-bar.jpg',
    notes: {
      top: 'Fresh Cut Bamboo, Sweet Umami Grass',
      heart: 'Vibrant Green Tea Cream, Roasted Sesame',
      base: 'Pure Cocoa Butter, Milky Vanilla Finish'
    },
    provenance: {
      region: 'Uji, Kyoto',
      country: 'Japan',
      source: '15th Generation Tea Estate'
    },
    details: {
      description: 'Cultivated under straw shade screens for 28 days to concentrate L-theanine. Stone-ground on volcanic granite wheels, churned into cream, and dipped in ivory matcha chocolate with hand-shattered black sesame brittle.',
      tastingRitual: 'Experience the clean sweet umami aroma blooming on the palate.',
      sommelierPairing: 'Gyokuro green tea or Junmai Daiginjo Sake.',
      overrun: '12% micro-density',
      dietary: ['Vegetarian', 'Gluten-Free'],
      allergens: ['Milk', 'Sesame'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 275,
        fat: '16g',
        sugars: '21g',
        protein: '4.8g'
      }
    }
  },
  {
    id: 'cei-bar-white-truffle',
    name: 'Pure White Truffle of Alba & Wild Honey Bar',
    frenchName: 'Bâtonnet Truffe Blanche d’Alba & Miel Sauvage',
    collection: 'special-editions' as any,
    collectionTitle: 'Rare Gastronomic Specials',
    tagline: 'Foraged Tuber magnatum pico infused in Jersey sweet cream with alpine raw honeycomb and 24K gold dust.',
    price: 15.0,
    rating: 4.99,
    reviewsCount: 92,
    badge: 'Collector’s Cut',
    isNewRelease: true,
    image: '/images/cei-gold-truffle-bar.jpg',
    secondaryImage: '/images/cei-rose-pistachio-bar.jpg',
    notes: {
      top: 'Garlic Flower, Wet Autumn Forest, Hazelnut',
      heart: 'Musky Autumn Forest Earth, Sweet Butter Cream',
      base: 'Wild Mountain Honey, Saline Mineral'
    },
    provenance: {
      region: 'Langhe & Roero, Piedmont',
      country: 'Italy',
      source: 'Certified Truffle Hunter & Lagotto Dogs'
    },
    details: {
      description: 'The holy grail of cold gastronomy. Fresh autumn white truffles foraged under Piedmont oak trees are steeped cold in sweet Jersey milk for 36 hours. Dipped in pure ivory cocoa butter with alpine honeycomb chunks and gold leaf.',
      tastingRitual: 'Serve with chilled vintage Champagne.',
      sommelierPairing: 'Château d’Yquem 2009 or aged Champagne Dom Pérignon.',
      overrun: '10% dense silk',
      dietary: ['Vegetarian', 'Gluten-Free'],
      allergens: ['Milk'],
      nutrition: {
        servingSize: '95ml (1 Bar)',
        calories: 285,
        fat: '17g',
        sugars: '19g',
        protein: '4.6g'
      }
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Chef Antoine Mercier',
    role: '3 Michelin Star Chef',
    publication: 'L’Étoile Paris',
    rating: 5,
    headline: 'The most refined handheld glacé ever conceived.',
    comment: 'The Persian Damask Rose & Pistachio bar is extraordinary. The white chocolate drizzle and rose petals provide delicate floral perfume while the 75% dark shell snaps with acoustic perfection.',
    flavourMentioned: 'Persian Damask Rose & Bronte Pistachio Bar',
    date: 'November 2026',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Lady Camilla Harrington-Smyth',
    role: 'Connoisseur & Collector',
    publication: 'Mayfair, London',
    rating: 5,
    headline: 'The unboxing alone is pure theatrical luxury.',
    comment: 'The cryogenic dry-ice smoke billowing out of the gold embossed box makes entertaining guests an absolute spectacle. The Chuao Salted Caramel Hazelnut bar is pure indulgence on a stick.',
    flavourMentioned: 'Chuao Dark Chocolate & Salted Caramel Hazelnut Bar',
    date: 'November 2026',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Hiroshi Tanaka',
    role: 'Master Sommelier & Food Critic',
    publication: 'Tokyo Epicure',
    rating: 5,
    headline: 'Handheld gelato at its most uncompromising.',
    comment: 'The overrun is astonishingly low. You can taste the genuine Jersey cream butterfat and whole Tahitian orchid beans. An adventure in every single bite.',
    flavourMentioned: 'White Chocolate & Australian Macadamia Bar',
    date: 'October 2026',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Elena Rostova',
    role: 'Luxury Hospitality Director',
    publication: 'Dubai Marina & St. Moritz',
    rating: 5,
    headline: 'Our private yacht guests accept nothing else.',
    comment: 'When curating provisions for 70m yachts in the Mediterranean, the 24K Gold Leaf Truffle Bars are our permanent standard. The dry-ice transit maintains exact -18°C integrity flawlessly.',
    flavourMentioned: '24K Gold Leaf & Double Belgian Truffle Bar',
    date: 'September 2026',
    verified: true
  }
];

export const BOUTIQUES: Boutique[] = [
  {
    id: 'mayfair',
    city: 'London',
    district: 'Mayfair',
    address: '24 Mount Street, Mayfair, London W1K 2RN',
    hours: 'Mon – Sat: 11:00 AM – 10:00 PM | Sun: 12:00 PM – 8:00 PM',
    phone: '+44 20 7946 0912',
    email: 'mayfair@ceicouture.com',
    status: 'Open Today until 10:00 PM',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Bespoke Dipping Counter', 'Valet Parking', 'Custom Flight Bar', 'Cryo-Box Courier']
  },
  {
    id: 'paris',
    city: 'Paris',
    district: '8ème Arrondissement',
    address: '18 Rue Saint-Honoré, 75001 Paris, France',
    hours: 'Tue – Sun: 11:00 AM – 10:30 PM | Mon: Closed',
    phone: '+33 1 42 68 55 00',
    email: 'paris@ceicouture.com',
    status: 'Open Today until 10:30 PM',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Atelier View Kitchen', 'Sommelier Wine Pairings', 'White Glove Collection']
  },
  {
    id: 'tokyo',
    city: 'Tokyo',
    district: 'Ginza',
    address: '6-10-1 Ginza, Chuo-ku, Tokyo 104-0061, Japan',
    hours: 'Daily: 11:00 AM – 9:00 PM',
    phone: '+81 3 5537 2100',
    email: 'ginza@ceicouture.com',
    status: 'Open Today until 9:00 PM',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Uji Matcha Chado Room', 'Handmade Lacquer Tasting Spoons', 'VIP Counter']
  },
  {
    id: 'dubai',
    city: 'Dubai',
    district: 'Downtown / Fashion Avenue',
    address: 'Fashion Avenue Level 1, The Dubai Mall, UAE',
    hours: 'Mon – Thu: 10:00 AM – 11:00 PM | Fri – Sun: 10:00 AM – 12:00 AM',
    phone: '+971 4 362 7500',
    email: 'dubai@ceicouture.com',
    status: 'Open Today until 11:00 PM',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    highlights: ['24K Gold Glacé Service', 'Private Majlis Salon', 'Chilled Luxury Gifting']
  },
  {
    id: 'newyork',
    city: 'New York',
    district: 'Upper East Side',
    address: '768 Madison Avenue, New York, NY 10065',
    hours: 'Mon – Sat: 11:00 AM – 10:00 PM | Sun: 12:00 PM – 7:00 PM',
    phone: '+1 212 555 0194',
    email: 'madison@ceicouture.com',
    status: 'Open Today until 10:00 PM',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Curated Flights', 'Hamptons Cryo-Courier', 'Private Event Room']
  }
];

export const TASTING_FLIGHTS = [
  {
    id: 'flight-stick-bars',
    name: 'The Haute Couture Stick Bar Collection (Pack of 4 Bars)',
    price: 32,
    originalPrice: 38,
    description: 'Four handheld masterpieces on engraved birchwood sticks with crackled chocolate nut shells, crystallised rose petals, and velvet caramel rippled cores.',
    items: [
      '1x Persian Damask Rose & Bronte Pistachio Bar',
      '1x Chuao Dark Chocolate & Salted Caramel Hazelnut',
      '1x 24K Gold Leaf & Double Belgian Truffle Bar',
      '1x White Chocolate & Australian Macadamia Bar'
    ],
    badge: 'Iconic Presentation Box',
    image: '/images/cei-rose-pistachio-bar.jpg'
  },
  {
    id: 'flight-grand-cru-6',
    name: 'The Grand Connoisseur Bar Box (Pack of 6 Bars)',
    price: 48,
    originalPrice: 56,
    description: 'Our most celebrated stick creations packed in our cryogenic dry-ice travel case with gold presentation tray.',
    items: [
      '2x Persian Damask Rose & Pistachio Bar',
      '2x Chuao Dark Chocolate & Salted Caramel',
      '1x 24K Gold Leaf & Belgian Truffle Bar',
      '1x Australian Macadamia & Lingonberry'
    ],
    badge: 'Most Popular Gift',
    image: '/images/hero-ice-cream-bar.jpg'
  }
];
