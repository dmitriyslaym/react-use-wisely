import { createTheme, alpha } from '@mui/material/styles';

const textColor = '#d0d0d0';
export const defaultBlue = '#4182FF';
const bgColorDark = '#303030';
const bgColorDarker = '#212121';
const bgColorBlue = alpha(defaultBlue, 0.25);
export const green = '#1E7126';
export const red = '#962121';

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: defaultBlue,
    },
    text: {
      secondary: textColor,
    },
    background: {
      paper: bgColorDarker,
      default: bgColorDark,
    },
  },
  typography: {
    fontSize: 12,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        animated: {
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorDockedLeft: {
          borderRight: 0,
          boxShadow:
            '0px 2px 1px 1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '0 0 0 8px',
          borderBottom: 0,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        footer: {
          '&:hover': {
            backgroundColor: `${bgColorDarker} !important`,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: textColor,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        colorSecondary: {
          '&$checked': {
            color: defaultBlue,
          },
        },
      },
    },
  },
});
