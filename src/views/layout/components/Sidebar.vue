<template>
    <v-list>
        <v-list-item prepend-icon="mdi-home" link title="Home" to="/home"></v-list-item>
        <v-list-item prepend-icon="mdi-account-outline" link title="My Profile" to="/user-profile"></v-list-item>
        <v-list-item prepend-icon="mdi-pencil-box-outline" link title="Articles" to="/articles"></v-list-item>
    </v-list>
</template>

<style>
.no-decoration {
  text-decoration: none;
}
</style>