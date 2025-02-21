<script>
  import "../app.css";
  import { PawPrint, Menu, X, Facebook, Instagram } from 'lucide-svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  
  let isMenuOpen = false;
  let isScrolled = false;
  
  // Close menu on page navigation
  $: if ($page) {
    isMenuOpen = false;
  }
  
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleMenuClick() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="fixed w-full z-50 transition-all duration-300 bg-white shadow-md">
  <div class="container mx-auto px-4">
    <nav class="flex items-center justify-between h-[100px]">
      <a href="/" class="flex items-center">
        <img src="/images/pc/pc_logo.svg" alt="Paws & Claws Adoptions" class="w-auto" style="height:80px;" />
      </a>
      
      <button class="lg:hidden" on:click={handleMenuClick}>
        {#if isMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
      
      <div class="hidden lg:flex items-center space-x-8">
        <a href="/about" class="hover:text-primary-500 transition-colors">About Us</a>
        <a href="/cats" class="hover:text-primary-500 transition-colors">Cats</a>
        <a href="/dogs" class="hover:text-primary-500 transition-colors">Dogs</a>
        <a href="/volunteer" class="hover:text-primary-500 transition-colors">Volunteer</a>
        <a href="/supporters" class="hover:text-primary-500 transition-colors">Supporters</a>
        <a href="/donate" class="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors">Donate</a>
      </div>
    </nav>
  </div>
  
  {#if isMenuOpen}
    <div class="lg:hidden bg-white shadow-lg">
      <div class="container mx-auto px-4 py-4 space-y-4">
        <a href="/about" class="block hover:text-primary-500 transition-colors">About Us</a>
        <a href="/cats" class="block hover:text-primary-500 transition-colors">Cats</a>
        <a href="/dogs" class="block hover:text-primary-500 transition-colors">Dogs</a>
        <a href="/volunteer" class="block hover:text-primary-500 transition-colors">Volunteer</a>
        <a href="/supporters" class="block hover:text-primary-500 transition-colors">Supporters</a>
        <a href="/donate" class="block bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors text-center">Donate</a>
      </div>
    </div>
  {/if}
</header>

<main class="pt-20">
  <slot />
</main>

<footer class="bg-gray-900 text-white py-12 mt-20">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-xl font-bold mb-4">Contact Us</h3>
        <p>Email: info@pawsandclawsadoptions.com.au</p>
        <p>Phone: 0416 364 228</p>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="/about" class="hover:text-primary-400">About Us</a></li>
          <li><a href="/cats" class="hover:text-primary-400">Cats</a></li>
          <li><a href="/dogs" class="hover:text-primary-400">Dogs</a></li>
          <li><a href="/volunteer" class="hover:text-primary-400">Volunteer</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-4">Follow Us</h3>
        <p class="mb-4">Stay connected with us on social media for the latest updates and adorable pet photos!</p>
        <div class="flex space-x-4">
          <a 
            href="https://www.facebook.com/PawsClawsAdoption/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-primary-500 p-2 rounded-full hover:bg-primary-600 transition-colors"
            aria-label="Follow us on Facebook"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://www.pawsandclawsadoptions.com.au/instagram/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-primary-500 p-2 rounded-full hover:bg-primary-600 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </div>
    <div class="mt-8 pt-8 border-t border-gray-800 text-center">
      <p>© 2024 Paws & Claws Adoptions. All rights reserved.</p>
    </div>
  </div>
</footer>