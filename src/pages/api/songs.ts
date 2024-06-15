import { NextApiRequest, NextApiResponse } from 'next';


const songs = [
    {
        id: 1,
        title: 'شب عشق',
        image: 'https://upmusics.com/wp-content/uploads/2024/06/Shabe-Eshgh-Cover.jpg',
        artist_name: 'بهنام بانی',
        album_name: 'آلبوم 1',
        status: 'به زودی...'
    },
    {
        id: 2,
        title: 'جون',
        image: 'https://upmusics.com/wp-content/uploads/2023/11/Screenshot-2023-11-02-185600.png',
        artist_name: 'مسیح و آرش',
        album_name: 'آلبوم 2'
    },
    {
        id: 3,
        title: 'شاخه نبات',
        image: 'https://upmusics.com/wp-content/uploads/2022/03/hre-1.jpg',
        artist_name: 'مسیح و آرش',
        album_name: 'آلبوم 3'
    },
    {
        id: 4,
        title: 'هر جا که باشی',
        image: 'https://upmusics.com/wp-content/uploads/2017/07/Emo-Band-Harja-Ke-Bashi.jpg',
        artist_name: 'امو بند',
        album_name: 'آلبوم 4',
        status: 'به زودی...'
    },
    {
        id: 5,
        title: 'دختر شیرازی',
        image: 'https://upmusics.com/wp-content/uploads/2020/04/jy.jpg',
        artist_name: 'امید حاجیلی',
        album_name: 'آلبوم 5'
    },
    {
        id: 6,
        title: 'دلم میخواد',
        image: 'https://upmusics.com/wp-content/uploads/2022/04/Emo-Band-Delam-Mikhad.jpg',
        artist_name: 'امو بند',
        album_name: 'آلبوم 6',
        status: 'به زودی...'
    },
    {
        id: 7,
        title: 'پریزاد',
        image: 'https://upmusics.com/wp-content/uploads/2020/02/Omid-Hajili-Parizad-300x300-1.jpg',
        artist_name: 'امید حاجیلی',
        album_name: 'آلبوم 7'
    },
    {
        id: 8,
        title: 'یار یار',
        image: 'https://upmusics.com/wp-content/uploads/2018/03/Omid-Hajili-Yar-Yar.jpg',
        artist_name: 'امید حاجیلی',
        album_name: 'آلبوم 8'
    },
    {
        id: 9,
        title: 'بخواب دنیا',
        image: 'https://upmusics.com/wp-content/uploads/2019/02/jahani.jpg',
        artist_name: 'مهدی جهانی',
        album_name: 'آلبوم 9',
        status: 'به زودی...'
    },
    {
        id: 10,
        title: 'خوشگل',
        image: 'https://upmusics.com/wp-content/uploads/2022/04/Mohammad-Lotfi-Khoshgel.jpg',
        artist_name: 'محمد لطفی',
        album_name: 'آلبوم 10'
    },
];


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(songs);
}