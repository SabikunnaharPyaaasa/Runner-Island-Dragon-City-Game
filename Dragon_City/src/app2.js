var INITIALIZED2 = false;
var HelloWorldLayer2 = cc.Layer.extend({
    field:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        //cc.audioEngine.playMusic(res.Main_Music, false);
        //Background field
        var x =0.5;

     
        var secondview = new cc.Sprite.create(res.secondview_png);
        secondview.setAnchorPoint(cc.p(0.5,0.5));
        secondview.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(secondview,1);

        var sprite_action = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        secondview.runAction(sprite_action);
        

        var secondview1 = new cc.Sprite.create(res.secondview_png);
        secondview1.setAnchorPoint(cc.p(-0.5,0.5));
        secondview1.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(secondview1,1);
        var sprite_action1 = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        secondview1.runAction(sprite_action1);
        

        for(let i=1;i<100;i++){
            x= x+1;
        var secondview2 = new cc.Sprite.create(res.secondview_png);
        secondview2.setAnchorPoint(cc.p(-x,0.5));
        secondview2.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(secondview2,1);
        var sprite_action2 = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        secondview2.runAction(sprite_action2);
        }

        for(let i=1;i<10;i++){
        var purple = new cc.Sprite.create(res.purple_png);
        purple.setAnchorPoint(cc.p(-2,1));
        if(i==1){
        purple.setAnchorPoint(cc.p(-2,1));
        }
        if(i==2)
        {
            purple.setAnchorPoint(cc.p(-3,1));
        }
        if(i==3)
        {
             purple.setAnchorPoint(cc.p(-7,2));
        }
        if(i==4)
        {
             purple.setAnchorPoint(cc.p(-10,1));
        }
        if(i==5)
        {
             purple.setAnchorPoint(cc.p(-12,2));
        }
        if(i==6)
        {
             purple.setAnchorPoint(cc.p(-13,3.2));
        }
        if(i==7)
        {
             purple.setAnchorPoint(cc.p(-15,2));
        }
        if(i==8)
        {
             purple.setAnchorPoint(cc.p(-17,1));
        }
        if(i==9)
        {
             purple.setAnchorPoint(cc.p(-19,3.2));
        }
        if(i==10)
        {
             purple.setAnchorPoint(cc.p(-21,2));
        }
        
        purple.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(purple,1);
        var purple_action = cc.RepeatForever.create(cc.MoveBy.create(0.05, cc.p(-2, 0)))
        purple.runAction(purple_action);
        }


        var flower = new cc.Sprite.create(res.purple_png);
        flower.setAnchorPoint(cc.p(-1,0.5));
        flower.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(flower,1);
        var flower_action = cc.RepeatForever.create(cc.MoveBy.create(0.05, cc.p(-2, 0)))
        flower.runAction(flower_action);
        
       var dragon = new cc.Sprite.create(res.dragon_png);
       dragon.setAnchorPoint(cc.p(2,0.5));
       dragon.setPosition(cc.p(size.width/2,size.height/2));
      this.addChild(dragon,1);

      var dragon_action = cc.Repeat.create(cc.MoveBy.create(0.0001,cc.p(0,30)),2);
      var dragon_action1 = cc.Repeat.create(cc.MoveBy.create(0.0001,cc.p(0,-30)),2);
      var rectflower = flower.getBoundingBox();
      var rectdragon = dragon.getBoundingBox();
      this.scheduleUpdate(rectflower,2);
      
      cc.log(rectflower);
      cc.log(rectdragon);

  
      if(cc.rectIntersectsRect(rectflower, rectdragon))
      {
              cc.log("collided");
  
      }


        if(cc.sys.capabilities.hasOwnProperty('keyboard'))
        {
            cc.eventManager.addListener(
                {
                    event: cc.EventListener.KEYBOARD,
                    onKeyPressed: function(key, event)
                    {
                        cc.log(key.toString());
                       
                        if(key.toString()==38){
                            dragon.runAction(dragon_action );
                            rectdragon = dragon.getBoundingBox();
                           
                  
                        }
                        if(key.toString()==40){
                            dragon.runAction(dragon_action1);
                            rectdragon = dragon.getBoundingBox();
                           
                  
                        }
                        if(key.toString()==39){
                           // dragon.runAction(dragon_action1);
                            // rectdragon = dragon.getBoundingBox();
                            // var rectflower = flower.getBoundingBox();
                            // var rectdragon = dragon.getBoundingBox();
                            // if(cc.rectIntersectsRect(rectflower, rectdragon))
                            // {
                            //         cc.log("collided");
                        
                            // }
                           
                  
                        }
                        
                      
                }
                },this);
        }

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
    }, 
    coin: function()
    {
        var rectflower = flower.getBoundingBox();
        var rectdragon = dragon.getBoundingBox();
        cc.log(rectflower);
        cc.log(rectdragon);
    }
});



var HelloWorldScene2 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        
        if (INITIALIZED2 == false)
        {
            INITIALIZED2 == true;
        var layer = new HelloWorldLayer2();
        this.addChild(layer);
        }
    }
});

