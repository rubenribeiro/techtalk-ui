import React, {useEffect, useState, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';

import userAvatar from '../../images/user.png';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

export const UserProfiles = ({user}) => {
  const styles = useStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  const [localUser, setLocalUser] = useState({});

  useEffect(() => {
    setLocalUser(user);
  }, [user]);

  return (
    <Card className={styles.card}>
      <CardActionArea component={RouterLink} to={`/profile/${localUser && localUser._id}`}>
          <CardContent>
            <Avatar className={styles.avatar} src={userAvatar} />
            <h3 className={styles.heading}>{localUser && localUser.firstName} {localUser && localUser.lastName}</h3>
            <span className={styles.subheader}>{localUser && localUser.occupation}</span>
          </CardContent>
          <Divider light />
          <Box display={'flex'}>
            <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
              <p className={styles.statLabel}>Upvotes</p>
              <p className={styles.statValue}>420</p>
            </Box>
            <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
              <p className={styles.statLabel}>Playlists</p>
              <p className={styles.statValue}>96</p>
            </Box>
          </Box>
    </CardActionArea>
    </Card>
  )
}

export default UserProfiles;

