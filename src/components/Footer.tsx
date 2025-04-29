import React from 'react';
import { HeartIcon } from 'lucide-react';
export const Footer = () => {
  return <div className="w-full py-16 px-4 bg-[#f5efe9]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-800">
          Emma & James
        </h2>
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-[#d4b8aa]"></div>
          <HeartIcon className="mx-4 text-[#d4b8aa]" size={24} />
          <div className="h-px w-12 bg-[#d4b8aa]"></div>
        </div>
        <p className="text-gray-600 mb-8">
          We can't wait to celebrate with you!
        </p>
        <p className="text-gray-500 mb-2">For any questions, please contact:</p>
        <p className="text-[#d4b8aa]">weddinginfo@emmaandjames.com</p>
        <div className="mt-12 text-sm text-gray-500">
          <p>© 2024 Emma & James Wedding</p>
        </div>
      </div>
    </div>;
};