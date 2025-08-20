import { buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";

const projectList = [
  {
    title: "Yaqin Kunlarda.",
    href: "https://",
    description: "",
  },
  {
    title: "Yaqin Kunlarda..",
    href: "https://",
    description: "",
  },
  {
    title: "Yaqin Kunlarda...",
    href: "https://",
    description: "",
  },
  {
    title: "Yaqin Kunlarda....",
    href: "https://",
    description: "",
  },
];

export default function page() {
  return (
    <div className="py-10">
      <div className="container max-w-screen-lg mx-auto px-5">
        <ul className="flex flex-col gap-10">
          {projectList.map(({ description, href, title }) => {
            return (
              <li key={title}>
                <h3 className="font-medium text-xl mb-3">{title}</h3>
                <p className="mb-4">{description}</p>
                <a
                  className={buttonVariants({ variant: "secondary" })}
                  href={href}
                  target="_blank"
                >
                  <Link />
                  Ko'rish
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
