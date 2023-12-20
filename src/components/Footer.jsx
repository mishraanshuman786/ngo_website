import React from 'react';

function Footer() {
  return (
<footer class="shadow bg-blue-600 fixed bottom-0  w-full">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 xl:text-xl md:text-md sm:text-sm font-medium text-white sm:mb-0">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Services</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Events</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Media</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block xl:text-xl md:text-md sm:text-sm text-white sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer;