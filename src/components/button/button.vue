<template>
    <div class="buttonMain">
        <p>基础演示</p>
        <Button>按钮</Button>
        <Button type="primary">primary</Button>
        <Button type="success">success</Button>
        <Button type="warn">warn</Button>
        <Button type="submit">submit</Button>
        <Button type="info">info</Button>
        <Button type="cancel">cancel</Button>
        <p>块级按钮</p>
        <Button type="primary" long>primary</Button>
        <Button type="success" long>success</Button>
        <Button type="warn" long>warn</Button>
        <Button type="submit" long>submit</Button>
        <Button type="info" long>info</Button>
        <Button type="cancel" long>cancel</Button>

        <p>带图标</p>
        <Button type="primary" licon="icon-homepage">primary</Button>
        <Button type="success" licon="icon-like"> success </Button>
        <Button type="warn" licon="icon-setup"> warn </Button>
        <Button type="submit" licon="icon-collection">submit</Button>
        <Button type="info" liocn="icon-prompt">info</Button>
        <Button type="cancel" licon="icon-delete">cancel</Button>

        <p>线框按钮</p>
        
        <Button type="primary" outline>primary</Button>
        <Button type="success" outline>success</Button>
        <Button type="warn" outline>warn</Button>
        <Button type="submit" outline>submit</Button>
        <Button type="info" outline>info</Button>
        <Button type="cancel" outline>cancel</Button>

    </div>
</template>



<script>
    export default {
       
    }
</script>


<style lang="less">
    .buttonMain {
        padding: 10px;
        p {
            margin-bottom: 10px;
        }
        a {
            margin-bottom: 8px;
        }
    }
</style>
