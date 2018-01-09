var url = "https://www.google.com.tw/maps/place/110%E5%8F%B0%E5%8C%97%E5%B8%82%E4%BF%A1%E7%BE%A9%E5%8D%80%E8%8E%8A%E6%95%AC%E8%B7%AF423%E5%B7%B72%E5%BC%841%E8%99%9F/@25.0276198,121.5646043,17z/data=!3m1!4b1!4m5!3m4!1s0x3442abb36cfffb83:0x403948e7c20df7e!8m2!3d25.027615!4d121.566793?hl=zh-TW";
var reg = url.match(/([https]+|[http]+):\/\/[\w.][^\/]+/);
console.log( reg[0] );
