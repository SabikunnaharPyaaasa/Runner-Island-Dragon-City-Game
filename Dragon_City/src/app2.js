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
        cc.audioEngine.playMusic(res.Main_Music, false);
        //Background field
        var x =0.5;
        var score = 0;
        var scoregold= 0;
        var highscore = 0;
        var scorefruit = 0;

     
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

        var view = new cc.Sprite.create(res.secondview_png);
        view.setAnchorPoint(cc.p(0.5, 0.5));
        view.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(view, 1)
        view.setScale(1.5);
      
        view.setOpacity(0);
        var view_action = cc.FadeIn.create(.1);
        var sequence_view = cc.Sequence.create(view_action);

        var scorelayer = new cc.Sprite.create(res.scorelayer_png);
        scorelayer.setAnchorPoint(cc.p(-2.35,-2.55));
        scorelayer.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(scorelayer,1);

        //label for high score
        var highscore = new cc.Sprite.create(res.highscore_png);
        highscore.setAnchorPoint(cc.p(4.5,-0.8));
        highscore.setPosition(cc.p(size.width/2,size.height/2));
        highscore.setTag(0);
        this.addChild(highscore,1);

        var labelhighscore = new cc.LabelTTF("","Casteller");
        labelhighscore.setFontSize(20);
        labelhighscore.setAnchorPoint(cc.p(36, -2.45));
        labelhighscore.setPosition(cc.p(size.width /2, size.height /2));
        labelhighscore.setColor(cc.color(0,0,0));
        this.addChild(labelhighscore,1);

        //label for flower
        var label = new cc.LabelTTF("","Casteller");
        label.setFontSize(30);
        label.setAnchorPoint(cc.p(-21.6, -2.45));
        label.setPosition(cc.p(size.width /2, size.height /2));
        label.setColor(cc.color(0,0,0));
        this.addChild(label,1);

        //Flower icon
        var floweri = new cc.Sprite.create(res.floweri_png);
        floweri.setAnchorPoint(cc.p(-8,-2.5));
        floweri.setPosition(cc.p(size.width/2,size.height/2));
        floweri.setTag(0);
        this.addChild(floweri,1);

        //Flower 1st row
        var flower = new cc.Sprite.create(res.purple_png);
        flower.setAnchorPoint(cc.p(-1,1));
        flower.setPosition(cc.p(size.width/2,size.height/2));
        flower.setTag(0);
        this.addChild(flower,1);
        var flower_action = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        flower.runAction(flower_action);
        //flower 3rd row
        var flower1 = new cc.Sprite.create(res.purple_png);
        flower1.setAnchorPoint(cc.p(-4,3.2));
        flower1.setPosition(cc.p(size.width/2,size.height/2));
        flower1.setTag(0);
        this.addChild(flower1,1);
        var flower_action1 = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        flower1.runAction(flower_action1);

        var flower2 = new cc.Sprite.create(res.purple_png);
        flower2.setAnchorPoint(cc.p(-6,3.2));
        flower2.setPosition(cc.p(size.width/2,size.height/2));
        flower2.setTag(0);
        this.addChild(flower2,1);
        var flower2_action1 = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        flower2.runAction(flower2_action1);
        //flower 2nd row
        var flower3 = new cc.Sprite.create(res.purple_png);
        flower3.setAnchorPoint(cc.p(-10,2));
        flower3.setPosition(cc.p(size.width/2,size.height/2));
        flower3.setTag(0);
        this.addChild(flower3,1);
        var flower3_action1 = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        flower3.runAction(flower3_action1);

        var flower4 = new cc.Sprite.create(res.purple_png);
        flower4.setAnchorPoint(cc.p(-12,2));
        flower4.setPosition(cc.p(size.width/2,size.height/2));
        flower4.setTag(0);
        this.addChild(flower4,1);
        var flower4_action1 = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        flower4.runAction(flower4_action1);
        

        //gold 1s row

        var gold1 = new cc.Sprite.create(res.gold_png);
        gold1.setAnchorPoint(cc.p(-4,1));
        gold1.setPosition(cc.p(size.width/2,size.height/2));
        gold1.setTag(0);
        this.addChild(gold1,1);
        var gold1_action1 = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        gold1.runAction(gold1_action1);

        //gold 2nd row
        var gold2 = new cc.Sprite.create(res.gold_png);
        gold2.setAnchorPoint(cc.p(-22,2.2));
        gold2.setPosition(cc.p(size.width/2,size.height/2));
        gold2.setTag(0);
        this.addChild(gold2,1);
        var gold2_action1 = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        gold2.runAction(gold2_action1);

        var gold3 = new cc.Sprite.create(res.gold_png);
        gold3.setAnchorPoint(cc.p(-25,2.2));
        gold3.setPosition(cc.p(size.width/2,size.height/2));
        gold3.setTag(0);
        this.addChild(gold3,1);
        var gold3_action1 = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        gold3.runAction(gold3_action1);


        //ManStone

        var manstone1 = new cc.Sprite.create(res.manstone_png);
        manstone1.setAnchorPoint(cc.p(-18,0.7));
        manstone1.setPosition(cc.p(size.width/2,size.height/2));
        manstone1.setTag(0);
        this.addChild(manstone1,1);
        var manstone1_action1 = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        manstone1.runAction(manstone1_action1);

        var manstone2 = new cc.Sprite.create(res.manstone_png);
        manstone2.setAnchorPoint(cc.p(-38,0.7));
        manstone2.setPosition(cc.p(size.width/2,size.height/2));
        manstone2.setTag(0);
        this.addChild(manstone2,1);
        var manstone2_action1 = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        manstone2.runAction(manstone2_action1);

         //Fruit 1st row

        var fruit1 = new cc.Sprite.create(res.fruit_png);
        fruit1.setAnchorPoint(cc.p(-8,1));
        fruit1.setPosition(cc.p(size.width/2,size.height/2));
        fruit1.setTag(0);
        this.addChild(fruit1,1);
        var fruit1_action1 = cc.RepeatForever.create(cc.MoveBy.create(0.01, cc.p(-2, 0)))
        fruit1.runAction(fruit1_action1);

        //Dragon view
        
        var dragon = new cc.Sprite.create(res.dragon_png);
        dragon.setAnchorPoint(cc.p(2,0.5));
        dragon.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(dragon,1);

     

       //star animation
       var star = new cc.Sprite.create(res.star_png);
       star.setAnchorPoint(cc.p(3.55, 1.1));
       star.setPosition(cc.p(size.width / 2, size.height / 2));
       this.addChild(star, 1)
    
      star.setOpacity(0);
      var star_action = cc.FadeIn.create(.1);
      var star_action1 = cc.FadeOut.create(0.5);
      var sequence_star = cc.Sequence.create(star_action, star_action1);

      var star1 = new cc.Sprite.create(res.star_png);
      star1.setAnchorPoint(cc.p(3.5, 2.3));
      star1.setPosition(cc.p(size.width / 2, size.height / 2));
      this.addChild(star1, 1)
    
      star1.setOpacity(0);
      var star1_action = cc.FadeIn.create(.1);
      var star1_action1 = cc.FadeOut.create(0.5);
      var sequence_star1 = cc.Sequence.create(star1_action, star1_action1);

      var star2 = new cc.Sprite.create(res.star_png);
      star2.setAnchorPoint(cc.p(3.55, 3.5));
      star2.setPosition(cc.p(size.width / 2, size.height / 2));
      this.addChild(star2, 1)
    
      star2.setOpacity(0);
      var star2_action = cc.FadeIn.create(.1);
      var star2_action1 = cc.FadeOut.create(0.5);
      var sequence_star2 = cc.Sequence.create(star2_action, star2_action1);
      //Game Over Scene

  

      var gameover = new cc.Sprite.create(res.gameover_png);
      gameover.setAnchorPoint(cc.p(0.5, 0.5));
      gameover.setPosition(cc.p(size.width / 2, size.height / 2));
      this.addChild(gameover, 1)
    
      gameover.setOpacity(0);
      var gameover_action = cc.FadeIn.create(.1);
      var gameover_action1 = cc.FadeOut.create(100);
      var sequence_gameover = cc.Sequence.create(gameover_action, gameover_action1);

      var dragon_action = cc.Repeat.create(cc.MoveBy.create(0.0001,cc.p(0,30)),2);
      var dragon_action1 = cc.Repeat.create(cc.MoveBy.create(0.0001,cc.p(0,-30)),2);


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
                            var rectdragon = dragon.getBoundingBox();
                            var rectflower = flower.getBoundingBox();
                            var rectflower1 = flower1.getBoundingBox();
                            var rectflower2 = flower2.getBoundingBox();
                            var rectflower3 = flower3.getBoundingBox();
                            var rectflower4 = flower4.getBoundingBox();
                            var rectgold1 = gold1.getBoundingBox();
                            var rectdragon = dragon.getBoundingBox();
                            var flowerx = flower.getPositionX();
                            var flower1x = flower1.getPositionX();
                            cc.log(flower1x);
                            if(flowerx<=100)
                            {
                                flower.setTag(1);
                                //flower.removeFromParent();
                            }
                            if(flower1x<=-112)
                            {
                               flower1.setTag(1);
                                //flower.removeFromParent();
                            }
                            if(cc.rectIntersectsRect(rectflower, rectdragon))
                            {
                                if(flower.getTag()==0)
                                {
                                    flower.setTag(1);
                                    flower.removeFromParent();
                                score = score+1;
                                cc.log(score);
                                label.setString("" +score);
                                highscore = scorefruit+score+scoregold;
                                labelhighscore.setString("" +highscore);
                                cc.audioEngine.playEffect(res.points_Music);
                                cc.log(flowerx);
                                    cc.log("collided");
                                    star.runAction(sequence_star);
                                }
                                    
                        
                            }
                            if(cc.rectIntersectsRect(rectflower1, rectdragon))
                            {
                                if(flower1.getTag()==0)
                                {
                                    flower1.setTag(1);
                                    flower1.removeFromParent();
                                    cc.audioEngine.playEffect(res.points_Music);
                                    score = score+1;
                                    cc.log(score);
                                    label.setString("" +score);
                                    highscore = scorefruit+score+scoregold;
                                    labelhighscore.setString("" +highscore);
                                    cc.log("collided");
                                    cc.log(flower1x);
                                    star2.runAction(sequence_star2);
                                }
                                    
                        
                            }

                            if(cc.rectIntersectsRect(rectflower2, rectdragon))
                            {
                                if(flower2.getTag()==0)
                                {
                                    flower2.setTag(1);
                                    flower2.removeFromParent();
                                    cc.audioEngine.playEffect(res.points_Music);
                                    score = score+1;
                                    cc.log(score);
                                    label.setString("" +score);
                                    highscore = score+scoregold;
                                    labelhighscore.setString("" +highscore);
                                    cc.log("collided");
                                    star2.runAction(sequence_star2);
                                }
                                    
                        
                            }

                            if(cc.rectIntersectsRect(rectflower3, rectdragon))
                            {
                                if(flower3.getTag()==0)
                                {
                                    flower3.setTag(1);
                                    flower3.removeFromParent();
                                    cc.audioEngine.playEffect(res.points_Music);
                                    score = score+1;
                                    cc.log(score);
                                    label.setString("" +score);
                                    highscore = scorefruit+score+scoregold;
                                    labelhighscore.setString("" +highscore);
                                    cc.log("collided");
                                    star1.runAction(sequence_star1);
                                }
                                    
                        
                            }

                            if(cc.rectIntersectsRect(rectflower4, rectdragon))
                            {
                                if(flower4.getTag()==0)
                                {
                                    flower4.setTag(1);
                                    flower4.removeFromParent();
                                    cc.audioEngine.playEffect(res.points_Music);
                                    score = score+1;
                                    cc.log(score);
                                    label.setString("" +score);
                                    highscore = scorefruit+score+scoregold;
                                    labelhighscore.setString("" +highscore);
                                    cc.log("collided");
                                    star1.runAction(sequence_star1);
                                }
                                    
                        
                            }
                           
                        //Gold Collision

                        if(cc.rectIntersectsRect(rectgold1, rectdragon))
                        {
                            if(gold1.getTag()==0)
                            {
                                gold1.setTag(1);
                                gold1.removeFromParent();
                                cc.audioEngine.playEffect(res.points_Music);
                                scoregold = scoregold+1;
                                highscore = scorefruit+score+scoregold;
                                cc.log(scoregold);
                                labelhighscore.setString("" +highscore);
                                cc.log("collided");
                                star.runAction(sequence_star);
                            }
                                
                    
                        }
                        //Gold 2nd row
                        var rectgold2 = gold2.getBoundingBox();
                        var rectgold3 = gold3.getBoundingBox();
                        if(cc.rectIntersectsRect(rectgold2, rectdragon))
                        {
                            if(gold2.getTag()==0)
                            {
                                gold2.setTag(1);
                                gold2.removeFromParent();
                                cc.audioEngine.playEffect(res.points_Music);
                                scoregold = scoregold+1;
                                highscore = scorefruit+score+scoregold;
                                cc.log(scoregold);
                                labelhighscore.setString("" +highscore);
                                cc.log("collided");
                                star1.runAction(sequence_star1);
                            }
                                
                    
                        }
                        if(cc.rectIntersectsRect(rectgold3, rectdragon))
                        {
                            if(gold3.getTag()==0)
                            {
                                gold3.setTag(1);
                                gold3.removeFromParent();
                                cc.audioEngine.playEffect(res.points_Music);
                                scoregold = scoregold+1;
                                highscore = scorefruit+score+scoregold;
                                cc.log(scoregold);
                                labelhighscore.setString("" +highscore);
                                cc.log("collided");
                                star1.runAction(sequence_star1);
                            }
                                
                    
                        }
                        //Fruit Collision
                        var rectfruit1 = fruit1.getBoundingBox();
                        if(cc.rectIntersectsRect(rectfruit1, rectdragon))
                        {
                            if(fruit1.getTag()==0)
                            {
                                fruit1.setTag(1);
                                fruit1.removeFromParent();
                                cc.audioEngine.playEffect(res.points_Music);
                                scorefruit = scorefruit+1;
                                highscore = scorefruit+score+scoregold;
                                cc.log(scoregold);
                                labelhighscore.setString("" +highscore);
                                cc.log("collided");
                                star.runAction(sequence_star);
                            }
                                
                    
                        }
                        //Manstone collision
                        var rectmanstone = manstone1.getBoundingBox();
                        if(cc.rectIntersectsRect(rectmanstone, rectdragon))
                        {
                            if(manstone1.getTag()==0)
                            {
                                manstone1.setTag(1);
                                manstone1.removeFromParent();
                                // cc.audioEngine.playEffect(res.points_Music);
                                // scorefruit = scorefruit+1;
                                // highscore = scorefruit+score+scoregold;
                                // cc.log(scoregold);
                                // labelhighscore.setString("" +highscore);
                                view.runAction(sequence_view);
                                secondview2.runAction(sprite_action2);
                                gameover.runAction(sequence_gameover);
                            }
                                
                    
                        }
                        var rectmanstone2 = manstone2.getBoundingBox();
                        if(cc.rectIntersectsRect(rectmanstone2, rectdragon))
                        {
                            if(manstone2.getTag()==0)
                            {
                                manstone2.setTag(1);
                                manstone2.removeFromParent();
                                // cc.audioEngine.playEffect(res.points_Music);
                                // scorefruit = scorefruit+1;
                                // highscore = scorefruit+score+scoregold;
                                // cc.log(scoregold);
                                // labelhighscore.setString("" +highscore);
                                view.runAction(sequence_view);
                                secondview2.runAction(sprite_action2);
                                gameover.runAction(sequence_gameover);
                            }
                                
                    
                        }
                       
              
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
   
});
var stopMusic = function()
{
    cc.audioEngine.stopMusic();
}

function star()
{
    var size = cc.winSize;
    var star = new cc.Sprite.create(res.star_png);
    star.setAnchorPoint(cc.p(0.5, 0.5));
    star.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(star, 1)
    // var label_action3 = cc.Repeat.create(cc.RotateBy.create(0.5, 20),10);
    // var label_action2 = cc.FadeOut.create(5);
    // var sequence_label = cc.Sequence.create(label_action3,label_action2);
    // Coin600.runAction(sequence_label);
}

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

