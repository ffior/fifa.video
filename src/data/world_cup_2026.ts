import dayjs from "dayjs";

const type = "世界杯";
const typeEn = "world-cup";
const year = 2026;
const getUrl = (matchId) => `/${typeEn}/${year}/${matchId}`; // "/world-cup/2026/202607110300_spain_vs_belgium",

export const _WORLD_CUP_2026_LIST = [
    {
        homeTeam: "法国",
        homeTeamEn: "france",
        guestTeam: "摩洛哥",
        guestTeamEn: "morocco",
        time: "2026-07-10 04:00",
        videoUrl:
            "http://r.com/mp4/world_cpu_2026/202607100400_france_vs_morocco/playlist.m3u8",
        poster: "http://r.com/jpg/bob-brewer-unsplash-1.jpg",
    },
    {
        homeTeam: "西班牙",
        homeTeamEn: "spain",
        guestTeam: "比利时",
        guestTeamEn: "belgium",
        time: "2026-07-11 03:00",
        videoUrl:
            "http://r.com/mp4/world_cpu_2026/202607110300_spain_vs_belgium/playlist.m3u8",
        poster: "http://r.com/jpg/bob-brewer-unsplash-1.jpg",
    },
];

export const WORLD_CUP_2026_LIST = _WORLD_CUP_2026_LIST.map((item) => {
    const value = `${dayjs(item.time).format("YYYYMMDDHHmm")}_${item.homeTeamEn}_vs_${item.guestTeamEn}`;
    return {
        ...item,
        value,
        type,
        url: getUrl(value),
    };
});
