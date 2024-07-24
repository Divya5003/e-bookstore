import React from "react";

const Teams = () => {
  return (
    <div>
      <div class="font-[sans-serif] text-[#333] mb-10">
        <div class="lg:max-w-5xl max-w-3xl mx-auto">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold">Genre</h2>
            <p class="text-sm mt-4 leading-relaxed">
              Discover Your Next Adventure: Dive into Our Diverse Genres!
            </p>
          </div>
          <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-x-8 gap-y-10 max-md:justify-center mt-12">
            <div class="border rounded-md overflow-hidden max-w-[280px]">
              <img
                src="https://miro.medium.com/v2/resize:fit:450/1*yv_lOCG6XhulaO9el_4l5Q.png"
                alt=""
                class="w-full h-56"
              />
              <div class="p-4">
                <h4 class="text-base font-extrabold">Science Fiction</h4>
              </div>
            </div>
            <div class="border rounded-md overflow-hidden max-w-[280px]">
              <img
                src="https://tooleybook.com/blog/wp-content/uploads/2019/11/choosing-your-fantasy-subgenre-large.jpg"
                class="w-full h-56"
                alt=""
              />
              <div class="p-4">
                <h4 class="text-base font-extrabold">Fantasy</h4>
              </div>
            </div>
            <div class="border rounded-md overflow-hidden max-w-[280px]">
              <img
                src="https://wallpapers.com/images/hd/myths-1211-x-908-wallpaper-xewxvce7v1qwramt.jpg"
                class="w-full h-56"
                alt=""
              />
              <div class="p-4">
                <h4 class="text-base font-extrabold">Mythology</h4>
              </div>
            </div>
            <div class="border rounded-md overflow-hidden max-w-[280px]">
              <img
                src="https://images-cdn.reedsy.com/discovery/post/6/featured_image/medium_af5644011c7fe293bc63eef0aff4d2862d3cb600.jpg"
                class="w-full h-56"
                alt=""
              />
              <div class="p-4">
                <h4 class="text-base font-extrabold">Mystery</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
