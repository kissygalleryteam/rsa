KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('test', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/test/2.0.1/']});