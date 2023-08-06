import { Button } from "flowbite-react";
import React from "react";

const NoteCard = () => {
  return (
    <Button
      href="#"
      className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
     <div className="flex flex-col">
     <h5 class="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p  class="font-normal text-left text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
     </div>
    </Button>
  );
};

export default NoteCard;
