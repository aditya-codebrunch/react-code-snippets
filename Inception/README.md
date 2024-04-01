
This file is for my first blog post

Important points 

1. we have the first two .js files in script tags one for react core functionalites and another for DOM
2. we have id = root a div element in the index.html
3. we can create React Elements using Root.CreateElement
4. The code also shows the nested child elements creation
5. root.render(element) - this renders the element to the root div

My Questions

● What is Emmet?
    It is a vs code extension which gives shortcuts for code snippets

● Difference between a Library and Framework?
    A libraray is set of prewritten code that can be called upon when writing your own code.

    A framework is a supporting structure where your own code defines the "meat" of the operations by filling the structure.

    More rules means chances are that it is a framework, less rules means chances are it is a library
    Who calls who is the best way to understand what is a library and what is a framework
    Your code makes calls to a library, Your framework makes calls to your code and maybe then to a library

● What is CDN? Why do we use it?
    CDN specializes in
        1. Hosting the caches of the main application close to the users.
        2. Following the legal and other regulations.
        3. Allowing to update content in these caches via UI
    From the end customer of the application perspective it is faster to access so they request any resource of that application from CDN.

● Why is React known as React?
    React allows web pages to “react” instantly to user actions without having to reload the entire page.

● What is crossorigin in script tag?
    When browser makes other origin requests
    it can share the identifying information to the other origin or not based on the crossorigin attribute value - it shares if the value is 'use credentials' and it does not share if it is 'anonymous'

● What is diference between React and ReactDOM
    React js file is for core functionalities and ReactDOM is for DOM functionalities.

● What is difference between react.development.js and react.production.js files via CDN?
    production.js files are minimized and optimized.

● What is async and defer?
    Browser parsing your html page when encounters a script tag it has three scenarios
        1. when no 'async' or 'defer' attributes are present, it halts the parsing fetches the script and    executes it in the browser and then the parsing resumes.

        2. when 'async' is present it fetches the script parallely with the parsing and once fetched halts the parsing, executes the script and resumes parsing. when 'async' attribute is used on the script tags, their order of execution cannot be guranteed. This is better to be used when the order of execution does not matter.

        3. when 'defer' is present it fetches the script parallely with the parsing and only after the parsing is completed totally, only then the script is executed. when 'defer' attribute is used on the script tags, their order of execution is guranteed.


