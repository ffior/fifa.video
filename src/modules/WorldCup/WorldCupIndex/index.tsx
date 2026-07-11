import { MatchStatus } from "@/types";
import { MatchTable, MatchList, MatchHighlights } from "@/components";
import { WORLD_CUP_LIST } from "@/data";

const WORLD_CUP_2026_LIST = WORLD_CUP_LIST[2026];

const WorldCupIndex = () => {
    console.log("WorldCupIndex", WORLD_CUP_2026_LIST);
    return (
        <div>
            <MatchTable
                {...{
                    title: "比赛直播",
                    data: WORLD_CUP_2026_LIST.filter((item) =>
                        [
                            MatchStatus.unStarted,
                            MatchStatus.inprogress,
                        ].includes(item.status),
                    ),
                    style: {
                        marginBottom: "16px",
                    },
                }}
            />
            <MatchList
                {...{
                    title: "比赛回放",
                    data: WORLD_CUP_2026_LIST.filter((item) =>
                        [MatchStatus.finish].includes(item.status),
                    ),
                    style: {
                        marginBottom: "16px",
                    },
                }}
            />
            <MatchHighlights
                {...{
                    title: "历史集锦",
                    data: WORLD_CUP_2026_LIST.filter((item) =>
                        [MatchStatus.history].includes(item.status),
                    ),
                    style: {
                        marginBottom: "16px",
                    },
                }}
            />
        </div>
    );
};

export default WorldCupIndex;
