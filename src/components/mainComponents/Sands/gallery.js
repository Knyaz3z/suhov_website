const gallery = [
    {
        id: 1,
        items: Array.from({ length: 20 }, (_, i) => ({
            id: `1-${i+1}`, // префикс id галереи
            src: `/gallery/event1/gallery_photo_${i+1}.webp`,
            alt: `Memory photo ${i+1}`
        }))
    },
    {
        id: 2,
        items: Array.from({ length: 20 }, (_, i) => ({
            id: `2-${i+1}`,
            src: `/gallery/event2/gallery_photo_${i+1}.webp`,
            alt: `Memory photo ${i+1}`
        }))
    },
    {
        id: 3,
        items: Array.from({ length: 20 }, (_, i) => ({
            id: `3-${i+1}`,
            src: `/gallery/event3/gallery_photo_${i+1}.webp`,
            alt: `Memory photo ${i+1}`
        }))
    },
]


export default gallery