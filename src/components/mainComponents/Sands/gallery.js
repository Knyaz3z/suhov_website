const gallery =
    [
        {
            id: 1,
            items: Array.from({ length: 4 }, (_, i) => ({
                id: i+1,
                src: `/gallery/event1/gallery_photo_${i+1}.png`,
                alt: `Memory photo ${i+1}`
            }))
        },
        {
            id: 2,
            items: Array.from({ length: 3 }, (_, i) => ({
                id: i+1,
                src: `/gallery/event2/gallery_photo_${i+1}.png`,
                alt: `Memory photo ${i+1}`
            }))
        },
        {
            id: 3,
            items: Array.from({ length: 3 }, (_, i) => ({
                id: i+1,
                src: `/gallery/event3/gallery_photo_${i+1}.png`,
                alt: `Memory photo ${i+1}`
            }))
        },
    ]

export default gallery;