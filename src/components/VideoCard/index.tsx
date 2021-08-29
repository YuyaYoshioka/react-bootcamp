import { Avatar, Card, CardHeader, CardMedia } from "@material-ui/core";
import { HeaderTitle } from "./HeaderTitle";
import { SubHeaderContent } from "./SubHeaderContent";
import useStyles from "./style";

export const VideoCard = () => {
  const styles = useStyles();

  return (
    <Card className={styles.root} elevation={0} square>
      <CardMedia
        className={styles.media}
        image="/static/no-image.jpg"
        title="Thumbnail"
      />
      <CardHeader
        className={styles.header}
        avatar={<Avatar />}
        title={<HeaderTitle />}
        subheader={<SubHeaderContent />}
      />
    </Card>
  );
};
