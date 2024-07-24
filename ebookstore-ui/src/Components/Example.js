import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div>
      <div class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/531/243/non_2x/retro-big-library-illustration-ai-generative-free-photo.jpg"
          alt=""
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 class="sm:text-4xl text-2xl font-bold mb-6">
            Explore the World of Books
          </h2>
          <p class="text-lg text-center text-gray-200">
            Unlock the Door to Infinite Worlds: Explore, Imagine, and Escape
            with Us!
          </p>
          <a
            href="/booklist"
            class="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
}
