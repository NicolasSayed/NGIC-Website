import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-5xl font-bold mb-4 sm:text-7xl">
        RAPID-X <span className="text-primary">Core</span>{" "}
      </h1>
      <h1 className="text-3xl font-bold mb-4 sm:text-5xl">
      Digital ASIC Tapeout
      </h1>
      <p className="mb-8 sm:text-md max-w-[800px] text-muted-foreground">
      A comprehensive project implementing the RISC-V instruction set using state-of-the-art EDA tools.
      </p>
      <div>
        <Link
          href={`/docs/project`}
          className={buttonVariants({
            className: "px-6 !font-medium",
            size: "lg",
          })}
        >
          Read Docs
        </Link>
      </div>
    </div>
  );
}
