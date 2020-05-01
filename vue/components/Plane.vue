<script>

    import UserInfo from './UserInfo.vue';

    export default {
        name: 'Plane',

        data() {
            return {
               pos: {
                   x: 0,
                   y: 0
               },
               container: {
                   x: 1400,
                   y: 800
               },

                users: [
                    {
                        name: 'Frank',
                        avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEA8SEhAVFQ8QEA8QFQ8QEBAPEA8PFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tKystLS0tLSstLS0rLS0tLSstLS0tLS0rLSstLS0tKy0tKy0tLSstKy0tNy03LTctLf/AABEIAMUBAAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIEBQYDBwj/xAA7EAABAwIEAwYEAwcEAwAAAAABAAIDBBEFEiExBkFREyJSYXGRFDKBkgehwRUjJEJTcuEzYrHwstHx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAhEQEBAAICAgIDAQAAAAAAAAAAAQIREiEDMUFREyJhMv/aAAwDAQACEQMRAD8A8vFM3wj2C6Cnb4B9oVl2IS7IKbY2rxSt8DfYJ7adngb9oUx0aZkU2Izqdngb9oXJ1O3wN9grARXRMKm1V7advgb7BO7Bngb9oUwQ+S6iDyTYgsp2eBv2hdfho/A32ClGBDslBFNLH4G+wVZiBbmyNYBbUnKArisIYxzjyH5rMsnJJ6ldMYOrsg0DR62XNzxyaPYLlKTddqOmc8jotrJXMMvy/JdoMNe7Zu/ktVhGAbErWUeDgWsNlxy8sjXGvNG8PyeH8kJcFe0fJdex0mGtv3m3HSyfNhTD8rB7BT8qarw6TD3gXLPyUe1twvZqvBb7t09Fi+IuHrAlo1CuPknyvFkmOaOQ9glVRggFosee1ii5hDsrhb1XRjd2ldWVhgz2PZlcxuZvMtbqFYtpmeBv2hUeFd2VvR1wtOIVjJiuQo4v6bftCXwkX9Nv2tUgRo9mptNohpI/6bPtC5yUcf8ATb9oU8xJGG6ptW/CR/02/aEDSR+Bv2hWBp1zdTrLcsQDTM8DftCY6nZ4G+wU806YYFbVQf2oEf2kOqok4LfFnUXZxEIDEB1VKSkCnCC8GIjqnjER/wBKobpXThBfftAJwxEdVnyUgU4QaD9ojqiMRHVZ4FElOEFljtcHRho8QPsqNj7LrOdFya2+wWpNNR1iaXOA69FtsEwr5bj/AAqnhfDLvzOGjSt3RsAXn8vk+nTGJ1DSNFld0rWqsp43O22VlBA4Lj7bqyghB5KS6lAC4UziOSlyzXboFWKgVETbKgr6Brr/AF0VzUh5OgUF7XX1b9VLWsY8y4owG2rRrrYrIiXUX+YaFe1YnRAtPmvIeJaIxVDxawOoPULv4s99MZRKpogWNf4ZB7Xt+qvW1bVjaKoINuWunJSRM6+/0XaxxrUmtam/GNWZM7uqHbO6rHA01Yq2p3xjVk+2d1S+Id1Tgaa34tqTqliyXxTuqBqndVeJqNUaliYZ2rMGqd1TfinKXBrSOkjZKy6oFkrJ1kkDbIpI2QNcELJ5CSBoCNk4BEhBxkbopOEU93Alcy3krLDRbIs5+msWsoWABTIqgA6mwUWhFwFZR4Y17gCPpdeK2bd3SLiaNm3uQrbA8f7aQDTKB039EYcHoGD+IkiZz77gCVpOHY6E27AMLdg9uoNt9Vqavw58qtaWFrm3AUiOh6jYXXV1RFHYXHoFMFZGbAHcJZGd1lq/E4mG2gPQ6LP1ePRk2uAfULU45QU0oIMRc7k4aa+RWNq+B2h2cZrb2JOqmsVlp4mzG3X2WJ/EXC+42UDRtwSN7FehQ4JZocwnTl0VFxtH/Bz/ANo/5Vw6vS29PHoI+fqF2T7cgmle1xvs1FKyVlENugnZUkXYJt05CyBpQRKSqmZ0Q9KyWVAcyWZKyFkCujdCyVlQro3QsllUDrogpoCIVFtguGCVsrnGwZlA9SpMdGY3NHK5Q4YLnOdEP5i159G30VhUD97boSvNnleTvhjNbXmFM0v5LqGTSlzGnIzYkHvOHqlh1OTborykpcq81vbpHKk4ObIIg51+xdnbnaH2PMG+4Ul2DOg7Itlc1kFy1os1ut7ggequqWryhVnEtecmugW5ldMa7Qoqp75MznXJPsFcSyvbYgnQ9VQ8PwvmdcfKtNNCWuF9j/8AFGre0WbDKmR4PxUrYnC47PKC0etlNdRVkLRlqTO3wVAaTboHCxV1g8oDcrthspdQ5rgbKy9OeW2dgrgXHQtds5h5HqDzWW/EW/wkgAuXOY2w31K0uJU5a64Gyiwwtke0SC7cwJHmFMb2WTTwaVpa4hwIcNwdCE26vuPaxkuIVL4wAwFsYtzyDKT7rPWXul6cLD7pXTAE6yqUrpXQyoZVAbpXQypZUUkCkQhZVQCISsiAjNBJFBAigiAjZF2CVkUghsAEQF0hhLnBrRclbPh3CImEdoAXHfMLqXLTWONyZzA5HNdIW/P2enXcbK9wvD5JXtytJJ3v1V9WcLRtPbRMt5NOlj5LTcLsZGwvdbTW55Lhl329Hjx1NL7hqjijp4oZGRGUySNd2lgTcX0Nt7aWVNiL44ou3JIgdUOhALcrmDvZS7qO6VZ0/Ere07RsfaMGpaMty8aBzSdj5rIcX8ROqQyFkPYwROLhG45nuedy4/U+645Y477WTvS6a8aEG7TsRqCOoKrcUYKmaCnBtmeQ4na1rqhoqh8LQW3LbG8Z29R0T31HbEAXDrghwJa4eyzJF9PS+Bo6V7Zo4Xhxgf2b7btcOVuiscShpXyfDGeMVDwS2LO3tNBuG7rA4Rgk1G8PpH2lnDu0zd4EWvcjmn8PUksFXLVvhbJVSNyiVzj3eVwFvpjW7vbYsYWjKfmHdPqFIhBsuGGQuLbyG7ybuI5k7q1EOiwv8QJ4sw2VUYGNLsxsC1wB6Otor16oOIWgxkn5WXkNujBm/RXH2xlfh891TSJJAdw94N9yQSLrnZdamXO97/G5zrdLkn9VzC909OF9giAjZLKqyWiCNkgEASITiECFNBuVCyKCLD3x3XBS2lcJ26qSul/abc0QmIrdY0cESmKTQUEkzssbbnmdgB5lTZpwCkUdE+V1mNJ6nkPUrecL/hx2hDpn3/2N0b9TzXrOFcGQQR37NpsNBYWHnZYuX03w08j4d4aDbZvnf/Na1vRbd/B0YjzgnMNb/wCFf4xhDS0lgAcNdrKVgb+0p7H5m3afose3WTU6ZagdYdm/fXS246qNjmGPawljiGndvJWda8NqYoRrKczrc8g3KmYtCRES70Hqs2ajr/YoMIp8rAPJQamnbI7KdDyeNx69VfwM7ihx0J7UH6ry3tIzU8DmPcx24uAR8p9FBqYTbu91/ULTcV0b3ZY4vnN336EbLOMoq03aYC5w0Bbo0q4xqdtnwhiDnwsIA7UAseScxuPLcAiy0UUNxe1jfUdD5eS84ouGZQQ4RS9sRqWvMYB6XC12C1NXE21QwOaNnB37xnkT/Mt5aM8Z8NPQ6EBWLnaKsopcxDh0UsybrEri4zuXn/4qYuYKZkbfnqS9t7/KwAZve9lvJSvFPxYxESVwjBuKeIMI5B7jmd+g+i7eKbrl5KxrUVzzIXXq9OTqkueZHMmw5FNukXKh1k1ybnQzKbBsmkJFyV0Uoiuk40XN70yae+imnQ0JFc+0RzrTGkqgizvDV6fwjgYay2xcb3Xm+AuHbNuvXcCedMvRcfI3h7bzDKWKFjbtLtNXDVSqvEozG7s5rEA902JH0KjYeDk87LM8T0dntdtfQkG11LbI74SW9tFghfLG58huSSNgAGjQWH6qPhMOWaZgdpYH6lSuGKmEUhu9oDM2YlwFgOpVPwRUGZs0oHzyvPUBuY5fysp9L9spx/HLHVwVET7Sxk2Nr+evUclGxjjiqnjYx0LG2cwvc25zWPIHZWPGxHxZYTfK0HXz6LPOjHT2UrjllZW1w+UFgIOhAK7Pq2N1c4C3Ugf8rKYFDVlhY4Boc51g3UtZyF7bq9o+C+0N3gnnrcrj+O13mPW674JMJZXyAtdYloAcCfZaykg7uW1lTU/DVNC4FlhK2x7u/wBVpINWnk42+gCcdVzzy16Ngocmt0+eiBZe26dT5szr7W0PVSCdFrKRy5VUUMYaSF2qNFHdJ+8cQnVD1z06ckKvqhGx8jvlY0u9SOS8NxDDXyyyyu+aR7nk+bje36Lbca8YRsqmUZPcsDI++jXn5WlR+ybbkvR45cXDOsU3AikcCWxawDoulm+S3Mq5sYzh89E5+AENJ6C62sTB5J80YyO05FOVNvK3ssSOi5ld6/8A1X/3FcrLq0aQgQugQIUHMhCy6WTSiobpVyJQQWnQ4J4KaAjdB3gkLSHDcL3XgeAuiY482tP5BeEwtLnNaNyQB9SvozguACFv+1rR7Bc/JFl7bCkh7ot0VFxhSF0LrDUC61NGAWqFi0Ic1wtuCpfTeN1XhuJ5n5Y2mw1uLkA26qx4QxOspHPbFlcx+7HgkX6gjZWreH7zXI0aXBaqgwBgsbe4XOSvXlljpkMQw6erzyyWbMdi0ZR6Kbwbwob55Tmdfnrb0XoMOHMta35KBjGL02HwyTTPDWDkNXOdya0cyVqYuHOLBmGwxNzvsA0XLiQAAOqqajHBKP4dwMbr2eyxDgNNCF4Pxz+I1ViBLLmKkubQMcbvHIyO/mPlsnfh7xwaF4jmBkpHHVoPfhJ3czy8lrLC66css3t1G3vXPzee6vGOvYeXzfoqCbF6cwNqGv7SmcAe2jGbs7+MDVq74XWsmaHQyhzTqCCvN/n2xf2m40LWkJtQ42VbLWvYLuNh1KpK7jSnY4NM4L3EAMYC9zj0ACty2kxyXOQNueZWd4s4hZSwSSuOoByt5vfyHvZWeK4zBS0/xNWSy47kBIEsh5DLyXz9xjxPJXTF7hkiF8kIvZg8+pW8fF3um93SkrKp0skkrzd8ji9x8ytBgXEjmsETzfKLNcfD0KzBcldemyWaVunY8Oq5ux+3P81jo5kXG6xwa1K9XwKftIw7qrSUdx3oVQ8Eu/hm/RXNRLofQrOnmynbzDEv9WT+4rgpGJf6z/UrhZdGjUk6yBCBqBCdZAhBVWOtgTbew29UFqcJqY4cOrMwBllcI233FxusotOku6nRSty672UTMmEJBGl3wtTdpUxg/wApzfUL6E4cGWKwXg3AjwKm58J/Re74FVtLAVzy9kbLC5O7bmn1Ed7qFSzaXC7ipKnw0iUuGDO48sytBThqUYsPM/8AK87/ABE/E+CiD4YSJqu1sgN44T1kI/8AHdakS5bumh434ugw+mdI8gyuBEUN+9K/lYdOpXzJxPxJUV0xlqH31OWMaRxjo0fqouMYxPVTOmqJDJI7m7Zo5NaOQ8lDK1IgBycHrmQjlVFzgHEFTSP7SnlLCfmYe9HIOj2HQheocG8cUkkjbx/DVLnd9jCfhpr7ub4HX5ea8aiYnNk1091jPCZJOn1BxFL2sTI4SJJJHZWtaRqfPoOa87xHiegwvM2lYKrFB3X1LxeCCT+YM62OmnTdYbAeLamke57HNc50L4v3lzlDxbMOhCzr5h/ndY8fimPa5W3r4WGOY7PVSmWolMkh5nZo6NGwCq3PTsl9QmZV20k1ATgllRQBIPsgkqNTw5xWIGZJGEt8Tf8A0tPTcTU0g0lANtnXC8uSyrFxjNxlaOvcDK8g3BO41XBUzZSNiVLir/F7hXTPCpxQQZICNCCnEKIFk0hOQKCJUt7ptsCP8KCpL6slpbyJF/OyjErTpiSRSQJRpZ8PSWqGey9Mo8f7IALy/BrCVribAAn6q8lrPPRc852seq0PGzANXBTZfxIo4ml0kmoucrRdzrcgF4bU19r6qolkLySSpMaXTecWfitW1WZkLjT05uMsZ/eub/ufy9AsC43v1JuSdbnqhdBdZNJsCEgU66aAgcAngXTQnOfb1RAmdyC5s3QukCipDH94HmCCPVGrmL3lztzzyht/PRcA9GSUutc7aAdAiaEGycHA+q4lBB3cEExsiLpECSSCSBI3QQsgKSSSKIcRspMVdycPqFFQKJqLeOYHYp5VIL8l1jncCNdFNM3ECmFOJXO6rRwKLRdMAUqFiK7RN0XWQmyaxPc9ZY2r3xuJ12Qdpp/0qRK7QqEStNQ66N1zSRT7ppQRCAglBOsgQgakiUggNkQEUrIAQgQnIOCBiSfZKyBNRuulLTPke2ONuaR5s1otdx6BSazBamI2lppWf3RPA97Js9oSSTmkbgj1BCF02CULpEpqB4SQBRugRTSUnJNCBOKaknMCiOkbVKa1cWLsCiU8FMc7omueubn2BQc6h/JcUikquiSSSUCSBSSVDgUCUAiEUAuiYjdA5Bd6OlfK9kcbC6R5ytYN3Hom1EDmPcx7S17HFrmuFi1w0IKI5pJIOKKIKBTWooO1JLlkY4fyuafzXp2C1Yd2kcjnuLh3LyOsPS505ey8rCu3cUT2a20YytDb9mLkDqeq55R38PmmEss9t73X0MrHOzSav7N4a8PaDpa4uDbmCvO8eoGRua6PN2bxez7EtcNxcbjoptBxfPG4Hs4HgH5ZYQ5rh0OqbxJj0NSG9nSiAg53BsjnszkWOUHVo8kaz8vjyl67Z9IhHMhmXR5gRQSQG6LSmpwCBhRa5FJZB7Q9Uu0PVJJAu0PVNLiUkkARSSQJJJJSBJJJKhIIJKUG6SCSgfHIQQQSCCCCDYg+RTpp3OcXOcXOcblzjck9SUkkHPMUboJIEkCkkgN0kkloK6SSSBJJJJsJJJJAkrpJIP/Z',
                    },
                    {
                        name: 'Jeff',
                        avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Joe_Exotic_%28Santa_Rose_County_Jail%29.png'
                    },
                    {
                        name: 'Sara',
                        avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Angela_Merkel._Tallinn_Digital_Summit.jpg'
                    },
                    {
                        name: 'Lisa',
                        avatar: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Hillary_Clinton_by_Gage_Skidmore_2.jpg'
                    }
                ],

                showSidebar: false,
            }
        },

        components: {
            UserInfo
        },

        methods: {
            moveTo(e) {
                const blobs = document.getElementsByClassName('blob');
                for(let blob of blobs) {
                    if(blob === e.target) {
                        return;
                    }
                }

                let mouseY = e.clientY;
                let mouseX = e.clientX;
                let clientY = window.innerHeight;
                let clientX = window.innerWidth;

                let topCornerOffsetX = (clientX - this.container.x) / 2;
                let topCornerOffsetY = (clientY - this.container.y) / 2;

                let posY = mouseY - topCornerOffsetY - 35;
                let posX = mouseX - topCornerOffsetX - 35;

                let blob = document.getElementById('blob');
                blob.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
            },

            getDetailsOfUser() {
                this.$router.push('/chat');
            }
        },

        mounted() {
            let userElem, x, y;
            for(let [idx, user] of this.users.entries()) {
                userElem = document.getElementById('user-nr-' + idx);

                x = Math.floor(Math.random() * 1400);
                y = Math.floor(Math.random() * 800);

                userElem.style.backgroundImage = `url("${user.avatar}")`;
                userElem.style.transform = `translateX(${x}px) translateY(${y}px)`;
            }
        }
    }
</script>

<template>
    <div class="container"
         @click="moveTo($event)">
        <div class="blob"
             id="blob"></div>
        <div v-for="(user, idx) in users"
             class="blob"
             :id="'user-nr-' + idx"
             @click="getDetailsOfUser"></div>
    </div>
</template>

<style lang="scss" scoped>

div.container {
    position: relative;
    height: 800px;
    width: 1400px;
    top: calc(50% - 400px);
    left: calc(50% - 700px);

    background-color: white;
    border-radius: 5px;

    div.blob {
        position: absolute;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        background-color: aqua;
        background-position: center center;
        background-size: contain;
        left: 0;
        top: 0;
        transform: translateX(0) translateY(0);
        transition: 1s transform ease-in-out;
        box-sizing: border-box;

        &:hover {
            border: 2px solid #f80759;
            cursor: pointer;
            z-index: 2;
        }

        &#blob {
            background-image: url("https://image.cnbcfm.com/api/v1/image/101524695-457220551.jpg?v=1395781183&w=1400&h=950");
        }
    }
}

</style>