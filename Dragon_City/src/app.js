var INITIALIZED = false;
var HelloWorldLayer = cc.Layer.extend({
    field:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();


        var size = cc.winSize;
        //Background field
        var frontview = new cc.Sprite.create(res.frontview_png);
        frontview.setAnchorPoint(cc.p(0.5,0.5));
        frontview.setPosition(cc.p(size.width/2,size.height/2));
       this.addChild(frontview,1);


        var play = new cc.Sprite.create(res.play_png);
        play.setAnchorPoint(cc.p(0.5,0.5));
        play.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(play,1);


        var button = new ccui.Button();
        button.loadTextures(res.frontview_png, res.CloseSelected_png);
        button.x = size.width / 2;
        button.y = size.height / 2;
        button.addTouchEventListener(this.touchEvent, this);
        this.addChild(button);


        return true;
    },
    touchEvent: function(sender, type) 
     {
        switch(type)
         {
             case ccui.Widget.TOUCH_BEGAN: 
             cc.log("pressed");
             var scene = new HelloWorldScene2();
            cc.director.pushScene(scene);
                    
            break;
        }
    }
});


var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        
        if (INITIALIZED == false)
        {
            INITIALIZED == true;
        var layer = new HelloWorldLayer();
        this.addChild(layer);
        }
    }
});

