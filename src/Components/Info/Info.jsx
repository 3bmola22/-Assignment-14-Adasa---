import React from "react";
import { useParams } from "react-router-dom";

export default function Info({ limitedPosts }) {
  let { slug } = useParams();
  let current = limitedPosts.find((post) => post.slug === slug);
  console.log();

  return (
    <>
      <p className="m-0">{current.readTime}</p>
      <h1>{current.title}</h1>

      <h3 className="h1">التضنيف : {current.category}</h3>
      <h4 className="h1">الاسم : {current.author.name}</h4>
      <img src={current.image} alt={current.title} />
    </>
  );
}

// import React from "react";
// import { useParams } from "react-router-dom";
// // import { useParams } from "react-router-dom";

// export default function Info({ limitedPosts }) {
//   let { slug } = useParams();
//   let current = limitedPosts.find((dah) => dah.slug === slug);
//   return (
//     <>
//       <h1>{current.title}</h1>
//     </>
//   );
// }
