import Social from "./Social";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { buttonVariants } from "./ui/button";
import MeImg from "/public/me.jpg";
import Link from "next/link";

export default function Me() {
  return (
    <section className="py-5 flex sm:items-center h-full">
      <div className="container max-w-screen-lg mx-auto px-5">
        <div>
          <div className="flex flex-col items-center mb-5 gap-3 sm:gap-6 sm:flex-row">
            <Avatar className="w-[100px] h-[100px] aspect-square object-cover sm:w-[170px] sm:h-[170px] sm:shadow-sm animate-slide-top">
              <AvatarImage src={MeImg.src} alt="Hasanboy Qodirov" />
              <AvatarFallback className="text-5xl">A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-center items-center sm:text-left sm:items-start animate-slide-top delay-300">
              <h2 className="text-2xl font-medium mb-1 sm:text-4xl">
              Hasanboy Qodirov
              </h2>
              <p className="text-slate-500 text-lg font-medium mb-2 sm:text-2xl">
                Frontend dasturchi
              </p>
              <Social />
            </div>
          </div>
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start sm:max-w-96">
            <p className="mb-5 sm:text-lg animate-slide-top delay-600">
              Yillar davomida tinchlik bermagan{" "}
              <span className="underline font-medium">muammoni</span> atiga bir
              necha qator kod bilan{" "}
              <span className="underline font-medium">hal qilishimga</span>{" "}
              ishonasizmi?
            </p>
            <div className="flex gap-5">
              <Link
                className={`${buttonVariants({
                  variant: "default",
                })} animate-slide-top delay-900`}
                href="/projects/"
              >
                Yechimlar
              </Link>
              <a
                className={`${buttonVariants({
                  variant: "outline",
                })} animate-slide-top delay-1200`}
                target="_blank"
                href="https://t.me/hasanboy_vlog"
              >
                Haqimda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
