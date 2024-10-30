import { createStyles, Image } from "@mantine/core";
// import {Link} from "react-router-dom";

const useStyles = createStyles((theme) => ({
  logo: {
    width: '100px', // Adjust the size as needed
    height: 'auto',
    [theme.fn.smallerThan('sm')]: {
      width: '30px',
    },
  },
}));


const Logo = () => {
  const { classes } = useStyles();
  
  return (
          <Image 
            src="./assets/logos/logo-color.png" // Replace with your logo path
            alt="Logo"
            className={classes.logo}/>
  );
};

export default Logo;
