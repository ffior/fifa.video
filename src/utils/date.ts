import dayjs from "dayjs";
import { MatchStatus } from "src/types";

export const convertMatchStatus = (time: string) => {
    const dayTime = dayjs(time);
    let result = MatchStatus.unStarted;

    if (dayTime.isAfter(dayjs())) {
        result = MatchStatus.unStarted;
    } else if (
        dayTime.isBefore(dayjs()) &&
        dayTime.add(2.5, "hour").isAfter(dayjs())
    ) {
        result = MatchStatus.inprogress;
    } else if (
        dayTime.add(30, "minute").isBefore(dayjs()) &&
        dayTime.add(1, "hour").isAfter(dayjs())
    ) {
        result = MatchStatus.finish;
    } else {
        result = MatchStatus.history;
    }

    return result;
};
