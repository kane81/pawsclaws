<script>
  import { Heart } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Our Supporters - Paws & Claws</title>
</svelte:head>

<div class="bg-gray-50 py-12">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Our Supporters</h1>
      <p class="text-gray-600">We are grateful for the generous support of these organizations who help us make a difference in the lives of animals.</p>
    </div>

    <!-- Veterinary Partners -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-16">
      <h2 class="text-2xl font-bold mb-8 text-center">Veterinary Partners</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Black Forest Vet -->
        <div class="text-center">
          <img src="images/vet-logos/Black-Forest-Family-Vet-Logo.png" alt="Black Forest Vet" class="h-20 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">Black Forest Vet</h3>
          <p class="text-gray-600 mb-2">687 South Road, Black Forest SA 5035</p>
          <p class="text-gray-600">7089 9550</p>
        </div>

        <!-- Chandlers Hill Vet -->
        <div class="text-center">
          <img src="/images/vet-logos/chandlers-hill-vet-logo.jpg" alt="Chandlers Hill Vet" class="h-20 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">Chandlers Hill Vet</h3>
          <p class="text-gray-600 mb-2">190 Chandlers Hill Road, Happy Valley SA 5159</p>
          <p class="text-gray-600">8322 2090</p>
        </div>

        <!-- Elizabeth Park Veterinary Clinic -->
        <div class="text-center">
          <img src="/images/vet-logos/ElizabethParkVetLogo.jpg" alt="Elizabeth Park Veterinary Clinic" class="h-20 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">Elizabeth Park Veterinary Clinic</h3>
          <p class="text-gray-600 mb-2">99 Yorktown Road, Elizabeth Park SA 5113</p>
          <p class="text-gray-600">8287 0122</p>
        </div>

        <!-- Family Pet Vet -->
        <div class="text-center">
          <img src="/images/vet-logos/Family-Pet-Vet-logo.jpg" alt="Family Pet Vet" class="h-20 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">Family Pet Vet</h3>
          <p class="text-gray-600 mb-2">382 Main Road, Coromandel Valley SA</p>
          <p class="text-gray-600">8370 3500</p>
        </div>

        <!-- Newton Veterinary Centre -->
        <div class="text-center">
          <img src="/images/vet-logos/NewtonVetLogo.png" alt="Newton Veterinary Centre" class="h-20 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">Newton Veterinary Centre</h3>
          <p class="text-gray-600 mb-2">112 Clairville Rd, Newton SA 5074</p>
          <p class="text-gray-600">8365 5010</p>
        </div>

        <!-- Northeast Veterinary Clinic -->
        <div class="text-center">
          <img src="/images/vet-logos/NEVC2.png" alt="Northeast Veterinary Clinic" class="h-20 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">Northeast Veterinary Clinic</h3>
          <p class="text-gray-600 mb-2">Shop 1 & 2 850 Lower North East Road, Dernancourt SA 5075</p>
          <p class="text-gray-600">8365 5010</p>
        </div>

        <!-- Mount Barker Veterinary Clinic -->
        <div class="text-center">
          <img src="/images/vet-logos/MountBarkerVetLogo.svg" alt="Mount Barker Veterinary Clinic" class="h-20 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">Mount Barker Veterinary Clinic</h3>
          <p class="text-gray-600 mb-2">204 Flaxley Rd, Mount Barker 5251</p>
          <p class="text-gray-600">8391 1404</p>
        </div>

        <!-- Murray Bridge Vet Clinic -->
        <div class="text-center">
          <img src="/images/vet-logos/Murray-Bridge-Vet_Logo.png" alt="Murray Bridge Vet Clinic" class="h-20 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">Murray Bridge Vet Clinic</h3>
          <p class="text-gray-600 mb-2">140 Swanport Rd, Murray Bridge SA 5253</p>
          <p class="text-gray-600">8531 4000</p>
        </div>

        <!-- Pooch N Purr Veterinary Clinic -->
        <div class="text-center">
          <img src="/images/vet-logos/poochnpurrlogo.png" alt="Pooch N Purr Veterinary Clinic" class="h-20 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">Pooch N Purr Veterinary Clinic</h3>
          <p class="text-gray-600 mb-2">1/153 Brebner Drive, West Lakes SA</p>
          <p class="text-gray-600">8331 1598</p>
        </div>

        <!-- Port Adelaide Veterinary Clinic -->
        <div class="text-center">
          <img src="/images/vet-logos/PortAdelaideVet-logo.png" alt="Port Adelaide Veterinary Clinic" class="h-20 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">Port Adelaide Veterinary Clinic</h3>
          <p class="text-gray-600 mb-2">190-194 Hart Street, Ethelton SA</p>
          <p class="text-gray-600">8449 4011</p>
        </div>

        <!-- The University of Adelaide -->
        <div class="text-center">
          <img src="/images/vet-logos/adelaideunilogo.png" alt="The University of Adelaide" class="h-20 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">The University of Adelaide – Companion Animal Health Centre</h3>
          <p class="text-gray-600 mb-2">Building E40 Roseworthy Campus University of Adelaide, Mudla Wirra Rd, Roseworthy SA 5371</p>
          <p class="text-gray-600">8313 1999</p>
        </div>

        <!-- Victor Vet -->
        <div class="text-center">
          <img src="/images/vet-logos/VictorVet-logo.png" alt="Victor Vet" class="h-20 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">Victor Vet</h3>
          <p class="text-gray-600 mb-2">29 Adamson Street, Hayborough 5211</p>
          <p class="text-gray-600">8552 1188</p>
        </div>
      </div>
    </div>

    <!-- Partner Locations -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-16">
      <h2 class="text-2xl font-bold mb-8 text-center">Partner Locations</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- PETstock Allenby Gardens -->
        <div class="text-center">
          <img src="/images/partner-logos/petstock-logo.png" alt="PETstock" class="h-16 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">PETstock Allenby Gardens</h3>
          <p class="text-gray-600">612 Port Rd, Allenby Gardens, SA 5009</p>
        </div>

        <!-- PETstock Panorama -->
        <div class="text-center">
          <img src="/images/partner-logos/petstock-logo.png" alt="PETstock" class="h-16 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">PETstock Panorama</h3>
          <p class="text-gray-600">621 Goodwood Rd, Panorama SA 5041</p>
        </div>

        <!-- PETstock Murray Bridge -->
        <div class="text-center">
          <img src="/images/partner-logos/petstock-logo.png" alt="PETstock" class="h-16 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">PETstock Murray Bridge</h3>
          <p class="text-gray-600">09B Maurice Rd, Murray Bridge SA 5253</p>
        </div>

        <!-- Meow Me Cat Cafe -->
        <div class="text-center">
          <img src="/images/partner-logos/meowme-cafe-logo.jpg" alt="Meow Me Cat Cafe" class="h-16 object-contain mx-auto mb-4" />
          <h3 class="font-semibold mb-2">Meow Me Cat Cafe</h3>
          <p class="text-gray-600">106 Glen Osmond Rd, Parkside, SA 5063</p>
        </div>
      </div>
    </div>

    <!-- Become a Supporter -->
    <div class="bg-primary-100 rounded-lg p-8">
      <div class="max-w-2xl mx-auto text-center">
        <div class="flex justify-center mb-4">
          <Heart class="text-primary-500" size={32} />
        </div>
        <h2 class="text-2xl font-bold mb-4">Become a Supporter</h2>
        <p class="text-gray-700 mb-6">Join our community of supporters and help us continue our mission of finding loving homes for animals in need. Corporate partnerships and sponsorships are welcome.</p>
        <a href="/" class="inline-block bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors">Contact Us About Partnerships</a>
      </div>
    </div>
  </div>
</div>