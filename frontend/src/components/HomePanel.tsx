import {RouteComponentProps } from "@reach/router"
import {Button, Grid} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';

type HomePanelProps = {
    navigateToMechants : Function,
    navigateToCustomers : Function,
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "10px",
    maxWidth: '200px', 
    maxHeight: '200px', 
    minWidth: '200px', 
    minHeight: '200px',
  },
  root:{
    minHeight: '90vh'
  },
}));

export default function HomePanel(props:  HomePanelProps & RouteComponentProps){
    const classes = useStyles();
    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            className={classes.root}
        >
            <Grid item >
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => props.navigateToMechants()}
                    className ={classes.button}
                >
                    Show Merchants
                </Button>
            </Grid>

            <Grid item >    
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    onClick={() => props.navigateToCustomers()}
                    className ={classes.button}
                >
                    Show Customers
                </Button>
            </Grid>
        </Grid>
    )
}