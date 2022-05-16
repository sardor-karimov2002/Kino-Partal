// import React from 'react';
// import { NavLink,Link } from 'react-router-dom';
// import "./Nav.css"
// const Nav = () => {
//   return (
//     <div className='menu'>
//       <Link to="/" className="logo">
//         <img className="menu__logo" src="https://iconape.com/wp-content/files/ce/246502/svg/246502.svg" alt="" />
//       </Link>
//       <ul className='menu__list'>
//         <li className='menu__item'>
//           <NavLink  className="menu__link" to="/">Home</NavLink>
//         </li>
//         <li className='menu__item'>
//           <NavLink className="menu__link" to="/Popular">Popular</NavLink>
//         </li>
//         <li className='menu__item'>
//           <NavLink className="menu__link" to="/up-coming">Up Coming</NavLink>
//         </li>
//       </ul>
//       <input className='menu__search' type="search" placeholder='search..' />
//     </div>
//   );
// }

// export default Nav;
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { TextField } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useNavigate} from 'react-router-dom';
import { padding } from '@mui/system';
import { useEffect } from 'react';
import "./Nav.css"
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
export default function SearchAppBar() {
  const [simSim,setSimSim]=React.useState(false)
  const [searchValue,setSearchValue]=React.useState("")
  const navigate=useNavigate();
  useEffect(() => {
   if(searchValue.length>0){
     navigate("/search/"+searchValue)
   }else{
     navigate("/")
   }
  }, [searchValue]);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=>setSimSim(!simSim)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
             <img className="menu__logo" style={{width:"100px",padding:"0 10px"}} src="https://iconape.com/wp-content/files/ce/246502/svg/246502.svg" alt="" />
          </Typography>
          <Search>
            <TextField
              id="standard-search"
              type="search"
              variant="standard"
              placeholder='search'
              onChange={(evt)=>setSearchValue(evt.target.value)}
              sx={{ color: "red", backgroundColor: "white", padding: "5px" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"left"}
        open={simSim}
        onClose={()=>setSimSim(!simSim)}
      >
        <List className='menu'>
          <ListItem className='menu__list'>
            <NavLink className="menu__item" to="/" onClick={()=>setSimSim(false)}>
            <ListItemText className="menu__link" primary="Home"/>
            </NavLink>
          </ListItem>
          <ListItem className='menu__list'>
            <NavLink className="menu__item" to="/popular" onClick={()=>setSimSim(false)}>
            <ListItemText className="menu__link" primary="Popular"/>
            </NavLink>
          </ListItem>
          <ListItem className='menu__list'>  
            <NavLink className="menu__item" to="/up-coming" onClick={()=>setSimSim(false)}>
            <ListItemText className="menu__link" primary="Up Coming"/>
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

