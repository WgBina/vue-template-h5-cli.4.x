<template>
    <div class="index">
        <div class="section">
            <div class="content">
                //
            </div>
        </div>
    </div>
</template>

<script scoped>
import HTTP from '@/api';
export default {
    name: 'index',
    data() {
        return {
            active: 0
        };
    },

    methods: {
        onClickLeft() {
            //
        },
        onClickRight() {
            //
        },

        async getBasicInfo() {
            const { success, code } = await HTTP.check({ code:'0000000000' });
            console.log(success, code);
        }
    },
    mounted() {
        this.getBasicInfo();
    }
};
</script>

<style lang="scss" scoped>
.index {
    height: 100%;
    display: flex;
    flex-direction: column;
    .nav {
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .section {
        flex: 1;
        overflow: auto;
        .content {
            height: 100px;
        }
    }
}
</style>
