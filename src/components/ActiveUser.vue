<template>
    <div class="activeUser">
        <div class="logo-container">
            <Logo />
        </div>
        <div class="iconUserActive">Nombre de usuario <div>N</div>
        </div>
    </div>

</template>
<script>
import Logo from '../components/Logo.vue';
export default {
    components: {
        Logo
    }
}
</script>
<style scoped>
.iconUserActive {
    width: max-content;
}

.logo-container {
    margin-left: 20px;
    width: 100px;
    position: relative;
    top: 60px;
}

.activeUser {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #D9D9D9;
    padding: 10px 20px;
}

.iconUserActive div {
    display: inline;
    width: max-content;
    padding: 10px;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 50%;
}
</style>