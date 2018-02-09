<template>
    <!--banner-->
    <div class="banner">
        <div class="bannerList" id="bannerList">
            <Carousel
                :height='460' 
                v-model="value3"
                :autoplay="setting.autoplay"
                :autoplay-speed="setting.autoplaySpeed"
                :dots="setting.dots"
                :radius-dot="setting.radiusDot"
                :trigger="setting.trigger"
                :arrow="setting.arrow">
                <CarouselItem>
                    <img src="../../../assets/banner.png" class="demo-carousel"/>
                </CarouselItem>
                <CarouselItem>
                    <img src="../../../assets/banner2.png" class="demo-carousel"/>
                </CarouselItem>
            </Carousel>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        data () {
            return {
                value3: 0,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 4000,
                    loop:true,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'hover',
                    // radiusDot:true
                }
            }
        },
        created:function(){
            
        },
        methods:{
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .banner {
        min-width: 1280px;
        height: 460px;
    }

    .banner img {
        display: block;
        width: 100%;
        height: 460px;
    }

    .banner .swiper-pagination-bullets {
        transition: 5s;
    }

    .banner .swiper-pagination-bullets .swiper-pagination-bullet {
        background: #fff;
        width: 12px;
        height: 12px;
        margin-right: 10px;
        border-radius: 6px;
        cursor: pointer;
        opacity: 0.5;
    }

    .banner .swiper-pagination-bullets .swiper-pagination-bullet-active {
        list-style: none;
        background: #f71327;
        width: 12px;
        height: 12px;
        margin-right: 10px;
        border-radius: 6px;
        cursor: pointer;
        opacity: 1;
    }
</style>
