import { useEffect } from "react";

// ** redux hook
import { useAppSelector, useAppDispatch } from "@/app/hooks/index";

// ** Features
import { useGetMusicQuery } from "@/features/music/apiSlice";
import { setSearchTerm, setMusic, selectSearchTerm, selectFilteredSongs } from "@/features/music/musicSlice";

// ** Next
import Image from "next/image";
import Link from "next/link";

// ** Icons
import { HiChevronDoubleLeft } from "react-icons/hi";
import Spinner from "../Spinner";


const MusicList = () => {

    const { data: songsData, error, isLoading } = useGetMusicQuery();
    const searchTerm = useAppSelector(selectSearchTerm);
    const filteredSongs = useAppSelector(selectFilteredSongs);
    const dispatch = useAppDispatch();


    useEffect(() => {
        if (songsData) {
            dispatch(setMusic(songsData));
        }
    }, [songsData, dispatch]);


    if (isLoading) return (
        <div className="flex justify-center my-3">
            <Spinner size={40} />
        </div>
    );
    if (error) return <div>Error...</div>;


    return (
        <div
            className="flex flex-col gap-6"
        >

            <div
                className="flex items-center justify-between 2xs:flex-col 2xs:gap-4"
            >
                <div className="2xs:w-full">
                    <h1
                        className={`font-bold text-2xl uppercase`}
                    >
                        Top 10 Music
                    </h1>
                </div>

                <div className="2xs:w-full 2xs:flex 2xs:justify-center">
                    <input
                        type="text"
                        placeholder="جستجو آهنگ..."
                        value={searchTerm}
                        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                        dir="rtl"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-80 xs:w-52 2xs:w-full"
                    />
                </div>
            </div>

            <div
                className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2"
            >

                {filteredSongs.map((song) => (
                    <div
                        key={song.id}
                        className="relative border-[1px] border-[#f2f2f2] p-6 rounded-lg bg-[#f2f2f2]"
                    >
                        <div
                            className="aspect-square relative w-full"
                        >
                            <Image src={song.image} alt={song.title} fill priority sizes="(min-width: 600px) w-full" className="w-full h-full object-contain rounded-lg overflow-hidden" />
                        </div>

                        <div className="text-main mb-12 mt-3 flex flex-col gap-3" dir="rtl">
                            <h2>
                                <span>نام آهنگ : </span>
                                <span className="font-bold">{song.title}</span>
                            </h2>
                            <p>
                                <span>خواننده : </span>
                                <span className="font-bold">{song.artist_name}</span>
                            </p>
                            <p>
                                <span>آلبوم : </span>
                                <span className="font-bold">{song.album_name}</span>
                            </p>
                        </div>

                        {song.status && (
                            <div
                                className="absolute left-3 -top-4 bg-darkBlue px-2 py-1 rounded-full text-white"
                            >
                                <span dir="rtl">{song.status}</span>
                            </div>
                        )}

                        <div
                            className="w-full bg-darkBlue absolute bottom-0 left-0 px-1 py-3 flex items-center justify-center text-white text-md overflow-hidden rounded-b-lg"
                        >
                            <Link
                                href={'/musics'}
                                className="flex items-center justify-center gap-1"
                            >
                                <span><HiChevronDoubleLeft size={25} /></span>
                                <span>دانلود آهنگ {song.artist_name} {song.title}</span>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default MusicList