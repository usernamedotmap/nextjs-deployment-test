import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-70 bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Bakit bakit bakit bakit bakit bakit bakit TIKYANG</h1>
            <p className="p-regular-20 md:p-regular-24">oo nna bakit ba ako laging nag iisa alipin mo ako kahit ako'y di mo  gustorsldfjakdl;fjakljsdfkjad oo nga kasi bai</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image src="/images/collage.jpg" alt="collage" width={900} height={900} className="max-h-[70vh] object-contain object-center 2xl:max-h-[50] "/>


        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
    <h2 className="h2-bold">Mahal mo?<br />Mahal ako?</h2>

    <div className="flex w-full flex-col gap-5 md:flex-row">
      Search
      CategoryFilter
    </div>
      </section>
    </>
  )

}
