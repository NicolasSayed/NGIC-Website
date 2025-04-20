import { Metadata } from "next";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Files",
  description: "Download project files and documentation.",
};

const files = [
  {
    name: "Project Overview Document",
    href: "/downloads/project-overview.docx",
    size: "30 KB",
  },
  {
    name: "Divide and Conquer Document",
    href: "/downloads/Divide-and-Conquer.docx",
    size: "981 KB",
  },
  {
    name: "Divide & Conquer Document Revision",
    href: "/downloads/divide-and-conquer-revised.pdf",
    size: "1.7 MB",
  },
  {
    name: "90 Page Document",
    href: "/downloads/90page.pdf",
    size: "1.7 MB"
  },
  {
    name: "SD1 Final Report",
    href: "/downloads/SD1-Final-Report.pdf",
    size: "5.89 MB"
  },
  {
    name: "8 Page Conference Paper",
    href: "/downloads/RAPID-X-8-Page-Conference.pdf",
    size: "2.35 MB"
  },
  {
    name: "SD2 Final Report",
    href: "/downloads/SD2-Final-Report.pdf",
    size: "-"
  },
  {
    name: "CDR Presentation Slide",
    href: "/downloads/RAPIDX-CDR.pptx",
    size: "23.1 MB"
  },{
    name: "Final Presentation Slide",
    href: "/downloads/RAPIDX-Final-Presentation.pptx",
    size: "22.9 MB"
  },
];

export default function FilesPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Files</h1>
      <p className="text-muted-foreground mb-8">
        Browse and download files, documentation, and other resources.
      </p>

      <ul className="space-y-4">
        {files.map((file) => (
          <li
            key={file.href}
            className="flex items-center justify-between border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div>
              <h3 className="font-medium">{file.name}</h3>
              <p className="text-sm text-muted-foreground">{file.size}</p>
            </div>
            <Button variant="outline" asChild>
            <a href={file.href} download>
                <DownloadIcon className="w-4 h-4 mr-2" />
                Download
            </a>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
