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
    text: '#000000ff',       
    primary: '#ff7c11ff',
  },
  typography: {
    heading: "'Playfair Display', serif", 
    body: "'Plus Jakarta Sans', sans-serif",
  }
};