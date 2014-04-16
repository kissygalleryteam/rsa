## 综述

Rsa 是一个 RSA 算法加密库。

* 版本：1.0
* 作者：梧忌 
* demo：[http://gallery.kissyui.com/rsa/1.0/demo/index.html](http://gallery.kissyui.com/rsa/1.0/demo/index.html)

## 初始化组件

```javascript
S.use('gallery/rsa/1.0/index', function (S, Rsa) {
    var rsa = new Rsa();
})
```

## API说明

```javascript
S.use("gallery/rsa/1.0/index, node", function (S, Rsa) {

    // 公钥
    var publicKey = "eeadbad02dd8c1cc1405585691da3beb907542c7a3a57d98e005822b9b1852bb102419d63d13b1f8f332e88fae0d156d74c1495e705073310abfacfc8085f74fab89033c82fd0f7728ba644cc5da6df07535273e91f5d19bfc4be787d0de16aad6cf9bd0ad74427862c7c92ed97bc419a7c3b05cc1b36a3421fef0cbb2cc72fd";

    // 私钥
    var privateKey = "3ff57a2c333cf4a1d573a13a8197339b6a78a1ce91c1d528544fe593fdd9c4c1b00f9c84d695228a0dd1c4944c15e17a15617e61ba4334bb1da043a0de6807df6314aa0a40cca0e87726f26c059262092f7ace483f197f1ca1dc372e38ce8a11d3f90d70913e77e39329db092db836c041d316e277d79893054f6229a26fce99";

    // 加密指数
    var encryptionExponent = "10001";

    // 新建一个 RSA 对象
    var rsa = new Rsa();

    // 设置公钥
    rsa.setPublic(publicKey, encryptionExponent);

    // 产生密文
    var res = rsa.encrypt("test");

    // 设置私钥
    rsa.setPrivate(publicKey, encryptionExponent, privateKey);

    // 解密
    rsa.decrypt(res);
});
```