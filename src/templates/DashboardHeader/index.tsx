import { 
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Logo } from "../../components/Logo";
import { SearchBar } from "./SearchBar";
import useStyles from "./style";
import { useUserByIdQuery } from "../../utils/graphql/generated";

export const DashboardHeader = () => {
  const styles = useStyles();

  const { data } = useUserByIdQuery({
    variables: { id: "testid" },
  });

  return (
    <AppBar elevation={0} color="inherit">
      <Toolbar className={styles.between}>
        <div className={styles.flex}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>

        <SearchBar />

        <div className={styles.flex}>
          <IconButton>
            <Typography>{data?.users_by_pk?.name}</Typography>
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton className={styles.profileIcon}>
            <Avatar />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
