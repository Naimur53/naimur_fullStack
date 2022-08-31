import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import SavedSearchOutlinedIcon from '@mui/icons-material/SavedSearchOutlined';
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import Avatar from "@mui/material/Avatar";
import { Outlet } from "react-router-dom";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';



const drawerWidth = 260
const Dashboard = (props) => {
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const goHome = () => {
        navigate("/home")
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const activeStyle = ({ isActive }) => {
        return {
            borderRight: isActive ? "4px solid #00a1ba" : "4px solid transparent",
            backgroundColor: isActive ? "#f4f5f8" : 'white'
        };
    }
    const drawer = (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 2,
                }}
            >
                <Avatar
                    sx={{ width: 70, height: 70 }}
                    src={'https://naimurrhman.com/images/sadi.png'}
                    alt='admin img'
                />
                <Typography variant="h6" gutterBottom mt={1}>
                    Naimur Rahman
                </Typography>
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
                <NavLink style={{ textDecoration: "none", color: "gray" }} to="/home">
                    <Button color="inherit">Home</Button>
                </NavLink>
            </Box>
            <Divider />
            <List>
                <ListItem
                    component={NavLink}
                    to={`/dashboard/overview`}
                    button
                    style={activeStyle}
                >
                    <ListItemIcon>
                        <ManageSearchIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Over view"} />
                </ListItem>
                {/* Service Provider Overview */}


                <ListItem
                    component={NavLink}
                    to={`/dashboard/manage-banner`}
                    button
                    style={activeStyle}
                >
                    <ListItemIcon>
                        <RateReviewIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Manage Banner"} />
                </ListItem>
                <ListItem
                    component={NavLink}
                    to={`/dashboard/add-wallet`}
                    button
                    style={activeStyle}
                >
                    <ListItemIcon>
                        <RateReviewIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Add Wallet"} />
                </ListItem>
                <ListItem
                    component={NavLink}
                    to={`/dashboard/manage-wallets`}
                    button
                    style={activeStyle}
                >
                    <ListItemIcon>
                        <RateReviewIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Manage Wallets"} />
                </ListItem>
            </List>
            <Divider />
        </>
    );
    const container =
        window !== undefined ? () => window().document.body : undefined;
    const navStyle = {
        backgroundColor: "white",
        color: "black",
        boxShadow:
            " 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    };
    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                style={navStyle}
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <img src="/images/Logo.png" alt="logo" />
                    </Box>
                    <Typography sx={{ display: { xs: "none", md: "block" } }}>
                        <NavLink
                            style={{ textDecoration: "none", color: "gray" }}
                            to="/home"
                        >
                            <Button color="inherit">Home</Button>
                        </NavLink>
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 1,
                    mt: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Outlet></Outlet>
            </Box>
        </Box>
    );
};


export default Dashboard;