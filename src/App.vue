<script setup>
import Logo from './assets/logo.svg';
import Banner from './assets/banner.jpg';
import Partner1 from './assets/partner1.svg';
import SideTip from './assets/sideTip.jpg';

const handleScrollTo = (id) => {
	const element = document.getElementById(id)
	if (!element) return;

  element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="p-5 bg-[#f4f1ed]">
    <div class="flex items-center gap-10 pl-20">
      <a href="/"><img :src="Logo"></a>

      <ul class="flex items-center gap-10 text-sm">
        <li><a href="javascript: void()" @click="handleScrollTo('about-us')">About Us</a></li>
        <li><a href="javascript: void()" @click="handleScrollTo('demo')">Demo</a></li>
        <li><a href="javascript: void()" @click="handleScrollTo('product')">Product</a></li>
        <li><a href="javascript: void()">SparkNotes</a></li>
      </ul>
    </div>
  </header>
  <main>
    <!-- banner -->
    <img :src="Banner" class="block w-full h-[250px]">

    <!-- partner -->
		<section class="bg-[#f4f1ed] w-full pt-10 px-10">
			<div class="flex flex-col items-center">
				<div>
					<h2 class="text-4xl">Streamline permitting and interconnection paperwork</h2>
					<p class="text-4xl text-[#565f6e]">for utility scale solar</p>

					<div class="mt-10 mb-32">
						<h3 class="text-xl text-[#565f6e]">Trusted by</h3>
		
						<div class="flex items-center w-full gap-3">
							<a href="javascript: void(0)" class="block">
								<img :src="Partner1" class="block w-[200px]">
							</a>
							<a href="javascript: void(0)" class="block">
								<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65ed1d4a969b2d530beff1b1_colliers.png" class="block w-[200px]">
							</a>
							<a href="javascript: void(0)" class="block">
								<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65d461b32b494d25eed6fcc5_King%20Energy%20-%20png.svg" class="block w-[200px]">
							</a>
							<a href="javascript: void(0)" class="block">
								<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65d465decb516da3660eeffc_salamander.svg" class="block w-[200px]">
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="flex justify-center items-center py-12" id="demo">
				<a href="javascript: void(0)" class="inline-block border border-black px-14 py-4 text-2xl bg-white">
					<span>Book a Demo</span>
					<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/64fb8787a00228a3a8370e3e_arrow-up-right.svg" class="inline-block ml-5">
				</a>
			</div>

			<!-- vedio -->
			<div class="w-full flex flex-col items-center mb-52">
				<p class="text-3xl font-normal mb-4">Screen and research thousands of locations in seconds using AI</p>
				<video src="https://cdn.loom.com/sessions/thumbnails/6790e7c19cb54978b01754682c46d79b-00001.mp4" playsinline="" loop="" autoplay="" poster="https://cdn.loom.com/sessions/thumbnails/6790e7c19cb54978b01754682c46d79b-00001.jpg" class="w-[800px]"></video>
			</div>

			<div class="w-full grid grid-cols-[1fr,2fr] grid-rows-3 gap-5 text-2xl">
				<div class="row-span-3">
					<img :src="SideTip" class="block w-full">
				</div>
				<div class="flex items-start pt-6 gap-5 border-t border-black">
					<h3 class="text-[#b87005] w-[180px] flex-shrink-0">Selection</h3>
					<p class="flex-grow">Assess prospects <span class="text-[#545f71]">and identify fatal flaws early</span></p>
				</div>
				<div class="flex items-start pt-6 gap-5 border-t border-black">
					<h3 class="text-[#0085ff] w-[180px] flex-shrink-0">Requirements</h3>
					<p class="flex-grow">Generate regional checklists <span class="text-[#545f71]">and get a constant feed of refreshed data on interconnection and permitting requirements</span></p>
				</div>
				<div class="flex items-start pt-6 gap-5 border-t border-black">
					<h3 class="text-[#d30f0f] w-[180px] flex-shrink-0">Workflows</h3>
					<p class="flex-grow">Powered by your project's content, <span class="text-[#545f71]">Spark automates time-consuming processes from origination to handoff</span></p>
				</div>
			</div>
		</section>

		<!-- product -->
		<section class="px-16 space-y-14 py-14" id="product">
			<div class="flex items-center gap-10">
				<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65f3dfecc1049ec53be4a7e6_screen.png" class="block w-1/2">
				<div>
					<h3 class="text-3xl mb-4">Site screening</h3>
					<p class="text-[#414448] text-3xl">Location-specific data at your fingertips. Identify the best sites in seconds, not weeks.</p>
				</div>
			</div>

			<div class="flex items-center gap-10">
				<div>
					<h3 class="text-3xl mb-4">SolarGPT</h3>
					<p class="text-[#414448] text-3xl">Get detailed answers to your policy, utility, and development-related questions.</p>
				</div>
				<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65f3dfecee0dd6cd73c894d4_gpt.png" class="block w-1/2">
			</div>
		</section>

		<!-- abount us -->
		<section class="mb-14 pt-10" id="about-us">
			<h2 class="text-[#9ba5b7] text-center text-3xl mb-8">Brought to you by leaders in energy and software</h2>

			<div class="flex justify-center items-center gap-28">
				<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65eea052df3f42f313492ef7_tesla-logo.jpeg" width="70">
				<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65eea0528090071627575a7a_apple-logo.png" width="70">
				<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65eea052395c7fb305e4be7f_brex-logo.png" width="180">
				<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65ee9e616b0dcf9469c4e6cd_Lucid-Motors-Logo.png" width="180">
			</div>
		</section>

		<section class="flex items-stretch gap-20 px-20 mb-16">
			<div>
				<div class="text-center space-y-2 mb-2">
					<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65ee0c08e4b6ab313a92b536_501f44c67d39cc1704ab75dc29ae432b76a7c8f6.jpg" loading="lazy" class="inline-block rounded-full max-w-full">
					<h3 class="text-2xl">Julia Wu</h3>
					<p class="text-[#9ba5b7] text-xl">Co-Founder and CEO</p>
					<a href="javascript: void(0)" class="inline-block">
						<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65ef6dfe395000ee4542399e_linkedin-icon.webp" width="32">
					</a>
				</div>

				<div class="text-xl font-normal space-y-6">
					<p>Julia was one of the youngest engineering managers at Brex, worked as an engineer in Apple's AI/ML division, and built infrastructure at Microsoft.
					</p>
					<p>Within months of joining the energy sector, Julia developed tools such as chatbots and data catalogs for the clean energy industry, which have been used by hundreds of solar developers, and wrote articles about project finance, tax credits, and AI use cases that went viral among industry leaders.</p>
					<p>Julia holds a Bachelor of Science in Computer Science and Economics from Brown. </p>
				</div>
			</div>

			<div>
				<div class="text-center space-y-2 mb-2">
					<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65ee0e2d393fa97ca78e405d_3d79749263f05dcff32a105d493e9aeafe096c6f.jpg" loading="lazy" class="inline-block rounded-full max-w-full">
					<h3 class="text-2xl">Tae Kim</h3>
					<p class="text-[#9ba5b7] text-xl">Co-Founder and CTO</p>
					<a href="javascript: void(0)" class="inline-block">
						<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65ef6dfe395000ee4542399e_linkedin-icon.webp" width="32">
					</a>
				</div>

				<div class="text-xl font-normal space-y-6">
					<p>Tae led the development of Tesla's warehouse software from scratch, managing systems that handled $xxMM in daily inventory and supported a factory producing 7k cars per week. He also played a key role in creating Lucid's payment platform from the ground up, pioneering online vehicle sales and processing millions of dollars in transactions monthly.
					</p>
					<p>Tae holds a degree in Industrial Engineering from Georgia Tech.</p>
				</div>
			</div>
		</section>
  </main>
  <footer>
		<div class="grid grid-cols-[3fr,1fr] gap-10 bg-[#f4f1ed] p-10 pb-0">
			<div>
				<div class="flex items-start gap-14 border-t border-black pt-4">
					<span class="text-[#9ba5b7] text-2xl mt-1">Demo</span>
					<div class="space-y-10">
						<h3 class="text-[40px]">See Spark in action</h3>
						<p class="text-[#545f71] text-2xl">We’d love to hear about your plans and show you the power of our platform.</p>
						<a href="javascript: void(0)" class="inline-block border border-black px-10 py-4 text-2xl bg-white">
							<span>Get In Touch</span>
							<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/64fb8787a00228a3a8370e3e_arrow-up-right.svg" class="inline-block ml-5">
						</a>
					</div>
				</div>
			</div>
			<img :src="SideTip" class="block w-full">
		</div>

		<div class="flex justify-between items-center bg-white py-10 px-10">
			<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/64f930553f3fb70ff94c3d1e_SparkLogo.svg" width="">
			<span class="text-[#9ba5b7] text-xs">© Spark Systems, Inc. 2024</span>
		</div>
	</footer>
</template>
