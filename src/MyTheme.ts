export interface MyTheme {
  colors: {
    background: string;
    text: string;
    primary: string;
  };
  typography: {
    heading: string;
    body: string;
  };
}

export const theme: MyTheme = {
  colors: {
    background: '#FFFFFF', 
    text: '#222222ff',       
    primary: '#ff7c11ff',
  },
  typography: {
    heading: "'DM Serif Display', serif",
    body: "apple-system, sans-serif"
  }
};