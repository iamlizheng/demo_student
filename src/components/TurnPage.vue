<template>
    <div class="page">
        <ul class="page-ul">
            <li 
                :class="{'not-allowed': currentPageNum === 1}" 
                class="page-li" 
                @click="changePage(-1)"
            >
                &lt;
            </li>
            <template  v-if="showPage > pageList">
                <li class="page-li" 
                    v-for="page in pageList" 
                    :key="page"
                    :class="{'page-active':currentPageNum === page}"
                    @click="changePage(page)"
                >
                    {{page}}
                </li>
            </template>
            <template v-else>
                <!-- 1,2,3,4,5,6 -->
                <template v-if="currentPageNum <= 4">
                    <li class="page-li" 
                        v-for="page in 6" 
                        :key="page"
                        :class="{'page-active':currentPageNum === page}"
                        @click="changePage(page)"
                    >
                        {{page}}
                    </li>
                </template>
                <!-- 1 ...  -->
                <!-- v-if="currentPageNum > 4" -->
                <template v-else >
                    <li 
                        class="page-li"                     
                        :class="{'page-active':currentPageNum === 1}"
                        @click="changePage(1)"
                    >1</li>
                    <li class="page-li" @click="openPage(0)">...</li>
                </template>
                <!-- n-2,n-1,n,n+1,n+2 -->
                <template v-if="currentPageNum >= 5 && currentPageNum < pageList - 3">
                    <li class="page-li" 
                        v-for="page in 5" 
                        :key="page"
                        :class="{'page-active': page === 3}"
                        @click="changePage(currentPageNum + page - 3)"
                    >
                        {{currentPageNum + page - 3}}
                    </li>
                </template>
                <!-- ... n -->
                <template v-if="currentPageNum < pageList - 3">
                    <li class="page-li" @click="openPage(1)">...</li>
                    <li 
                        class="page-li"                     
                        :class="{'page-active':currentPageNum === pageList}"
                        @click="changePage(pageList)"
                    >
                        {{pageList}}
                    </li>
                </template>
                <!-- n-5,n-4,n-3,n-2,n-1,n -->
                <!-- v-if="currentPageNum >= pageList - 3" -->
                <template v-else>
                    <li class="page-li" 
                        v-for="page in 6" 
                        :key="page"
                        :class="{'page-active':currentPageNum === pageList - 6 + page}"
                        @click="changePage(pageList - 6 + page)"
                    >
                        {{pageList - 6 + page}}
                    </li>
                </template>
            </template>
                <li 
                    :class="{'not-allowed': currentPageNum === pageList}" 
                    class="page-li" 
                    @click="changePage(0)"
                >
                    &gt;
                </li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    data () {
        return {
            // pageList : 10,
            // currentPageNum : 7,
            showPage : 7
        }
    },
    computed : {
        ...mapState({
            pageList : 'totalPage',
            currentPageNum : 'currentPage'
        })
    },
    methods : {
        ...mapMutations(['setCurrentPage']),
        ...mapActions(['getStudentList','turnPage']),
        changePage (page) {
            if (page === this.currentPageNum) { return; }
            if (page === -1 && this.currentPageNum === 1) {
                return;
            } else if (page === 0 && this.currentPageNum === this.pageList) {
                return;
            } else {
                if (page === -1 && this.currentPageNum > 1) {
                    this.turnPage(this.currentPageNum -1);
                } else if (page === 0 && this.pageList > this.currentPageNum) {
                    this.turnPage(this.currentPageNum + 1);
                } else if (page !== 0 && page !== -1) {
                    this.turnPage(page);
                }
            }
        },
        openPage (num) {
            let flag = {};
            if (num === 0) {
                flag = this.currentPageNum - 5 <= 0 ?  {num : 1, mode : "赋值"}  : {num : -5, mode : "运算"};
            } else if ( num === 1) {
                flag = this.currentPageNum + 5 > this.pageList || this.pageList - 5 < this.currentPageNum  ? {num : this.pageList, mode : "赋值"} : {num : 5, mode : "运算"};
            }
            if (flag.mode === "赋值") {
                this.turnPage(flag.num);
            } else if (flag.mode === "运算") {
                this.turnPage(this.currentPageNum + flag.num);
            }
        }
    }
}
</script>

<style scoped>
.page {
    display: flex;
}
.page-ul {
    display:flex;
    padding:10px 25px;
}
.page-li {
    height:20px;
    min-width:30px;
    line-height:20px;
    margin:0 3px;
    font-weight: bolder;
    text-align: center;
    background-color:#f4f4f5;
    color:#606266;
    border-radius:2px;
    cursor: pointer;
}
.page-li.page-active{
    background-color:#409EFF;
    color:#fff;
    cursor:not-allowed;
}
.page-li.not-allowed{
    cursor:not-allowed;
}
</style>