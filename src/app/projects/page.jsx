import SoxtaEmailNotice from "@/components/SoxtaEmailNotice";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";

const projectList = [
  {
    title: "Unsplash Photos Clone.",
    href: "https://unsplash-photo-ten.vercel.app",
    description:
      "Foydalanuvchilar rasmlarni qidirishi, ko‘rishi va yuklashi mumkin bo‘lgan Unsplash kloni. React, Tailwind CSS, Framer Motion, Axios, Redux va MockAPI asosida qurilgan.",
  },
  {
    title: "Healthy Recipe Finder",
    href: "https://recipe-finderr-two.vercel.app",
    description:
      "Sog‘lom taom retseptlarini qidirish, ko‘rish va qo‘shish imkonini beruvchi React va Tailwind CSS, Framer Motion, Axios va MockAPI dasturi.",
  },
  {
    title: "YouTube Clone",
    href: "https://youtube-clone-iota-azure.vercel.app",
    description: "YouTube’ga o‘xshash video platforma.",
  },
  {
    title: "Telegram Clone",
    href: "https://telegram-clone-psi-bay.vercel.app",
    description:
      "Telegram ilovasining frontend ko‘rinishi. Next.js, TypeScript, Shadcn UI va Tailwind CSS yordamida yaratilgan.",
  },
  {
    title: "Wildberries Clone",
    href: "https://wildberries-uz.netlify.app",
    description: "Wildberries uslubidagi onlayn do‘kon frontend loyihasi.",
  },
];

export default function page() {
  return (
    <div className="">
      <SoxtaEmailNotice />
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
    </div>
  );
}
