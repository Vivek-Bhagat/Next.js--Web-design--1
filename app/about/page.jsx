import React from "react";

function page() {
  return (
    <div>
      <h1 className="items-center">About page</h1>
      <p className="text-center max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, debitis
        eveniet! Eius excepturi aliquam voluptatum, pariatur cumque laudantium
        asperiores ipsum enim expedita minus consequuntur voluptatem vitae,
        rerum dolores nulla quae inventore atque cum, vero deleniti est. Nulla
        ratione optio sed porro quo quis dolorem odio consequuntur, minus soluta
        tempora! Voluptate!
      </p>
      <button className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        <a href="/">Go back</a>
      </button>
    </div>
  );
}

export default page;
