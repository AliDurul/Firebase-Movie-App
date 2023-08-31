<div id="user-content-toc">
  <ul align="left">
    <summary><h1 style="display: inline-block">Firebase Movie App</h1></summary>
  </ul>
</div>

<table>
   <thead>
        <tr>
            <th>What's used in this app ?</th>
            <th>How to run ?</th>
            <th>Author</th>
        </tr>
    </thead>
  <tbody>
  <tr>
    <td> 
      <li> React  
      <li> Tailwind CSS 
      <li> Context-Api 
      <li> Firebase Authorization 
      <li> React-router-dom  
      <li> Api-Server  
    </td>
    <td>  <h4>Once you clone the project</h4>  
      
 1) run  `pnpm install`  or `yarn install` for node modules
 2) run `pnpm run dev` or `yarn run dev` for open development stage
    
   </td>
    <td> <li> <a href="https://github.com/AliDurul" target="_blank">Take a look at my other projects</a> <li> <a href="https://www.linkedin.com/in/ali-durul/" target="_blank">Visit me on Linkedin</a> 
  </tr>
  <tr>
    <td colspan="3"><h3>What is this project about ?</h3> 
<p>
Data fetched from the IMDB API and present it on website, categorized for easy access. Users can explore various movies and search for specific movie. User can see first 20 movies but can not access any detail about it unless login. To access more content and watch movie trailer, users need to log in, enabling personalized recommendations and a richer experience. 
</p>
    </td>
  </tr>
      </tbody>
</table>




<div id="user-content-toc">
  <ul align="left">
    <summary><h2>How does my project look</h2></summary>
  </ul>
</div>

[Live Link](https://firebase-movie-app-two.vercel.app)

![movieapp](https://github.com/AliDurul/Firebase-Movie-App/assets/80897590/89c7bdcd-c9f4-4c47-bbd3-f918e1a09de5)

<div id="user-content-toc">
  <ul align="left">
    <summary><h2>Feedback and Collaboration</h2></summary>
  </ul>
</div>
I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out. I'm always open to collaboration and welcome the opportunity to work on exciting projects together.

Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!




## Project Skeleton

```
Movie App (folder)
|
|----readme.md    
├── public
│     └── index.html
├── src
│    ├── auth
│    │     └── firebase.js
│    ├── components
│    │     ├── MovieCard.js
│    │     └── Navbar.js
│    ├── context
│    │     └── AuthContext.js
│    ├── pages
│    │     ├── Login.js
│    │     ├── Register.js
│    │     ├── Main.js
│    │     └── MovieDetail.js
│    ├── router
│    │     └── Router.js
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── .env
└── yarn.lock
```

