import { Button, CardMedia, Grid, Typography } from "@material-ui/core";
import { useState, useRef, ChangeEvent, useEffect } from "react";
import useStyles from "./style";

export const VideoSelect = () => {
  const styles = useStyles();

  const [file, setFile] = useState<File>();
  const [videoUrl, setVideoUrl] = useState<string>();
  const [thumbnailUrls, setThumbnailUrls] = useState<string[]>([]);

  const createThumbnail = (videoRefUrl: string) => {
    const video = document.createElement("video");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    video.onloadeddata = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      video.currentTime = 0;
    };

    video.onseeked = () => {
      if (video.currentTime >= video.duration || !context) return;

      context.drawImage(video, 0, 0);
      setThumbnailUrls((prev) => [...prev, canvas.toDataURL("image/jpeg")]);
      video.currentTime += Math.ceil(video.duration / 3);
    };

    video.src = videoRefUrl;
    video.load();
  }

  const selectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      setFile(event.currentTarget.files[0]);
    }
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoUrl(URL.createObjectURL(file));
      createThumbnail(videoUrl);
    }
  }, [file]);

  return (
    <div className={styles.root}>
      {videoUrl && (
        <div className={styles.full}>
          <CardMedia component="video" src={videoUrl} controls/>
          <Typography className={styles.textPadding}>サムネイル</Typography>
          <Grid container spacing={2} className={styles.thumbnailContent}>
            {thumbnailUrls.map((url) => {
              return (
                <Grid item xs={4}>
                  <CardMedia image={url} style={{ paddingTop: "56.25%" }} />
                </Grid>
              );
            })}
          </Grid>
        </div>
        )
      }
      <input type="file" hidden ref={inputRef} onChange={selectedFile}/>
      {!videoUrl &&
        <Button onClick={handleClick} variant="contained" color="primary">
          ファイルを選択
        </Button>
      }
    </div>
  );
};
