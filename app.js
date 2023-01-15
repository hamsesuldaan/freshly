const express = require("express");

const expressLayouts = require("express-ejs-layouts");
const i18n = require("i18n-express");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

// Q2
const homeRoutes = require("./router/web/home");
const aboutRoutes = require("./router/web/about");
const fruitsRoutes = require("./router/web/fruits");
const contactRoutes = require("./router/web/contact");


const dashboardRoutes = require("./router/admin/dashboard");
const userRoutes = require ('./router/admin/users')
const fruitRoutes = require ('./router/admin/fruits')
const contactadminRoutes = require("./router/admin/contact");

const loginRoutes = require("./router/auth/login");

// Express Server
const app = express();
app.listen(1122);
console.log("Our sever is running...");

// Ejs
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./web/layouts/websiteLayout"); // Default Layout

// Middlwares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  i18n({
    translationsPath: path.join(__dirname, "i18n"), // <--- use here. Specify translations files path.
    siteLangs: ["es", "en", "de", "ru", "it", "fr"],
    textsVarName: "translation",
  })
);

// Middlware for authentication 
app.use(
  session({
    key: "user_sid",
    secret: "somerandonstuffs",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 120000,
    },
  })
);
app.use(
  session({ resave: false, saveUninitialized: true, secret: "nodedemo" })
);

// Middlware for errors
app.use(flash());


// WEB ROUTES

// Q6 Routes
app.use("/", homeRoutes);
app.use("/about", aboutRoutes);
app.use("/fruits", fruitsRoutes);
app.use("/contact", contactRoutes);


// ADMIN ROUTES
app.use("/admin", dashboardRoutes);
app.use('/admin/users', userRoutes)
app.use('/admin/fruits',fruitRoutes )
app.use('/admin/contact', contactadminRoutes)




// AUTH ROUTES
app.use("/auth/login", loginRoutes);

// 404 

// app.use((req, res) => {
//   res.render("404");
// });


