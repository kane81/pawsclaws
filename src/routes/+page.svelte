<script>
  import { Heart, PawPrint, Users, DollarSign } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Paws & Claws Adoptions - Find Your Perfect Pet</title>
</svelte:head>

<section class="relative h-[80vh] flex items-center">
  <div class="absolute inset-0 z-0">
    <img 
      src="/images/backdrop.jpg" 
      alt="Happy dog and cat" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>
  
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-2xl text-white">
      <h1 class="text-5xl font-bold mb-6">Find Your Perfect Companion</h1>
      <p class="text-xl mb-8">Give a loving home to our wonderful cats and dogs. Every adoption makes a difference.</p>
      <div class="flex flex-wrap gap-4">
        <a href="/cats" class="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors">Meet Our Cats</a>
        <a href="/dogs" class="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">Meet Our Dogs</a>
      </div>
    </div>
  </div>
</section>

<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="text-center">
        <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart class="text-primary-500" size={24} />
        </div>
        <h3 class="text-xl font-bold mb-2">Adoption</h3>
        <p class="text-gray-600">Find your perfect companion from our loving pets</p>
      </div>
      
      <div class="text-center">
        <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <PawPrint class="text-primary-500" size={24} />
        </div>
        <h3 class="text-xl font-bold mb-2">Pet Care</h3>
        <p class="text-gray-600">Expert care and support for all our animals</p>
      </div>
      
      <div class="text-center">
        <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users class="text-primary-500" size={24} />
        </div>
        <h3 class="text-xl font-bold mb-2">Volunteer</h3>
        <p class="text-gray-600">Join our team and make a difference</p>
      </div>
      
      <div class="text-center">
        <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <DollarSign class="text-primary-500" size={24} />
        </div>
        <h3 class="text-xl font-bold mb-2">Donate</h3>
        <p class="text-gray-600">Support our mission to help animals in need</p>
      </div>
    </div>
  </div>
</section>

<section class="py-20">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <h2 class="text-4xl font-bold mb-4">Meet Our Latest Friends</h2>
      <p class="text-gray-600">These lovely pets are waiting for their forever homes. Could you be their perfect match?</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img 
          src="/images/cats/cat1.png" 
          alt="Cat" 
          class="w-full h-64 object-cover"
        />
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Luna</h3>
          <p class="text-gray-600 mb-4">2 years old • Female • Playful</p>
          <a href="/" class="text-primary-500 hover:text-primary-600 font-medium">Learn More →</a>
        </div>
      </div>
      
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img 
          src="/images/dogs/dog1.png" 
          alt="Dog" 
          class="w-full h-64 object-cover"
        />
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Max</h3>
          <p class="text-gray-600 mb-4">3 years old • Male • Friendly</p>
          <a href="/" class="text-primary-500 hover:text-primary-600 font-medium">Learn More →</a>
        </div>
      </div>
      
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img 
          src="/images/cats/cat2.png" 
          alt="Cat" 
          class="w-full h-64 object-cover"
        />
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Oliver</h3>
          <p class="text-gray-600 mb-4">1 year old • Male • Gentle</p>
          <a href="/" class="text-primary-500 hover:text-primary-600 font-medium">Learn More →</a>
        </div>
      </div>
    </div>
    
    <div class="text-center mt-12">
      <a href="/" class="inline-block bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors">View All Pets</a>
    </div>
  </div>
</section>