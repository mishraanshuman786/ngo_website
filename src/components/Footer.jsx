import React from 'react';

function Footer() {
  return (
<footer className="shadow bg-blue-600  w-full">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 xl:text-xl md:text-md sm:text-sm font-medium text-white sm:mb-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Services</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Events</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Media</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block xl:text-xl md:text-md sm:text-sm text-white sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer;