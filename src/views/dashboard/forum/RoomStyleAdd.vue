<template>
    <div>
        <el-card shadow="always">
            <div slot="header" class="horiz-container align-center">
                <span class="header-text">房型管理</span>
                <el-divider direction="vertical" class="header-text"></el-divider>
                <el-button
                    type="danger"
                    :disabled="selected.length <= 0"
                    @click="deleteSelected"
                >批量删除</el-button>
                <div class="spacer"></div>
                <el-button size="medium" type="success" @click="dialog = true">
                    <i class="fa fa-plus"></i>
                    添加新房型
                </el-button>
            </div>
            <el-table
                :data="topics"
                v-loading="loading"
                @selection-change="mutilSelectionChange"
                style="width: 100%"
                stripe
                border
            >
                <el-table-column type="selection" width="40" align="center" ></el-table-column>
                <el-table-column prop="name" label="房型" width="100"></el-table-column>
                <el-table-column prop="shortIntro" label="面积" width="100"></el-table-column>
                <el-table-column prop="facilities" label="设施" width="120"></el-table-column>
                <el-table-column prop="coverImgUrl" label="房型图片" width="200"></el-table-column>
                <el-table-column prop="availableRoomNum" label="可用房间数" width="100"></el-table-column>
                <el-table-column prop="price" label="价格" width="60"></el-table-column>
                <el-table-column prop="deposit" label="押金" width="60"></el-table-column>
                <el-table-column prop="intro" label="简介" ></el-table-column>
                
                <el-table-column label="操作" width="70">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            size="medium"
                            title="编辑"
                            @click="editItem(scope.row)"
                        >
                            <i class="fa fa-pencil-square-o fa-lg" style="color:blue; "></i>
                        </el-button>
                        <el-button
                            size="medium"
                            type="text"
                            title="删除"
                            @click="deleteItem(scope.row)"
                        >
                            <i class="fa fa-trash-o fa-lg" style="color:red; "></i>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="horiz-container">
                <div class="spacer"></div>
                <el-pagination
                    background
                    @size-change="getRoomTpye"
                    @current-change="getRoomTpye"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="totalCount"
                    :page-sizes="[5, 10, 20, 30]"
                    :page-size.sync="pageSize"
                    :current-page.sync="currentPage"
                ></el-pagination>
            </div>
        </el-card>

        <!-- 添加和修改话题的对话框  开始 -->
        <el-dialog
            :visible.sync="dialog"
            width="80%"
            :close-on-click-modal="false"
            :fullscreen="fullscreen"
        >
            <span slot="title">
                <el-button type="text" @click="fullscreen = true" v-if="!fullscreen">
                    <i class="fa fa-square-o" style="font-size: 20px;" title="最大化"></i>
                </el-button>
                <el-button type="text" @click="fullscreen = false" v-else>
                    <i class="fa fa-clone" style="font-size: 20px;" title="还原"></i>
                </el-button>
                <span class="dialog-title mx-2">{{ formTitle }}</span>
            </span>
            <el-card shadow="always">
                <el-form label-position="top">
                    <el-row :gutter="20">
                        <!-- :gutter="20" 同一行内，两列之间的间隔 -->

                        <el-col :md="formCols" :sm="24">
                            <el-form-item label="房型">
                                <el-input
                                    v-model="editedItem.name"
                                    placeholder="房型"
                                    maxlength="50"
                                    show-word-limit
                                ></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-form-item label="面积">
                        <el-input
                            v-model="editedItem.shortIntro"
                            placeholder="面积"
                            maxlength="50"
                            show-word-limit
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="可用房间数">
                        <el-input
                            type="number"
                            v-model="editedItem.availableRoomNum"
                            placeholder="可用房间数"
                            maxlength="4"
                            show-word-limit
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="押金">
                        <el-input
                            type="number"
                            v-model="editedItem.deposit"
                            placeholder="押金"
                            maxlength="4"
                            show-word-limit
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="价格">
                        <el-input
                            type="number"
                            v-model="editedItem.price"
                            placeholder="价格"
                            maxlength="4"
                            show-word-limit
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="设施">
                        <el-input
                            type="textarea"
                            v-model="editedItem.facilities"
                            :rows="row"
                            placeholder="设施"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="房型图片">
                        <el-input
                            type="textarea"
                            v-model="editedItem.coverImgUrl"
                            :rows="row"
                            placeholder="房型图片"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="简介">
                      <el-input
                            type="textarea"
                            v-model="editedItem.intro"
                            :rows="row"
                            placeholder="简介"
                      ></el-input>
                  </el-form-item>
                </el-form>

                
            </el-card>
            <span slot="footer">
                <el-button type="danger" @click="dialog = false">取消</el-button>
                <el-button type="primary" @click="saveItem">保存</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import RoomTpyeService from '../../../api/service/roomtype_service';
import moment from 'moment';   // 日期时间处理
export default {
    name: 'RoomStyleChange',
    data: () => ({
        topics: [],          // 从服务器取回的一页数据 
        dialog: false,       // 显示添加和修改对话框    
        fullscreen: false,   // 对话框全屏
        loading: false,      // 是否显示加载动画
        pageSize: 10,        // 每页大小
        currentPage: 1,      // 当前页
        totalCount: 0,       // 总记录数量
        totalPage: 1,        // 总页数
        selected: [],        // 选中的行
        editedIndex: -1,     // 添加 或 修改 的标志；-1表示添加，否则为当前编辑项在 categories 中的索引
        // 添加或修改绑定到对话框上的数据
        editedItem: {
            name: "",      // 房号
            facilities: "",    // 设施
            shortIntro: "",   //房型
            price: 0,  //价格
            intro: "", //政策
            availableRoomNum: 1, //可用房间数
            deposit: 0,  //押金
            coverImgUrl: "", //房型图片
        },
        // 用于添加或修改结束后，还原 editedItem 的初始值       
        defaultItem: {
            name: "",      // 房号
            facilities: "",    // 设施
            shortIntro: "",   //房型
            price: 0,  //价格
            intro: "", //政策
            availableRoomNum: 1,  //可用房间数
            deposit: 0,  //押金
            coverImgUrl: "", // 房型图片
        },
    }),

    mounted() {
        this.getRoomTpye();    // 获取客房信息
    },

    methods: {
        async getRoomTpye() {
            this.loading = true;
            this.topics = [];  // 清空数据
            let skip = (this.currentPage - 1) * this.pageSize;
            // 查询当前页的数据，
            let response = await RoomTpyeService.fetchAll(this.pageSize, skip, ["createdBy", "lastEditor"], ['-level', '-updatedAt']);
            if (response.status_code === 'ok') {
                this.totalCount = response.totalCount;   // 总记录数
                // 返回当前页所有数据的结果 
                this.topics = response.reslut.map(item => { return this.toJson(item) });
            }
            this.loading = false;
        },

        async saveItem() {
            console.log('this.editedIndex：', this.editedIndex);
            if (this.editedIndex === -1) {
                /**
                * 这里是添加新话题时保存数据， 以 this.editedItem 为添加到 leancloud 的基础， 并添加三个属性
                */
                
                // 添加一个创建者的属性
                this.editedItem.createdBy = await RoomTpyeService.currentUser();
                // 添加一个最后修改者的属性
                this.editedItem.lastEditor = await RoomTpyeService.currentUser();
                // 添加一个最后回复时间的属性
                this.editedItem.lastRepliedAt = new Date();
                //添加一个额定人数的属性
               // this.editedItem.RatedPerson = await TopicService.currentUser();
                // 标题去掉前后空格
                this.editedItem.title = this.editedItem.name.trim();
                if (this.editedItem.title) {
                    // 向服务器添加一条记录
                    let response = await RoomTpyeService.create(this.editedItem);
                    if (response) {
                        // 新增的记录添加到话题列表的前面
                        this.topics.unshift(this.toJson(response));
                        // 将结果按照 level 重新排序
                        this.topics.sort((a, b) => {
                            return b.level - a.level;
                        });
                        // 添加新记录后总数超过一页大小
                        if (this.topics.length > this.pageSize) {
                            this.topics.pop();  // 移除最后一个
                        }
                        // 使用 message 通知 
                        this.$message({
                            message: `已经成功添加一个房型: ${this.editedItem.title}`,     // 消息内容
                            type: 'success'
                        });
                        this.dialog = false;   // 关闭对话框
                    } else {
                        this.$message({
                            message: '标题不能为空',
                            type: 'warning'
                        });
                    }
                }
            } else {
                // this.editedIndex 不等于 -1, 表示进行修改操作，其值为被修改项在数组中的索引

                // Object.assign()复制对象，第二个参数中的同名属性的值会覆盖第一个参数中对应的属性
                let item = Object.assign(this.topics[this.editedIndex], this.editedItem);
                let response = await RoomTpyeService.update(item.id, {
                    name: item.name,           // 修改后的房型                
                    facilities: item.facilities,       // 修改后的房型设施
                    lastEditor: await RoomTpyeService.currentUser(),  // 最后修改者为当前用户
                    shortIntro: item.shortIntro,
                    price: Number(item.price),  //修改后的价格
                    intro: item.intro,  //修改后的政策,
                    availableRoomNum: Number(item.availableRoomNum), //修改后的可用房间数
                    deposit: Number(item.deposit),  //修改后的押金
                    coverImgUrl: item.coverImgUrl,  // 房型图片
                });

                if (response) {
                    this.topics[this.editedIndex].updatedAt = response.updatedAt;
                    // 将结果按照 level 重新排序
                    this.topics.sort((a, b) => {
                        return b.level - a.level;
                    });
                    this.$message({
                        message: '房型编辑成功',
                        type: 'success'
                    });
                    this.dialog = false;   // 关闭对话框
                } else {
                    this.$message({
                        message: '出现错误, 无法完成房型信息修改',
                        type: 'error'
                    });
                }
            }
        },

        // 显示编辑对话框
        editItem(item) {
            // 查找 被 编辑项的索引值
            this.editedIndex = this.topics.indexOf(item);
            // Object.assign() 用于将源对象复制到目标对象
            // 因为直接用等号赋值，这两个变量操作的是同一个内存地址
            this.editedItem = Object.assign({}, item);
            this.dialog = true;  // 显示编辑对话框
        },

        // 删除单条记录
        deleteItem(item) {
            this.$confirm(`确定要删除房型为："${item.name}" 的房型吗？`, '删除房型', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {  // .then()  里面的匿名函数前要加  async                 
                // 在服务器端执行删除操作
                let response = await RoomTpyeService.delete(item.id);
                if (response) {
                    this.getRoomTpye();  // 重新载入数据 
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });

        },

        // 删除选中的多条记录
        async deleteSelected() {
            this.$confirm(`确定要删除已选中的 ${this.selected.length} 个房型吗？`, '批量删除房型', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {     // .then()  里面的匿名函数前要加  async 
                // 在服务器端执行删除操作
                let response = await RoomTpyeService.deleteBatch(this.selected);
                if (response) {
                    this.getRoomTpye();  // 重新载入数据 
                    this.$message({
                        type: 'success',
                        message: `成功删除选中的 ${this.selected.length} 个房型!`
                    });
                    this.selected = [];  // 清空已选中的对象
                }
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },

        // 用于表格多选框取值的函数
        mutilSelectionChange(val) {
            this.selected = val;   // 保存选中的行
            console.log('mutilSelectionChange:', this.selected);
        },

        // 获取用户中各个字段的值， 可以根据需要添加
        getUser(user) {
            // console.log(user);
            return {
                id: user.id,
                username: user.get("username"),
                email: user.get("email"),
            }
        },

        // 将从服务器端取到的数据不能直接使用，转为对象格式的数据
        toJson(item) {
            return {
                id: item.id,   // leancloud Class 自带属性，对应 leanclud Class 中的 "ObjectId", 可以用".id"直接引用
                name: item.get('name'),
                facilities: item.get('facilities'),
                level: item.get('level'),
                shortIntro: item.get('shortIntro'),
                intro: item.get('intro'),
                availableRoomNum: item.get('availableRoomNum'), 
                coverImgUrl: item.get('coverImgUrl'),
                deposit: item.get('deposit'),
                price:item.get('price'),
                createdAt: item.createdAt,  // leancloud Class 自带属性,创建时间,不能修改值
                updatedAt: item.updatedAt,   // leancloud Class 自带属性,最后修改时间,只能leancloud 自动修改
                /**
                 * createdBy、lastEditor 指向另一个表的字段, 默认只能得到该字段在关联表中的id 值
                 * 要得到完整值， 查询时字段名要包含在 include 中，
                 * 取值时，要先判断是否为空，如果为空，取值会抛出异常，
                 */
                createdBy: item.get("createdBy")
                    ? this.getUser(item.get("createdBy"))
                    : "",
                lastEditor: item.get("lastEditor")
                    ? this.getUser(item.get("lastEditor"))
                    : "",
            }
        },


        // 关闭对话框时，要重置相关变量
        closeDialog() {
            this.dialog = false;
            this.fullscreen = false;
            // this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
    },

    // 计算属性
    computed: {
        // 添加或修改对话框的标题
        formTitle() {
            return this.editedIndex === -1 ? "添加新客房" : "客房编辑";
        },

        // 添加或修改对话框中 标题 文本框的宽度
        formCols() {
            // 添加时不用显示 Level，Title 宽度为 24
            // 修改时需要显示 Level，Title 宽度为 21
            return this.editedIndex === -1 ? 24 : 21;
        },

        // 多行文本框的行数
        row() {
            // 全屏状态时多行文本框 15 行，非全屏时 5行
            return this.fullscreen ? 15 : 5;
        }
    },

    // 过滤器
    filters: {
        datetimeFormat(val) {
            // 使用 moment.js 定义日期时间过滤器函数   
            return moment(val).format("lll");
        },
    },

    // 观察属性， 函数名为变量名，当该变量值有变化时，触发函数
    watch: {
        // 监控变量 dialog, 当对话框关闭时，还原对话框相关的初始值 
        dialog(val) {
            // 相当于 if 语句的简化写法
            val || this.closeDialog();
        },
    }

}
</script>

<style>
.align-center {
    align-items: center;
}
</style>