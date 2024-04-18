<template>
  <div ref="addNewUserContainerButton" class="add-new-user__container">
    <button @click="addingNewUser" class="add-new-user__button">
      + Add New user
    </button>
  </div>
  <div>
    <form @submit.prevent ref="addNewUserForm" class="add-new-user__form">
      <label class="add-new-user__form--label-name" for="name">Name</label>
      <input v-model.trim="newUsersName" class="add-new-user__form--input-name" id="name" type="text"
        placeholder="Enter Name" />

      <label class="add-new-user__form--label-email" for="email">Email</label>
      <input v-model.trim="newUsersEmail" class="add-new-user__form--input-email" id="email" type="text"
        placeholder="Enter Email" />

      <label class="add-new-user__form--label-permission" for="permission">Permission</label>
      <input id="permission" type="text" class="add-new-user__form--input-permission" value="Agent" placeholder="Agent"
        disabled />

      <button @click="addNewUser" ref="addNewUserButton" class="add-new-user__form--button-add" disabled>
        Add
      </button>
      <button @click="cancelAddingNewUser" class="add-new-user__form--button-cancel">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-new-user"],
  data() {
    return {
      addingNewUserClicked: false,
      newUsersName: "",
      newUsersEmail: "",
      newUsersPermission: "agent",
    };
  },
  watch: {
    newUsersEmail() {
      if (!this.newUsersEmail || !this.newUsersName) {
        this.$refs.addNewUserButton.disabled = true;
        this.$refs.addNewUserButton.style.cursor = "initial";
        this.$refs.addNewUserButton.style.background = "#89d5e7";
      } else {
        this.$refs.addNewUserButton.disabled = false;
        this.$refs.addNewUserButton.style.cursor = "pointer";
        this.$refs.addNewUserButton.style.background = "#1CB0D3";
      }
    },
    newUsersName() {
      if (!this.newUsersEmail || !this.newUsersName) {
        this.$refs.addNewUserButton.disabled = true;
        this.$refs.addNewUserButton.style.cursor = "initial";
        this.$refs.addNewUserButton.style.background = "#89d5e7";
      } else {
        this.$refs.addNewUserButton.disabled = false;
        this.$refs.addNewUserButton.style.cursor = "pointer";
        this.$refs.addNewUserButton.style.background = "#1CB0D3";
      }
    },
  },
  methods: {
    addingNewUser() {
      this.$refs.addNewUserForm.style.display = "grid";
      this.$refs.addNewUserContainerButton.style.display = "none";
    },
    cancelAddingNewUser() {
      this.$refs.addNewUserForm.style.display = "none";
      this.$refs.addNewUserContainerButton.style.display = "block";
      this.newUsersName = "";
      this.newUsersEmail = "";
    },
    addNewUser() {
      this.$emit(
        "add-new-user",
        this.newUsersName,
        this.newUsersEmail,
        this.newUsersPermission
      );
      this.newUsersName = "";
      this.newUsersEmail = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.add-new-user__form {
  display: none;
  margin-bottom: 1rem;
  width: 50%;
  grid-template-columns: 1fr 1fr 1fr 0.7fr 0.7fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "add-new-user__form--label-name add-new-user__form--label-email add-new-user__form--label-permission . ."
    "add-new-user__form--input-name add-new-user__form--input-email add-new-user__form--input-permission add-new-user__form--button-add add-new-user__form--button-cancel";
  justify-content: start;

  label {
    color: #7e7e7e;
  }

  input {
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    padding-left: 0.7rem;
  }

  &--label-name {
    grid-area: add-new-user__form--label-name;
  }

  &--label-email {
    grid-area: add-new-user__form--label-email;
  }

  &--label-permission {
    grid-area: add-new-user__form--label-permission;
  }

  &--input-name {
    margin-right: 1.5rem;
    grid-area: add-new-user__form--input-name;
  }

  &--input-email {
    margin-right: 1.5rem;
    grid-area: add-new-user__form--input-email;
  }

  &--input-permission {
    margin-right: 1.5rem;
    grid-area: add-new-user__form--input-permission;
  }

  &--button-add {
    padding: 0.6rem;
    width: 100px;
    margin-right: 5px;
    justify-self: end;
    background: #89d5e7;
    font-size: 18px;
    color: white;
    border: none;
    border-radius: 5px;
    grid-area: add-new-user__form--button-add;
  }

  &--button-cancel {
    padding: 0.6rem;
    width: 100px;
    background: #d9d9d9;
    font-size: 18px;
    color: #7e7e7e;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    grid-area: add-new-user__form--button-cancel;
  }
}

.add-new-user__button {
  display: block;
  margin-left: auto;
  margin-right: 30rem;
  padding: 0.6rem;
  font-size: 18px;
  color: white;
  background: #1cb0d3;
  border: none;
  border-radius: 5px;
}
</style>
