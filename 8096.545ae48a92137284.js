"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8096],{8096:(w,g,o)=>{o.d(g,{k:()=>A});var f=o(7673),d=o(6354),c=o(1900);const k=class v{constructor(i){this.selected=!1,this.name=i}capitalize(i){return i.charAt(0).toUpperCase()+i.slice(1)}get displayName(){return this.capitalize(this.name)}},x=class h{constructor(i,G){this.expanded=!0,this.name=i,this.workouts=G}};var y=o(3953),j=o(1626),E=o(9333),q=o(4589);let A=(()=>{var l;class i{constructor(e,r,t){this.http=e,this.user=r,this.muscleGroupService=t}load(){return this.exercises?(console.log("returning data from memory"),(0,f.of)(this.exercises)):(console.log("returning data from file"),this.http.get("assets/data/workouts.json").pipe((0,d.T)(this.processData,this)))}organizeByMajorMuscleGroup(e){console.log("organizing data");var r=this.muscleGroupService.getMuscleGroups();return this.exercisesByGroup=r.map(t=>{var s=e.filter(m=>{var u,a;return t.values.includes(null!==(u=null===(a=m.primaryMuscles)||void 0===a?void 0:a[0])&&void 0!==u?u:"")});return new x(t.name,s)}),this.exercisesByGroup}organizeByMuscleGroup(e){return[...new Set(e.map(s=>s.primaryMuscles).flat().filter(s=>void 0!==s))].map(s=>new x(s,e.filter(m=>{var u;return null===(u=m.primaryMuscles)||void 0===u?void 0:u.includes(s)})))}processData(e){return console.log("processing data"),this.exercises=e.map(r=>(r.isFavourite=this.user.hasFavorite(r.id),Object.assign(new c.A,r))),this.fetchEquipments(),this.exercises}loadWorkOuts(){return this.load()}getWorkout(e){return this.load().pipe((0,d.T)(r=>r.find(t=>t.id===e)))}getAllWorkouts(){return console.log("getting all workouts"),this.exercises}getWorkouts(e,r,t,s="",n=!1){return this.load().pipe((0,d.T)(m=>{var u=m.filter(a=>{var p,M,b,B;return(0==t.length||t.includes(null!==(p=a.level)&&void 0!==p?p:"")&&0==e.length||e.includes(null!==(M=null===(b=a.primaryMuscles)||void 0===b?void 0:b[0])&&void 0!==M?M:""))&&(0==r.length||r.includes(null!==(B=a.equipment)&&void 0!==B?B:""))&&(""==s||a.name.toLowerCase().includes(s))});return n&&(u=u.filter(a=>{var p;return(null===(p=a.videos)||void 0===p?void 0:p.length)>0})),u})).pipe((0,d.T)(this.organizeByMajorMuscleGroup,this))}getLevels(){var e,r=null===(e=this.exercises)||void 0===e?void 0:e.map(s=>s.level);return Array.from(new Set(r))}getEquipments(){return this.equipments}getMuscles(){var e;const r=null===(e=this.exercises)||void 0===e?void 0:e.map(s=>s.primaryMuscles).reduce((s,n)=>s.concat(n),[]);return Array.from(new Set(r))}fetchEquipments(){var e;const t=[...new Set(null===(e=this.exercises)||void 0===e?void 0:e.map(s=>s.equipment).filter(s=>void 0!==s).map(s=>null===s?"Cardio":s))].map(s=>new k(s));this.equipments=t}}return(l=i).\u0275fac=function(e){return new(e||l)(y.KVO(j.Qq),y.KVO(E.E),y.KVO(q.A))},l.\u0275prov=y.jDH({token:l,factory:l.\u0275fac,providedIn:"root"}),i})()},4589:(w,g,o)=>{o.d(g,{A:()=>d});var f=o(3953);let d=(()=>{var c;class v{constructor(){this.majorGroupsBasic={all:["abdominals","hamstrings","adductors","quadriceps","calves","glutes","abductors","biceps","triceps","forearms","shoulders","traps","neck","middle back","lower back","lats","chest"],core:["abdominals"],legs:["hamstrings","adductors","quadriceps","calves","glutes","abductors"],arms:["biceps","triceps","forearms"],"upper body":["shoulders","traps","neck"],back:["middle back","lower back","lats"],chest:["chest"]},this.muscleGroupsAdvanced=["abdominals","hamstrings","adductors","quadriceps","biceps","shoulders","chest","middle back","calves","glutes","lower back","lats","triceps","traps","forearms","neck","abductors"]}getAllMuscleGroupsFlat(){return this.majorGroupsBasic}getMuscleGroups(){return[{key:"core",values:this.majorGroupsBasic.core,name:"Core",orderNumber:1},{key:"legs",values:this.majorGroupsBasic.legs,name:"Legs",orderNumber:2},{key:"arms",values:this.majorGroupsBasic.arms,name:"Arms",orderNumber:3},{key:"upper body",values:this.majorGroupsBasic["upper body"],name:"Upper Body",orderNumber:4},{key:"back",values:this.majorGroupsBasic.back,name:"Back",orderNumber:5},{key:"chest",values:this.majorGroupsBasic.chest,name:"Chest",orderNumber:6}]}}return(c=v).\u0275fac=function(h){return new(h||c)},c.\u0275prov=f.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),v})()}}]);