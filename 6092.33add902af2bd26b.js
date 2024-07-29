"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6092],{6092:(P,f,l)=>{l.r(f),l.d(f,{WorkoutDetailPageModule:()=>m});var v=l(177),h=l(4341),w=l(617),u=l(5374),g=l(8573),e=l(3953),F=l(9144),y=l(9333);function p(o,t){1&o&&e.nrm(0,"ion-icon",13)}function b(o,t){1&o&&e.nrm(0,"ion-icon",14)}function M(o,t){if(1&o&&(e.j41(0,"swiper-slide"),e.nrm(1,"img",15),e.k0s()),2&o){const i=t.$implicit;e.R7$(),e.Y8G("src","assets/exercises/"+i,e.B4B)}}function j(o,t){if(1&o&&(e.j41(0,"ion-item-group")(1,"p",16),e.EFF(2),e.k0s()()),2&o){const i=t.$implicit;e.R7$(2),e.JRh(i)}}const a=[{path:"",component:(()=>{var o;class t{constructor(r,s,n){this.workoutData=r,this.userProvider=s,this.route=n,this.isFavorite=!1,this.defaultHref="",this.swiperConfig={autoplay:{delay:2500,disableOnInteraction:!1},loop:!0}}ngOnInit(){}ionViewWillEnter(){const r=this.route.snapshot.paramMap.get("workoutId");console.log("workoutId "+r),r&&this.workoutData.getWorkout(r).subscribe(s=>{var n;this.workout=s,this.isFavorite=this.userProvider.hasFavorite(null===(n=this.workout)||void 0===n?void 0:n.name)})}ionViewDidEnter(){this.defaultHref="/app/tabs/workouts"}sessionClick(r){console.log("Clicked",r)}toggleFavorite(){var r,s,n;this.userProvider.hasFavorite(null===(r=this.workout)||void 0===r?void 0:r.name)?(this.userProvider.removeFavorite(null===(s=this.workout)||void 0===s?void 0:s.name),this.isFavorite=!1):(this.userProvider.addFavorite(null===(n=this.workout)||void 0===n?void 0:n.name),this.isFavorite=!0)}shareSession(){console.log("Clicked share session")}}return(o=t).\u0275fac=function(r){return new(r||o)(e.rXU(F.k),e.rXU(y.E),e.rXU(g.nX))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-workout-detail"]],decls:50,vars:16,consts:[["slot","start"],[3,"defaultHref"],["slot","end"],[3,"click"],["slot","icon-only","name","star-outline",4,"ngIf"],["slot","icon-only","name","star",4,"ngIf"],["slot","icon-only","name","share"],[1,"workout-detail"],[3,"slidesPerView","loop","pagination","config"],[4,"ngFor","ngForOf"],["lines","none"],[1,"ion-text-end"],[1,"ion-padding-top","ion-padding-start"],["slot","icon-only","name","star-outline"],["slot","icon-only","name","star"],[3,"src"],[1,"ion-padding-start","ion-padding-end"]],template:function(r,s){1&r&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e.nrm(3,"ion-back-button",1),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.k0s(),e.j41(6,"ion-buttons",2)(7,"ion-button",3),e.bIt("click",function(){return s.toggleFavorite()}),e.DNE(8,p,1,0,"ion-icon",4)(9,b,1,0,"ion-icon",5),e.k0s(),e.j41(10,"ion-button",3),e.bIt("click",function(){return s.shareSession()}),e.nrm(11,"ion-icon",6),e.k0s()()()(),e.j41(12,"ion-content")(13,"div",7)(14,"swiper-container",8),e.DNE(15,M,2,1,"swiper-slide",9),e.k0s(),e.j41(16,"ion-list",10)(17,"ion-item")(18,"ion-label"),e.EFF(19," Level "),e.k0s(),e.j41(20,"ion-label",11),e.EFF(21),e.k0s()(),e.j41(22,"ion-item")(23,"ion-label"),e.EFF(24," Equipment Needed "),e.k0s(),e.j41(25,"ion-label",11),e.EFF(26),e.k0s()(),e.j41(27,"ion-item")(28,"ion-label"),e.EFF(29," Primary Muscles "),e.k0s(),e.j41(30,"ion-label",11),e.EFF(31),e.k0s()(),e.j41(32,"ion-item")(33,"ion-label"),e.EFF(34," Secondary Muscles "),e.k0s(),e.j41(35,"ion-label",11),e.EFF(36),e.k0s()(),e.j41(37,"ion-item")(38,"ion-label"),e.EFF(39," Mechanic "),e.k0s(),e.j41(40,"ion-label",11),e.EFF(41),e.k0s()(),e.j41(42,"ion-item")(43,"ion-label"),e.EFF(44," Category "),e.k0s(),e.j41(45,"ion-label",11),e.EFF(46),e.k0s()()(),e.j41(47,"h3",12),e.EFF(48,"Instructions"),e.k0s(),e.DNE(49,j,3,1,"ion-item-group",9),e.k0s()()),2&r&&(e.R7$(3),e.Y8G("defaultHref",s.defaultHref),e.R7$(2),e.JRh(null==s.workout?null:s.workout.name),e.R7$(3),e.Y8G("ngIf",!s.isFavorite),e.R7$(),e.Y8G("ngIf",s.isFavorite),e.R7$(5),e.Y8G("slidesPerView",1)("loop",!0)("pagination",!0)("config",s.swiperConfig),e.R7$(),e.Y8G("ngForOf",null==s.workout?null:s.workout.images),e.R7$(6),e.SpI(" ",null==s.workout?null:s.workout.level," "),e.R7$(5),e.SpI(" ",null==s.workout?null:s.workout.equipment," "),e.R7$(5),e.SpI(" ",null==s.workout||null==s.workout.primaryMuscles?null:s.workout.primaryMuscles.join(", ")," "),e.R7$(5),e.SpI(" ",null==s.workout||null==s.workout.secondaryMuscles?null:s.workout.secondaryMuscles.join(", ")," "),e.R7$(5),e.SpI(" ",null==s.workout?null:s.workout.mechanic," "),e.R7$(5),e.SpI(" ",null==s.workout?null:s.workout.category," "),e.R7$(3),e.Y8G("ngForOf",null==s.workout?null:s.workout.instructions))},dependencies:[v.Sq,v.bT,u.Jm,u.QW,u.W9,u.eU,u.iq,u.uz,u.jh,u.he,u.nf,u.BC,u.ai,u.el],styles:[".workout-detail[_ngcontent-%COMP%]{position:relative;margin-top:-10px;border-radius:10px;background:var(--ion-background-color, #ffffff);z-index:2}swiper-container[_ngcontent-%COMP%]{background-color:#000;width:100%;height:100%}swiper-slide[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}"]}),t})()}];let c=(()=>{var o;class t{}return(o=t).\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[g.iI.forChild(a),g.iI]}),t})(),m=(()=>{var o;class t{constructor(){this.swiperModules=[w.Jl]}}return(o=t).\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[v.MD,h.YN,u.bv,c]}),t})()},9144:(P,f,l)=>{l.d(f,{k:()=>E});var v=l(7673),h=l(6354);const u=class w{get thumbnail(){return this.images&&this.images.length>0?"assets/exercises/"+this.images[0]:null}},e=class g{constructor(c){this.selected=!1,this.name=c}capitalize(c){return c.charAt(0).toUpperCase()+c.slice(1)}get displayName(){return this.capitalize(this.name)}},y=class F{constructor(c,m){this.expanded=!0,this.name=c,this.workouts=m}};var p=l(3953),b=l(1626),M=l(9333);let j=(()=>{var a;class c{constructor(){this.majorGroupsBasic={all:["abdominals","hamstrings","adductors","quadriceps","calves","glutes","abductors","biceps","triceps","forearms","shoulders","traps","neck","middle back","lower back","lats","chest"],core:["abdominals"],legs:["hamstrings","adductors","quadriceps","calves","glutes","abductors"],arms:["biceps","triceps","forearms"],"upper body":["shoulders","traps","neck"],back:["middle back","lower back","lats"],chest:["chest"]},this.muscleGroupsAdvanced=["abdominals","hamstrings","adductors","quadriceps","biceps","shoulders","chest","middle back","calves","glutes","lower back","lats","triceps","traps","forearms","neck","abductors"]}getMuscleGroups(){return[{key:"core",values:this.majorGroupsBasic.core,name:"Core",orderNumber:1},{key:"legs",values:this.majorGroupsBasic.legs,name:"Legs",orderNumber:2},{key:"arms",values:this.majorGroupsBasic.arms,name:"Arms",orderNumber:3},{key:"upper body",values:this.majorGroupsBasic["upper body"],name:"Upper Body",orderNumber:4},{key:"back",values:this.majorGroupsBasic.back,name:"Back",orderNumber:5},{key:"chest",values:this.majorGroupsBasic.chest,name:"Chest",orderNumber:6}]}}return(a=c).\u0275fac=function(o){return new(o||a)},a.\u0275prov=p.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),c})(),E=(()=>{var a;class c{constructor(o,t,i){this.http=o,this.user=t,this.muscleGroupService=i}load(){return this.exercises?(0,v.of)(this.exercises):(console.log("downloading data"),this.http.get("assets/data/workouts.json").pipe((0,h.T)(this.processData,this)))}organizeByMajorMuscleGroup(o){console.log("organizing data");var t=this.muscleGroupService.getMuscleGroups();return this.exercisesByGroup=t.map(i=>{var r=o.filter(n=>{var d,k;return i.values.includes(null!==(d=null===(k=n.primaryMuscles)||void 0===k?void 0:k[0])&&void 0!==d?d:"")});return new y(i.name,r)}),this.exercisesByGroup}organizeByMuscleGroup(o){return[...new Set(o.map(r=>r.primaryMuscles).flat().filter(r=>void 0!==r))].map(r=>new y(r,o.filter(n=>{var d;return null===(d=n.primaryMuscles)||void 0===d?void 0:d.includes(r)})))}processData(o){return console.log("processing data"),this.exercises=o.map(t=>Object.assign(new u,t)),this.fetchEquipments(),this.exercises}loadWorkOuts(){return this.load()}getWorkout(o){return this.load().pipe((0,h.T)(t=>t.find(i=>i.id===o)))}getWorkouts(o,t,i){return this.load().pipe((0,h.T)(r=>r.filter(n=>{var d,k,G,D;return(0==i.length||i.includes(null!==(d=n.level)&&void 0!==d?d:"")&&0==o.length||o.includes(null!==(k=null===(G=n.primaryMuscles)||void 0===G?void 0:G[0])&&void 0!==k?k:""))&&(0==t.length||t.includes(null!==(D=n.equipment)&&void 0!==D?D:""))}))).pipe((0,h.T)(this.organizeByMajorMuscleGroup,this))}getLevels(){var o,t=null===(o=this.exercises)||void 0===o?void 0:o.map(r=>r.level);return Array.from(new Set(t))}getEquipments(){return this.equipments}getMuscles(){var o;const t=null===(o=this.exercises)||void 0===o?void 0:o.map(r=>r.primaryMuscles).reduce((r,s)=>r.concat(s),[]);return Array.from(new Set(t))}fetchEquipments(){var o;const i=[...new Set(null===(o=this.exercises)||void 0===o?void 0:o.map(r=>r.equipment).filter(r=>void 0!==r).map(r=>null===r?"Cardio":r))].map(r=>new e(r));this.equipments=i}}return(a=c).\u0275fac=function(o){return new(o||a)(p.KVO(b.Qq),p.KVO(M.E),p.KVO(j))},a.\u0275prov=p.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),c})()}}]);