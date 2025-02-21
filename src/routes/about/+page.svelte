<script>
  import { Heart, Users, PawPrint, ShieldCheck, DollarSign, FileText, HelpCircle, Phone, Mail } from 'lucide-svelte';
</script>

<svelte:head>
  <title>About Us - Paws & Claws</title>
</svelte:head>

<div class="bg-gray-50 py-12">
  <div class="container mx-auto px-4">
    <!-- Hero Section -->
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h1 class="text-4xl font-bold mb-6">About Paws & Claws</h1>
      <p class="text-xl text-gray-600">We are a dedicated team of volunteers working together to rescue, rehabilitate, and rehome cats and dogs in need.</p>
    </div>

    <!-- Contact Information -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-16">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-center gap-3">
            <Phone class="text-primary-500" size={24} />
            <div>
              <h3 class="font-semibold">Phone</h3>
              <p class="text-gray-600">0416 364 228</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <Mail class="text-primary-500" size={24} />
            <div>
              <h3 class="font-semibold">Email</h3>
              <p class="text-gray-600">info@pawsandclawsadoptions.com.au</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Adoption Fees Section -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-16">
      <div class="max-w-3xl mx-auto">
        <div class="flex items-center gap-3 mb-6">
          <DollarSign class="text-primary-500" size={28} />
          <h2 class="text-2xl font-bold">Adoption Fees</h2>
        </div>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Cat Adoption Fees</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-50 p-6 rounded-lg">
                <h4 class="font-semibold mb-2">Adult Cats (6+ months)</h4>
                <p class="text-3xl font-bold text-primary-500 mb-2">$150</p>
                <ul class="text-gray-600 space-y-2">
                  <li>• Desexing</li>
                  <li>• Microchipping</li>
                  <li>• Vaccinations</li>
                  <li>• Flea and worm treatment</li>
                </ul>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg">
                <h4 class="font-semibold mb-2">Kittens (under 6 months)</h4>
                <p class="text-3xl font-bold text-primary-500 mb-2">$200</p>
                <ul class="text-gray-600 space-y-2">
                  <li>• Desexing</li>
                  <li>• Microchipping</li>
                  <li>• First vaccination</li>
                  <li>• Flea and worm treatment</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4">Dog Adoption Fees</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-50 p-6 rounded-lg">
                <h4 class="font-semibold mb-2">Adult Dogs (6+ months)</h4>
                <p class="text-3xl font-bold text-primary-500 mb-2">$400</p>
                <ul class="text-gray-600 space-y-2">
                  <li>• Desexing</li>
                  <li>• Microchipping</li>
                  <li>• Vaccinations</li>
                  <li>• Heartworm test (if applicable)</li>
                  <li>• Flea and worm treatment</li>
                </ul>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg">
                <h4 class="font-semibold mb-2">Puppies (under 6 months)</h4>
                <p class="text-3xl font-bold text-primary-500 mb-2">$500</p>
                <ul class="text-gray-600 space-y-2">
                  <li>• Desexing</li>
                  <li>• Microchipping</li>
                  <li>• First vaccination</li>
                  <li>• Flea and worm treatment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Adoption Policy Section -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-16">
      <div class="max-w-3xl mx-auto">
        <div class="flex items-center gap-3 mb-6">
          <FileText class="text-primary-500" size={28} />
          <h2 class="text-2xl font-bold">Adoption Policy</h2>
        </div>
        
        <div class="space-y-6">
          <p class="text-gray-600">Our adoption process is designed to ensure the best possible match between pets and their new families. We consider factors such as:</p>
          
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <ShieldCheck class="text-primary-500 shrink-0 mt-1" size={20} />
              <div>
                <h3 class="font-semibold">Living Situation</h3>
                <p class="text-gray-600">We assess whether your living situation is suitable for the pet you're interested in, including rental properties, yard space, and fencing.</p>
              </div>
            </li>
            
            <li class="flex items-start gap-3">
              <ShieldCheck class="text-primary-500 shrink-0 mt-1" size={20} />
              <div>
                <h3 class="font-semibold">Family Compatibility</h3>
                <p class="text-gray-600">We ensure the pet's temperament matches your family situation, including other pets and children.</p>
              </div>
            </li>
            
            <li class="flex items-start gap-3">
              <ShieldCheck class="text-primary-500 shrink-0 mt-1" size={20} />
              <div>
                <h3 class="font-semibold">Long-term Commitment</h3>
                <p class="text-gray-600">We verify that you understand and are prepared for the long-term commitment of pet ownership, including financial responsibilities.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Surrender Information Section -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-16">
      <div class="max-w-3xl mx-auto">
        <div class="flex items-center gap-3 mb-6">
          <HelpCircle class="text-primary-500" size={28} />
          <h2 class="text-2xl font-bold">Surrender Information</h2>
        </div>
        
        <div class="space-y-6">
          <p class="text-gray-600">We understand that sometimes circumstances change, and pet owners may need to surrender their animals. Our surrender process is designed to be compassionate and supportive.</p>
          
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Before Surrendering</h3>
            <ul class="space-y-3 text-gray-600">
              <li>• Consider all alternatives and resources available to keep your pet</li>
              <li>• Gather all medical records and behavioral information</li>
              <li>• Contact us to discuss your situation and options</li>
              <li>• Complete our surrender form with detailed information about your pet</li>
            </ul>
          </div>
          
          <div class="space-y-4">
            <h3 class="text-xl font-bold">What to Provide</h3>
            <ul class="space-y-3 text-gray-600">
              <li>• Veterinary records and vaccination history</li>
              <li>• Behavioral information and daily routines</li>
              <li>• Current diet and feeding schedule</li>
              <li>• Any medications or special needs</li>
              <li>• Favorite toys or comfort items</li>
            </ul>
          </div>
          
          <div class="bg-primary-100 p-6 rounded-lg">
            <h3 class="font-semibold mb-2">Important Note</h3>
            <p class="text-gray-700">We operate on a limited intake basis and may not always be able to accept surrenders immediately. Please contact us to discuss your situation and available options.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Privacy Policy Section -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-16">
      <div class="max-w-3xl mx-auto">
        <div class="flex items-center gap-3 mb-6">
          <ShieldCheck class="text-primary-500" size={28} />
          <h2 class="text-2xl font-bold">Privacy Policy</h2>
        </div>
        
        <div class="space-y-6">
          <p class="text-gray-600">We are committed to protecting your privacy and ensuring the security of your personal information. Our privacy policy outlines how we collect, use, and protect your data.</p>
          
          <div class="space-y-4">
            <h3 class="font-semibold">Information We Collect</h3>
            <ul class="text-gray-600 space-y-2">
              <li>• Contact information for adoption applications</li>
              <li>• Donation and payment details</li>
              <li>• Volunteer and foster carer information</li>
              <li>• Website usage data</li>
            </ul>
          </div>
          
          <div class="space-y-4">
            <h3 class="font-semibold">How We Use Your Information</h3>
            <ul class="text-gray-600 space-y-2">
              <li>• Processing adoption applications</li>
              <li>• Managing donations and payments</li>
              <li>• Communicating about our services and events</li>
              <li>• Improving our website and services</li>
            </ul>
          </div>
          
          <p class="text-gray-600">For our full privacy policy, please contact us.</p>
        </div>
      </div>
    </div>

    <!-- Contact CTA -->
    <div class="text-center">
      <h2 class="text-2xl font-bold mb-4">Questions?</h2>
      <p class="text-gray-600 mb-8">Contact us for more information about our adoption process, policies, or how you can help.</p>
      <div class="space-x-4">
        <a href="tel:0416364228" class="inline-block bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors">Call Us</a>
        <a href="mailto:info@pawsandclawsadoptions.com.au" class="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">Email Us</a>
      </div>
    </div>
  </div>
</div>