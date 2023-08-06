import React, { useContext, useState } from "react";
import NoteCard from "../../components/NoteCard";
import NoteModal from "../../components/NoteModal";
import { Button } from "flowbite-react";
import { AuthContext } from "../../context/AuthProvider";

const Dashboard = () => {
    const [openModal, setOpenModal] = useState("");
    const {user}=useContext(AuthContext)
  const props = { openModal, setOpenModal,user };
  return (
    <div className="space-x-8 space-y-8 mt-12 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg mx-auto">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div>
        
<h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3>
<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Driver License </label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">State ID</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="horizontal-list-radio-millitary" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">US Millitary</label>
        </div>
    </li>
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="horizontal-list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">US Passport</label>
        </div>
    </li>
</ul>

      </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
        </div>
        

        <div className="fixed bottom-10 right-10 text-3xl">
        <Button onClick={() =>setOpenModal('default')} className="bg-red-500 hover:bg-red-600 text-6xl"><span className="text-3xl">+</span></Button>
        </div>
        <NoteModal props={props}></NoteModal>
    </div>
  );
};

export default Dashboard;
