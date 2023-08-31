import React, { useState } from 'react';
import { Popover, MenuItem, IconButton, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HistoryIcon from '@mui/icons-material/History';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import LanguageToggle from './LanguageToggle';
import { createTheme, ThemeProvider } from '@mui/material';
import useStyles from './DropdownMenuStyles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#007bff',
        },
    },
});


interface MyMenuProps {
    toggleHistory: () => void;
}

const MyMenu: React.FC<MyMenuProps> = ({ toggleHistory }) => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [isHistoryOpen, setIsHistoryOpen] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    const toggleHistoryPanel = () => {
        setIsHistoryOpen(!isHistoryOpen);
        toggleHistory();
        setTimeout(handleClose, 700);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={classes.button}
                >
                    <MenuIcon className={classes.menuIcon}/>
                </IconButton>

                <Popover
                    className={classes.popover} 
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem className={classes.languageBtn}>
                        <Box className={classes.historyButton}>
                            <Button onClick={toggleHistoryPanel} startIcon={<HistoryIcon className={classes.historyIcon} />}>
                                {isHistoryOpen ? t("closeHistory") : t("openHistory")}
                            </Button>
                        </Box>
                        <Box>
                            <LanguageToggle/>
                        </Box>
                    </MenuItem>
                </Popover>
            </div>
        </ThemeProvider>
    );
};

export default MyMenu;
