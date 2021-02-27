const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16;
var t17,t18,t19,t20,t21,t23
 function preload(){

 }
 function setup(){
    var canvas=createCanvas(800,700);
    platform=new Tower(400,500,200,20);

 }
 function draw(){
     Engine.update(engine);
     platform.display();
 }
