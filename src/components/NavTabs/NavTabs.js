import React, {useState} from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import UpdateIcon from '@material-ui/icons/Update';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import {
    useGmailTabsStyles,
    useGmailTabItemStyles,
} from '@mui-treasury/styles/tabs';

const NavTabs = () => {
    const indicatorColors = ['#e91e63', '#d50000', '#3f51b5', '#2196f3'];
    const [tabIndex, setTabIndex] = React.useState(0);
    const tabsStyles = useGmailTabsStyles({ indicatorColors });
    const tabItem1Styles = useGmailTabItemStyles({ color: indicatorColors[0] });
    const tabItem2Styles = useGmailTabItemStyles({ color: indicatorColors[1] });
    const tabItem3Styles = useGmailTabItemStyles({ color: indicatorColors[2] });
    const tabItem4Styles = useGmailTabItemStyles({ color: indicatorColors[3] });
    return (
        <Tabs
            classes={tabsStyles}
            value={tabIndex}
            onChange={(e, index) => setTabIndex(index)}
            TabIndicatorProps={{
                children: <div className={`MuiIndicator-${tabIndex}`} />,
            }}
        >
            <Tab
                classes={tabItem1Styles}
                disableTouchRipple
                label={
                    <div className={'MuiTabItem-labelGroup'}>
                        <div className={'MuiTabItem-label'}>
                            Books <span className={'MuiTabItem-tag'}>2 new</span>
                        </div>
                        <div className={'MuiTabItem-subLabel'}>Books, Posts, Papers, ...</div>
                    </div>
                }
                icon={<LibraryBooksIcon />}
            />
            <Tab
                classes={tabItem2Styles}
                disableTouchRipple
                label={
                    <div className={'MuiTabItem-labelGroup'}>
                        <div className={'MuiTabItem-label'}>
                            Videos
                        </div>
                        <div className={'MuiTabItem-subLabel'}>Youtube, MOOC, ...</div>
                    </div>
                }
                icon={<VideoLibraryIcon />}
            />
            <Tab
                classes={tabItem3Styles}
                disableTouchRipple
                label={
                    <div className={'MuiTabItem-labelGroup'}>
                        <div className={'MuiTabItem-label'}>
                            Playlists <span className={'MuiTabItem-tag'}>15 new</span>
                        </div>
                        <div className={'MuiTabItem-subLabel'}>Trending Resources</div>
                    </div>
                }
                icon={<WhatshotIcon />}
            />

            <Tab
                classes={tabItem4Styles}
                disableTouchRipple
                label={
                    <div className={'MuiTabItem-labelGroup'}>
                        <div className={'MuiTabItem-label'}>
                            Updates
                        </div>
                        <div className={'MuiTabItem-subLabel'}>Latest Resources</div>
                    </div>
                }
                icon={<UpdateIcon />}
            />
        </Tabs>
    );
};

export default NavTabs;