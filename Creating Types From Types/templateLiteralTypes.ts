type World = 'world';
type Greeting = `hello ${World}`; //type Greeting is "hello world"

// ADDING NEW PROPERTIES TO EXISTING TYPES-----------------------------
type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

// For each interpolated position in the template literal, the unions are cross multiplied:
type Lang = 'en' | 'ja' | 'pt';
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`; //HUGE UNION

// INTRINSIC TEMPLATE LITERAL TYPES-----------------------------
//1- Uppercase
type T10 = Uppercase<'hello'>; // "HELLO"

//2- Lowercase
type T11 = Lowercase<'HELLO'>; // "hello"

//3- Capitalize
type T12 = Capitalize<'hello world'>; // "Hello world"//just the first letter

//4- Uncapitalize
type T13 = Uncapitalize<'Hello World'>; // "hello World"
