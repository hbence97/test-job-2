import { createApp } from "vue";

import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import PageHeader from "./components/PageHeader.vue";
import InboxPage from "./components/InboxPage.vue";
import UserProfile from "./components/UserProfile.vue"
import UsersList from "./components/UsersList.vue";
import User from "./components/User.vue";
import AddNewUser from "./components/AddNewUser.vue";

const app = createApp(App);

app.component("page-header", PageHeader);
app.component("nav-bar", Navbar);
app.component("inbox-page", InboxPage);
app.component("user-profile", UserProfile);
app.component("users-list", UsersList);
app.component("user", User);
app.component("add-new-user", AddNewUser);

app.mount("#app");
