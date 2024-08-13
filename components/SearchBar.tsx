"use client";

import { scrapeAndRestoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react";
const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;
    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.includes("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};

const SearchBar = () => {
  const [SearchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidLink = isValidAmazonProductURL(SearchPrompt);
    if (!isValidLink) alert("Please provide a valid amazon link");
    try {
      setisLoading(true);
      //scrape the product
      const product = await scrapeAndRestoreProduct(SearchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        value={SearchPrompt}
        onChange={(event) => setSearchPrompt(event.target.value)}
        type="text"
        placeholder="Enter Amazon Product Link"
        className="searchbar-input"
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={SearchPrompt === ""}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
