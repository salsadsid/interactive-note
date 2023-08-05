import React from "react";

const LoadingSkeleton = () => {
  return (
    <section className="bg-gray-100 text-gray-800 ">
    <div className="flex lg:flex-row flex-col gap-14 justify-center items-center p-6 mx-auto sm:py-12 lg:py-24  max-w-screen-xl">
    <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
      <div class="flex items-center w-full space-x-2">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[480px]">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[400px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[480px]">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[440px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[360px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
    <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
      <div class="flex items-center w-full space-x-2">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[480px]">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[400px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[480px]">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[440px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[360px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
    <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
      <div class="flex items-center w-full space-x-2">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[480px]">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[400px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[480px]">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[440px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[360px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
    </div>
    </section>
  );
};

export default LoadingSkeleton;
