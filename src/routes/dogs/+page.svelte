<script>
  import { Heart, Filter, CheckSquare, MapPin, Gift, HelpCircle, ShieldCheck, AlertCircle } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Dogs for Adoption - Paws & Claws</title>
</svelte:head>

<div class="bg-gray-50 py-12">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Dogs for Adoption</h1>
      <p class="text-gray-600">Meet our wonderful dogs looking for their forever homes. Each one has a unique personality and lots of love to give.</p>
    </div>

    <!-- Important Notice -->
    <div class="bg-primary-100 rounded-lg p-6 mb-12">
      <div class="flex items-start gap-4">
        <AlertCircle class="text-primary-500 shrink-0 mt-1" size={24} />
        <div>
          <h2 class="text-lg font-semibold text-primary-800 mb-2">High Demand Notice</h2>
          <p class="text-primary-700">There is an unprecedented demand for puppies at the moment. We typically receive forty or more applications within 24 hours for our puppy listings. As a 100% volunteer-run rescue, we do not have the resources to maintain any form of wait list for specific breeds or types of dogs. If you are after a specific breed or type of dog, please keep watching our website and Facebook page for new listings.</p>
        </div>
      </div>
    </div>

    <!-- Special Offers Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <!-- SavourLife Offer -->
      <div class="bg-white rounded-lg p-6 shadow-md md:col-span-2">
        <div class="flex items-start gap-4">
          <Gift class="text-primary-500 shrink-0" size={24} />
          <div>
            <h2 class="text-lg font-semibold mb-2">Free SavourLife® Dog Food</h2>
            <p class="text-gray-600 mb-4">Paws & Claws Adoptions is grateful for the support of SavourLife® who generously offer a FREE bag of SavourLife, all-natural, Australian-made dog food to anyone adopting one of our dogs listed on their Adopt a Dog website.</p>
            <p class="text-gray-600">SavourLife® is a family-owned, Australian company inspired by a love for dogs and a desire to make a difference. They make natural, Australian-made food for dogs and donate 50% of their profits to pet rescue organisations; helping save and re-home abandoned dogs.</p>
          </div>
        </div>
      </div>

      <!-- Royal Canin Promotion -->
      <div class="bg-white rounded-lg p-6 shadow-md">
        <div class="flex items-center gap-2 mb-4">
          <Gift class="text-primary-500" size={24} />
          <h2 class="text-lg font-semibold">Royal Canin Discount</h2>
        </div>
        <ul class="space-y-3 text-gray-600 mb-4">
          <li>• 25% off voucher for your first purchase</li>
          <li>• Second 25% off voucher following your first purchase</li>
        </ul>
        <a href="/" class="text-primary-500 hover:text-primary-600">Learn more →</a>
      </div>
    </div>

    <!-- Insurance Card -->
    <div class="bg-white rounded-lg p-6 shadow-md mb-12">
      <div class="flex items-center gap-2 mb-4">
        <ShieldCheck class="text-primary-500" size={24} />
        <h2 class="text-lg font-semibold">Free Insurance Cover</h2>
      </div>
      <p class="text-gray-600">Enjoy 4 weeks of free introductory insurance coverage for your new pet, with no obligation to continue after the trial period.</p>
    </div>

    <!-- Filter Section -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <div class="flex items-center gap-2 mb-4">
        <Filter class="text-primary-500" size={20} />
        <h2 class="text-lg font-semibold">Filter Dogs</h2>
      </div>
      
      <form class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label for="dog-age-filter" class="block text-sm font-medium text-gray-700 mb-2">Age</label>
          <select id="dog-age-filter" class="w-full rounded-lg border-gray-300 border p-2">
            <option value="">Any age</option>
            <option value="puppy">Puppy (0-6 months)</option>
            <option value="junior">Junior (6-18 months)</option>
            <option value="adult">Adult (18 months-7 years)</option>
            <option value="senior">Senior (7+ years)</option>
          </select>
        </div>
        
        <div>
          <label for="dog-size-filter" class="block text-sm font-medium text-gray-700 mb-2">Size</label>
          <select id="dog-size-filter" class="w-full rounded-lg border-gray-300 border p-2">
            <option value="">Any size</option>
            <option value="small">Small (0-10kg)</option>
            <option value="medium">Medium (10-20kg)</option>
            <option value="large">Large (20-40kg)</option>
            <option value="xlarge">Extra Large (40kg+)</option>
          </select>
        </div>
        
        <div>
          <label for="dog-energy-filter" class="block text-sm font-medium text-gray-700 mb-2">Energy Level</label>
          <select id="dog-energy-filter" class="w-full rounded-lg border-gray-300 border p-2">
            <option value="">Any energy level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </form>
    </div>

    <!-- Dog Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Dog Card Example -->
      <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
        <div class="relative">
          <img 
            src="/images/dogs/dog1.png" 
            alt="Max" 
            class="w-full h-64 object-cover"
          />
          <button 
            class="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Add Max to favorites"
          >
            <Heart class="text-primary-500" size={20} />
          </button>
        </div>
        <div class="p-6">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-bold">Max</h3>
            <span class="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">Available</span>
          </div>
          <div class="space-y-2 mb-4">
            <p class="text-gray-600">1 year old • Male • Medium</p>
            <p class="text-gray-600">Friendly • Good with kids</p>
          </div>
          <p class="text-gray-700 mb-4">Max is a loving and energetic dog who enjoys playing fetch and going for long walks. He's great with children and would make a perfect family companion.</p>
          <a href="/" class="inline-block bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors w-full text-center">Meet Max</a>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="mt-12 bg-white rounded-lg shadow-md p-6">
      <div class="flex items-center gap-2 mb-6">
        <HelpCircle class="text-primary-500" size={24} />
        <h2 class="text-xl font-bold">Frequently Asked Questions</h2>
      </div>
      
      <div class="space-y-6">
        <div>
          <h3 class="font-semibold mb-2">Why was my family not chosen?</h3>
          <p class="text-gray-600">We carefully match dogs with families based on various factors including lifestyle, living situation, and the specific needs of each dog. If you weren't selected, it doesn't mean you wouldn't make great pet parents. We encourage you to continue looking as new dogs become available regularly.</p>
        </div>
        
        <div>
          <h3 class="font-semibold mb-2">How can I find a specific breed?</h3>
          <p class="text-gray-600">While we don't maintain waiting lists for specific breeds, we recommend regularly checking our website and Facebook page for new listings. Our available dogs change frequently, and we often receive various breeds and mixed breeds.</p>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center">
      <p class="text-gray-600 mb-8">Can't find what you're looking for? New dogs become available for adoption regularly.</p>
      <a href="/" class="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">Contact Us About Adoptions</a>
    </div>
  </div>
</div>