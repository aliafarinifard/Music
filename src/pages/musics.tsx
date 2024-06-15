
// ** Next
import Link from "next/link"

// ** Components
import Container from "@/components/Container";
import MusicList from "@/components/music/MusicList"
import { FaChevronLeft } from "react-icons/fa6";

const musics = () => {
    return (
        <Container>
            <div className="flex flex-col gap-5 pt-4 pb-10 __className_f0d1a5">
                <div
                    className="flex items-center justify-center"
                >
                    <Link
                        href={'/'}
                    >
                        <div
                            className="w-[2.5rem] h-[2.5rem] border-[1px] border-gray-200 bg-[#f7f7f7] rounded-full flex items-center justify-center shadow-md"
                        >
                            <FaChevronLeft size={20} />
                        </div>
                    </Link>

                    <div className="w-full h-[1px] bg-gray-200" />
                </div>

                <MusicList />

            </div>
        </Container>
    )
}

export default musics