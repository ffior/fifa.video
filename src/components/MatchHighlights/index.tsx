import { FC, CSSProperties } from "react";
import { Space } from "antd";
import { Video, Card } from "@/components";

import styles from "./style.module.less";

export interface MatchHighlightsProps {
  data: any[];
  title: string;
  style?: CSSProperties;
}

const MatchHighlights: FC<MatchHighlightsProps> = ({
  style = {},
  title,
  data,
}) => {
  // const navigate = useNavigate();÷

  return (
    <Card title={title} style={style}>
      <div className={styles.highlights}>
        {(data || []).map((item) => (
          <div className={styles.item} key={item.value}>
            <Space className={styles.info}>
              <span className={styles.time}>{item.time}</span>
              <Space size={8}>
                <span className={styles.team}>{item.homeTeam}</span>
                <span className={styles.separator}>VS</span>
                <span className={styles.team}>{item.guestTeam}</span>
              </Space>
            </Space>
            <Video
              key={item.value}
              {...{
                matchId: item.value,
                matchType: item.type,
                matchTime: item.time,
                homeTeam: item.homeTeam,
                guestTeam: item.guestTeam,
                videoUrl: item.videoUrl,
                nextUrl: item.url,
                poster: item.poster,
              }}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MatchHighlights;
