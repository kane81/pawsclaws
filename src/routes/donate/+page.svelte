<script>
  import { Heart, DollarSign, Gift, ShieldCheck } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Donate - Paws & Claws</title>
</svelte:head>

<div class="bg-gray-50 py-12">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Support Our Mission</h1>
      <p class="text-gray-600">Your donation helps us rescue, care for, and rehome animals in need. Every contribution makes a difference in the lives of our furry friends.</p>
    </div>

    <!-- Donation Options -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <!-- One-Time Donation -->
      <div class="bg-white rounded-lg p-6 shadow-md">
        <div class="flex items-center gap-2 mb-4">
          <DollarSign class="text-primary-500" size={24} />
          <h2 class="text-lg font-semibold">One-Time Donation</h2>
        </div>
        <p class="text-gray-600 mb-6">Make a single donation to help our animals. Every amount helps provide food, shelter, and medical care.</p>
        <div class="grid grid-cols-2 gap-3 mb-6">
          <button class="bg-primary-100 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-200 transition-colors">$25</button>
          <button class="bg-primary-100 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-200 transition-colors">$50</button>
          <button class="bg-primary-100 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-200 transition-colors">$100</button>
          <button class="bg-primary-100 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-200 transition-colors">Custom</button>
        </div>
        <a href="/" class="inline-block bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors w-full text-center">Donate Now</a>
      </div>

      <!-- Monthly Donation -->
      <div class="bg-white rounded-lg p-6 shadow-md relative overflow-hidden">
        <div class="absolute top-4 right-4">
          <span class="bg-primary-500 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
        </div>
        <div class="flex items-center gap-2 mb-4">
          <Heart class="text-primary-500" size={24} />
          <h2 class="text-lg font-semibold">Monthly Donation</h2>
        </div>
        <p class="text-gray-600 mb-6">Become a regular supporter and help us plan for the future. Your monthly donation provides consistent support for our animals.</p>
        <div class="grid grid-cols-2 gap-3 mb-6">
          <button class="bg-primary-100 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-200 transition-colors">$10/mo</button>
          <button class="bg-primary-100 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-200 transition-colors">$20/mo</button>
          <button class="bg-primary-100 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-200 transition-colors">$50/mo</button>
          <button class="bg-primary-100 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-200 transition-colors">Custom</button>
        </div>
        <a href="/" class="inline-block bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors w-full text-center">Become a Monthly Donor</a>
      </div>

      <!-- Corporate Sponsorship -->
      <div class="bg-white rounded-lg p-6 shadow-md">
        <div class="flex items-center gap-2 mb-4">
          <Gift class="text-primary-500" size={24} />
          <h2 class="text-lg font-semibold">Corporate Sponsorship</h2>
        </div>
        <p class="text-gray-600 mb-6">Partner with us to make a bigger impact. Corporate sponsorships help us expand our reach and save more animals.</p>
        <ul class="text-gray-600 space-y-2 mb-6">
          <li>• Brand visibility opportunities</li>
          <li>• Employee engagement programs</li>
          <li>• Customized partnership options</li>
        </ul>
        <a href="/" class="inline-block bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors w-full text-center">Partner With Us</a>
      </div>
    </div>

    <!-- Impact Section -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-12">
      <h2 class="text-2xl font-bold mb-6 text-center">Your Impact</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="text-4xl font-bold text-primary-500 mb-2">$25</div>
          <p class="text-gray-600">Provides food and basic supplies for one animal for a week</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary-500 mb-2">$100</div>
          <p class="text-gray-600">Covers basic veterinary care and vaccinations</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary-500 mb-2">$500</div>
          <p class="text-gray-600">Supports emergency medical procedures and specialized care</p>
        </div>
      </div>
    </div>

    <!-- Tax Information -->
    <div class="bg-white rounded-lg p-6 shadow-md mb-12">
      <div class="flex items-center gap-2 mb-4">
        <ShieldCheck class="text-primary-500" size={24} />
        <h2 class="text-lg font-semibold">Tax Deductible Donations</h2>
      </div>
      <p class="text-gray-600">All donations over $2 are tax deductible. You will receive a receipt for your records immediately after your donation.</p>
    </div>

    <!-- Other Ways to Help -->
    <div class="bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Other Ways to Help</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="text-center p-4">
          <h3 class="font-semibold mb-2">Volunteer</h3>
          <p class="text-gray-600 mb-4">Give your time and skills to help our animals and organization.</p>
          <a href="/volunteer" class="text-primary-500 hover:text-primary-600">Learn More →</a>
        </div>
        <div class="text-center p-4">
          <h3 class="font-semibold mb-2">Foster</h3>
          <p class="text-gray-600 mb-4">Provide a temporary home for animals waiting for adoption.</p>
          <a href="/" class="text-primary-500 hover:text-primary-600">Learn More →</a>
        </div>
        <div class="text-center p-4">
          <h3 class="font-semibold mb-2">Spread the Word</h3>
          <p class="text-gray-600 mb-4">Share our mission and animals on social media.</p>
          <a href="/" class="text-primary-500 hover:text-primary-600">Learn More →</a>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="mt-12 text-center">
      <p class="text-gray-600 mb-4">Have questions about donating or want to discuss other ways to help?</p>
      <a href="/" class="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">Contact Us</a>
    </div>
  </div>
</div>