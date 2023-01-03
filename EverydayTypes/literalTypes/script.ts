interface Options {
    width: number;
  }
  function configure(x: Options | "auto") {
    // ...
  }
  configure({ width: 100 });
  configure("auto");
//   configure("automatic");//error because "automatic" is not a member of the union type

// MORE ADVANCED 
declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);//Error because req.method is not a member of the union type

//solution 1 // Type assertion
handleRequest(req.url, req.method as "GET");//OR
handleRequest(req.url, req.method as "GET" | "POST");
