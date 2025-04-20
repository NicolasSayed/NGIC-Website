import { Metadata } from "next";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Videos",
  description: "Watch project-related videos and presentations.",
};

const videos = [
  {
    title: "CDR Presentation Video",
    url: "https://www.youtube.com/watch?v=uPL1IilmLbU",
  },
  {
    title: "Midterm Demonstration Video",
    url: "https://www.youtube.com/watch?v=VUBmQwyIcWc",
  },
  {
    title: "RAPID-X Showcase Video",
    url: "https://www.youtube.com/watch?v=ITqzLwlN0TM"
  },
  {
    title: "Final Presentation Video",
    url: "https://www.youtube.com/watch?v=QN7GJygdR4w"
  },
  {
    title: "Final Demonstration Video",
    url: "https://www.youtube.com/watch?v=DAT14cze0tg"
  }
];

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    return u.searchParams.get("v");
  } catch {
    return null;
  }
}

export default function VideosPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Videos</h1>
      <p className="text-muted-foreground mb-8">
        RAPID-X Presentation and Demo Videos
      </p>

      <div className="space-y-12">
        {videos.map((video) => {
          const videoId = getYouTubeId(video.url);
          return (
            <div key={video.url} className="space-y-3">
              <h2 className="text-xl font-semibold">{video.title}</h2>
              {videoId && (
                <div className="w-full h-[500px] rounded-lg overflow-hidden shadow">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <Link
                href={video.url}
                target="_blank"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Watch on YouTube <ExternalLinkIcon className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
