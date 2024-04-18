<template>
  <div v-for="user in usersList" class="users-list__user">
    <div class="users-list__user--container">
      <input :value="user" v-model="userCheckbox" class="users-list__user--checkbox" type="checkbox" />
      <div class="users-list__user--preview" :style="{ background: getRandomPreviewColor() }">
        <span class="users-list__user--preview-initials">{{
          this.getInitials(user.name)
        }}</span>
      </div>
      <span class="users-list__user--name">
        {{ user.name }}
      </span>
      <span class="users-list__user--email">
        {{ user.email }}
      </span>
      <span class="users-list__user--permission">
        {{ user.permission }}
      </span>
      <button @click="editUser(user.id)" class="users-list__user--edit-button"></button>
      <button @click="deleteUser(user.id)" class="users-list__user--delete-button"></button>
    </div>
    <form ref="usersListEditForm" class="users-list__user--edit-form">
      <label class="users-list__user--edit-form-label-name" for="edit-user-name"></label>
      <input class="users-list__user--edit-form-input-name" type="text" id="edit-user-name"
        placeholder="User Full Name" />

      <label class="users-list__user--edit-form-label-email" for="edit-user-email"></label>
      <input class="users-list__user--edit-form-input-email" type="text" id="edit-user-email"
        placeholder="user.name@gbd.hu" />

      <label class="users-list__user--edit-form-label-permission" for="edit-user-name"></label>
      <input class="users-list__user--edit-form-input-permission" type="text" id="edit-user-name"
        :value="user.permission" disabled />

      <button>Save</button>
      <button>Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["edit-user", "delete-user", "checked-users"],
  props: ["usersList"],
  data() {
    return {
      previewBackgroundColors: ["#DE40A3", "#1C40A3", "#31F1AC"],
      userCheckbox: [],
    };
  },
  watch: {
    userCheckbox() {
      this.$emit("checked-users", this.userCheckbox.length);
    },
  },
  mounted() {
    this.getRandomPreviewColor();
  },
  methods: {
    getRandomPreviewColor() {
      return this.previewBackgroundColors[
        Math.floor(Math.random() * this.previewBackgroundColors.length)
      ];
    },
    getInitials(fullName) {
      let names = fullName.split(" ");
      let initials = names[0].substring(0, 1).toUpperCase();

      if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      return initials;
    },
    editUser(userId) {
      this.$emit("edit-user", userId);
    },
    deleteUser(userId) {
      this.$emit("delete-user", userId);
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
  transform: scale(1.5);
  justify-self: start;
}

.users-list__user {
  &:hover button {
    visibility: visible;
  }

  &--container {
    display: grid;
    width: 60%;
    margin-top: 3rem;
    grid-template-columns: 0.1fr 0.2fr 1fr 0.4fr 0.4fr 0.4fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "users-list__user--checkbox users-list__user--preview users-list__user--name users-list__user--permission users-list__user--edit-button users-list__user--delete-button"
      "users-list__user--checkbox users-list__user--preview users-list__user--email users-list__user--permission users-list__user--edit-button users-list__user--delete-button";
  }

  &--checkbox {
    grid-area: users-list__user--checkbox;
  }

  &--preview {
    position: relative;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    grid-area: users-list__user--preview;

    &-initials {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 25px;
    }
  }

  &--name {
    font-size: 20px;
    margin-left: 1rem;
    grid-area: users-list__user--name;
  }

  &--email {
    font-size: 16px;
    margin-left: 1rem;
    color: #bdbbbb;
    grid-area: users-list__user--email;
  }

  &--permission {
    height: 37px;
    width: 80px;
    text-align: center;
    justify-self: center;
    align-self: center;
    align-content: center;
    font-size: 16px;
    border-radius: 10px;
    background: #efe2fe;
    text-transform: capitalize;
    color: #624d9c;
    grid-area: users-list__user--permission;
  }

  &--edit-button {
    visibility: hidden;
    width: 47px;
    height: 50px;
    background: white;
    border: 2px solid #d9d9d9;
    border-radius: 10px;
    background-image: url("../assets/user_edit_icon.png");
    background-repeat: no-repeat;
    background-position: center;
    justify-self: end;
    grid-area: users-list__user--edit-button;
  }

  &--delete-button {
    visibility: hidden;
    width: 47px;
    height: 50px;
    margin-left: 1rem;
    background: white;
    border: 2px solid #d9d9d9;
    border-radius: 10px;
    background-image: url("../assets/user_delete_icon.png");
    background-repeat: no-repeat;
    background-position: center;
    grid-area: users-list__user--delete-button;
  }

  &--edit-form {
    display: none;
  }
}
</style>
