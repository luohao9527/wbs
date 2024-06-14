<script setup>
import Logo from './assets/ai/logo.png';
import Banner from './assets/banner.png';
import Partner1 from './assets/partner1.svg';
import SideTip from './assets/sideTip2.webp';

import Avatar1 from './assets/ai/avatar1.png';
import Avatar2 from './assets/ai/avatar2.png';


const handleScrollTo = (id) => {
	const element = document.getElementById(id)
	if (!element) return;

  element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="p-5 bg-[#f4f1ed]">
    <div class="flex items-center gap-10 pl-20">
      <a href="/"><img :src="Logo" width="80"></a>

      <ul class="flex items-center gap-10 text-sm">
        <li><a href="javascript: void()" @click="handleScrollTo('about-us')">About Us</a></li>
        <li><a href="javascript: void()" @click="handleScrollTo('demo')">Demo</a></li>
        <li><a href="javascript: void()" @click="handleScrollTo('product')">Product</a></li>
        <li><a href="javascript: void()">IgniteFlowNotes</a></li>
      </ul>
    </div>
  </header>
  <main>
    <!-- banner -->
    <img :src="Banner" class="block w-full h-[250px]">

    <!-- partner -->
		<section class="bg-[#f4f1ed] w-full pt-10 px-32">
			<div class="flex flex-col items-center">
				<div>
					<h2 class="text-4xl">Revolutionizing Solar Projects with AI.</h2>
					<p class="text-4xl text-[#565f6e]"> Streamline permitting and interconnection, optimize decisions, and accelerate deployment from start to finish.</p>

					<div class="mt-10 mb-32">
						<h3 class="text-xl text-[#565f6e]">Trusted by</h3>
		
						<div class="flex items-center w-full gap-10">
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
				<p class="text-3xl font-normal mb-4">AI rapidly screens locations, expediting decision-making with remarkable efficiency</p>
				<video src="https://cdn.loom.com/sessions/thumbnails/6790e7c19cb54978b01754682c46d79b-00001.mp4" playsinline="" loop="" autoplay="" poster="https://cdn.loom.com/sessions/thumbnails/6790e7c19cb54978b01754682c46d79b-00001.jpg" class="w-[800px]"></video>
			</div>

			<div class="w-full grid grid-cols-[1fr,2fr] grid-rows-3 gap-5 text-2xl">
				<div class="row-span-3">
					<img :src="SideTip" class="block w-full">
				</div>
				<div class="flex items-start pt-6 gap-5 border-t border-black">
					<h3 class="text-[#b87005] w-[180px] flex-shrink-0">Prospect</h3>
					<p class="flex-grow">Early prospect assessment <span class="text-[#545f71]">detecting fatal flaws.</span></p>
				</div>
				<div class="flex items-start pt-6 gap-5 border-t border-black">
					<h3 class="text-[#0085ff] w-[180px] flex-shrink-0">Checklists</h3>
					<p class="flex-grow">Produce regional checklists <span class="text-[#545f71]">receive real-time updates on interconnection and permitting criteria</span></p>
				</div>
				<div class="flex items-start pt-6 gap-5 border-t border-black">
					<h3 class="text-[#d30f0f] w-[180px] flex-shrink-0">Streamlines</h3>
					<p class="flex-grow">Driven by project data, <span class="text-[#545f71]">IgniteFlow streamlines processes from start to transfer</span></p>
				</div>
			</div>
		</section>

		<!-- product -->
		<section class="px-32 space-y-14 py-14" id="product">
			<div class="flex items-center gap-10">
				<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65f3dfecc1049ec53be4a7e6_screen.png" class="block w-1/2">
				<div>
					<h3 class="text-3xl mb-4">Instant Data Access</h3>
					<p class="text-[#414448] text-3xl">Experience the immediacy of our platform as it delivers comprehensive location data, enabling swift and informed site assessments.</p>
				</div>
			</div>

			<div class="flex items-center gap-10">
				<div>
					<h3 class="text-3xl mb-4">Advanced Analytics</h3>
					<p class="text-[#414448] text-3xl">Leverage our sophisticated analytical tools designed to dissect and evaluate site suitability, ensuring that your project's criteria are met with precision.</p>
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
					<img :src="Avatar2" loading="lazy" class="w-[200px] h-[200px] inline-block rounded-full max-w-full border border-light-700">
					<h3 class="text-2xl">Isabel Montgomery</h3>
					<p class="text-[#9ba5b7] text-xl">Co-Founder and CEO</p>
					<a href="javascript: void(0)" class="inline-block">
						<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65ef6dfe395000ee4542399e_linkedin-icon.webp" width="32">
					</a>
				</div>

				<div class="text-xl font-normal space-y-6">
					<p>At Brex, Isabel distinguished herself as one of the youngest engineering managers, overseeing a team that developed innovative financial software solutions. Her tenure at Apple's AI/ML division further honed her skills, where she contributed to the development of sophisticated machine learning algorithms.
					</p>
					<p>During her time at Microsoft, Isabel was instrumental in building and scaling the company's cloud infrastructure, which now supports millions of users worldwide.</p>
					<p>Isabel holds a Bachelor of Science in Computer Science and Economics from the University of Cambridge, where her academic achievements were nothing short of stellar. </p>
				</div>
			</div>

			<div>
				<div class="text-center space-y-2 mb-2">
					<img :src="Avatar1" loading="lazy" class="w-[200px] h-[200px] inline-block rounded-full max-w-full border border-light-700">
					<h3 class="text-2xl">Henry Sinclair</h3>
					<p class="text-[#9ba5b7] text-xl">Co-Founder and CTO</p>
					<a href="javascript: void(0)" class="inline-block">
						<img src="https://assets-global.website-files.com/64f92708069c17009ddc8383/65ef6dfe395000ee4542399e_linkedin-icon.webp" width="32">
					</a>
				</div>

				<div class="text-xl font-normal space-y-6">
					<p>Henry was at the helm of developing Tesla's state-of-the-art warehouse management software from the ground up. His leadership ensured the seamless handling of multi-million-dollar daily inventories, supporting a production line that churned out thousands of electric vehicles weekly.
					</p>
					<p>
						Henry's expertise in industrial engineering and software development has been instrumental in creating user-friendly and secure e-commerce solutions that have transformed the way consumers purchase high-value items, such as vehicles, online.
					</p>
					<p>Henry holds a degree in Industrial Engineering from the University of Cambridge, where he graduated with honors and was recognized for his innovative approach to systems optimization and automation.</p>
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
						<h3 class="text-[40px]">See IgniteFlow in action</h3>
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

		<div class="flex justify-between items-center bg-white py-5 px-10">
			<img :src="Logo" width="50">
			<span class="text-[#9ba5b7] text-xs flex justify-end items-center text-right">© IgniteFlow Systems, Inc. 2024</span>
		</div>
	</footer>
</template>
