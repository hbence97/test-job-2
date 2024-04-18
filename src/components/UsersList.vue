<template>
  <add-new-user @add-new-user="addNewUserToObject" />
  <div class="users-list__counter-delete-button--container">
    <span v-if="checkboxesSelected > 0" class="users-list__user--counter">{{ checkboxesSelected }} users selected</span>
    <button v-if="checkboxesSelected > 0" class="users-list__user--delete-button">
      Delete Selected Users
    </button>
  </div>
  <div class="users-list__container">
    <div class="users-list__container--users-and-permission">
      <input id="users-list__user--checkbox" class="users-list__user--checkbox" type="checkbox" />
      <label for="users-list__user--checkbox" class="users-list__user--label">
        Users
      </label>
      <span class="users-list__permission">Permission</span>
    </div>
    <user :usersList="providedUsersList" @edit-user="editUser" @delete-user="deleteUser"
      @checked-users="usersCheckedCounter" />
  </div>
</template>

<script>
export default {
  inject: ["providedUsersList"],
  data() {
    return {
      lastUsersId: 0,
      checkboxesSelected: 0,
    };
  },
  methods: {
    addNewUserToObject(newUsersName, newUsersEmail, newUsersPermission) {
      if (this.providedUsersList.length) {
        this.lastUsersId =
          this.providedUsersList[this.providedUsersList.length - 1].id;
      } else {
        this.lastUsersId = 0;
      }

      if (newUsersName && newUsersEmail) {
        this.providedUsersList.push({
          id: this.lastUsersId + 1,
          name: newUsersName,
          email: newUsersEmail,
          permission: newUsersPermission,
        });
      }
    },
    usersCheckedCounter(counter) {
      this.checkboxesSelected = counter;
    },
    editUser(userId) { },
    deleteUser(userId) {
      this.providedUsersList.splice(
        this.providedUsersList.findIndex((user) => user.id === userId),
        1
      );
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
  transform: scale(1.5);
  justify-self: start;
}

.users-list {
  &__counter-delete-button--container {
    display: flex;
    margin-bottom: 1rem;
  }

  &__user--counter {
    font-size: 20px;
    align-content: center;
    margin-right: 1rem;
  }

  &__user--delete-button {
    padding: 0.5rem;
    color: #7e7e7e;
    background: #e9eff2;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
  }

  &__container {
    &--users-and-permission {
      width: 60%;
      display: grid;
      grid-template-columns: 0.1fr 0.2fr 1fr 0.4fr 0.4fr 0.4fr;
      grid-template-rows: 1fr;
      gap: 0px 0px;
      grid-template-areas: "users-list__user--checkbox users-list__user--label . users-list__permission . .";
    }
  }

  &__user--label,
  &__permission {
    color: #7e7e7e;
    font-size: 20px;
  }

  &__user--checkbox {
    grid-area: users-list__user--checkbox;
  }

  &__user--label {
    grid-area: users-list__user--label;
  }

  &__permission {
    text-align: center;
    grid-area: users-list__permission;
  }
}
</style>
