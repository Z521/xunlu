
// 内容区域的高度
var screen_h = window.screen.height
var screen_w = window.screen.width

$(".img").css({
    "height": screen_h - $(".bottom").outerHeight() + "px"
})

// 底部导航上的图片
var img1 = $(".bottom div img")
img1.css({
    "height": img1.width() + "px"
})
//底部换图片
$(".botteml").click(function () {
    var tian = this
    var dian = $(this).index()

    $(".botteml").each(function (index, item) {
        if (dian == index) {
            var cur_src = $(item).find("img").attr("src")
            if (cur_src.indexOf("_a") == -1) {
                $(item).find("img").attr("src", cur_src.replace(".png", "_a.png"))
            }
        } else {
            var cur_src = $(item).find("img").attr("src")
            $(item).find("img").attr("src", cur_src.replace("_a", ""))

        }
    })
    $(".img>div").each(function (index, item) {
        if ($(tian).index() == index) {
            $(item).css({
                "display": "block"
            })
        } else {
            $(item).css({
                "display": "none"
            })
        }
    })
    
})


$(".lunbo1").css({
    "height": $(".lunbo1").width() * 194 / 345 + "px"
})

var content_str = ""

// 遍历数据 做界面
for (var i = 0; i < shujia.length; i++) {
    var one_data = shujia[i]
    content_str += `
    <div class="shujia">
        暑假刷片看这里！
    </div>
    <div>
        <img  src="./images/首页/`+one_data.img+`" alt="">
       
    </div>
    `

}
$(".lunbo3").append($(content_str))