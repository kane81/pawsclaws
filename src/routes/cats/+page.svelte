<script>
  import { Heart, Filter, CheckSquare, MapPin, Gift, HelpCircle, ShieldCheck } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Cats for Adoption - Paws & Claws</title>
</svelte:head>

<div class="bg-gray-50 py-12">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Cats for Adoption</h1>
      <p class="text-gray-600">Meet our wonderful cats looking for their forever homes. Each one has a unique personality and lots of love to give.</p>
    </div>

    <!-- Important Information Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <!-- Kitten Setup -->
      <div class="bg-white rounded-lg p-6 shadow-md">
        <div class="flex items-center gap-2 mb-4">
          <CheckSquare class="text-primary-500" size={24} />
          <h2 class="text-lg font-semibold">Kitten Setup Checklist</h2>
        </div>
        <ul class="space-y-2 text-gray-600">
          <li>✓ Litter tray & litter</li>
          <li>✓ Food & water bowls</li>
          <li>✓ Scratching post</li>
          <li>✓ Bed or sleeping area</li>
          <li>✓ Toys & enrichment</li>
        </ul>
        <a href="/" class="text-primary-500 hover:text-primary-600 mt-4 inline-block">View full checklist →</a>
      </div>

      <!-- Royal Canin Promotion -->
      <div class="bg-white rounded-lg p-6 shadow-md">
        <div class="flex items-center gap-2 mb-4">
          <Gift class="text-primary-500" size={24} />
          <h2 class="text-lg font-semibold">Special Offer</h2>
        </div>
        <p class="text-gray-600 mb-4">Get 25% off Royal Canin pet food with your new adoption! Register your new family member to claim this exclusive offer.</p>
        <a href="/" class="text-primary-500 hover:text-primary-600">Learn more →</a>
      </div>

      <!-- Insurance -->
      <div class="bg-white rounded-lg p-6 shadow-md">
        <div class="flex items-center gap-2 mb-4">
          <ShieldCheck class="text-primary-500" size={24} />
          <h2 class="text-lg font-semibold">Free Insurance Cover</h2>
        </div>
        <p class="text-gray-600 mb-4">Enjoy 4 weeks of free introductory insurance coverage for your new pet, with no obligation to continue.</p>
        <a href="/" class="text-primary-500 hover:text-primary-600">Learn more →</a>
      </div>
    </div>

    <!-- Indoor/Outdoor Section -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-xl font-bold mb-4">Indoor & Outdoor Homes</h2>
      <p class="text-gray-600 mb-4">We have cats suitable for both indoor and outdoor living environments. Our team will help match you with a cat that suits your living situation.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-semibold mb-2">Indoor Cats</h3>
          <p class="text-gray-600">Perfect for apartments or homes without outdoor access. These cats are comfortable living exclusively indoors.</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-semibold mb-2">Outdoor Access Cats</h3>
          <p class="text-gray-600">Suitable for homes with secure outdoor areas. These cats enjoy exploring outside while having a safe indoor haven.</p>
        </div>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <div class="flex items-center gap-2 mb-4">
        <Filter class="text-primary-500" size={20} />
        <h2 class="text-lg font-semibold">Filter Cats</h2>
      </div>
      
      <form class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label for="cat-age-filter" class="block text-sm font-medium text-gray-700 mb-2">Age</label>
          <select id="cat-age-filter" class="w-full rounded-lg border-gray-300 border p-2">
            <option value="">Any age</option>
            <option value="kitten">Kitten (0-6 months)</option>
            <option value="junior">Junior (6 months-2 years)</option>
            <option value="adult">Adult (2-7 years)</option>
            <option value="senior">Senior (7+ years)</option>
          </select>
        </div>
        
        <div>
          <label for="cat-gender-filter" class="block text-sm font-medium text-gray-700 mb-2">Gender</label>
          <select id="cat-gender-filter" class="w-full rounded-lg border-gray-300 border p-2">
            <option value="">Any gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        
        <div>
          <label for="cat-personality-filter" class="block text-sm font-medium text-gray-700 mb-2">Personality</label>
          <select id="cat-personality-filter" class="w-full rounded-lg border-gray-300 border p-2">
            <option value="">Any personality</option>
            <option value="playful">Playful</option>
            <option value="quiet">Quiet</option>
            <option value="affectionate">Affectionate</option>
            <option value="independent">Independent</option>
          </select>
        </div>
      </form>
    </div>

    <!-- Cat Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Cat Card Example -->
      <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
        <div class="relative">
          <img 
            src="/images/cats/cat1.png" 
            alt="Luna" 
            class="w-full h-64 object-cover"
          />
          <button 
            class="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Add Luna to favorites"
          >
            <Heart class="text-primary-500" size={20} />
          </button>
        </div>
        <div class="p-6">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-bold">Luna</h3>
            <span class="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">Available</span>
          </div>
          <div class="space-y-2 mb-4">
            <p class="text-gray-600">2 years old • Female</p>
            <p class="text-gray-600">Playful • Good with kids</p>
          </div>
          <p class="text-gray-700 mb-4">Luna is a sweet and energetic cat who loves to play and cuddle. She's looking for an active family who can give her lots of attention.</p>
          <a href="/" class="inline-block bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors w-full text-center">Meet Luna</a>
        </div>
      </div>
    </div>

    <!-- Location Section -->
    <div class="mt-12 bg-white rounded-lg shadow-md p-6">
      <div class="flex items-center gap-2 mb-6">
        <MapPin class="text-primary-500" size={24} />
        <h2 class="text-xl font-bold">Where to Meet Our Cats</h2>
      </div>
      <p class="text-gray-600 mb-6">Our cats and kittens are located in foster homes and at the following partner locations:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-semibold mb-2">Meow Me Cat Café</h3>
          <p class="text-gray-600">106 Glen Osmond Rd, Parkside, SA 5063</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-semibold mb-2">PetStock Allenby Gardens</h3>
          <p class="text-gray-600">612 Port Rd, Allenby Gardens, SA 5009</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-semibold mb-2">PetStock Panorama</h3>
          <p class="text-gray-600">621 Goodwood Rd, Panorama SA 5041</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-semibold mb-2">PetStock Murray Bridge</h3>
          <p class="text-gray-600">09B Maurice Rd, Murray Bridge SA 5253</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-semibold mb-2">PetStock Sefton Park</h3>
          <p class="text-gray-600">7/259-269 Main North Road, Sefton Park, SA, 5083</p>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="mt-8 bg-white rounded-lg shadow-md p-6">
      <div class="flex items-center gap-2 mb-6">
        <HelpCircle class="text-primary-500" size={24} />
        <h2 class="text-xl font-bold">Frequently Asked Questions</h2>
      </div>
      
      <div class="space-y-4">
        <div>
          <h3 class="font-semibold mb-2">Why was my family not chosen?</h3>
          <p class="text-gray-600">We carefully match cats with families based on various factors including lifestyle, living situation, and the specific needs of each cat. If you weren't selected, it doesn't mean you wouldn't make great pet parents. We encourage you to continue looking as new cats become available regularly.</p>
        </div>
      </div>
    </div>

    <!-- Footer Info -->
    <div class="mt-8 text-center">
      <p class="text-gray-500 text-sm">SA Breeder DACO110502</p>
    </div>

    <div class="mt-12 text-center">
      <p class="text-gray-600 mb-8">Can't find what you're looking for? New cats become available for adoption regularly.</p>
      <a href="/" class="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">Contact Us About Adoptions</a>
    </div>
  </div>
</div>