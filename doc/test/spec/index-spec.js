KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('rsa', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/rsa/1.0/']});