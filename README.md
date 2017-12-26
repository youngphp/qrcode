# qrcode
## 如果简单的使用这个工具
>> `第一步`：在的html页面或者其他什么前端页面之类的，例如这样
```javascript
<script src="./qrcode.js" type="text/javascript"></script>
```
>> `第二步`：调用生成方法。eg：
```javascript
doQrcode("your url");
```
#### 这样我会在你的当前页面生成一个遮罩层，不会影响你的任何业务，工具就是这样。展示效果
![展示照片](https://github.com/youngphp/qrcode/blob/master/demo.png) 
#### 同时还提供了你可能业务中需要的关掉二维码的功能。你只需要只这样调用即可
```javascript
closeQrcode()
```

