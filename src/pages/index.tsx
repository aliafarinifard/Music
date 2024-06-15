// ** Next
// import { Poppins } from "next/font/google";
import Link from "next/link";

// ** Components
import Container from "@/components/Container";


// const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] });

export default function Home() {
  return (
    <div className={`flex items-center justify-center w-screen h-screen`}>
      <Container>
        <div
          className="flex flex-col gap-4 items-center justify-center"
        >
          <h1 className='text-2xl'>
            Hi everyone...
          </h1>
          <Link
            href={'/musics'}
            className=" border-[1px] border-gray-500 w-48 h-48 flex items-center justify-center rounded-full font-[500] bg-[#eb9834] text-3xl shadow-lg transition-all hover:bg-[#252525] hover:text-white hover:shadow-2xl"
          >
            موزیک
          </Link>
        </div>
      </Container >
    </div>
  );
}
