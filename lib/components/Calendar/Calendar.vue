




<template>
    <div class="mask active">
        <div class="calendar">
            
            <div class="flex flex-between flex-middle">
                <div class="prev-month">上</div>
                <div class="calendar-title">
                    2017年12月15日
                </div>
                <div class="next-month">
                    下
                </div>
            </div>
            <div class="calendar-week">
                <span>日</span>
                <span>一</span>
                <span>二</span>
                <span>三</span>
                <span>四</span>
                <span>五</span>
                <span>六</span>
            </div>
            <div class="calendar-day flex">
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span class="active">29</span>
                <span>30</span>
                <span>31</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        name: 'Calendar'
    }
</script>
