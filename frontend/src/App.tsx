import { Router, navigate } from '@reach/router';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MechantPanel from './components/MerchantPanel';
import CustomerPanel from './components/CustomerPanel';
import HomePanel from './components/HomePanel';

import dotenv from 'dotenv';
dotenv.config();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    }
  }),
);

function App() {
  const classes = useStyles();

  const navigateToMechants = () => {
    navigate('./merchants');
  }

  const navigateToCustomers = () =>{
    navigate('./customers');
  }
  
  const navigateToHome = () =>{
    navigate('./');
  }


  return (
    <div className="App">
       <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={navigateToHome}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit"  onClick={navigateToMechants}>Merchants</Button>
          <Button color="inherit" onClick={navigateToCustomers}>Customers</Button>
        </Toolbar>
      </AppBar>

      <Router>
          <HomePanel path="/" 
            navigateToMechants={navigateToMechants}
            navigateToCustomers={navigateToCustomers}
          />
          <CustomerPanel path="/customers" />
          <MechantPanel path="/merchants" />
      </Router>
    </div>
  );
}

export default App;
