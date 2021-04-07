import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';
import {
    makeStyles,
} from '@material-ui/core/styles';

import { ColumnToRow, Item } from '@mui-treasury/components/flex';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import {
    CategoryProvider,
    CategoryTitle,
    CategoryItem,
} from '@mui-treasury/components/menu/category';
import {
    SocialProvider,
    SocialLink,
} from '@mui-treasury/components/socialLink';

import { useMagCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/mag';
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof';
import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(({ palette, typography }) => ({
    top: {
        backgroundSize: 'cover',
        overflow: 'hidden',
    },
    middle: {
        backgroundColor: palette.action.hover,
    },
    bottom: {
        backgroundColor: '#bdbdbd',
    },
    newsletterText: {
        color: '#fff',
        fontSize: '0.875rem',
        textTransform: 'uppercase',
    },
    form: {
        margin: 0,
        minWidth: 343,
        fontSize: '0.875rem',
    },
    legalLink: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '0.75rem',
        justifyContent: 'center',
        color: palette.text.hint,
        letterSpacing: '0.5px',
    },
    divider: {
        height: 2,
        margin: '-1px 0',
    },
    info: {
        ...typography.caption,
        color: palette.text.hint,
        marginTop: 8,
    },
    footerIconButton: {
        height: 100,
        width: 100,
        marginLeft: 140,
        marginTop: 40
    },

    footerIconLogo: {
        height: 70,
        width: 70,
        opacity: 0.8
    },
}));

const Footer = React.memo(function ArcAppFooter() {
    const classes = useStyles();
    return (
            <Box width={'100%'}>
                <Box px={2} py={2} className={classes.middle}>
                    <Container disableGutters>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={4} lg={3}>
                               <IconButton
                                  edge="start"
                                  color="primary"
                                  aria-label="TechTalk Logo"
                                  className={classes.footerIconButton}
                               >
                                 <ForumTwoToneIcon className={classes.footerIconLogo} />
                               </IconButton>
                            </Grid>
                            <Grid item xs={12} md={8} lg={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} sm={4}>
                                        <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                                            <CategoryTitle>
                                                TechTalk
                                            </CategoryTitle>
                                            <CategoryItem>
                                                Discussions
                                            </CategoryItem>
                                            <CategoryItem>
                                                Playlists
                                            </CategoryItem>
                                            <CategoryItem>
                                                Technologies
                                            </CategoryItem>
                                        </CategoryProvider>
                                    </Grid>
                                    <Grid item xs={6} sm={4}>
                                        <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                                            <CategoryTitle>
                                                Information
                                            </CategoryTitle>
                                            <CategoryItem>
                                                Account
                                            </CategoryItem>
                                            <CategoryItem>
                                                Privacy Policy
                                            </CategoryItem>
                                            <CategoryItem>
                                                Credits
                                            </CategoryItem>
                                        </CategoryProvider>
                                    </Grid>
                                    <Grid item xs={6} sm={4}>
                                        <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                                            <CategoryTitle>
                                                About
                                            </CategoryTitle>
                                            <CategoryItem>
                                                Team
                                            </CategoryItem>
                                            <CategoryItem>
                                                FAQ
                                            </CategoryItem>
                                            <CategoryItem>
                                                Contact
                                            </CategoryItem>
                                        </CategoryProvider>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={8} lg={3} style={{ marginLeft: 'auto' }}>
                                <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                                    <CategoryTitle>
                                        Social Media
                                    </CategoryTitle>
                                </CategoryProvider>
                                <SocialProvider color="primary" useStyles={usePoofSocialLinkStyles}>
                                    <SocialLink brand={'LinkedIn'} />
                                    <SocialLink brand={'Twitter'} />
                                    <SocialLink brand={'Facebook'} />
                                </SocialProvider>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Container disableGutters>
                    <Divider className={classes.divider} />
                </Container>
                <Box px={2} py={1} className={classes.bottom}>
                    <Container disableGutters>
                        <ColumnToRow
                            at={'md'}
                            columnStyle={{ alignItems: 'center' }}
                            rowStyle={{ alignItems: 'unset' }}
                        >
                            <Item grow ml={-2} shrink={0}>
                                <NavMenu useStyles={usePlainNavigationMenuStyles}>
                                    <ColumnToRow at={'sm'}>
                                        <NavItem className={classes.legalLink}>
                                            Terms & Conditions
                                        </NavItem>
                                        <NavItem className={classes.legalLink}>
                                            Privacy Policy
                                        </NavItem>
                                        <NavItem className={classes.legalLink}>
                                            License
                                        </NavItem>
                                        <NavItem className={classes.legalLink}>
                                            FAQ
                                        </NavItem>
                                    </ColumnToRow>
                                </NavMenu>
                            </Item>
                            <Item>
                                <Box py={1} textAlign={{ xs: 'center', md: 'right' }}>
                                    <Typography
                                        component={'p'}
                                        variant={'caption'}
                                        color={'textSecondary'}
                                    >
                                        &#169; TechTalk 2021 All right
                                            reserved
                                    </Typography>
                                </Box>
                            </Item>
                        </ColumnToRow>
                    </Container>
                </Box>
            </Box>
    );
});

export default Footer;