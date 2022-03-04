import { makeStyles } from '@material-ui/core';

export const useHeaderStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1,
    },
    bar:{
        zIndex: 1,
        justifyContent:'flex-end',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
          },
        boxShadow: 'none',
        backgroundColor: '#353535',
        '& .MuiButton-root':{
          color: 'var(--text-primary)',
          fontWeight:'500',
        }
    },
    paper:{
      borderRadius: 5,
      backgroundColor: '#94d2bd',
    },
    contactLink:{
      color:'#323232d0',
    },
  })); 

export const useProjectStyles = makeStyles(theme=>({
    root: {
      maxWidth: 500,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        margin: 10,
      },
      margin: 30,
      backgroundColor:'light-grey',
      border: 'solid 3px #000000',
    },
    media: {
      height: 'auto auto',
    },
    description:{
      color: '#555',
      [theme.breakpoints.down('xs')]: {
        height: '20vh',
        overflowY: 'scroll',
      },
    },
    
  }));

  export const useContactStyles = makeStyles(theme=>({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
        [theme.breakpoints.down('xs')]: {
          width: '90vw',
        },
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(1),
        [theme.breakpoints.down(350)]: {
          marginTop: theme.spacing(0),
        },
      },
    },
  }));