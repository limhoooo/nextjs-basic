import React from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>news page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-1">link 1</Link>
        </li>

        <li>
          <Link href="/news/nextjs-is-a-2">link 2</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
