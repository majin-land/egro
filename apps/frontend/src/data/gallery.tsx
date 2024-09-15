//TODO: Plug in to data source

export const gallery = [
    {
        id: 1,
        image: "/img/gallery/1.webp",
        date: "10/9/2024",
    },
    {
        id: 2,
        image: "/img/gallery/2.webp",
        date: "4/9/2024",
    },
    {
        id: 3,
        image: "/img/gallery/3.webp",
        date: "1/9/2024",
    },
];

export const galleryDataMap: { [key: string]: any } = gallery.reduce(
    (map, gallery) => {
        map[gallery.id] = gallery;
        return map;
    },
    {} as { [key: string]: any }
);
