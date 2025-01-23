import keywordsData from "@/data/keywords.json";
import Link from "next/link";
import Image from "next/image";

// Define the type for the JSON data
type KeywordData = {
  [key: string]: {
    title: string;
    content: string | string[];
  };
};

// Type the JSON data
const typedKeywordsData = keywordsData as KeywordData;

type PageProps = {
  params: Promise<{ slug: string }>; // params must now be a Promise
};

export default async function KeywordPage({ params }: PageProps) {
  // Await the params object to resolve
  const { slug } = await params;

  // Fetch the content for the given slug
  const content = typedKeywordsData[slug] || {
    title: "Not Found",
    content: "The requested keyword does not exist.",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-black py-4 flex justify-center">
        <Link href="/keywords">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col justify-center items-center flex-grow px-8">
        <div className="max-w-screen-md w-full">
          <h1 className="text-3xl font-bold mb-6 mt-12">{content.title}</h1>
          {/* Render content. If it's an array, map over it */}
          {Array.isArray(content.content) ? (
            content.content.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed mb-4">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-lg leading-relaxed">{content.content}</p>
          )}
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  // Retrieve all the slugs from your JSON file
  const slugs = Object.keys(keywordsData); // Assume `keywordsData` is your JSON
  return slugs.map((slug) => ({ slug }));
}
