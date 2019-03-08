<template>
    <div>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column
                prop="date"
                label="序号"
                >
            </el-table-column>
            <el-table-column
                prop="name"
                label="菜品图片"
                >
                <!-- <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template> -->
                <!-- <template> -->
                    <p class="img"></p>
                <!-- </template> -->
            </el-table-column>
            <el-table-column
                prop="num"
                label="菜品编号">
            </el-table-column>
            <el-table-column
                prop="address"
                label="菜品分类">
            </el-table-column>
            <el-table-column
                prop="address"
                label="菜品标题">
                <input type="text">
            </el-table-column>
            <el-table-column
                prop="address"
                label="结账单位">
                <input type="text">
            </el-table-column>
            <el-table-column
                prop="address"
                label="菜品单价">
                <input type="text">

            </el-table-column>
            <el-table-column
                prop="address"
                label="原价">
            </el-table-column>
                <input type="text">

            <el-table-column
                prop="address"
                label="菜品标签">
                <input type="text">
            </el-table-column>
            <el-table-column class-name="opt"
                prop="address"
                label="操作">
                <span class="advance">高级设置</span>
                <span class="del" @click="del()">删除</span>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

</style>


