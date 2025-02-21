<script>
  import { Heart, Users, Calendar, Sparkles, CheckCircle, Clock } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Volunteer - Paws & Claws</title>
</svelte:head>

<div class="bg-gray-50 py-12">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Volunteer With Us</h1>
      <p class="text-gray-600">Join our dedicated team of volunteers and help make a difference in the lives of animals in need. Your time and compassion can help us save more lives.</p>
    </div>

    <!-- Quick Apply Button -->
    <div class="text-center mb-16">
      <a 
        href="https://tiny.cc/pcvolunteer" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="inline-block bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg"
      >
        Apply to Volunteer Now
      </a>
    </div>

    <!-- Volunteer Opportunities -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <div class="bg-white rounded-lg p-6 shadow-md">
        <div class="flex items-center gap-2 mb-4">
          <Heart class="text-primary-500" size={24} />
          <h2 class="text-lg font-semibold">Animal Care</h2>
        </div>
        <p class="text-gray-600 mb-4">Help care for our animals by providing food, water, and companionship. Assist with daily routines and enrichment activities.</p>
        <ul class="text-gray-600 space-y-2">
          <li>• Feeding and water duties</li>
          <li>• Cleaning and maintenance</li>
          <li>• Socialization and play time</li>
        </ul>
      </div>

      <div class="bg-white rounded-lg p-6 shadow-md">
        <div class="flex items-center gap-2 mb-4">
          <Users class="text-primary-500" size={24} />
          <h2 class="text-lg font-semibold">Event Support</h2>
        </div>
        <p class="text-gray-600 mb-4">Join us at adoption events, fundraisers, and community outreach programs. Help spread awareness about our mission.</p>
        <ul class="text-gray-600 space-y-2">
          <li>• Adoption day assistance</li>
          <li>• Fundraising events</li>
          <li>• Community education</li>
        </ul>
      </div>

      <div class="bg-white rounded-lg p-6 shadow-md">
        <div class="flex items-center gap-2 mb-4">
          <Calendar class="text-primary-500" size={24} />
          <h2 class="text-lg font-semibold">Foster Care</h2>
        </div>
        <p class="text-gray-600 mb-4">Provide a temporary home for animals awaiting adoption. Help them prepare for their forever homes.</p>
        <ul class="text-gray-600 space-y-2">
          <li>• Short-term care</li>
          <li>• Socialization</li>
          <li>• Basic training</li>
        </ul>
      </div>
    </div>

    <!-- Why Volunteer Section -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-16">
      <h2 class="text-2xl font-bold mb-8 text-center">Why Volunteer With Us?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="text-center">
          <div class="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart class="text-primary-500" size={20} />
          </div>
          <h3 class="font-semibold mb-2">Make a Difference</h3>
          <p class="text-gray-600">Help save and improve the lives of animals in need</p>
        </div>
        
        <div class="text-center">
          <div class="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users class="text-primary-500" size={20} />
          </div>
          <h3 class="font-semibold mb-2">Join a Community</h3>
          <p class="text-gray-600">Meet like-minded animal lovers and make new friends</p>
        </div>
        
        <div class="text-center">
          <div class="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles class="text-primary-500" size={20} />
          </div>
          <h3 class="font-semibold mb-2">Gain Experience</h3>
          <p class="text-gray-600">Learn valuable skills in animal care and nonprofit work</p>
        </div>
        
        <div class="text-center">
          <div class="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock class="text-primary-500" size={20} />
          </div>
          <h3 class="font-semibold mb-2">Flexible Schedule</h3>
          <p class="text-gray-600">Choose volunteer times that work for you</p>
        </div>
      </div>
    </div>

    <!-- Requirements Section -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-16">
      <h2 class="text-2xl font-bold mb-6 text-center">Volunteer Requirements</h2>
      <div class="max-w-2xl mx-auto">
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <CheckCircle class="text-primary-500 shrink-0 mt-1" size={20} />
            <div>
              <h3 class="font-semibold mb-1">Age Requirement</h3>
              <p class="text-gray-600">Must be 18 years or older to volunteer independently. Youth 14-17 can volunteer with parent/guardian supervision.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <CheckCircle class="text-primary-500 shrink-0 mt-1" size={20} />
            <div>
              <h3 class="font-semibold mb-1">Time Commitment</h3>
              <p class="text-gray-600">Minimum commitment of 4 hours per month. Consistency helps our animals feel secure and supported.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <CheckCircle class="text-primary-500 shrink-0 mt-1" size={20} />
            <div>
              <h3 class="font-semibold mb-1">Training</h3>
              <p class="text-gray-600">Complete our volunteer orientation and role-specific training sessions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Application Process -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-16">
      <h2 class="text-2xl font-bold mb-6 text-center">How to Get Started</h2>
      <div class="max-w-2xl mx-auto">
        <ol class="space-y-6">
          <li class="flex items-start gap-4">
            <div class="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">
              <span class="text-primary-600 font-semibold">1</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Complete the Application</h3>
              <p class="text-gray-600">Fill out our online volunteer application form with your details and areas of interest.</p>
            </div>
          </li>
          
          <li class="flex items-start gap-4">
            <div class="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">
              <span class="text-primary-600 font-semibold">2</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Attend Orientation</h3>
              <p class="text-gray-600">Learn about our organization, policies, and volunteer opportunities in our orientation session.</p>
            </div>
          </li>
          
          <li class="flex items-start gap-4">
            <div class="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">
              <span class="text-primary-600 font-semibold">3</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Complete Training</h3>
              <p class="text-gray-600">Receive role-specific training for your chosen volunteer activities.</p>
            </div>
          </li>
          
          <li class="flex items-start gap-4">
            <div class="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">
              <span class="text-primary-600 font-semibold">4</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Start Volunteering</h3>
              <p class="text-gray-600">Begin making a difference in the lives of animals in need!</p>
            </div>
          </li>
        </ol>
      </div>
    </div>

    <!-- Apply CTA -->
    <div class="text-center">
      <h2 class="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
      <p class="text-gray-600 mb-8">Join our team of dedicated volunteers and help us create better lives for animals in need.</p>
      <a 
        href="https://tiny.cc/pcvolunteer" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="inline-block bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors"
      >
        Apply Now
      </a>
    </div>
  </div>
</div>