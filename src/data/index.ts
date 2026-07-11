import { convertMatchStatus } from "src/utils";
import { EUROPE_CUP_2024_LIST } from "./europe_cup_2024";
import { AMERICA_CUP_2024_LIST } from "./america_cup_2024";
import { WORLD_CUP_2026_LIST } from "./world_cup_2026";
import { EUROPE_CUP_LIVES } from "./lives";

export const EUROPE_CUP_LIST = {
    2024: EUROPE_CUP_2024_LIST.map((item) => ({
        ...item,
        status: convertMatchStatus(item.time),
        lives: EUROPE_CUP_LIVES,
    })),
};

export const AMERICA_CUP_LIST = {
    2024: AMERICA_CUP_2024_LIST.map((item) => ({
        ...item,
        status: convertMatchStatus(item.time),
        lives: EUROPE_CUP_LIVES,
    })),
};

export const WORLD_CUP_LIST = {
    2026: WORLD_CUP_2026_LIST.map((item) => ({
        ...item,
        status: convertMatchStatus(item.time),
        lives: EUROPE_CUP_LIVES,
    })),
};
