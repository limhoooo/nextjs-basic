import React, { useEffect } from "react";
import Link from "next/link";

const NewsPage = () => {
  useEffect(async () => {
    console.log("aaaa");
    const aaa = await fetch("https://api.github.com//users/limhoooo/repos");
    console.log(aaa);
  }, []);
  return (
    <>
      <h1>news paasdvasdvsadge</h1>
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
