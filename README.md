# My personal website

My website is entirely custom built using React and is hosted on Heroku.

You can find the application live at: http://www.annajcarey.com

The most interesting part of this project was building out the portfolio functionality. I am storing all of the info about each project in an array of objects, each containing the same kind of data (stored in ProjectInfo.js). I loop through the array and for each project, I create a route dynamically and render the PortfolioItem component, passing the entire project object down as a prop. This makes it seamless for me to add new projects to my portfolio as all I need to do is add a new object to the array in ProjectInfo.js with the appropriate data and then add a new nav box to the /portfolio page with the new link.

## Contributing
Pull requests are welcome if you see any errors.

## Contact
If you want to contact me, you can reach out at anna@annajcarey.com.

## License

Copyright (c) 2020 Anna Carey

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
