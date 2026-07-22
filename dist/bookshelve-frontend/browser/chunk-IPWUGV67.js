import{a as Ki,b as ji}from"./chunk-NMHIYKVW.js";import{a as ge,b as Xe,c as Lt,d as Me,e as Ai,f as Ri,g as be,h as Ni,i as zi,j as Ve,k as Ee,l as pt,m as At,n as Nt,o as dt,p as li,q as Yi,r as qi,s as mt,t as ht,u as Wi,v as Gi,w as Zi,x as en,y as tn,z as nn}from"./chunk-OAYHH5WT.js";import{$ as $t,A as Ft,Ba as Hi,C as Ii,Ca as He,D as Si,Da as de,E as Di,F as Mi,Fa as Ui,G as wt,Ga as Je,H as Vi,Ha as Qi,I as Bt,Ia as ut,Ja as et,K as qe,Ka as Rt,L as Z,La as tt,M as $e,N as ri,Na as Ue,O as Ei,Oa as Xi,Pa as Ji,Q as kt,T as Oi,Y as Fi,Z as Bi,aa as $i,ca as Ge,da as Pe,ea as Ze,g as ue,ga as ai,h as ct,i as Se,ia as Tt,j as De,k as _e,ka as ze,l as oe,ma as Pi,o as ki,pa as Pt,sa as fe,ta as z,ua as xe,w as Be,wa as ee,x as Ye,xa as Li,y as Ot,z as oi,za as te}from"./chunk-NJE64P2N.js";import{$ as B,$a as q,$b as Et,Ab as se,Bb as ce,Cb as pe,Db as J,Ea as Fe,Eb as lt,Fb as Q,Gb as j,Ib as Ci,Jb as wi,K as he,Ka as O,L as X,La as ne,Lb as Te,M as ie,Ma as bi,Na as L,Oa as yi,Pa as _,R as H,Sb as y,Tb as N,Va as f,Vb as Ie,Wa as c,Wb as st,X as fi,Xa as Re,Y as d,Ya as ye,Z as m,Za as ve,_ as ae,_a as F,ab as we,ac as je,ba as gi,bb as ke,cb as u,cc as Ne,db as p,dc as Ti,eb as C,ec as We,fa as V,fb as A,fc as ii,ga as at,gb as R,hb as U,hc as ni,ia as Ce,ib as T,ja as me,jb as vi,kb as g,la as re,lb as l,mb as Mt,nb as Ct,ob as M,pb as G,qb as w,rb as k,ub as ot,vb as b,wb as P,xa as Dt,xb as le,yb as Vt,za as s,zb as xi}from"./chunk-VVN7ISPS.js";import{a as Ae,b as Ke}from"./chunk-4CLCTAJ7.js";var An=({dt:t})=>`
.p-skeleton {
    overflow: hidden;
    background: ${t("skeleton.background")};
    border-radius: ${t("skeleton.border.radius")};
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${t("skeleton.animation.background")}, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`,Rn={root:{position:"relative"}},Nn={root:({props:t})=>["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]},on=(()=>{class t extends ee{name="skeleton";theme=An;classes=Nn;inlineStyles=Rn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var si=(()=>{class t extends te{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=H(on);containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":this.shape==="circle","p-skeleton-animation-none":this.animation==="none"}}get containerStyle(){let e=this._componentStyle?.inlineStyles.root,i;return this.size?i=Ke(Ae(Ae({},this.style),e),{width:this.size,height:this.size,borderRadius:this.borderRadius}):i=Ae(Ke(Ae({},e),{width:this.width,height:this.height,borderRadius:this.borderRadius}),this.style),i}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["p-skeleton"]],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[J([on]),L],decls:1,vars:7,consts:[[3,"ngClass","ngStyle"]],template:function(i,n){i&1&&C(0,"div",0),i&2&&(F(n.styleClass),c("ngClass",n.containerClass())("ngStyle",n.containerStyle),f("data-pc-name","skeleton")("aria-hidden",!0)("data-pc-section","root"))},dependencies:[oe,ue,De,z],encapsulation:2,changeDetection:0})}return t})(),rn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[si,z,z]})}return t})();var an=(()=>{class t extends de{static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["AngleDownIcon"]],features:[L],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(i,n){i&1&&(ae(),u(0,"svg",0),C(1,"path",1),p()),i&2&&(F(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var ln=(()=>{class t extends de{static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["AngleUpIcon"]],features:[L],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(i,n){i&1&&(ae(),u(0,"svg",0),C(1,"path",1),p()),i&2&&(F(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var sn=(()=>{class t extends de{static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["CalendarIcon"]],features:[L],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z","fill","currentColor"]],template:function(i,n){i&1&&(ae(),u(0,"svg",0),C(1,"path",1),p()),i&2&&(F(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var cn=(()=>{class t extends de{static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["ChevronLeftIcon"]],features:[L],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(i,n){i&1&&(ae(),u(0,"svg",0),C(1,"path",1),p()),i&2&&(F(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var pn=(()=>{class t extends de{static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["ChevronRightIcon"]],features:[L],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(i,n){i&1&&(ae(),u(0,"svg",0),C(1,"path",1),p()),i&2&&(F(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var un=(()=>{class t extends de{static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["ChevronUpIcon"]],features:[L],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(i,n){i&1&&(ae(),u(0,"svg",0),C(1,"path",1),p()),i&2&&(F(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var dn=(()=>{class t extends de{pathId;ngOnInit(){this.pathId="url(#"+ze()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["StarIcon"]],features:[L],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ae(),u(0,"svg",0)(1,"g"),C(2,"path",1),p(),u(3,"defs")(4,"clipPath",2),C(5,"rect",3),p()()()),i&2&&(F(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),f("clip-path",n.pathId),s(3),c("id",n.pathId))},encapsulation:2})}return t})();var mn=(()=>{class t extends de{pathId;ngOnInit(){this.pathId="url(#"+ze()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["StarFillIcon"]],features:[L],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ae(),u(0,"svg",0)(1,"g"),C(2,"path",1),p(),u(3,"defs")(4,"clipPath",2),C(5,"rect",3),p()()()),i&2&&(F(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),f("clip-path",n.pathId),s(3),c("id",n.pathId))},encapsulation:2})}return t})();var Hn=(t,r)=>r.id;function Un(t,r){if(t&1){let e=T();u(0,"div",4),g("click",function(){let n=d(e).$implicit,o=l();return m(o.spineClick.emit(n.id))})("keydown.enter",function(){let n=d(e).$implicit,o=l();return m(o.spineClick.emit(n.id))}),C(1,"div",5),u(2,"span",6),b(3),p()()}if(t&2){let e=r.$implicit,i=r.$index,n=l();Re("width",n.widthFor(e),"px")("height",n.heightFor(e,i),"px")("background",n.shadeFor(e,i))("--tilt",n.TILT_SEQUENCE[i%n.TILT_SEQUENCE.length],"deg"),ye("is-reading",e.status===n.reading)("active",e.id===n.activeId()),c("title",n.tooltipFor(e)),f("aria-label",e.title+", "+e.status),s(3),P(e.title)}}var Qn=[-3,2,-1,4,-2,1,3,-4,0,2,-3,1,-1],hn=[0,6,-4,3,-6,2,5,-2,4,-5,1,-3,6],zt=class t{books=me.required();activeId=me(null);spineClick=Ce();reading="READING";TILT_SEQUENCE=Qn;widthFor(r){return 14+Math.round((r.totalPages??220)/34)}heightFor(r,e){return 150+(r.rating??2)*14+e%3*8}shadeFor(r,e){let i=Nt[r.status],n=hn[e%hn.length];return`color-mix(in srgb, ${i} ${100-Math.abs(n)}%, ${n>0?"white":"black"} ${Math.abs(n)}%)`}tooltipFor(r){let e=mt(r),i=r.status===this.reading?` \u2014 ${e}% read`:"";return`${r.title} by ${r.author}${i}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-hero-shelf"]],inputs:{books:[1,"books"],activeId:[1,"activeId"]},outputs:{spineClick:"spineClick"},decls:5,vars:0,consts:[[1,"scene"],[1,"spines"],["role","button","tabindex","0",1,"spine",3,"is-reading","active","width","height","background","--tilt","title"],[1,"shelf-plank"],["role","button","tabindex","0",1,"spine",3,"click","keydown.enter","title"],[1,"spine-mark"],[1,"spine-label"]],template:function(e,i){e&1&&(u(0,"div",0)(1,"div",1),we(2,Un,4,15,"div",2,Hn),p(),C(4,"div",3),p()),e&2&&(s(2),ke(i.books()))},styles:[".scene[_ngcontent-%COMP%]{position:relative;height:340px;perspective:1400px;border-radius:6px;background:radial-gradient(ellipse 60% 80% at 30% -10%,rgba(201,160,92,.1),transparent 60%),linear-gradient(180deg,#14171e,#0f1116 70%);border:1px solid var(--bs-hairline);overflow:hidden}.shelf-plank[_ngcontent-%COMP%]{position:absolute;left:24px;right:24px;bottom:34px;height:10px;background:linear-gradient(180deg,#2a2013,#1a140c);border-radius:2px;box-shadow:0 8px 18px #00000080}.spines[_ngcontent-%COMP%]{position:absolute;left:24px;right:24px;bottom:44px;display:flex;align-items:flex-end;gap:3px;transform-style:preserve-3d;transform:rotateX(2deg)}.spine[_ngcontent-%COMP%]{position:relative;border-radius:2px 2px 0 0;cursor:pointer;transform-origin:bottom center;transition:transform .22s cubic-bezier(.22,.9,.32,1),filter .22s;display:flex;align-items:flex-end;justify-content:center;padding-bottom:8px}.spine[_ngcontent-%COMP%]:hover, .spine.active[_ngcontent-%COMP%], .spine[_ngcontent-%COMP%]:focus-visible{transform:translateY(-10px) rotateY(var(--tilt, 0deg)) rotate(-1deg);filter:brightness(1.12)}.spine-label[_ngcontent-%COMP%]{writing-mode:vertical-rl;transform:rotate(180deg);font-family:Fraunces,serif;font-weight:500;font-size:11px;color:#0f0f0fb8;max-height:88%;overflow:hidden;white-space:nowrap}.spine-mark[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;height:5px;background:var(--bs-brass-bright);opacity:0}.spine.is-reading[_ngcontent-%COMP%]   .spine-mark[_ngcontent-%COMP%]{opacity:1}"],changeDetection:0})};var Yn=(t,r)=>r.label;function qn(t,r){if(t&1&&(u(0,"div",1)(1,"div",2),b(2),p(),u(3,"div",3),b(4),p()()),t&2){let e=r.$implicit;s(2),P(e.value),s(2),P(e.label)}}var Ht=class t{stats=me.required();rows=Ie(()=>{let r=this.stats();return[{label:"Total",value:r.totalBooks},{label:"Reading",value:r.currentlyReading},{label:"To read",value:r.toRead},{label:"Completed",value:r.completed},{label:"Abandoned",value:r.abandoned}]});static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-stats-strip"]],inputs:{stats:[1,"stats"]},decls:3,vars:0,consts:[[1,"stats"],[1,"stat"],[1,"num"],[1,"lbl"]],template:function(e,i){e&1&&(u(0,"div",0),we(1,qn,5,2,"div",1,Yn),p()),e&2&&(s(),ke(i.rows()))},styles:[".stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);border:1px solid var(--bs-hairline);border-radius:6px;overflow:hidden}.stat[_ngcontent-%COMP%]{padding:18px 20px;border-right:1px solid var(--bs-hairline);background:var(--bs-ink-2)}.stat[_ngcontent-%COMP%]:last-child{border-right:none}.num[_ngcontent-%COMP%]{font-family:IBM Plex Mono,monospace;font-size:26px;color:var(--bs-brass-bright);font-weight:500}.lbl[_ngcontent-%COMP%]{font-size:11px;color:var(--bs-text-faint);text-transform:uppercase;letter-spacing:.07em;margin-top:4px}@media(max-width:720px){.stats[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}"],changeDetection:0})};var Kn=["onicon"],jn=["officon"],Wn=["cancelicon"],Gn=(t,r)=>({"p-rating-option-active":t,"p-focus-visible":r});function Zn(t,r){if(t&1&&C(0,"span",9),t&2){let e=l(4);c("ngStyle",e.iconOffStyle)("ngClass",e.iconOffClass),f("data-pc-section","offIcon")}}function Xn(t,r){if(t&1&&C(0,"StarIcon",10),t&2){let e=l(4);c("ngStyle",e.iconOffStyle)("styleClass","p-rating-icon"),f("data-pc-section","offIcon")}}function Jn(t,r){if(t&1&&(A(0),_(1,Zn,1,3,"span",7)(2,Xn,1,3,"StarIcon",8),R()),t&2){let e=l(3);s(),c("ngIf",e.iconOffClass),s(),c("ngIf",!e.iconOffClass)}}function eo(t,r){if(t&1&&C(0,"span",12),t&2){let e=l(4);c("ngStyle",e.iconOnStyle)("ngClass",e.iconOnClass),f("data-pc-section","onIcon")}}function to(t,r){if(t&1&&C(0,"StarFillIcon",10),t&2){let e=l(4);c("ngStyle",e.iconOnStyle)("styleClass","p-rating-icon p-rating-icon-active"),f("data-pc-section","onIcon")}}function io(t,r){if(t&1&&(A(0),_(1,eo,1,3,"span",11)(2,to,1,3,"StarFillIcon",8),R()),t&2){let e=l(3);s(),c("ngIf",e.iconOnClass),s(),c("ngIf",!e.iconOnClass)}}function no(t,r){if(t&1){let e=T();u(0,"div",3),g("click",function(n){let o=d(e).$implicit,a=l(2);return m(a.onOptionClick(n,o+1))}),u(1,"span",4)(2,"input",5),g("focus",function(n){let o=d(e).$implicit,a=l(2);return m(a.onInputFocus(n,o+1))})("blur",function(n){d(e);let o=l(2);return m(o.onInputBlur(n))})("change",function(n){let o=d(e).$implicit,a=l(2);return m(a.onChange(n,o+1))}),p()(),_(3,Jn,3,2,"ng-container",6)(4,io,3,2,"ng-container",6),p()}if(t&2){let e=r.$implicit,i=r.index,n=l(2);c("ngClass",j(10,Gn,e+1<=n.value,e+1===n.focusedOptionIndex()&&n.isFocusVisibleItem)),s(),f("data-p-hidden-accessible",!0),s(),c("name",n.nameattr)("checked",n.value===0)("disabled",n.disabled)("readonly",n.readonly)("pAutoFocus",n.autofocus),f("aria-label",n.starAriaLabel(e+1)),s(),c("ngIf",!n.value||i>=n.value),s(),c("ngIf",n.value&&i<n.value)}}function oo(t,r){if(t&1&&(A(0),_(1,no,5,13,"ng-template",2),R()),t&2){let e=l();s(),c("ngForOf",e.starsArray)}}function ro(t,r){t&1&&U(0)}function ao(t,r){if(t&1){let e=T();u(0,"span",14),g("click",function(n){let o=d(e).$implicit,a=l(2);return m(a.onOptionClick(n,o+1))}),_(1,ro,1,0,"ng-container",15),p()}if(t&2){let e=r.index,i=l(2);f("data-pc-section","onIcon"),s(),c("ngTemplateOutlet",i.getIconTemplate(e))}}function lo(t,r){if(t&1&&_(0,ao,2,2,"span",13),t&2){let e=l();c("ngForOf",e.starsArray)}}var so=({dt:t})=>`
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
    gap: ${t("rating.gap")};
}

.p-rating-option {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline-color: transparent;
    border-radius: 50%;
    transition: background ${t("rating.transition.duration")}, color ${t("rating.transition.duration")}, border-color ${t("rating.transition.duration")}, outline-color ${t("rating.transition.duration")}, box-shadow ${t("rating.transition.duration")};
}

.p-rating-option.p-focus-visible {
    box-shadow: ${t("rating.focus.ring.shadow")};
    outline: ${t("rating.focus.ring.width")} ${t("rating.focus.ring.style")} ${t("rating.focus.ring.color")};
    outline-offset: ${t("rating.focus.ring.offset")};
}

.p-rating-icon {
    color: ${t("rating.icon.color")};
    transition: background ${t("rating.transition.duration")}, color ${t("rating.transition.duration")}, border-color ${t("rating.transition.duration")}, outline-color ${t("rating.transition.duration")}, box-shadow ${t("rating.transition.duration")};
    font-size: ${t("rating.icon.size")};
    width: ${t("rating.icon.size")};
    height: ${t("rating.icon.size")};
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {
    color: ${t("rating.icon.hover.color")};
}

.p-rating-option-active .p-rating-icon {
    color: ${t("rating.icon.active.color")};
}

/* For PrimeNG */
p-rating.ng-invalid.ng-dirty > .p-rating > .p-rating-icon {
    stroke: ${t("rating.invalid.icon.color")};
}`,co={root:({props:t})=>["p-rating",{"p-readonly":t.readonly,"p-disabled":t.disabled}],option:({instance:t,props:r,value:e})=>["p-rating-option",{"p-rating-option-active":e<=r.modelValue,"p-focus-visible":e===t.focusedOptionIndex()&&t.isFocusVisibleItem}],onIcon:"p-rating-icon p-rating-on-icon",offIcon:"p-rating-icon p-rating-off-icon"},_n=(()=>{class t extends ee{name="rating";theme=so;classes=co;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var po={provide:ge,useExisting:he(()=>nt),multi:!0},nt=(()=>{class t extends te{disabled;readonly;stars=5;iconOnClass;iconOnStyle;iconOffClass;iconOffStyle;autofocus;onRate=new V;onCancel=new V;onFocus=new V;onBlur=new V;onIconTemplate;offIconTemplate;cancelIconTemplate;templates;value;onModelChange=()=>{};onModelTouched=()=>{};starsArray;isFocusVisibleItem=!0;focusedOptionIndex=re(-1);nameattr;_componentStyle=H(_n);_onIconTemplate;_offIconTemplate;_cancelIconTemplate;ngOnInit(){super.ngOnInit(),this.nameattr=this.nameattr||ze("pn_id_"),this.starsArray=[];for(let e=0;e<this.stars;e++)this.starsArray[e]=e}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"onicon":this._onIconTemplate=e.template;break;case"officon":this._offIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break}})}onOptionClick(e,i){if(!this.readonly&&!this.disabled){this.onOptionSelect(e,i),this.isFocusVisibleItem=!1;let n=Ei(e.currentTarget,"");n&&$e(n)}}onOptionSelect(e,i){!this.readonly&&!this.disabled&&(this.focusedOptionIndex()===i||i===this.value?(this.focusedOptionIndex.set(-1),this.updateModel(e,null)):(this.focusedOptionIndex.set(i),this.updateModel(e,i||null)))}onChange(e,i){this.onOptionSelect(e,i),this.isFocusVisibleItem=!0}onInputBlur(e){this.focusedOptionIndex.set(-1),this.onBlur.emit(e)}onInputFocus(e,i){!this.readonly&&!this.disabled&&(this.focusedOptionIndex.set(i),this.onFocus.emit(e))}updateModel(e,i){this.value=i,this.onModelChange(this.value),this.onModelTouched(),i?this.onRate.emit({originalEvent:e,value:i}):this.onCancel.emit()}starAriaLabel(e){return e===1?this.config.translation.aria.star:this.config.translation.aria.stars.replace(/{star}/g,e)}getIconTemplate(e){return!this.value||e>=this.value?this.offIconTemplate||this._offIconTemplate:this.onIconTemplate||this.offIconTemplate}writeValue(e){this.value=e,this.cd.detectChanges()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get isCustomIcon(){return!!(this.onIconTemplate||this._onIconTemplate||this.offIconTemplate||this._offIconTemplate||this.cancelIconTemplate||this._cancelIconTemplate)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["p-rating"]],contentQueries:function(i,n,o){if(i&1&&(M(o,Kn,4),M(o,jn,4),M(o,Wn,4),M(o,fe,4)),i&2){let a;w(a=k())&&(n.onIconTemplate=a.first),w(a=k())&&(n.offIconTemplate=a.first),w(a=k())&&(n.cancelIconTemplate=a.first),w(a=k())&&(n.templates=a)}},hostAttrs:[1,"p-rating"],hostVars:6,hostBindings:function(i,n){i&2&&(f("data-pc-name","rating")("data-pc-section","root"),ye("p-readonly",n.readonly)("p-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",y],readonly:[2,"readonly","readonly",y],stars:[2,"stars","stars",N],iconOnClass:"iconOnClass",iconOnStyle:"iconOnStyle",iconOffClass:"iconOffClass",iconOffStyle:"iconOffStyle",autofocus:[2,"autofocus","autofocus",y]},outputs:{onRate:"onRate",onCancel:"onCancel",onFocus:"onFocus",onBlur:"onBlur"},features:[J([po,_n]),L],decls:3,vars:2,consts:[["customTemplate",""],[4,"ngIf","ngIfElse"],["ngFor","",3,"ngForOf"],[1,"p-rating-option",3,"click","ngClass"],[1,"p-hidden-accessible"],["type","radio","value","0",3,"focus","blur","change","name","checked","disabled","readonly","pAutoFocus"],[4,"ngIf"],["class","p-rating-icon",3,"ngStyle","ngClass",4,"ngIf"],[3,"ngStyle","styleClass",4,"ngIf"],[1,"p-rating-icon",3,"ngStyle","ngClass"],[3,"ngStyle","styleClass"],["class","p-rating-icon p-rating-icon-active",3,"ngStyle","ngClass",4,"ngIf"],[1,"p-rating-icon","p-rating-icon-active",3,"ngStyle","ngClass"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[4,"ngTemplateOutlet"]],template:function(i,n){if(i&1&&_(0,oo,2,1,"ng-container",1)(1,lo,1,1,"ng-template",null,0,Te),i&2){let o=ot(2);c("ngIf",!n.isCustomIcon)("ngIfElse",o)}},dependencies:[oe,ue,ct,Se,_e,De,He,mn,dn,z],encapsulation:2,changeDetection:0})}return t})(),ft=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[nt,z,z]})}return t})();var uo=(t,r)=>r.id;function mo(t,r){if(t&1){let e=T();C(0,"p-progressBar",5),u(1,"div",6)(2,"span"),b(3),p(),u(4,"span"),b(5),p()(),u(6,"button",7),g("click",function(){d(e);let n=l().$implicit,o=l();return m(o.bumpProgress.emit(n))}),p()}if(t&2){let e,i=l().$implicit,n=l();c("value",n.pct(i))("showValue",!1),s(3),Vt("",i.currentPage,"/",(e=i.totalPages)!==null&&e!==void 0?e:"?","p"),s(2),le("",n.pct(i),"%")}}function ho(t,r){if(t&1&&(C(0,"p-rating",8),u(1,"div",6)(2,"span"),b(3),p()()),t&2){let e,i=l().$implicit,n=l();c("ngModel",(e=i.rating)!==null&&e!==void 0?e:0)("readonly",!0)("stars",5),s(3),le("Finished ",n.formatDate(i.dateCompleted),"")}}function _o(t,r){if(t&1&&(u(0,"div",6)(1,"span"),b(2),p()(),u(3,"div",6)(4,"span"),b(5),p()()),t&2){let e=l().$implicit,i=l();s(2),P(e.genre||"Uncategorized"),s(3),le("Added ",i.formatDate(e.dateAdded),"")}}function fo(t,r){if(t&1){let e=T();u(0,"div",1)(1,"div",3),g("click",function(){let n=d(e).$implicit,o=l();return m(o.openBook.emit(n.id))}),b(2),p(),u(3,"div",4),g("click",function(){let n=d(e).$implicit,o=l();return m(o.openBook.emit(n.id))}),b(4),p(),_(5,mo,7,5)(6,ho,4,4)(7,_o,6,2),p()}if(t&2){let e=r.$implicit,i=l();s(2),P(e.title),s(2),P(e.author),s(),q(i.variant()==="continue"?5:i.variant()==="completed"?6:7)}}function go(t,r){if(t&1&&(u(0,"p",2),b(1),p()),t&2){let e=l();s(),P(e.emptyLabel())}}function bo(t){if(!t)return"";let r=new Date(t),e=new Date,i=r.getFullYear()===e.getFullYear()?{month:"short",day:"numeric"}:{month:"short",day:"numeric",year:"numeric"};return r.toLocaleDateString(void 0,i)}var Ut=class t{books=me.required();variant=me("continue");emptyLabel=me("Nothing here yet.");openBook=Ce();bumpProgress=Ce();pct(r){return mt(r)}formatDate(r){return bo(r)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-book-rail"]],inputs:{books:[1,"books"],variant:[1,"variant"],emptyLabel:[1,"emptyLabel"]},outputs:{openBook:"openBook",bumpProgress:"bumpProgress"},decls:4,vars:1,consts:[[1,"rail"],[1,"cr-card"],[1,"empty"],[1,"cr-title",3,"click"],[1,"cr-author",3,"click"],["styleClass","cr-bar",3,"value","showValue"],[1,"cr-meta"],["pButton","","type","button","label","+10 pages",1,"p-button-sm","p-button-text","cr-bump",3,"click"],["styleClass","cr-rating",3,"ngModel","readonly","stars"]],template:function(e,i){e&1&&(u(0,"div",0),we(1,fo,8,3,"div",1,uo,!1,go,2,1,"p",2),p()),e&2&&(s(),ke(i.books()))},dependencies:[tt,et,ji,Ki,ft,nt,Ve,Me,be],styles:[".rail[_ngcontent-%COMP%]{display:flex;gap:14px;overflow-x:auto;padding-bottom:6px}.cr-card[_ngcontent-%COMP%]{flex:0 0 240px;background:var(--bs-ink-2);border:1px solid var(--bs-hairline);border-radius:6px;padding:16px}.cr-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:600;font-size:15px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cr-author[_ngcontent-%COMP%]{font-size:12px;color:var(--bs-text-dim);margin-top:3px;cursor:pointer}.cr-meta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:6px;font-size:11px;color:var(--bs-text-faint);font-family:IBM Plex Mono,monospace}.cr-bump[_ngcontent-%COMP%]{width:100%;margin-top:10px}.empty[_ngcontent-%COMP%]{color:var(--bs-text-faint);font-size:13px}[_nghost-%COMP%]     .cr-bar{height:4px;margin-top:14px}[_nghost-%COMP%]     .cr-bar .p-progressbar-value{background:var(--bs-brass-bright)}[_nghost-%COMP%]     .cr-rating{margin-top:10px}[_nghost-%COMP%]     .cr-rating .p-rating-icon{font-size:13px;color:var(--bs-brass-bright)}"],changeDetection:0})};var Qt=class t{add=Ce();title=re("");submit(){let r=this.title().trim();r&&(this.add.emit(r),this.title.set(""))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-quick-add"]],outputs:{add:"add"},decls:7,vars:1,consts:[["input",""],[1,"quickadd"],[1,"plus"],["pInputText","","type","text","placeholder","Add a book \u2014 type a title and press Enter",3,"ngModelChange","keydown.enter","ngModel"],[1,"kbd"]],template:function(e,i){if(e&1){let n=T();u(0,"div",1)(1,"span",2),b(2,"+"),p(),u(3,"input",3,0),pe("ngModelChange",function(a){return d(n),ce(i.title,a)||(i.title=a),m(a)}),g("keydown.enter",function(){return d(n),m(i.submit())}),p(),u(5,"span",4),b(6,"\u23CE"),p()()}e&2&&(s(3),se("ngModel",i.title))},dependencies:[Ve,Xe,Me,be,pt,Ee],styles:[".quickadd[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;gap:10px;background:var(--bs-ink-2);border:1px solid var(--bs-hairline);border-radius:3px;padding:6px 14px}.plus[_ngcontent-%COMP%]{color:var(--bs-text-faint);font-size:13px}input[_ngcontent-%COMP%]{flex:1;border:none!important;background:none!important;box-shadow:none!important}.kbd[_ngcontent-%COMP%]{font-family:IBM Plex Mono,monospace;font-size:11px;color:var(--bs-text-faint);border:1px solid var(--bs-hairline);border-radius:3px;padding:2px 6px}"],changeDetection:0})};var yo=["header"],vo=["footer"],xo=["content"],Co=["closeicon"],wo=["headless"],ko=["maskRef"],To=["container"],Io=["closeButton"],So=["*"],Do=(t,r,e,i,n,o)=>({"p-drawer":!0,"p-drawer-active":t,"p-drawer-left":r,"p-drawer-right":e,"p-drawer-top":i,"p-drawer-bottom":n,"p-drawer-full":o}),Mo=(t,r)=>({transform:t,transition:r}),Vo=t=>({value:"visible",params:t});function Eo(t,r){t&1&&U(0)}function Oo(t,r){if(t&1&&_(0,Eo,1,0,"ng-container",4),t&2){let e=l(2);c("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Fo(t,r){t&1&&U(0)}function Bo(t,r){if(t&1&&(u(0,"div"),b(1),p()),t&2){let e=l(3);F(e.cx("title")),s(),P(e.header)}}function $o(t,r){t&1&&C(0,"TimesIcon"),t&2&&f("data-pc-section","closeicon")}function Po(t,r){}function Lo(t,r){t&1&&_(0,Po,0,0,"ng-template")}function Ao(t,r){if(t&1&&_(0,$o,1,1,"TimesIcon",8)(1,Lo,1,0,null,4),t&2){let e=l(4);c("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),s(),c("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Ro(t,r){if(t&1){let e=T();u(0,"p-button",9),g("onClick",function(n){d(e);let o=l(3);return m(o.close(n))})("keydown.enter",function(n){d(e);let o=l(3);return m(o.close(n))}),_(1,Ao,2,2,"ng-template",null,1,Te),p()}if(t&2){let e=l(3);c("ngClass",e.cx("closeButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),f("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function No(t,r){t&1&&U(0)}function zo(t,r){t&1&&U(0)}function Ho(t,r){if(t&1&&(A(0),u(1,"div",5),_(2,zo,1,0,"ng-container",4),p(),R()),t&2){let e=l(3);s(),c("ngClass",e.cx("footer")),f("data-pc-section","footer"),s(),c("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Uo(t,r){if(t&1&&(u(0,"div",5),_(1,Fo,1,0,"ng-container",4)(2,Bo,2,3,"div",6)(3,Ro,3,5,"p-button",7),p(),u(4,"div",5),Ct(5),_(6,No,1,0,"ng-container",4),p(),_(7,Ho,3,3,"ng-container",8)),t&2){let e=l(2);c("ngClass",e.cx("header")),f("data-pc-section","header"),s(),c("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),c("ngIf",e.header),s(),c("ngIf",e.showCloseIcon&&e.closable),s(),c("ngClass",e.cx("content")),f("data-pc-section","content"),s(2),c("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),s(),c("ngIf",e.footerTemplate||e._footerTemplate)}}function Qo(t,r){if(t&1){let e=T();u(0,"div",3,0),g("@panelState.start",function(n){d(e);let o=l();return m(o.onAnimationStart(n))})("@panelState.done",function(n){d(e);let o=l();return m(o.onAnimationEnd(n))})("keydown",function(n){d(e);let o=l();return m(o.onKeyDown(n))}),_(2,Oo,1,1,"ng-container")(3,Uo,8,9),p()}if(t&2){let e=l();ve(e.style),F(e.styleClass),c("ngClass",wi(9,Do,e.visible,e.position==="left"&&!e.fullScreen,e.position==="right"&&!e.fullScreen,e.position==="top"&&!e.fullScreen,e.position==="bottom"&&!e.fullScreen,e.fullScreen||e.position==="full"))("@panelState",Q(19,Vo,j(16,Mo,e.transformOptions,e.transitionOptions))),f("data-pc-name","sidebar")("data-pc-section","root"),s(2),q(e.headlessTemplate||e._headlessTemplate?2:3)}}var Yo=({dt:t})=>`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: fixed;
    transition: transform 0.3s;
    background: ${t("drawer.background")};
    color: ${t("drawer.color")};
    border: 1px solid ${t("drawer.border.color")};
    box-shadow: ${t("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${t("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${t("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${t("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${t("drawer.title.font.weight")};
    font-size: ${t("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}

.p-drawer {
    position: fixed;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
}

.p-drawer-content {
    position: relative;
    overflow-y: auto;
    flex-grow: 1;
}

.p-drawer-header {
    display: flex;
    align-items: center;
}

.p-drawer-footer {
    margin-top: auto;
}

.p-drawer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

.p-drawer-mask {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.2s;
}

.p-overlay-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation 150ms forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation 150ms forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: rgba(0, 0, 0, 0.4);
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background-color: rgba(0, 0, 0, 0.4);
    }
    to {
        background-color: transparent;
    }
}
`,qo={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:t.position==="top"?"flex-start":t.position==="bottom"?"flex-end":"center"})},Ko={mask:({instance:t})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":t.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen,[`p-drawer-${t.position}`]:!!t.position}),root:({instance:t})=>({"p-drawer p-component":!0,"p-drawer-full":t.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},gn=(()=>{class t extends ee{name="drawer";theme=Yo;classes=Ko;inlineStyles=qo;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var jo=ii([Ne({transform:"{{transform}}",opacity:0}),je("{{transition}}")]),Wo=ii([je("{{transition}}",Ne({transform:"{{transform}}",opacity:0}))]),ui=(()=>{class t extends te{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}header;maskStyle;closable=!0;onShow=new V;onHide=new V;visibleChange=new V;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=H(gn);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container.setAttribute(this.attrSelector,""),this.autoZIndex&&Ue.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-active"),i=e.length,n=i==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[i-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",n),$t(this.mask,"style",this.maskStyle),Ye(this.mask,"p-overlay-mask p-drawer-mask p-overlay-mask-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",o=>{this.dismissible&&this.close(o)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Ot())}disableModality(){this.mask&&(Ye(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&Ft(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){e.toState==="visible"&&(this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener())}onAnimationEnd(e){e.toState==="void"&&(this.hide(!1),Ue.clear(this.container),this.unbindGlobalListeners())}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Bt(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.which==27&&parseInt(this.container.style.zIndex)===Ue.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&Ue.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["p-drawer"]],contentQueries:function(i,n,o){if(i&1&&(M(o,yo,4),M(o,vo,4),M(o,xo,4),M(o,Co,4),M(o,wo,4),M(o,fe,4)),i&2){let a;w(a=k())&&(n.headerTemplate=a.first),w(a=k())&&(n.footerTemplate=a.first),w(a=k())&&(n.contentTemplate=a.first),w(a=k())&&(n.closeIconTemplate=a.first),w(a=k())&&(n.headlessTemplate=a.first),w(a=k())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&(G(ko,5),G(To,5),G(Io,5)),i&2){let o;w(o=k())&&(n.maskRef=o.first),w(o=k())&&(n.containerViewChild=o.first),w(o=k())&&(n.closeButtonViewChild=o.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",y],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",y],baseZIndex:[2,"baseZIndex","baseZIndex",N],modal:[2,"modal","modal",y],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",y],showCloseIcon:[2,"showCloseIcon","showCloseIcon",y],closeOnEscape:[2,"closeOnEscape","closeOnEscape",y],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",y]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[J([gn]),L],ngContentSelectors:So,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"ngClass","style","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"]],template:function(i,n){i&1&&(Mt(),_(0,Qo,4,21,"div",2)),i&2&&c("ngIf",n.visible)},dependencies:[oe,ue,Se,_e,Rt,Je,z],encapsulation:2,data:{animation:[Et("panelState",[We("void => visible",[ni(jo)]),We("visible => void",[ni(Wo)])])]},changeDetection:0})}return t})(),bn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[ui,z,z]})}return t})();var Zo=["icon"],Xo=["content"],vn=t=>({$implicit:t}),Jo=(t,r)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":t,"p-togglebutton-icon-right":r});function er(t,r){t&1&&U(0)}function tr(t,r){if(t&1&&C(0,"span",0),t&2){let e=l(3);F(e.checked?e.onIcon:e.offIcon),c("ngClass",j(4,Jo,e.iconPos==="left",e.iconPos==="right")),f("data-pc-section","icon")}}function ir(t,r){if(t&1&&_(0,tr,1,7,"span",2),t&2){let e=l(2);q(e.onIcon||e.offIcon?0:-1)}}function nr(t,r){t&1&&U(0)}function or(t,r){if(t&1&&_(0,nr,1,0,"ng-container",1),t&2){let e=l(2);c("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Q(2,vn,e.checked))}}function rr(t,r){if(t&1&&(_(0,ir,1,1)(1,or,1,4,"ng-container"),u(2,"span",0),b(3),p()),t&2){let e=l();q(e.iconTemplate?1:0),s(2),c("ngClass",e.cx("label")),f("data-pc-section","label"),s(),P(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var ar=({dt:t})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${t("togglebutton.color")};
    background: ${t("togglebutton.background")};
    border: 1px solid ${t("togglebutton.border.color")};
    padding: ${t("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
        outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
    border-radius: ${t("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${t("togglebutton.font.weight")};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${t("togglebutton.gap")};
    padding: ${t("togglebutton.content.padding")};
    background: transparent;
    border-radius: ${t("togglebutton.content.border.radius")};
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
            outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${t("togglebutton.hover.background")};
    color: ${t("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${t("togglebutton.checked.background")};
    border-color: ${t("togglebutton.checked.border.color")};
    color: ${t("togglebutton.checked.color")};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${t("togglebutton.content.checked.background")};
    box-shadow: ${t("togglebutton.content.checked.shadow")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${t("togglebutton.focus.ring.shadow")};
    outline: ${t("togglebutton.focus.ring.width")} ${t("togglebutton.focus.ring.style")} ${t("togglebutton.focus.ring.color")};
    outline-offset: ${t("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${t("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled:not(.p-togglebutton-checked) {
    opacity: 1;
    cursor: default;
    background: ${t("togglebutton.disabled.background")};
    border-color: ${t("togglebutton.disabled.border.color")};
    color: ${t("togglebutton.disabled.color")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${t("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${t("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${t("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${t("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${t("togglebutton.sm.padding")};
    font-size: ${t("togglebutton.sm.font.size")};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${t("togglebutton.content.sm.padding")};
}

.p-togglebutton-lg {
    padding: ${t("togglebutton.lg.padding")};
    font-size: ${t("togglebutton.lg.font.size")};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${t("togglebutton.content.lg.padding")};
}

/* For PrimeNG (iconPos) */
.p-togglebutton-icon-right {
    order: 1;
}

.p-togglebutton.ng-invalid.ng-dirty {
    border-color: ${t("togglebutton.invalid.border.color")};
}
`,lr={root:({instance:t})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":t.checked,"p-disabled":t.disabled,"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},yn=(()=>{class t extends ee{name="togglebutton";theme=ar;classes=lr;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var sr={provide:ge,useExisting:he(()=>di),multi:!0},di=(()=>{class t extends te{get hostClass(){return this.styleClass||""}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new V;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=H(yn);onBlur(){this.onModelTouched()}writeValue(e){this.checked=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(i,n,o){if(i&1&&(M(o,Zo,4),M(o,Xo,4),M(o,fe,4)),i&2){let a;w(a=k())&&(n.iconTemplate=a.first),w(a=k())&&(n.contentTemplate=a.first),w(a=k())&&(n.templates=a)}},hostVars:23,hostBindings:function(i,n){i&1&&g("keydown",function(a){return n.onKeyDown(a)})("click",function(a){return n.toggle(a)}),i&2&&(vi("tabindex",n.tabindex),f("disabled",n.disabled)("aria-labelledby",n.ariaLabelledBy)("aria-pressed",n.checked)("data-p-checked",n.active)("data-p-disabled",n.disabled)("type","button"),F(n.hostClass),ye("p-togglebutton",!0)("p-togglebutton-checked",n.checked)("p-disabled",n.disabled)("p-togglebutton-sm",n.size==="small")("p-inputfield-sm",n.size==="small")("p-togglebutton-lg",n.size==="large")("p-inputfield-lg",n.size==="large"))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",y],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",N],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",y],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[J([sr,yn]),yi([ut]),L],decls:3,vars:6,consts:[[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(i,n){i&1&&(u(0,"span",0),_(1,er,1,0,"ng-container",1)(2,rr,4,4),p()),i&2&&(c("ngClass",n.cx("content")),s(),c("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",Q(4,vn,n.checked)),s(),q(n.contentTemplate?-1:2))},dependencies:[oe,ue,_e,z],encapsulation:2,changeDetection:0})}return t})();var cr=["item"],pr=(t,r)=>({$implicit:t,index:r});function ur(t,r){return this.getOptionLabel(r)}function dr(t,r){t&1&&U(0)}function mr(t,r){if(t&1&&_(0,dr,1,0,"ng-container",3),t&2){let e=l(2),i=e.$implicit,n=e.$index,o=l();c("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",j(2,pr,i,n))}}function hr(t,r){t&1&&_(0,mr,1,5,"ng-template",null,0,Te)}function _r(t,r){if(t&1){let e=T();u(0,"p-toggleButton",2),g("onChange",function(n){let o=d(e),a=o.$implicit,h=o.$index,v=l();return m(v.onOptionSelect(n,a,h))}),_(1,hr,2,0),p()}if(t&2){let e=r.$implicit,i=l();c("autofocus",i.autofocus)("styleClass",i.styleClass)("ngModel",i.isSelected(e))("onLabel",i.getOptionLabel(e))("offLabel",i.getOptionLabel(e))("disabled",i.disabled||i.isOptionDisabled(e))("allowEmpty",i.getAllowEmpty())("size",i.size),s(),q(i.itemTemplate||i._itemTemplate?1:-1)}}var fr=({dt:t})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: ${t("selectbutton.border.radius")};
    border-end-start-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: ${t("selectbutton.border.radius")};
    border-end-end-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${t("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,gr={root:({props:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid}]},xn=(()=>{class t extends ee{name="selectbutton";theme=fr;classes=gr;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var br={provide:ge,useExisting:he(()=>bt),multi:!0},bt=(()=>{class t extends te{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new V;onChange=new V;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=H(xn);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?Pe(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Pe(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?Pe(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}writeValue(e){this.value=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOptionSelect(e,i,n){if(this.disabled||this.isOptionDisabled(i))return;let o=this.isSelected(i);if(o&&this.unselectable)return;let a=this.getOptionValue(i),h;if(this.multiple)o?h=this.value.filter(v=>!Ze(v,a,this.equalityKey)):h=this.value?[...this.value,a]:[a];else{if(o&&!this.allowEmpty)return;h=o?null:a}this.focusedIndex=n,this.value=h,this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:i,index:n})}changeTabIndexes(e,i){let n,o;for(let a=0;a<=this.el.nativeElement.children.length-1;a++)this.el.nativeElement.children[a].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[a],index:a});i==="prev"?n.index===0?o=this.el.nativeElement.children.length-1:o=n.index-1:n.index===this.el.nativeElement.children.length-1?o=0:o=n.index+1,this.focusedIndex=o,this.el.nativeElement.children[o].focus()}onFocus(e,i){this.focusedIndex=i}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(i=>!Ze(i,this.getOptionValue(e),this.dataKey))}isSelected(e){let i=!1,n=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let o of this.value)if(Ze(o,n,this.dataKey)){i=!0;break}}}else i=Ze(this.getOptionValue(e),this.value,this.equalityKey);return i}templates;ngAfterContentInit(){this.templates.forEach(e=>{e.getType()==="item"&&(this._itemTemplate=e.template)})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(i,n,o){if(i&1&&(M(o,cr,4),M(o,fe,4)),i&2){let a;w(a=k())&&(n.itemTemplate=a.first),w(a=k())&&(n.templates=a)}},hostVars:10,hostBindings:function(i,n){i&2&&(f("role","group")("aria-labelledby",n.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),ve(n.style),ye("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",y],tabindex:[2,"tabindex","tabindex",N],multiple:[2,"multiple","multiple",y],allowEmpty:[2,"allowEmpty","allowEmpty",y],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",y],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",y]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[J([br,xn]),L],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&we(0,_r,2,9,"p-toggleButton",1,ur,!0),i&2&&ke(n.options)},dependencies:[di,Ve,Me,be,oe,_e,z],encapsulation:2,changeDetection:0})}return t})(),Yt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[bt,z,z]})}return t})();var yr=["sliderHandle"],vr=["sliderHandleStart"],xr=["sliderHandleEnd"],Cr=(t,r,e,i)=>({"p-slider p-component":!0,"p-disabled":t,"p-slider-horizontal":r,"p-slider-vertical":e,"p-slider-animate":i}),wr=(t,r)=>({position:"absolute","inset-inline-start":t,width:r}),kr=(t,r)=>({position:"absolute",bottom:t,height:r}),Tr=t=>({position:"absolute",height:t}),Ir=t=>({position:"absolute",width:t}),mi=(t,r)=>({position:"absolute","inset-inline-start":t,bottom:r}),kn=t=>({"p-slider-handle-active":t});function Sr(t,r){if(t&1&&C(0,"span",8),t&2){let e=l();c("ngStyle",j(2,wr,e.offset!==null&&e.offset!==void 0?e.offset+"%":e.handleValues[0]+"%",e.diff?e.diff+"%":e.handleValues[1]-e.handleValues[0]+"%")),f("data-pc-section","range")}}function Dr(t,r){if(t&1&&C(0,"span",8),t&2){let e=l();c("ngStyle",j(2,kr,e.offset!==null&&e.offset!==void 0?e.offset+"%":e.handleValues[0]+"%",e.diff?e.diff+"%":e.handleValues[1]-e.handleValues[0]+"%")),f("data-pc-section","range")}}function Mr(t,r){if(t&1&&C(0,"span",8),t&2){let e=l();c("ngStyle",Q(2,Tr,e.handleValue+"%")),f("data-pc-section","range")}}function Vr(t,r){if(t&1&&C(0,"span",8),t&2){let e=l();c("ngStyle",Q(2,Ir,e.handleValue+"%")),f("data-pc-section","range")}}function Er(t,r){if(t&1){let e=T();u(0,"span",9,0),g("touchstart",function(n){d(e);let o=l();return m(o.onDragStart(n))})("touchmove",function(n){d(e);let o=l();return m(o.onDrag(n))})("touchend",function(n){d(e);let o=l();return m(o.onDragEnd(n))})("mousedown",function(n){d(e);let o=l();return m(o.onMouseDown(n))})("keydown",function(n){d(e);let o=l();return m(o.onKeyDown(n))}),p()}if(t&2){let e=l();Re("transition",e.dragging?"none":null),c("ngStyle",j(12,mi,e.orientation=="horizontal"?e.handleValue+"%":null,e.orientation=="vertical"?e.handleValue+"%":null))("pAutoFocus",e.autofocus),f("tabindex",e.disabled?null:e.tabindex)("aria-valuemin",e.min)("aria-valuenow",e.value)("aria-valuemax",e.max)("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("aria-orientation",e.orientation)("data-pc-section","handle")}}function Or(t,r){if(t&1){let e=T();u(0,"span",10,1),g("keydown",function(n){d(e);let o=l();return m(o.onKeyDown(n,0))})("mousedown",function(n){d(e);let o=l();return m(o.onMouseDown(n,0))})("touchstart",function(n){d(e);let o=l();return m(o.onDragStart(n,0))})("touchmove",function(n){d(e);let o=l();return m(o.onDrag(n))})("touchend",function(n){d(e);let o=l();return m(o.onDragEnd(n))}),p()}if(t&2){let e=l();Re("transition",e.dragging?"none":null),c("ngStyle",j(13,mi,e.rangeStartLeft,e.rangeStartBottom))("ngClass",Q(16,kn,e.handleIndex==0))("pAutoFocus",e.autofocus),f("tabindex",e.disabled?null:e.tabindex)("aria-valuemin",e.min)("aria-valuenow",e.value?e.value[0]:null)("aria-valuemax",e.max)("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("aria-orientation",e.orientation)("data-pc-section","startHandler")}}function Fr(t,r){if(t&1){let e=T();u(0,"span",11,2),g("keydown",function(n){d(e);let o=l();return m(o.onKeyDown(n,1))})("mousedown",function(n){d(e);let o=l();return m(o.onMouseDown(n,1))})("touchstart",function(n){d(e);let o=l();return m(o.onDragStart(n,1))})("touchmove",function(n){d(e);let o=l();return m(o.onDrag(n))})("touchend",function(n){d(e);let o=l();return m(o.onDragEnd(n))}),p()}if(t&2){let e=l();Re("transition",e.dragging?"none":null),c("ngStyle",j(12,mi,e.rangeEndLeft,e.rangeEndBottom))("ngClass",Q(15,kn,e.handleIndex==1)),f("tabindex",e.disabled?null:e.tabindex)("aria-valuemin",e.min)("aria-valuenow",e.value?e.value[1]:null)("aria-valuemax",e.max)("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("aria-orientation",e.orientation)("data-pc-section","endHandler")}}var Br=({dt:t})=>`
.p-slider {
    position: relative;
    background: ${t("slider.track.background")};
    border-radius: ${t("slider.border.radius")};
}

.p-slider-handle {
    cursor: grab;
    touch-action: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${t("slider.handle.height")};
    width: ${t("slider.handle.width")};
    background: ${t("slider.handle.background")};
    border-radius: ${t("slider.handle.border.radius")};
    transition: background ${t("slider.transition.duration")}, color ${t("slider.transition.duration")}, border-color ${t("slider.transition.duration")}, box-shadow ${t("slider.transition.duration")}, outline-color ${t("slider.transition.duration")};
    outline-color: transparent;
}

.p-slider-handle::before {
    content: "";
    width: ${t("slider.handle.content.width")};
    height: ${t("slider.handle.content.height")};
    display: block;
    background: ${t("slider.handle.content.background")};
    border-radius: ${t("slider.handle.content.border.radius")};
    box-shadow: ${t("slider.handle.content.shadow")};
    transition: background ${t("slider.transition.duration")};
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: ${t("slider.handle.hover.background")};
}

.p-slider:not(.p-disabled) .p-slider-handle:hover::before {
    background: ${t("slider.handle.content.hover.background")};
}

.p-slider-handle:focus-visible {
    border-color: ${t("slider.handle.focus.border.color")};
    box-shadow: ${t("slider.handle.focus.ring.shadow")};
    outline: ${t("slider.handle.focus.ring.width")} ${t("slider.handle.focus.ring.style")} ${t("slider.handle.focus.ring.color")};
    outline-offset: ${t("slider.handle.focus.ring.offset")};
}

.p-slider-range {
    display: block;
    background: ${t("slider.range.background")};
    border-radius: ${t("slider.border.radius")};
}

.p-slider.p-slider-horizontal {
    height: ${t("slider.track.size")};
}

.p-slider-horizontal .p-slider-range {
    top: 0;
    inset-inline-start: 0;
    height: 100%;
}

.p-slider-horizontal .p-slider-handle {
    top: 50%;
    margin-top: calc(-1 * calc(${t("slider.handle.height")} / 2));
    margin-inline-start: calc(-1 * calc(${t("slider.handle.width")} / 2));
}

.p-slider-vertical {
    min-height: 100px;
    width: ${t("slider.track.size")};
}

.p-slider-vertical .p-slider-handle {
    inset-inline-start: 50%;
    margin-inline-start: calc(-1 * calc(${t("slider.handle.width")} / 2));
    margin-bottom: calc(-1 * calc(${t("slider.handle.height")} / 2));
}

.p-slider-vertical .p-slider-range {
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
}
`,$r={handle:{position:"absolute"},range:{position:"absolute"}},Pr={root:({props:t})=>["p-slider p-component",{"p-disabled":t.disabled,"p-slider-horizontal":t.orientation==="horizontal","p-slider-vertical":t.orientation==="vertical"}],range:"p-slider-range",handle:"p-slider-handle"},wn=(()=>{class t extends ee{name="slider";theme=Br;classes=Pr;inlineStyles=$r;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var Lr={provide:ge,useExisting:he(()=>qt),multi:!0},qt=(()=>{class t extends te{animate;disabled;min=0;max=100;orientation="horizontal";step;range;style;styleClass;ariaLabel;ariaLabelledBy;tabindex=0;autofocus;onChange=new V;onSlideEnd=new V;sliderHandle;sliderHandleStart;sliderHandleEnd;_componentStyle=H(wn);value;values;handleValue;handleValues=[];diff;offset;bottom;onModelChange=()=>{};onModelTouched=()=>{};dragging;dragListener;mouseupListener;initX;initY;barWidth;barHeight;sliderHandleClick;handleIndex=0;startHandleValue;startx;starty;ngZone=H(at);onMouseDown(e,i){this.disabled||(this.dragging=!0,this.updateDomData(),this.sliderHandleClick=!0,this.range&&this.handleValues&&this.handleValues[0]===this.max?this.handleIndex=0:this.handleIndex=i,this.bindDragListeners(),e.target.focus(),e.preventDefault(),this.animate&&oi(this.el.nativeElement.children[0],"p-slider-animate"))}onDragStart(e,i){if(!this.disabled){var n=e.changedTouches[0];this.startHandleValue=this.range?this.handleValues[i]:this.handleValue,this.dragging=!0,this.range&&this.handleValues&&this.handleValues[0]===this.max?this.handleIndex=0:this.handleIndex=i,this.orientation==="horizontal"?(this.startx=parseInt(n.clientX,10),this.barWidth=this.el.nativeElement.children[0].offsetWidth):(this.starty=parseInt(n.clientY,10),this.barHeight=this.el.nativeElement.children[0].offsetHeight),this.animate&&oi(this.el.nativeElement.children[0],"p-slider-animate"),e.preventDefault()}}onDrag(e){if(!this.disabled){var i=e.changedTouches[0],n=0;this.orientation==="horizontal"?n=Math.floor((parseInt(i.clientX,10)-this.startx)*100/this.barWidth)+this.startHandleValue:n=Math.floor((this.starty-parseInt(i.clientY,10))*100/this.barHeight)+this.startHandleValue,this.setValueFromHandle(e,n),e.preventDefault()}}onDragEnd(e){this.disabled||(this.dragging=!1,this.range?this.onSlideEnd.emit({originalEvent:e,values:this.values}):this.onSlideEnd.emit({originalEvent:e,value:this.value}),this.animate&&Ye(this.el.nativeElement.children[0],"p-slider-animate"),e.preventDefault())}onBarClick(e){this.disabled||(this.sliderHandleClick||(this.updateDomData(),this.handleChange(e),this.range?this.onSlideEnd.emit({originalEvent:e,values:this.values}):this.onSlideEnd.emit({originalEvent:e,value:this.value})),this.sliderHandleClick=!1)}onKeyDown(e,i){switch(this.handleIndex=i,e.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(e,i),e.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(e,i),e.preventDefault();break;case"PageDown":this.decrementValue(e,i,!0),e.preventDefault();break;case"PageUp":this.incrementValue(e,i,!0),e.preventDefault();break;case"Home":this.updateValue(this.min,e),e.preventDefault();break;case"End":this.updateValue(this.max,e),e.preventDefault();break;default:break}}decrementValue(e,i,n=!1){let o;this.range?this.step?o=this.values[i]-this.step:o=this.values[i]-1:this.step?o=this.value-this.step:!this.step&&n?o=this.value-10:o=this.value-1,this.updateValue(o,e),e.preventDefault()}incrementValue(e,i,n=!1){let o;this.range?this.step?o=this.values[i]+this.step:o=this.values[i]+1:this.step?o=this.value+this.step:!this.step&&n?o=this.value+10:o=this.value+1,this.updateValue(o,e),e.preventDefault()}handleChange(e){let i=this.calculateHandleValue(e);this.setValueFromHandle(e,i)}bindDragListeners(){ki(this.platformId)&&this.ngZone.runOutsideAngular(()=>{let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.dragListener||(this.dragListener=this.renderer.listen(e,"mousemove",i=>{this.dragging&&this.ngZone.run(()=>{this.handleChange(i)})})),this.mouseupListener||(this.mouseupListener=this.renderer.listen(e,"mouseup",i=>{this.dragging&&(this.dragging=!1,this.ngZone.run(()=>{this.range?this.onSlideEnd.emit({originalEvent:i,values:this.values}):this.onSlideEnd.emit({originalEvent:i,value:this.value}),this.animate&&Ye(this.el.nativeElement.children[0],"p-slider-animate")}))}))})}unbindDragListeners(){this.dragListener&&(this.dragListener(),this.dragListener=null),this.mouseupListener&&(this.mouseupListener(),this.mouseupListener=null)}setValueFromHandle(e,i){let n=this.getValueFromHandle(i);this.range?this.step?this.handleStepChange(n,this.values[this.handleIndex]):(this.handleValues[this.handleIndex]=i,this.updateValue(n,e)):this.step?this.handleStepChange(n,this.value):(this.handleValue=i,this.updateValue(n,e)),this.cd.markForCheck()}handleStepChange(e,i){let n=e-i,o=i,a=this.step;n<0?o=i+Math.ceil(e/a-i/a)*a:n>0&&(o=i+Math.floor(e/a-i/a)*a),this.updateValue(o),this.updateHandleValue()}writeValue(e){this.range?this.values=e||[0,0]:this.value=e||0,this.updateHandleValue(),this.updateDiffAndOffset(),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get rangeStartLeft(){return this.isVertical()?null:this.handleValues[0]>100?"100%":this.handleValues[0]+"%"}get rangeStartBottom(){return this.isVertical()?this.handleValues[0]+"%":"auto"}get rangeEndLeft(){return this.isVertical()?null:this.handleValues[1]+"%"}get rangeEndBottom(){return this.isVertical()?this.handleValues[1]+"%":"auto"}isVertical(){return this.orientation==="vertical"}updateDomData(){let e=this.el.nativeElement.children[0].getBoundingClientRect();this.initX=e.left+Ii(),this.initY=e.top+Si(),this.barWidth=this.el.nativeElement.children[0].offsetWidth,this.barHeight=this.el.nativeElement.children[0].offsetHeight}calculateHandleValue(e){return this.orientation==="horizontal"?Fi(this.el.nativeElement)?(this.initX+this.barWidth-e.pageX)*100/this.barWidth:(e.pageX-this.initX)*100/this.barWidth:(this.initY+this.barHeight-e.pageY)*100/this.barHeight}updateHandleValue(){this.range?(this.handleValues[0]=(this.values[0]<this.min?0:this.values[0]-this.min)*100/(this.max-this.min),this.handleValues[1]=(this.values[1]>this.max?100:this.values[1]-this.min)*100/(this.max-this.min)):this.value<this.min?this.handleValue=0:this.value>this.max?this.handleValue=100:this.handleValue=(this.value-this.min)*100/(this.max-this.min),this.step&&this.updateDiffAndOffset()}updateDiffAndOffset(){this.diff=this.getDiff(),this.offset=this.getOffset()}getDiff(){return Math.abs(this.handleValues[0]-this.handleValues[1])}getOffset(){return Math.min(this.handleValues[0],this.handleValues[1])}updateValue(e,i){if(this.range){let n=e;this.handleIndex==0?(n<this.min?(n=this.min,this.handleValues[0]=0):n>this.values[1]&&n>this.max&&(n=this.max,this.handleValues[0]=100),this.sliderHandleStart?.nativeElement.focus()):(n>this.max?(n=this.max,this.handleValues[1]=100,this.offset=this.handleValues[1]):n<this.min?(n=this.min,this.handleValues[1]=0):n<this.values[0]&&(this.offset=this.handleValues[1]),this.sliderHandleEnd?.nativeElement.focus()),this.step?this.updateHandleValue():this.updateDiffAndOffset(),this.values[this.handleIndex]=this.getNormalizedValue(n);let o=[this.minVal,this.maxVal];this.onModelChange(o),this.onChange.emit({event:i,values:this.values})}else e<this.min?(e=this.min,this.handleValue=0):e>this.max&&(e=this.max,this.handleValue=100),this.value=this.getNormalizedValue(e),this.onModelChange(this.value),this.onChange.emit({event:i,value:this.value}),this.sliderHandle?.nativeElement.focus();this.updateHandleValue()}getValueFromHandle(e){return(this.max-this.min)*(e/100)+this.min}getDecimalsCount(e){return e&&Math.floor(e)!==e&&e.toString().split(".")[1].length||0}getNormalizedValue(e){let i=this.getDecimalsCount(this.step);return i>0?+parseFloat(e.toString()).toFixed(i):Math.floor(e)}ngOnDestroy(){this.unbindDragListeners(),super.ngOnDestroy()}get minVal(){return Math.min(this.values[1],this.values[0])}get maxVal(){return Math.max(this.values[1],this.values[0])}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["p-slider"]],viewQuery:function(i,n){if(i&1&&(G(yr,5),G(vr,5),G(xr,5)),i&2){let o;w(o=k())&&(n.sliderHandle=o.first),w(o=k())&&(n.sliderHandleStart=o.first),w(o=k())&&(n.sliderHandleEnd=o.first)}},inputs:{animate:[2,"animate","animate",y],disabled:[2,"disabled","disabled",y],min:[2,"min","min",N],max:[2,"max","max",N],orientation:"orientation",step:[2,"step","step",N],range:[2,"range","range",y],style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",tabindex:[2,"tabindex","tabindex",N],autofocus:[2,"autofocus","autofocus",y]},outputs:{onChange:"onChange",onSlideEnd:"onSlideEnd"},features:[J([Lr,wn]),L],decls:8,vars:18,consts:[["sliderHandle",""],["sliderHandleStart",""],["sliderHandleEnd",""],[3,"click","ngStyle","ngClass"],["class","p-slider-range",3,"ngStyle",4,"ngIf"],["class","p-slider-handle","role","slider",3,"transition","ngStyle","pAutoFocus","touchstart","touchmove","touchend","mousedown","keydown",4,"ngIf"],["class","p-slider-handle","role","slider",3,"transition","ngStyle","ngClass","pAutoFocus","keydown","mousedown","touchstart","touchmove","touchend",4,"ngIf"],["class","p-slider-handle","role","slider",3,"transition","ngStyle","ngClass","keydown","mousedown","touchstart","touchmove","touchend",4,"ngIf"],[1,"p-slider-range",3,"ngStyle"],["role","slider",1,"p-slider-handle",3,"touchstart","touchmove","touchend","mousedown","keydown","ngStyle","pAutoFocus"],["role","slider",1,"p-slider-handle",3,"keydown","mousedown","touchstart","touchmove","touchend","ngStyle","ngClass","pAutoFocus"],["role","slider",1,"p-slider-handle",3,"keydown","mousedown","touchstart","touchmove","touchend","ngStyle","ngClass"]],template:function(i,n){i&1&&(u(0,"div",3),g("click",function(a){return n.onBarClick(a)}),_(1,Sr,1,5,"span",4)(2,Dr,1,5,"span",4)(3,Mr,1,4,"span",4)(4,Vr,1,4,"span",4)(5,Er,2,15,"span",5)(6,Or,2,18,"span",6)(7,Fr,2,17,"span",7),p()),i&2&&(F(n.styleClass),c("ngStyle",n.style)("ngClass",Ci(13,Cr,n.disabled,n.orientation=="horizontal",n.orientation=="vertical",n.animate)),f("data-pc-name","slider")("data-pc-section","root"),s(),c("ngIf",n.range&&n.orientation=="horizontal"),s(),c("ngIf",n.range&&n.orientation=="vertical"),s(),c("ngIf",!n.range&&n.orientation=="vertical"),s(),c("ngIf",!n.range&&n.orientation=="horizontal"),s(),c("ngIf",!n.range),s(),c("ngIf",n.range),s(),c("ngIf",n.range))},dependencies:[oe,ue,Se,De,He,z],encapsulation:2,changeDetection:0})}return t})(),Tn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[qt,z,z]})}return t})();var Rr=({dt:t})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("textarea.color")};
    background: ${t("textarea.background")};
    padding: ${t("textarea.padding.y")} ${t("textarea.padding.x")};
    border: 1px solid ${t("textarea.border.color")};
    transition: background ${t("textarea.transition.duration")}, color ${t("textarea.transition.duration")}, border-color ${t("textarea.transition.duration")}, outline-color ${t("textarea.transition.duration")}, box-shadow ${t("textarea.transition.duration")};
    appearance: none;
    border-radius: ${t("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${t("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${t("textarea.focus.border.color")};
    box-shadow: ${t("textarea.focus.ring.shadow")};
    outline: ${t("textarea.focus.ring.width")} ${t("textarea.focus.ring.style")} ${t("textarea.focus.ring.color")};
    outline-offset: ${t("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${t("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${t("textarea.filled.hover.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${t("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${t("textarea.disabled.background")};
    color: ${t("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${t("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${t("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${t("textarea.sm.font.size")};
    padding-block: ${t("textarea.sm.padding.y")};
    padding-inline: ${t("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${t("textarea.lg.font.size")};
    padding-block: ${t("textarea.lg.padding.y")};
    padding-inline: ${t("textarea.lg.padding.x")};
}
`,Nr={root:({instance:t,props:r})=>["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":r.autoResize,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled","p-textarea-fluid":r.fluid}]},In=(()=>{class t extends ee{name="textarea";theme=Rr;classes=Nr;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var Kt=(()=>{class t extends te{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new V;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=H(In);constructor(e,i){super(),this.ngModel=e,this.control=i}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize()}onInput(e){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(Fe(be,8),Fe(Lt,8))};static \u0275dir=bi({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(i,n){i&1&&g("input",function(a){return n.onInput(a)}),i&2&&ye("p-filled",n.filled)("p-textarea-resizable",n.autoResize)("p-variant-filled",n.variant==="filled"||n.config.inputStyle()==="filled"||n.config.inputVariant()==="filled")("p-textarea-fluid",n.hasFluid)("p-textarea-sm",n.pSize==="small")("p-inputfield-sm",n.pSize==="small")("p-textarea-lg",n.pSize==="large")("p-inputfield-lg",n.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",y],variant:"variant",fluid:[2,"fluid","fluid",y],pSize:"pSize"},outputs:{onResize:"onResize"},features:[J([In]),L]})}return t})(),jt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({})}return t})();var zr=()=>({width:"min(380px, 100vw)"}),Hr=(t,r)=>r.id;function Ur(t,r){if(t&1){let e=T();u(0,"img",17),g("error",function(n){d(e);let o=l(2);return m(o.onCoverError(n))}),p()}if(t&2){let e=l();c("src",e.coverImageUrl,Dt)}}function Qr(t,r){if(t&1&&C(0,"div",18),t&2){let e=l(),i=l();Re("background",i.colorFor(e.status))}}function Yr(t,r){if(t&1&&(u(0,"span",6),b(1),p()),t&2){let e=l();s(),P(e.genre)}}function qr(t,r){if(t&1&&(u(0,"div",7)(1,"span"),b(2,"STARTED"),p(),u(3,"span"),b(4),p()()),t&2){let e=l(),i=l();s(4),P(i.formatDate(e.dateStarted))}}function Kr(t,r){if(t&1&&(u(0,"div",7)(1,"span"),b(2,"FINISHED"),p(),u(3,"span"),b(4),p()()),t&2){let e=l(),i=l();s(4),P(i.formatDate(e.dateCompleted))}}function jr(t,r){if(t&1){let e=T();u(0,"label"),b(1),p(),u(2,"p-slider",19),g("onChange",function(n){let o;d(e);let a=l(),h=l();return m(h.store.updateProgress(a.id,(o=n.value)!==null&&o!==void 0?o:0))}),p()}if(t&2){let e=l(),i=l();s(),xi("Progress \u2014 ",e.currentPage," / ",e.totalPages," pages (",i.pct(e),"%)"),s(),c("ngModel",e.currentPage)("min",0)("max",e.totalPages)}}function Wr(t,r){t&1&&(u(0,"label"),b(1,"Progress"),p(),u(2,"p",13),b(3,"Add a total page count (Edit details) to track progress here."),p())}function Gr(t,r){if(t&1){let e=T();u(0,"label",20)(1,"p-checkbox",21),g("ngModelChange",function(n){let o=d(e).$implicit,a=l(2),h=l();return m(h.toggleCollection(n,a,o.id))}),p(),u(2,"span"),b(3),p()()}if(t&2){let e=r.$implicit,i=l(2),n=l();s(),c("binary",!0)("ngModel",n.isInCollection(i.id,e.id)),s(2),P(e.name)}}function Zr(t,r){if(t&1&&(u(0,"div",12),we(1,Gr,4,3,"label",20,Hr),p()),t&2){let e=l(2);s(),ke(e.collections())}}function Xr(t,r){t&1&&(u(0,"p",13),b(1,"No collections yet \u2014 create one from the Collections page."),p())}function Jr(t,r){if(t&1){let e=T();u(0,"div",1),_(1,Ur,1,1,"img",2)(2,Qr,1,2,"div",3),u(3,"div",4)(4,"h3"),b(5),p(),u(6,"div",5),b(7),p(),_(8,Yr,2,1,"span",6),p()(),u(9,"div",7)(10,"span"),b(11,"ADDED"),p(),u(12,"span"),b(13),p()(),_(14,qr,5,1,"div",7)(15,Kr,5,1,"div",7),u(16,"div",8)(17,"label"),b(18,"Status"),p(),u(19,"p-selectButton",9),g("ngModelChange",function(n){let o=d(e),a=l();return m(a.store.updateStatus(o.id,n))}),p()(),u(20,"div",8),_(21,jr,3,6)(22,Wr,4,0),p(),u(23,"div",8)(24,"label"),b(25,"Rating"),p(),u(26,"p-rating",10),g("ngModelChange",function(n){let o=d(e),a=l();return m(a.store.updateRating(o.id,n))}),p()(),u(27,"div",8)(28,"label"),b(29,"Notes"),p(),u(30,"textarea",11),g("ngModelChange",function(n){let o=d(e),a=l();return m(a.store.updateNotes(o.id,n))}),p()(),u(31,"div",8)(32,"label"),b(33,"Collections"),p(),_(34,Zr,3,0,"div",12)(35,Xr,2,0,"p",13),p(),u(36,"div",14)(37,"button",15),g("click",function(){let n=d(e),o=l();return m(o.editRequested.emit(n))}),p(),u(38,"button",16),g("click",function(){let n=d(e),o=l();return m(o.confirmDelete(n))}),p()()}if(t&2){let e,i=r,n=l();s(),q(i.coverImageUrl?1:2),s(4),P(i.title),s(2),P(i.author),s(),q(i.genre?8:-1),s(5),P(n.formatDate(i.dateAdded)),s(),q(i.dateStarted?14:-1),s(),q(i.dateCompleted?15:-1),s(4),c("options",n.statusOptions)("ngModel",i.status),s(2),q(i.totalPages?21:22),s(5),c("ngModel",(e=i.rating)!==null&&e!==void 0?e:0),s(4),c("ngModel",i.notes),s(4),q(n.collections().length?34:35)}}function ea(t){return t?new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}):"\u2014"}var Wt=class t{store=H(ht);collectionStore=H(Zi);confirmationService=H(Pi);bookId=me(null);closed=Ce();editRequested=Ce();book=Ie(()=>{let r=this.bookId();return r===null?null:this.store.books().find(e=>e.id===r)??null});visible=Ie(()=>this.bookId()!==null);statusOptions=dt;collections=Ie(()=>this.collectionStore.collections());colorFor(r){return Nt[r]}pct(r){return mt(r)}formatDate(r){return ea(r)}isInCollection(r,e){return!!this.collections().find(n=>n.id===e)?.books.some(n=>n.id===r)}toggleCollection(r,e,i){r?this.collectionStore.addBookToCollection(i,e):this.collectionStore.removeBookFromCollection(i,e.id)}onCoverError(r){r.target.style.visibility="hidden"}confirmDelete(r){this.confirmationService.confirm({header:"Delete book",message:`Remove "${r.title}" from your library? This can't be undone.`,acceptLabel:"Delete",acceptButtonStyleClass:"p-button-danger",rejectLabel:"Cancel",rejectButtonStyleClass:"p-button-text",accept:()=>{this.store.removeBook(r.id),this.closed.emit()}})}onVisibleChange(r){r||this.closed.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-book-drawer"]],inputs:{bookId:[1,"bookId"]},outputs:{closed:"closed",editRequested:"editRequested"},decls:2,vars:5,consts:[["position","right","styleClass","bs-drawer",3,"visibleChange","visible"],[1,"head-row"],["alt","",1,"cover",3,"src"],[1,"swatch",3,"background"],[1,"head-text"],[1,"author"],[1,"genre-chip"],[1,"meta-line"],[1,"field"],["optionLabel","label","optionValue","value",3,"ngModelChange","options","ngModel"],[3,"ngModelChange","ngModel"],["pTextarea","","rows","3","placeholder","A line worth keeping\u2026",3,"ngModelChange","ngModel"],[1,"collection-list"],[1,"hint"],[1,"actions"],["pButton","","type","button","label","Edit details",1,"p-button-outlined",3,"click"],["pButton","","type","button","label","Delete",1,"p-button-text","p-button-danger",3,"click"],["alt","",1,"cover",3,"error","src"],[1,"swatch"],[3,"onChange","ngModel","min","max"],[1,"collection-row"],[3,"ngModelChange","binary","ngModel"]],template:function(e,i){if(e&1&&(u(0,"p-drawer",0),g("visibleChange",function(o){return i.onVisibleChange(o)}),_(1,Jr,39,13),p()),e&2){let n;ve(lt(4,zr)),c("visible",i.visible()),s(),q((n=i.book())?1:-1,n)}},dependencies:[Ve,Xe,Me,be,bn,ui,Yt,bt,Tn,qt,ft,nt,jt,Kt,tt,et,Gi,Wi],styles:[".head-row[_ngcontent-%COMP%]{display:flex;gap:14px;margin-bottom:16px}.swatch[_ngcontent-%COMP%]{width:34px;height:48px;border-radius:2px;flex:none}.cover[_ngcontent-%COMP%]{width:48px;height:68px;object-fit:cover;border-radius:2px;flex:none;border:1px solid var(--bs-hairline)}.head-text[_ngcontent-%COMP%]{min-width:0}h3[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:22px;font-weight:600;margin:0 0 4px}.author[_ngcontent-%COMP%]{color:var(--bs-text-dim);font-size:13px}.genre-chip[_ngcontent-%COMP%]{display:inline-block;margin-top:8px;font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:var(--bs-brass-bright);border:1px solid var(--bs-hairline);border-radius:3px;padding:2px 7px}.meta-line[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:12px;color:var(--bs-text-faint);font-family:IBM Plex Mono,monospace;padding:9px 0;border-bottom:1px solid var(--bs-hairline)}.field[_ngcontent-%COMP%]{margin-top:22px}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--bs-text-faint);display:block;margin-bottom:9px}textarea[_ngcontent-%COMP%]{width:100%}.hint[_ngcontent-%COMP%]{font-size:12px;color:var(--bs-text-faint);margin:0}.collection-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.collection-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:13px;cursor:pointer}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:28px;padding-top:18px;border-top:1px solid var(--bs-hairline)}"],changeDetection:0})};var ta=["clearicon"],ia=["incrementbuttonicon"],na=["decrementbuttonicon"],oa=["input"];function ra(t,r){if(t&1){let e=T();u(0,"TimesIcon",7),g("click",function(){d(e);let n=l(2);return m(n.clear())}),p()}t&2&&(c("ngClass","p-inputnumber-clear-icon"),f("data-pc-section","clearIcon"))}function aa(t,r){}function la(t,r){t&1&&_(0,aa,0,0,"ng-template")}function sa(t,r){if(t&1){let e=T();u(0,"span",8),g("click",function(){d(e);let n=l(2);return m(n.clear())}),_(1,la,1,0,null,9),p()}if(t&2){let e=l(2);f("data-pc-section","clearIcon"),s(),c("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function ca(t,r){if(t&1&&(A(0),_(1,ra,1,2,"TimesIcon",5)(2,sa,2,2,"span",6),R()),t&2){let e=l();s(),c("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),s(),c("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function pa(t,r){if(t&1&&C(0,"span",13),t&2){let e=l(2);c("ngClass",e.incrementButtonIcon),f("data-pc-section","incrementbuttonicon")}}function ua(t,r){t&1&&C(0,"AngleUpIcon"),t&2&&f("data-pc-section","incrementbuttonicon")}function da(t,r){}function ma(t,r){t&1&&_(0,da,0,0,"ng-template")}function ha(t,r){if(t&1&&(A(0),_(1,ua,1,1,"AngleUpIcon",2)(2,ma,1,0,null,9),R()),t&2){let e=l(2);s(),c("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),s(),c("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function _a(t,r){if(t&1&&C(0,"span",13),t&2){let e=l(2);c("ngClass",e.decrementButtonIcon),f("data-pc-section","decrementbuttonicon")}}function fa(t,r){t&1&&C(0,"AngleDownIcon"),t&2&&f("data-pc-section","decrementbuttonicon")}function ga(t,r){}function ba(t,r){t&1&&_(0,ga,0,0,"ng-template")}function ya(t,r){if(t&1&&(A(0),_(1,fa,1,1,"AngleDownIcon",2)(2,ba,1,0,null,9),R()),t&2){let e=l(2);s(),c("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),s(),c("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function va(t,r){if(t&1){let e=T();u(0,"span",10)(1,"button",11),g("mousedown",function(n){d(e);let o=l();return m(o.onUpButtonMouseDown(n))})("mouseup",function(){d(e);let n=l();return m(n.onUpButtonMouseUp())})("mouseleave",function(){d(e);let n=l();return m(n.onUpButtonMouseLeave())})("keydown",function(n){d(e);let o=l();return m(o.onUpButtonKeyDown(n))})("keyup",function(){d(e);let n=l();return m(n.onUpButtonKeyUp())}),_(2,pa,1,2,"span",12)(3,ha,3,2,"ng-container",2),p(),u(4,"button",11),g("mousedown",function(n){d(e);let o=l();return m(o.onDownButtonMouseDown(n))})("mouseup",function(){d(e);let n=l();return m(n.onDownButtonMouseUp())})("mouseleave",function(){d(e);let n=l();return m(n.onDownButtonMouseLeave())})("keydown",function(n){d(e);let o=l();return m(o.onDownButtonKeyDown(n))})("keyup",function(){d(e);let n=l();return m(n.onDownButtonKeyUp())}),_(5,_a,1,2,"span",12)(6,ya,3,2,"ng-container",2),p()()}if(t&2){let e=l();f("data-pc-section","buttonGroup"),s(),F(e.incrementButtonClass),c("ngClass",e._incrementButtonClass)("disabled",e.disabled),f("aria-hidden",!0)("data-pc-section","incrementbutton"),s(),c("ngIf",e.incrementButtonIcon),s(),c("ngIf",!e.incrementButtonIcon),s(),F(e.decrementButtonClass),c("ngClass",e._decrementButtonClass)("disabled",e.disabled),f("aria-hidden",!0)("data-pc-section","decrementbutton"),s(),c("ngIf",e.decrementButtonIcon),s(),c("ngIf",!e.decrementButtonIcon)}}function xa(t,r){if(t&1&&C(0,"span",13),t&2){let e=l(2);c("ngClass",e.incrementButtonIcon),f("data-pc-section","incrementbuttonicon")}}function Ca(t,r){t&1&&C(0,"AngleUpIcon"),t&2&&f("data-pc-section","incrementbuttonicon")}function wa(t,r){}function ka(t,r){t&1&&_(0,wa,0,0,"ng-template")}function Ta(t,r){if(t&1&&(A(0),_(1,Ca,1,1,"AngleUpIcon",2)(2,ka,1,0,null,9),R()),t&2){let e=l(2);s(),c("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),s(),c("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Ia(t,r){if(t&1){let e=T();u(0,"button",11),g("mousedown",function(n){d(e);let o=l();return m(o.onUpButtonMouseDown(n))})("mouseup",function(){d(e);let n=l();return m(n.onUpButtonMouseUp())})("mouseleave",function(){d(e);let n=l();return m(n.onUpButtonMouseLeave())})("keydown",function(n){d(e);let o=l();return m(o.onUpButtonKeyDown(n))})("keyup",function(){d(e);let n=l();return m(n.onUpButtonKeyUp())}),_(1,xa,1,2,"span",12)(2,Ta,3,2,"ng-container",2),p()}if(t&2){let e=l();F(e.incrementButtonClass),c("ngClass",e._incrementButtonClass)("disabled",e.disabled),f("aria-hidden",!0)("data-pc-section","incrementbutton"),s(),c("ngIf",e.incrementButtonIcon),s(),c("ngIf",!e.incrementButtonIcon)}}function Sa(t,r){if(t&1&&C(0,"span",13),t&2){let e=l(2);c("ngClass",e.decrementButtonIcon),f("data-pc-section","decrementbuttonicon")}}function Da(t,r){t&1&&C(0,"AngleDownIcon"),t&2&&f("data-pc-section","decrementbuttonicon")}function Ma(t,r){}function Va(t,r){t&1&&_(0,Ma,0,0,"ng-template")}function Ea(t,r){if(t&1&&(A(0),_(1,Da,1,1,"AngleDownIcon",2)(2,Va,1,0,null,9),R()),t&2){let e=l(2);s(),c("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),s(),c("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function Oa(t,r){if(t&1){let e=T();u(0,"button",11),g("mousedown",function(n){d(e);let o=l();return m(o.onDownButtonMouseDown(n))})("mouseup",function(){d(e);let n=l();return m(n.onDownButtonMouseUp())})("mouseleave",function(){d(e);let n=l();return m(n.onDownButtonMouseLeave())})("keydown",function(n){d(e);let o=l();return m(o.onDownButtonKeyDown(n))})("keyup",function(){d(e);let n=l();return m(n.onDownButtonKeyUp())}),_(1,Sa,1,2,"span",12)(2,Ea,3,2,"ng-container",2),p()}if(t&2){let e=l();F(e.decrementButtonClass),c("ngClass",e._decrementButtonClass)("disabled",e.disabled),f("aria-hidden",!0)("data-pc-section","decrementbutton"),s(),c("ngIf",e.decrementButtonIcon),s(),c("ngIf",!e.decrementButtonIcon)}}var Fa=({dt:t})=>`
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    cursor: pointer;
    background: ${t("inputnumber.button.background")};
    color: ${t("inputnumber.button.color")};
    width: ${t("inputnumber.button.width")};
    transition: background ${t("inputnumber.transition.duration")}, color ${t("inputnumber.transition.duration")}, border-color ${t("inputnumber.transition.duration")}, outline-color ${t("inputnumber.transition.duration")};
}

.p-inputnumber-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    right: 0.75rem;
    color: ${t("inputnumber.button.color")};
}

.p-inputnumber-button:hover {
    background: ${t("inputnumber.button.hover.background")};
    color: ${t("inputnumber.button.hover.color")};
}

.p-inputnumber-button:active {
    background: ${t("inputnumber.button.active.background")};
    color: ${t("inputnumber.button.active.color")};
}

.p-inputnumber-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    inset-block-start: 1px;
    inset-inline-end: 1px;
    height: calc(100% - 2px);
    z-index: 1;
}

.p-inputnumber-stacked .p-inputnumber-increment-button {
    padding: 0;
    border-start-end-radius: calc(${t("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-decrement-button {
    padding: 0;
    border-end-end-radius: calc(${t("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-button {
    border: 1px solid ${t("inputnumber.button.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:hover {
    border-color: ${t("inputnumber.button.hover.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:active {
    border-color: ${t("inputnumber.button.active.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-increment-button {
    order: 3;
    border-start-end-radius: ${t("inputnumber.button.border.radius")};
    border-end-end-radius: ${t("inputnumber.button.border.radius")};
    border-inline-start: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-horizontal .p-inputnumber-decrement-button {
    order: 1;
    border-start-start-radius: ${t("inputnumber.button.border.radius")};
    border-end-start-radius: ${t("inputnumber.button.border.radius")};
    border-inline-end: 0 none;
}

.p-floatlabel:has(.p-inputnumber-horizontal) label {
    margin-inline-start: ${t("inputnumber.button.width")};
}

.p-inputnumber-vertical {
    flex-direction: column;
}

.p-inputnumber-vertical .p-inputnumber-button {
    border: 1px solid ${t("inputnumber.button.border.color")};
    padding-block: ${t("inputnumber.button.vertical.padding")};
    padding-inline: 0;
}

.p-inputnumber-vertical .p-inputnumber-button:hover {
    border-color: ${t("inputnumber.button.hover.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-button:active {
    border-color: ${t("inputnumber.button.active.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-increment-button {
    order: 1;
    border-start-start-radius: ${t("inputnumber.button.border.radius")};
    border-start-end-radius: ${t("inputnumber.button.border.radius")};
    width: 100%;
    border-block-end: 0 none;
}

.p-inputnumber-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-vertical .p-inputnumber-decrement-button {
    order: 3;
    border-end-start-radius: ${t("inputnumber.button.border.radius")};
    border-end-end-radius: ${t("inputnumber.button.border.radius")};
    width: 100%;
    border-block-start: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-inputnumber-fluid {
    width: 100%;
}

.p-inputnumber-fluid .p-inputnumber-input {
    width: 1%;
}

.p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
    width: 100%;
}

.p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
}

.p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
}

p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
p-input-number.ng-invalid.ng-dirty > .p-inputtext,
p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
    border-color: ${t("inputtext.invalid.border.color")};
}

p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
}

p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}
`,Ba={root:({instance:t})=>({"p-inputnumber p-component p-inputwrapper":!0,"p-inputwrapper-filled":t.filled||t.allowEmpty===!1,"p-inputwrapper-focus":t.focused,"p-inputnumber-stacked":t.showButtons&&t.buttonLayout==="stacked","p-inputnumber-horizontal":t.showButtons&&t.buttonLayout==="horizontal","p-inputnumber-vertical":t.showButtons&&t.buttonLayout==="vertical","p-inputnumber-fluid":t.hasFluid}),pcInput:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:t})=>({"p-inputnumber-button p-inputnumber-increment-button":!0,"p-disabled":t.showButtons&&t.max!==null&&t.maxlength}),decrementButton:({instance:t})=>({"p-inputnumber-button p-inputnumber-decrement-button":!0,"p-disabled":t.showButtons&&t.min!==null&&t.minlength})},Dn=(()=>{class t extends ee{name="inputnumber";theme=Fa;classes=Ba;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var $a={provide:ge,useExisting:he(()=>Gt),multi:!0},Gt=(()=>{class t extends te{injector;showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;style;placeholder;size;maxlength;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;name;required;autocomplete;min;max;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly=!1;step=1;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;variant;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;get disabled(){return this._disabled}set disabled(e){e&&(this.focused=!1),this._disabled=e,this.timer&&this.clearTimer()}fluid=!1;onInput=new V;onFocus=new V;onBlur=new V;onKeyDown=new V;onClear=new V;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;onModelChange=()=>{};onModelTouched=()=>{};focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar;_group;_minusSign;_currency;_prefix;_suffix;_index;_disabled;_componentStyle=H(Dn);ngControl=null;get _rootClass(){return this._componentStyle.classes.root({instance:this})}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}get _incrementButtonClass(){return this._componentStyle.classes.incrementButton({instance:this})}get _decrementButtonClass(){return this._componentStyle.classes.decrementButton({instance:this})}constructor(e){super(),this.injector=e}ngOnChanges(e){super.ngOnChanges(e),["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(n=>!!e[n])&&this.updateConstructParser()}get hostClass(){return["p-inputnumber p-component p-inputwrapper",this.styleClass,this.filled||this.allowEmpty===!1?"p-inputwrapper-filled":"",this.focused?"p-inputwrapper-focus":"",this.showButtons&&this.buttonLayout==="stacked"?"p-inputnumber-stacked":"",this.showButtons&&this.buttonLayout==="horizontal"?"p-inputnumber-horizontal":"",this.showButtons&&this.buttonLayout==="vertical"?"p-inputnumber-vertical":"",this.hasFluid?"p-inputnumber-fluid":""].filter(e=>!!e).join(" ")}get hostStyle(){return this.style}ngOnInit(){super.ngOnInit(),this.ngControl=this.injector.get(Lt,null,{optional:!0}),this.constructParser(),this.initialized=!0}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits??void 0,maximumFractionDigits:this.maxFractionDigits??void 0}}constructParser(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());let e=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),i=new Map(e.map((n,o)=>[n,o]));this._numeral=new RegExp(`[${e.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=n=>i.get(n)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,Ke(Ae({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let n=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(n=this.prefix+n),this.suffix&&e!=this.suffix&&(n=n+this.suffix),n}return e.toString()}return""}parseValue(e){let i=new RegExp(this._suffix,""),n=new RegExp(this._prefix,""),o=new RegExp(this._currency,""),a=e.replace(i,"").replace(n,"").trim().replace(/\s/g,"").replace(o,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(a){if(a==="-")return a;let h=+a;return isNaN(h)?null:h}return null}repeat(e,i,n){if(this.readonly)return;let o=i||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,n)},o),this.spin(e,n)}spin(e,i){let n=this.step*i,o=this.parseValue(this.input?.nativeElement.value)||0,a=this.validateValue(o+n);this.maxlength&&this.maxlength<this.formatValue(a).length||(this.updateInput(a,null,"spin",null),this.updateModel(e,a),this.handleOnInput(e,o,a))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.disabled||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.disabled||this.clearTimer()}onUpButtonMouseLeave(){this.disabled||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.disabled||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.disabled||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.disabled||this.clearTimer()}onDownButtonMouseLeave(){this.disabled||this.clearTimer()}onDownButtonKeyUp(){this.disabled||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let i=e.target.selectionStart,n=e.target.selectionEnd,o=e.target.value,a=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let h=i;h<=o.length;h++){let v=h===0?0:h-1;if(this.isNumeralChar(o.charAt(v))){this.input.nativeElement.setSelectionRange(h,h);break}}break;case"ArrowRight":for(let h=n;h>=0;h--)if(this.isNumeralChar(o.charAt(h))){this.input.nativeElement.setSelectionRange(h,h);break}break;case"Tab":case"Enter":a=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(a),this.input.nativeElement.setAttribute("aria-valuenow",a),this.updateModel(e,a);break;case"Backspace":{if(e.preventDefault(),i===n){if(i==1&&this.prefix||i==o.length&&this.suffix)break;let h=o.charAt(i-1),{decimalCharIndex:v,decimalCharIndexWithoutPrefix:x}=this.getDecimalCharIndexes(o);if(this.isNumeralChar(h)){let I=this.getDecimalLength(o);if(this._group.test(h))this._group.lastIndex=0,a=o.slice(0,i-2)+o.slice(i-1);else if(this._decimal.test(h))this._decimal.lastIndex=0,I?this.input?.nativeElement.setSelectionRange(i-1,i-1):a=o.slice(0,i-1)+o.slice(i);else if(v>0&&i>v){let $=this.isDecimalMode()&&(this.minFractionDigits||0)<I?"":"0";a=o.slice(0,i-1)+$+o.slice(i)}else x===1?(a=o.slice(0,i-1)+"0"+o.slice(i),a=this.parseValue(a)>0?a:""):a=o.slice(0,i-1)+o.slice(i)}else this.mode==="currency"&&h.search(this._currency)!=-1&&(a=o.slice(1));this.updateValue(e,a,null,"delete-single")}else a=this.deleteRange(o,i,n),this.updateValue(e,a,null,"delete-range");break}case"Delete":if(e.preventDefault(),i===n){if(i==0&&this.prefix||i==o.length-1&&this.suffix)break;let h=o.charAt(i),{decimalCharIndex:v,decimalCharIndexWithoutPrefix:x}=this.getDecimalCharIndexes(o);if(this.isNumeralChar(h)){let I=this.getDecimalLength(o);if(this._group.test(h))this._group.lastIndex=0,a=o.slice(0,i)+o.slice(i+2);else if(this._decimal.test(h))this._decimal.lastIndex=0,I?this.input?.nativeElement.setSelectionRange(i+1,i+1):a=o.slice(0,i)+o.slice(i+1);else if(v>0&&i>v){let $=this.isDecimalMode()&&(this.minFractionDigits||0)<I?"":"0";a=o.slice(0,i)+$+o.slice(i+1)}else x===1?(a=o.slice(0,i)+"0"+o.slice(i+1),a=this.parseValue(a)>0?a:""):a=o.slice(0,i)+o.slice(i+1)}this.updateValue(e,a,null,"delete-back-single")}else a=this.deleteRange(o,i,n),this.updateValue(e,a,null,"delete-range");break;case"Home":this.min&&(this.updateModel(e,this.min),e.preventDefault());break;case"End":this.max&&(this.updateModel(e,this.max),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let i=e.which||e.keyCode,n=String.fromCharCode(i),o=this.isDecimalSign(n),a=this.isMinusSign(n);i!=13&&e.preventDefault(),!o&&e.code==="NumpadDecimal"&&(o=!0,n=this._decimalChar,i=n.charCodeAt(0));let{value:h,selectionStart:v,selectionEnd:x}=this.input.nativeElement,I=this.parseValue(h+n),$=I!=null?I.toString():"",Y=h.substring(v,x),E=this.parseValue(Y),S=E!=null?E.toString():"";if(v!==x&&S.length>0){this.insert(e,n,{isDecimalSign:o,isMinusSign:a});return}this.maxlength&&$.length>this.maxlength||(48<=i&&i<=57||a||o)&&this.insert(e,n,{isDecimalSign:o,isMinusSign:a})}onPaste(e){if(!this.disabled&&!this.readonly){e.preventDefault();let i=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(i){this.maxlength&&(i=i.toString().substring(0,this.maxlength));let n=this.parseValue(i);n!=null&&this.insert(e,n.toString())}}}allowMinusSign(){return this.min==null||this.min<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let i=e.search(this._decimal);this._decimal.lastIndex=0;let o=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:i,decimalCharIndexWithoutPrefix:o}}getCharIndexes(e){let i=e.search(this._decimal);this._decimal.lastIndex=0;let n=e.search(this._minusSign);this._minusSign.lastIndex=0;let o=e.search(this._suffix);this._suffix.lastIndex=0;let a=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:i,minusCharIndex:n,suffixCharIndex:o,currencyCharIndex:a}}insert(e,i,n={isDecimalSign:!1,isMinusSign:!1}){let o=i.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&o!==-1)return;let a=this.input?.nativeElement.selectionStart,h=this.input?.nativeElement.selectionEnd,v=this.input?.nativeElement.value.trim(),{decimalCharIndex:x,minusCharIndex:I,suffixCharIndex:$,currencyCharIndex:Y}=this.getCharIndexes(v),E;if(n.isMinusSign)a===0&&(E=v,(I===-1||h!==0)&&(E=this.insertText(v,i,0,h)),this.updateValue(e,E,i,"insert"));else if(n.isDecimalSign)x>0&&a===x?this.updateValue(e,v,i,"insert"):x>a&&x<h?(E=this.insertText(v,i,a,h),this.updateValue(e,E,i,"insert")):x===-1&&this.maxFractionDigits&&(E=this.insertText(v,i,a,h),this.updateValue(e,E,i,"insert"));else{let S=this.numberFormat.resolvedOptions().maximumFractionDigits,D=a!==h?"range-insert":"insert";if(x>0&&a>x){if(a+i.length-(x+1)<=S){let K=Y>=a?Y-1:$>=a?$:v.length;E=v.slice(0,a)+i+v.slice(a+i.length,K)+v.slice(K),this.updateValue(e,E,i,D)}}else E=this.insertText(v,i,a,h),this.updateValue(e,E,i,D)}}insertText(e,i,n,o){if((i==="."?i:i.split(".")).length===2){let h=e.slice(n,o).search(this._decimal);return this._decimal.lastIndex=0,h>0?e.slice(0,n)+this.formatValue(i)+e.slice(o):e||this.formatValue(i)}else return o-n===e.length?this.formatValue(i):n===0?i+e.slice(o):o===e.length?e.slice(0,n)+i:e.slice(0,n)+i+e.slice(o)}deleteRange(e,i,n){let o;return n-i===e.length?o="":i===0?o=e.slice(n):n===e.length?o=e.slice(0,i):o=e.slice(0,i)+e.slice(n),o}initCursor(){let e=this.input?.nativeElement.selectionStart,i=this.input?.nativeElement.selectionEnd,n=this.input?.nativeElement.value,o=n.length,a=null,h=(this.prefixChar||"").length;n=n.replace(this._prefix,""),(e===i||e!==0||i<h)&&(e-=h);let v=n.charAt(e);if(this.isNumeralChar(v))return e+h;let x=e-1;for(;x>=0;)if(v=n.charAt(x),this.isNumeralChar(v)){a=x+h;break}else x--;if(a!==null)this.input?.nativeElement.setSelectionRange(a+1,a+1);else{for(x=e;x<o;)if(v=n.charAt(x),this.isNumeralChar(v)){a=x+h;break}else x++;a!==null&&this.input?.nativeElement.setSelectionRange(a,a)}return a||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==Oi()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,i,n,o){let a=this.input?.nativeElement.value,h=null;i!=null&&(h=this.parseValue(i),h=!h&&!this.allowEmpty?0:h,this.updateInput(h,n,o,i),this.handleOnInput(e,a,h))}handleOnInput(e,i,n){this.isValueChanged(i,n)&&(this.input.nativeElement.value=this.formatValue(n),this.input?.nativeElement.setAttribute("aria-valuenow",n),this.updateModel(e,n),this.onInput.emit({originalEvent:e,value:n,formattedValue:i}))}isValueChanged(e,i){if(i===null&&e!==null)return!0;if(i!=null){let n=typeof e=="string"?this.parseValue(e):e;return i!==n}return!1}validateValue(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e}updateInput(e,i,n,o){i=i||"";let a=this.input?.nativeElement.value,h=this.formatValue(e),v=a.length;if(h!==o&&(h=this.concatValues(h,o)),v===0){this.input.nativeElement.value=h,this.input.nativeElement.setSelectionRange(0,0);let I=this.initCursor()+i.length;this.input.nativeElement.setSelectionRange(I,I)}else{let x=this.input.nativeElement.selectionStart,I=this.input.nativeElement.selectionEnd;if(this.maxlength&&h.length>this.maxlength&&(h=h.slice(0,this.maxlength),x=Math.min(x,this.maxlength),I=Math.min(I,this.maxlength)),this.maxlength&&this.maxlength<h.length)return;this.input.nativeElement.value=h;let $=h.length;if(n==="range-insert"){let Y=this.parseValue((a||"").slice(0,x)),S=(Y!==null?Y.toString():"").split("").join(`(${this.groupChar})?`),D=new RegExp(S,"g");D.test(h);let K=i.split("").join(`(${this.groupChar})?`),yt=new RegExp(K,"g");yt.test(h.slice(D.lastIndex)),I=D.lastIndex+yt.lastIndex,this.input.nativeElement.setSelectionRange(I,I)}else if($===v)n==="insert"||n==="delete-back-single"?this.input.nativeElement.setSelectionRange(I+1,I+1):n==="delete-single"?this.input.nativeElement.setSelectionRange(I-1,I-1):(n==="delete-range"||n==="spin")&&this.input.nativeElement.setSelectionRange(I,I);else if(n==="delete-back-single"){let Y=a.charAt(I-1),E=a.charAt(I),S=v-$,D=this._group.test(E);D&&S===1?I+=1:!D&&this.isNumeralChar(Y)&&(I+=-1*S+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(I,I)}else if(a==="-"&&n==="insert"){this.input.nativeElement.setSelectionRange(0,0);let E=this.initCursor()+i.length+1;this.input.nativeElement.setSelectionRange(E,E)}else I=I+($-v),this.input.nativeElement.setSelectionRange(I,I)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,i){if(e&&i){let n=i.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?n!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+i.replace(this.suffixChar,"").slice(n)+this.suffixChar:e:n!==-1?e.split(this._decimal)[0]+i.slice(n):e}return e}getDecimalLength(e){if(e){let i=e.split(this._decimal);if(i.length===2)return i[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let i=this.validateValue(this.parseValue(this.input.nativeElement.value)),n=i?.toString();this.input.nativeElement.value=this.formatValue(n),this.input.nativeElement.setAttribute("aria-valuenow",n),this.updateModel(e,i),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,i){let n=this.ngControl?.control?.updateOn==="blur";this.value!==i?(this.value=i,n&&this.focused||this.onModelChange(i)):n&&this.onModelChange(i)}writeValue(e){this.value=e&&Number(e),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get filled(){return this.value!=null&&this.value.toString().length>0}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(i){return new(i||t)(Fe(gi))};static \u0275cmp=O({type:t,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(i,n,o){if(i&1&&(M(o,ta,4),M(o,ia,4),M(o,na,4),M(o,fe,4)),i&2){let a;w(a=k())&&(n.clearIconTemplate=a.first),w(a=k())&&(n.incrementButtonIconTemplate=a.first),w(a=k())&&(n.decrementButtonIconTemplate=a.first),w(a=k())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&G(oa,5),i&2){let o;w(o=k())&&(n.input=o.first)}},hostVars:6,hostBindings:function(i,n){i&2&&(f("data-pc-name","inputnumber")("data-pc-section","root"),ve(n.hostStyle),F(n.hostClass))},inputs:{showButtons:[2,"showButtons","showButtons",y],format:[2,"format","format",y],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",style:"style",placeholder:"placeholder",size:"size",maxlength:[2,"maxlength","maxlength",N],tabindex:[2,"tabindex","tabindex",N],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",y],name:"name",required:[2,"required","required",y],autocomplete:"autocomplete",min:[2,"min","min",N],max:[2,"max","max",N],incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",y],step:[2,"step","step",N],allowEmpty:[2,"allowEmpty","allowEmpty",y],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",y],variant:"variant",minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>N(e,null)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>N(e,null)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",y],autofocus:[2,"autofocus","autofocus",y],disabled:"disabled",fluid:[2,"fluid","fluid",y]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[J([$a,Dn]),L,fi],decls:6,vars:33,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","ngClass","ngStyle","value","variant","disabled","readonly","pSize","pAutoFocus","fluid"],[4,"ngIf"],["class","p-inputnumber-button-group",4,"ngIf"],["type","button","tabindex","-1",3,"ngClass","class","disabled","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["class","p-inputnumber-clear-icon",3,"click",4,"ngIf"],[3,"click","ngClass"],[1,"p-inputnumber-clear-icon",3,"click"],[4,"ngTemplateOutlet"],[1,"p-inputnumber-button-group"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup","ngClass","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(i,n){if(i&1){let o=T();u(0,"input",1,0),g("input",function(h){return d(o),m(n.onUserInput(h))})("keydown",function(h){return d(o),m(n.onInputKeyDown(h))})("keypress",function(h){return d(o),m(n.onInputKeyPress(h))})("paste",function(h){return d(o),m(n.onPaste(h))})("click",function(){return d(o),m(n.onInputClick())})("focus",function(h){return d(o),m(n.onInputFocus(h))})("blur",function(h){return d(o),m(n.onInputBlur(h))}),p(),_(2,ca,3,2,"ng-container",2)(3,va,7,17,"span",3)(4,Ia,3,8,"button",4)(5,Oa,3,8,"button",4)}i&2&&(F(n.inputStyleClass),c("ngClass","p-inputnumber-input")("ngStyle",n.inputStyle)("value",n.formattedValue())("variant",n.variant)("disabled",n.disabled)("readonly",n.readonly)("pSize",n.size)("pAutoFocus",n.autofocus)("fluid",n.hasFluid),f("id",n.inputId)("aria-valuemin",n.min)("aria-valuemax",n.max)("aria-valuenow",n.value)("placeholder",n.placeholder)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy)("title",n.title)("name",n.name)("autocomplete",n.autocomplete)("maxlength",n.maxlength)("tabindex",n.tabindex)("aria-required",n.ariaRequired)("required",n.required)("min",n.min)("max",n.max)("data-pc-section","input"),s(2),c("ngIf",n.buttonLayout!="vertical"&&n.showClear&&n.value),s(),c("ngIf",n.showButtons&&n.buttonLayout==="stacked"),s(),c("ngIf",n.showButtons&&n.buttonLayout!=="stacked"),s(),c("ngIf",n.showButtons&&n.buttonLayout!=="stacked"))},dependencies:[oe,ue,Se,_e,De,Ee,He,Je,ln,an,z],encapsulation:2,changeDetection:0})}return t})(),Mn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[Gt,z,z]})}return t})();var Aa=["item"],Ra=["empty"],Na=["header"],za=["footer"],Ha=["selecteditem"],Ua=["group"],Qa=["loader"],Ya=["removeicon"],qa=["loadingicon"],Ka=["clearicon"],ja=["dropdownicon"],Wa=["container"],Ga=["focusInput"],Za=["multiIn"],Xa=["multiContainer"],Ja=["ddBtn"],el=["items"],tl=["scroller"],il=["overlay"],nl=t=>({"p-autocomplete-chip-item":!0,"p-focus":t}),En=t=>({$implicit:t}),ol=(t,r)=>({class:"p-autocomplete-chip-icon",removeCallback:t,index:r}),Zt=t=>({height:t}),On=(t,r)=>({$implicit:t,options:r}),rl=t=>({options:t}),al=()=>({}),ll=(t,r)=>({$implicit:t,index:r});function sl(t,r){if(t&1){let e=T();u(0,"input",19,3),g("input",function(n){d(e);let o=l();return m(o.onInput(n))})("keydown",function(n){d(e);let o=l();return m(o.onKeyDown(n))})("change",function(n){d(e);let o=l();return m(o.onInputChange(n))})("focus",function(n){d(e);let o=l();return m(o.onInputFocus(n))})("blur",function(n){d(e);let o=l();return m(o.onInputBlur(n))})("paste",function(n){d(e);let o=l();return m(o.onInputPaste(n))})("keyup",function(n){d(e);let o=l();return m(o.onInputKeyUp(n))}),p()}if(t&2){let e,i=l();F(i.inputStyleClass),c("pAutoFocus",i.autofocus)("ngClass","p-autocomplete-input")("ngStyle",i.inputStyle)("type",i.type)("variant",i.variant)("autocomplete",i.autocomplete)("required",i.required)("name",i.name)("pSize",i.size)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled)("fluid",i.hasFluid),f("value",i.inputValue())("id",i.inputId)("placeholder",i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function cl(t,r){if(t&1){let e=T();u(0,"TimesIcon",22),g("click",function(){d(e);let n=l(2);return m(n.clear())}),p()}t&2&&(c("styleClass","p-autocomplete-clear-icon"),f("aria-hidden",!0))}function pl(t,r){}function ul(t,r){t&1&&_(0,pl,0,0,"ng-template")}function dl(t,r){if(t&1){let e=T();u(0,"span",23),g("click",function(){d(e);let n=l(2);return m(n.clear())}),_(1,ul,1,0,null,24),p()}if(t&2){let e=l(2);f("aria-hidden",!0),s(),c("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function ml(t,r){if(t&1&&(A(0),_(1,cl,1,2,"TimesIcon",20)(2,dl,2,2,"span",21),R()),t&2){let e=l();s(),c("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),s(),c("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function hl(t,r){t&1&&U(0)}function _l(t,r){if(t&1){let e=T();u(0,"span",33),g("click",function(n){d(e);let o=l(3).index,a=l(2);return m(a.readonly?"":a.removeOption(n,o))}),C(1,"TimesCircleIcon",34),p()}t&2&&(s(),c("styleClass","p-autocomplete-chip-icon"),f("aria-hidden",!0))}function fl(t,r){t&1&&(A(0),_(1,_l,2,2,"ng-template",null,6,Te),R())}function gl(t,r){if(t&1){let e=T();u(0,"p-chip",32),g("onRemove",function(n){d(e);let o=l().index,a=l(2);return m(a.readonly?"":a.removeOption(n,o))}),_(1,fl,3,0,"ng-container",15),p()}if(t&2){let e=l().$implicit,i=l(2);c("label",i.getOptionLabel(e))("removable",!0),s(),c("ngIf",!i.removeIconTemplate&&!i._removeIconTemplate)}}function bl(t,r){}function yl(t,r){t&1&&_(0,bl,0,0,"ng-template")}function vl(t,r){if(t&1&&(u(0,"span"),_(1,yl,1,0,null,30),p()),t&2){let e=l().index,i=l(2);s(),c("ngTemplateOutlet",i.removeIconTemplate||i._removeIconTemplate)("ngTemplateOutletContext",j(2,ol,i.removeOption.bind(i),e))}}function xl(t,r){if(t&1&&(u(0,"li",29,5),_(2,hl,1,0,"ng-container",30)(3,gl,2,3,"p-chip",31)(4,vl,2,5,"span",15),p()),t&2){let e=r.$implicit,i=r.index,n=l(2);c("ngClass",Q(10,nl,n.focusedMultipleOptionIndex()===i)),f("id",n.id+"_multiple_option_"+i)("aria-label",n.getOptionLabel(e))("aria-setsize",n.modelValue().length)("aria-posinset",i+1)("aria-selected",!0),s(2),c("ngTemplateOutlet",n.selectedItemTemplate||n._selectedItemTemplate)("ngTemplateOutletContext",Q(12,En,e)),s(),c("ngIf",!n.selectedItemTemplate&&!n._selectedItemTemplate),s(),c("ngIf",n.removeIconTemplate||n._removeIconTemplate)}}function Cl(t,r){if(t&1){let e=T();u(0,"ul",25,4),g("focus",function(n){d(e);let o=l();return m(o.onMultipleContainerFocus(n))})("blur",function(n){d(e);let o=l();return m(o.onMultipleContainerBlur(n))})("keydown",function(n){d(e);let o=l();return m(o.onMultipleContainerKeyDown(n))}),_(2,xl,5,14,"li",26),u(3,"li",27)(4,"input",28,3),g("input",function(n){d(e);let o=l();return m(o.onInput(n))})("keydown",function(n){d(e);let o=l();return m(o.onKeyDown(n))})("change",function(n){d(e);let o=l();return m(o.onInputChange(n))})("focus",function(n){d(e);let o=l();return m(o.onInputFocus(n))})("blur",function(n){d(e);let o=l();return m(o.onInputBlur(n))})("paste",function(n){d(e);let o=l();return m(o.onInputPaste(n))})("keyup",function(n){d(e);let o=l();return m(o.onInputKeyUp(n))}),p()()()}if(t&2){let e,i=l();c("ngClass",i.inputMultipleClass)("tabindex",-1),f("aria-orientation","horizontal")("aria-activedescendant",i.focused?i.focusedMultipleOptionId:void 0),s(2),c("ngForOf",i.modelValue()),s(2),F(i.inputStyleClass),c("pAutoFocus",i.autofocus)("ngClass",i.inputClass)("ngStyle",i.inputStyle)("autocomplete",i.autocomplete)("required",i.required)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled),f("type",i.type)("id",i.inputId)("name",i.name)("placeholder",i.filled?null:i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function wl(t,r){t&1&&C(0,"SpinnerIcon",37),t&2&&(c("styleClass","p-autocomplete-loader")("spin",!0),f("aria-hidden",!0))}function kl(t,r){}function Tl(t,r){t&1&&_(0,kl,0,0,"ng-template")}function Il(t,r){if(t&1&&(u(0,"span",38),_(1,Tl,1,0,null,24),p()),t&2){let e=l(2);f("aria-hidden",!0),s(),c("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Sl(t,r){if(t&1&&(A(0),_(1,wl,1,3,"SpinnerIcon",35)(2,Il,2,2,"span",36),R()),t&2){let e=l();s(),c("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),s(),c("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Dl(t,r){if(t&1&&C(0,"span",41),t&2){let e=l(2);c("ngClass",e.dropdownIcon),f("aria-hidden",!0)}}function Ml(t,r){t&1&&C(0,"ChevronDownIcon")}function Vl(t,r){}function El(t,r){t&1&&_(0,Vl,0,0,"ng-template")}function Ol(t,r){if(t&1&&(A(0),_(1,Ml,1,0,"ChevronDownIcon",15)(2,El,1,0,null,24),R()),t&2){let e=l(2);s(),c("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),s(),c("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Fl(t,r){if(t&1){let e=T();u(0,"button",39,7),g("click",function(n){d(e);let o=l();return m(o.handleDropdownClick(n))}),_(2,Dl,1,2,"span",40)(3,Ol,3,2,"ng-container",15),p()}if(t&2){let e=l();c("disabled",e.disabled),f("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),s(2),c("ngIf",e.dropdownIcon),s(),c("ngIf",!e.dropdownIcon)}}function Bl(t,r){t&1&&U(0)}function $l(t,r){t&1&&U(0)}function Pl(t,r){if(t&1&&_(0,$l,1,0,"ng-container",30),t&2){let e=r.$implicit,i=r.options;l(2);let n=ot(6);c("ngTemplateOutlet",n)("ngTemplateOutletContext",j(2,On,e,i))}}function Ll(t,r){t&1&&U(0)}function Al(t,r){if(t&1&&_(0,Ll,1,0,"ng-container",30),t&2){let e=r.options,i=l(4);c("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",Q(2,rl,e))}}function Rl(t,r){t&1&&(A(0),_(1,Al,1,4,"ng-template",null,10,Te),R())}function Nl(t,r){if(t&1){let e=T();u(0,"p-scroller",46,9),g("onLazyLoad",function(n){d(e);let o=l(2);return m(o.onLazyLoad.emit(n))}),_(2,Pl,1,5,"ng-template",null,2,Te)(4,Rl,3,0,"ng-container",15),p()}if(t&2){let e=l(2);ve(Q(8,Zt,e.scrollHeight)),c("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),s(4),c("ngIf",e.loaderTemplate||e._loaderTemplate)}}function zl(t,r){t&1&&U(0)}function Hl(t,r){if(t&1&&(A(0),_(1,zl,1,0,"ng-container",30),R()),t&2){l();let e=ot(6),i=l();s(),c("ngTemplateOutlet",e)("ngTemplateOutletContext",j(3,On,i.visibleOptions(),lt(2,al)))}}function Ul(t,r){if(t&1&&(u(0,"span"),b(1),p()),t&2){let e=l(2).$implicit,i=l(3);s(),P(i.getOptionGroupLabel(e.optionGroup))}}function Ql(t,r){t&1&&U(0)}function Yl(t,r){if(t&1&&(A(0),u(1,"li",50),_(2,Ul,2,1,"span",15)(3,Ql,1,0,"ng-container",30),p(),R()),t&2){let e=l(),i=e.$implicit,n=e.index,o=l().options,a=l(2);s(),c("ngStyle",Q(5,Zt,o.itemSize+"px")),f("id",a.id+"_"+a.getOptionIndex(n,o)),s(),c("ngIf",!a.groupTemplate),s(),c("ngTemplateOutlet",a.groupTemplate)("ngTemplateOutletContext",Q(7,En,i.optionGroup))}}function ql(t,r){if(t&1&&(u(0,"span"),b(1),p()),t&2){let e=l(2).$implicit,i=l(3);s(),P(i.getOptionLabel(e))}}function Kl(t,r){t&1&&U(0)}function jl(t,r){if(t&1){let e=T();A(0),u(1,"li",51),g("click",function(n){d(e);let o=l().$implicit,a=l(3);return m(a.onOptionSelect(n,o))})("mouseenter",function(n){d(e);let o=l().index,a=l().options,h=l(2);return m(h.onOptionMouseEnter(n,h.getOptionIndex(o,a)))}),_(2,ql,2,1,"span",15)(3,Kl,1,0,"ng-container",30),p(),R()}if(t&2){let e=l(),i=e.$implicit,n=e.index,o=l().options,a=l(2);s(),c("ngStyle",Q(12,Zt,o.itemSize+"px"))("ngClass",a.optionClass(i,n,o)),f("id",a.id+"_"+a.getOptionIndex(n,o))("aria-label",a.getOptionLabel(i))("aria-selected",a.isSelected(i))("aria-disabled",a.isOptionDisabled(i))("data-p-focused",a.focusedOptionIndex()===a.getOptionIndex(n,o))("aria-setsize",a.ariaSetSize)("aria-posinset",a.getAriaPosInset(a.getOptionIndex(n,o))),s(),c("ngIf",!a.itemTemplate&&!a._itemTemplate),s(),c("ngTemplateOutlet",a.itemTemplate||a._itemTemplate)("ngTemplateOutletContext",j(14,ll,i,o.getOptions?o.getOptions(n):n))}}function Wl(t,r){if(t&1&&_(0,Yl,4,9,"ng-container",15)(1,jl,4,17,"ng-container",15),t&2){let e=r.$implicit,i=l(3);c("ngIf",i.isOptionGroup(e)),s(),c("ngIf",!i.isOptionGroup(e))}}function Gl(t,r){if(t&1&&(A(0),b(1),R()),t&2){let e=l(4);s(),le(" ",e.searchResultMessageText," ")}}function Zl(t,r){t&1&&U(0,null,12)}function Xl(t,r){if(t&1&&(u(0,"li",52),_(1,Gl,2,1,"ng-container",53)(2,Zl,2,0,"ng-container",24),p()),t&2){let e=l().options,i=l(2);c("ngStyle",Q(4,Zt,e.itemSize+"px")),s(),c("ngIf",!i.emptyTemplate&&!i._emptyTemplate)("ngIfElse",i.empty),s(),c("ngTemplateOutlet",i.emptyTemplate||i._emptyTemplate)}}function Jl(t,r){if(t&1&&(u(0,"ul",47,11),_(2,Wl,2,2,"ng-template",48)(3,Xl,3,6,"li",49),p()),t&2){let e=r.$implicit,i=r.options,n=l(2);ve(i.contentStyle),c("ngClass",i.contentStyleClass),f("id",n.id+"_list")("aria-label",n.listLabel),s(2),c("ngForOf",e),s(),c("ngIf",!e||e&&e.length===0&&n.showEmptyMessage)}}function es(t,r){t&1&&U(0)}function ts(t,r){if(t&1&&(u(0,"div",42),_(1,Bl,1,0,"ng-container",24),u(2,"div",43),_(3,Nl,5,10,"p-scroller",44)(4,Hl,2,6,"ng-container",15),p(),_(5,Jl,4,7,"ng-template",null,8,Te)(7,es,1,0,"ng-container",24),p(),u(8,"span",45),b(9),p()),t&2){let e=l();F(e.panelStyleClass),c("ngClass",e.panelClass)("ngStyle",e.panelStyle),s(),c("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),Re("max-height",e.virtualScroll?"auto":e.scrollHeight),s(),c("ngIf",e.virtualScroll),s(),c("ngIf",!e.virtualScroll),s(3),c("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),s(2),le(" ",e.selectedMessageText," ")}}var is=({dt:t})=>`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: ${t("autocomplete.padding.x")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(${t("autocomplete.dropdown.width")} + ${t("autocomplete.padding.x")});
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${t("autocomplete.dropdown.width")};
    border-start-end-radius: ${t("autocomplete.dropdown.border.radius")};
    border-end-end-radius: ${t("autocomplete.dropdown.border.radius")};
    background: ${t("autocomplete.dropdown.background")};
    border: 1px solid ${t("autocomplete.dropdown.border.color")};
    border-inline-start: 0 none;
    color: ${t("autocomplete.dropdown.color")};
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")}, outline-color ${t("autocomplete.transition.duration")}, box-shadow ${t("autocomplete.transition.duration")};
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: ${t("autocomplete.dropdown.hover.background")};
    border-color: ${t("autocomplete.dropdown.hover.border.color")};
    color: ${t("autocomplete.dropdown.hover.color")};
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: ${t("autocomplete.dropdown.active.background")};
    border-color: ${t("autocomplete.dropdown.active.border.color")};
    color: ${t("autocomplete.dropdown.active.color")};
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: ${t("autocomplete.dropdown.focus.ring.shadow")};
    outline: ${t("autocomplete.dropdown.focus.ring.width")} ${t("autocomplete.dropdown.focus.ring.style")} ${t("autocomplete.dropdown.focus.ring.color")};
    outline-offset: ${t("autocomplete.dropdown.focus.ring.offset")};
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    background: ${t("autocomplete.overlay.background")};
    color: ${t("autocomplete.overlay.color")};
    border: 1px solid ${t("autocomplete.overlay.border.color")};
    border-radius: ${t("autocomplete.overlay.border.radius")};
    box-shadow: ${t("autocomplete.overlay.shadow")};
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: ${t("autocomplete.list.gap")};
    padding: ${t("autocomplete.list.padding")};
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${t("autocomplete.option.padding")};
    border: 0 none;
    color: ${t("autocomplete.option.color")};
    background: transparent;
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")};
    border-radius: ${t("autocomplete.option.border.radius")};
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: ${t("autocomplete.option.focus.background")};
    color: ${t("autocomplete.option.focus.color")};
}

.p-autocomplete-option-selected {
    background: ${t("autocomplete.option.selected.background")};
    color: ${t("autocomplete.option.selected.color")};
}

.p-autocomplete-option-selected.p-focus {
    background: ${t("autocomplete.option.selected.focus.background")};
    color: ${t("autocomplete.option.selected.focus.color")};
}

.p-autocomplete-option-group {
    margin: 0;
    padding: ${t("autocomplete.option.group.padding")};
    color: ${t("autocomplete.option.group.color")};
    background: ${t("autocomplete.option.group.background")};
    font-weight: ${t("autocomplete.option.group.font.weight")};
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${t("autocomplete.padding.y")} / 2) ${t("autocomplete.padding.x")};
    gap: calc(${t("autocomplete.padding.y")} / 2);
    color: ${t("autocomplete.color")};
    background: ${t("autocomplete.background")};
    border: 1px solid ${t("autocomplete.border.color")};
    border-radius: ${t("autocomplete.border.radius")};
    width: 100%;
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")}, outline-color ${t("autocomplete.transition.duration")}, box-shadow ${t("autocomplete.transition.duration")};
    outline-color: transparent;
    box-shadow: ${t("autocomplete.shadow")};
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.hover.border.color")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.focus.border.color")};
    box-shadow: ${t("autocomplete.focus.ring.shadow")};
    outline: ${t("autocomplete.focus.ring.width")} ${t("autocomplete.focus.ring.style")} ${t("autocomplete.focus.ring.color")};
    outline-offset: ${t("autocomplete.focus.ring.offset")};
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.invalid.border.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: ${t("autocomplete.filled.background")};
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${t("autocomplete.filled.hover.background")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: ${t("autocomplete.filled.focus.background")};
}

.p-autocomplete.p-disabled {
    opacity: 1;
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: ${t("autocomplete.disabled.background")};
    color: ${t("autocomplete.disabled.color")};
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${t("autocomplete.padding.y")} / 2);
    border-radius: ${t("autocomplete.chip.border.radius")};
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-inline-end: calc(${t("autocomplete.padding.y")} / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: ${t("autocomplete.chip.focus.background")};
    color: ${t("autocomplete.chip.focus.color")};
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${t("autocomplete.padding.y")} / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: ${t("autocomplete.placeholder.color")};
}

.p-autocomplete-empty-message {
    padding: ${t("autocomplete.empty.message.padding")};
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: ${t("autocomplete.dropdown.sm.width")};
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: ${t("autocomplete.dropdown.lg.width")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
}

.p-autocomplete-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    right: ${t("autocomplete.padding.x")};
    color: ${t("autocomplete.dropdown.color")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
    right: calc(${t("autocomplete.padding.x")} + ${t("autocomplete.dropdown.width")});
}
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.invalid.border.color")};
}
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.focus.border.color")};
}
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
    color: ${t("autocomplete.invalid.placeholder.color")};
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
    color: ${t("autocomplete.invalid.placeholder.color")};
}`,ns={root:{position:"relative"}},os={root:({instance:t})=>({"p-autocomplete p-component p-inputwrapper":!0,"p-disabled":t.disabled,"p-focus":t.focused,"p-inputwrapper-filled":t.filled,"p-inputwrapper-focus":t.focused&&!t.disabled||t.autofocus||t.overlayVisible,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-clearable":t.showClear&&!t.disabled,"p-autocomplete-fluid":t.hasFluid}),pcInput:"p-autocomplete-input",inputMultiple:({instance:t})=>({"p-autocomplete-input-multiple":!0,"p-variant-filled":(t.variant??(t.config.inputStyle()||t.config.inputVariant()))==="filled"}),chipItem:({instance:t,i:r})=>["p-autocomplete-chip-item",{"p-focus":t.focusedMultipleOptionIndex===r}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:t,option:r,i:e,getItemOptions:i})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":t.isSelected(r),"p-focus":t.focusedOptionIndex===t.getOptionIndex(e,i),"p-disabled":t.isOptionDisabled(r)}),emptyMessage:"p-autocomplete-empty-message"},Vn=(()=>{class t extends ee{name="autocomplete";theme=is;classes=os;inlineStyles=ns;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var rs={provide:ge,useExisting:he(()=>Xt),multi:!0},Xt=(()=>{class t extends te{overlayService;zone;minLength=1;delay=300;style;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;disabled;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;maxlength;name;required;size;appendTo;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;field;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;variant;fluid=!1;completeMethod=new V;onSelect=new V;onUnselect=new V;onFocus=new V;onBlur=new V;onDropdownClick=new V;onClear=new V;onKeyUp=new V;onShow=new V;onHide=new V;onLazyLoad=new V;containerEL;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;_itemSize;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;primeng=H(Li);value;_suggestions=re(null);onModelChange=()=>{};onModelTouched=()=>{};timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;_filled;get filled(){return this._filled}set filled(e){this._filled=e}loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;modelValue=re(null);focusedMultipleOptionIndex=re(-1);focusedOptionIndex=re(-1);_componentStyle=H(Vn);visibleOptions=Ie(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=Ie(()=>{let e=this.modelValue(),i=this.optionValueSelected?(this.suggestions||[]).find(n=>Pe(n,this.optionValue)===e):e;if(Ge(e))if(typeof e=="object"||this.optionValueSelected){let n=this.getOptionLabel(i);return n??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get rootClass(){return this._componentStyle.classes.root({instance:this})}get inputMultipleClass(){return this._componentStyle.classes.inputMultiple({instance:this})}get panelClass(){return{"p-autocomplete-overlay p-component":!0,"p-input-filled":this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-ripple-disabled":this.config.ripple()===!1}}get inputClass(){return{"p-autocomplete-input":!this.multiple,"p-autocomplete-dd-input":this.dropdown}}get searchResultMessageText(){return Ge(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue().length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(xe.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}optionClass(e,i,n){return{"p-autocomplete-option":!0,"p-autocomplete-option-selected":this.isSelected(e),"p-focus":this.focusedOptionIndex()===this.getOptionIndex(i,n),"p-disabled":this.isOptionDisabled(e)}}constructor(e,i){super(),this.overlayService=e,this.zone=i,st(()=>{this.filled=Ge(this.modelValue())})}ngOnInit(){super.ngOnInit(),this.id=this.id||ze("pn_id_"),this.cd.detectChanges()}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((i,n,o)=>{i.push({optionGroup:n,group:!0,index:o});let a=this.getOptionGroupChildren(n);return a&&a.forEach(h=>i.push(h)),i},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return ai(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?ai(this.visibleOptions().slice(0,e),n=>this.isValidOption(n)):-1;return i>-1?i:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?Pe(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.find(i=>Ze(i,this.getOptionValue(e),this.equalityKey())):!1:Ze(this.modelValue(),this.getOptionValue(e),this.equalityKey())}isOptionMatched(e,i){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===i.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.dataKey}onContainerClick(e){this.disabled||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&$e(this.inputEL.nativeElement)}handleDropdownClick(e){let i;this.overlayVisible?this.hide(!0):($e(this.inputEL.nativeElement),i=this.inputEL.nativeElement.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,i,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:i})}onInput(e){if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength!==null&&(i=i.split("").slice(0,this.maxlength).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=this.minLength?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let i=!1;if(this.visibleOptions()){let n=this.visibleOptions().find(o=>this.isOptionMatched(o,this.inputEL.nativeElement.value||""));n!==void 0&&(i=!0,!this.isSelected(n)&&this.onOptionSelect(e,n))}i||(this.inputEL.nativeElement.value="",!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.disabled)return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.disabled||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:break}}onArrowDownKey(e){if(!this.overlayVisible)return;let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}onArrowLeftKey(e){let i=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&($i(i.value)&&this.hasSelectedOption()?($e(this.multiContainerEL.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:i}=e,n=i.value.length;i.setSelectionRange(0,e.shiftKey?n:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:i}=e,n=i.value.length;i.setSelectionRange(e.shiftKey?0:n,n),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.typeahead||this.multiple&&(this.updateModel([...this.modelValue()||[],e.target.value]),this.inputEL.nativeElement.value=""),this.overlayVisible?(this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide()):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(Ge(this.modelValue())&&!this.inputEL.nativeElement.value){let i=this.modelValue()[this.modelValue().length-1],n=this.modelValue().slice(0,-1);this.updateModel(n),this.onUnselect.emit({originalEvent:e,value:i})}e.stopPropagation()}!this.multiple&&this.showClear&&this.findSelectedOptionIndex()!=-1&&this.clear()}onArrowLeftKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(i)}onArrowRightKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex();i++,this.focusedMultipleOptionIndex.set(i),i>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),$e(this.inputEL.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,i,n=!0){let o=this.getOptionValue(i);this.multiple?(this.inputEL.nativeElement.value="",this.isSelected(i)||this.updateModel([...this.modelValue()||[],o])):this.updateModel(o),this.onSelect.emit({originalEvent:e,value:i}),n&&this.hide(!0)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}search(e,i,n){i!=null&&(n==="input"&&i.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:i})))}removeOption(e,i){e.stopPropagation();let n=this.modelValue()[i],o=this.modelValue().filter((a,h)=>h!==i);this.updateModel(o),this.onUnselect.emit({originalEvent:e,value:n}),$e(this.inputEL.nativeElement)}updateModel(e){this.value=e,this.modelValue.set(e),this.onModelChange(e),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let n=Z(this.itemsViewChild.nativeElement,`li[id="${i}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,i){this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[i],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),e&&$e(this.inputEL.nativeElement),e&&$e(this.inputEL.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let i=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&$e(this.inputEL.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{i()},0)}clear(){this.updateModel(null),this.inputEL.nativeElement.value="",this.onClear.emit()}writeValue(e){this.value=e,this.modelValue.set(e),this.updateInputValue(),this.cd.markForCheck()}hasSelectedOption(){return Ge(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}getOptionLabel(e){return this.field||this.optionLabel?Pe(e,this.field||this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Pe(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?Pe(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?Pe(e,this.optionGroupChildren):e.items}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=Z(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=Z(this.itemsWrapper,".p-autocomplete-item.p-highlight");i&&i.scrollIntoView({block:"nearest",inline:"center"})}}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(Fe(Pt),Fe(at))};static \u0275cmp=O({type:t,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(i,n,o){if(i&1&&(M(o,Aa,5),M(o,Ra,5),M(o,Na,5),M(o,za,5),M(o,Ha,5),M(o,Ua,5),M(o,Qa,5),M(o,Ya,5),M(o,qa,5),M(o,Ka,5),M(o,ja,5),M(o,fe,4)),i&2){let a;w(a=k())&&(n.itemTemplate=a.first),w(a=k())&&(n.emptyTemplate=a.first),w(a=k())&&(n.headerTemplate=a.first),w(a=k())&&(n.footerTemplate=a.first),w(a=k())&&(n.selectedItemTemplate=a.first),w(a=k())&&(n.groupTemplate=a.first),w(a=k())&&(n.loaderTemplate=a.first),w(a=k())&&(n.removeIconTemplate=a.first),w(a=k())&&(n.loadingIconTemplate=a.first),w(a=k())&&(n.clearIconTemplate=a.first),w(a=k())&&(n.dropdownIconTemplate=a.first),w(a=k())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&(G(Wa,5),G(Ga,5),G(Za,5),G(Xa,5),G(Ja,5),G(el,5),G(tl,5),G(il,5)),i&2){let o;w(o=k())&&(n.containerEL=o.first),w(o=k())&&(n.inputEL=o.first),w(o=k())&&(n.multiInputEl=o.first),w(o=k())&&(n.multiContainerEL=o.first),w(o=k())&&(n.dropdownButton=o.first),w(o=k())&&(n.itemsViewChild=o.first),w(o=k())&&(n.scroller=o.first),w(o=k())&&(n.overlayViewChild=o.first)}},inputs:{minLength:[2,"minLength","minLength",N],delay:[2,"delay","delay",N],style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",y],disabled:[2,"disabled","disabled",y],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",y],virtualScroll:[2,"virtualScroll","virtualScroll",y],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",N],virtualScrollOptions:"virtualScrollOptions",maxlength:[2,"maxlength","maxlength",e=>N(e,null)],name:"name",required:[2,"required","required",y],size:"size",appendTo:"appendTo",autoHighlight:[2,"autoHighlight","autoHighlight",y],forceSelection:[2,"forceSelection","forceSelection",y],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",y],baseZIndex:[2,"baseZIndex","baseZIndex",N],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",y],group:[2,"group","group",y],completeOnFocus:[2,"completeOnFocus","completeOnFocus",y],showClear:[2,"showClear","showClear",y],field:"field",dropdown:[2,"dropdown","dropdown",y],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",y],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",y],tabindex:[2,"tabindex","tabindex",N],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",y],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",itemSize:"itemSize",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",y],selectOnFocus:[2,"selectOnFocus","selectOnFocus",y],searchLocale:[2,"searchLocale","searchLocale",y],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",y],typeahead:[2,"typeahead","typeahead",y],variant:"variant",fluid:[2,"fluid","fluid",y]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[J([rs,Vn]),L],decls:11,vars:15,consts:[["container",""],["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],[2,"position","relative",3,"click","ngClass","ngStyle"],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","ngClass","ngStyle","class","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"ngClass","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","class","p-autocomplete-dropdown","pRipple","",3,"disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid"],[3,"styleClass","click",4,"ngIf"],["class","p-autocomplete-clear-icon",3,"click",4,"ngIf"],[3,"click","styleClass"],[1,"p-autocomplete-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","ngClass","tabindex"],["role","option",3,"ngClass",4,"ngFor","ngForOf"],["role","option",1,"p-autocomplete-input-chip"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","autocomplete","required","tabindex","readonly","disabled"],["role","option",3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["styleClass","p-autocomplete-chip",3,"label","removable","onRemove",4,"ngIf"],["styleClass","p-autocomplete-chip",3,"onRemove","label","removable"],[1,"p-autocomplete-chip-icon",3,"click"],[3,"styleClass"],[3,"styleClass","spin",4,"ngIf"],["class","p-autocomplete-loader pi-spin ",4,"ngIf"],[3,"styleClass","spin"],[1,"p-autocomplete-loader","pi-spin"],["type","button","pRipple","",1,"p-autocomplete-dropdown",3,"click","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"ngClass","ngStyle"],[1,"p-autocomplete-list-container"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox",1,"p-autocomplete-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-autocomplete-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-autocomplete-option-group",3,"ngStyle"],["pRipple","","role","option",3,"click","mouseenter","ngStyle","ngClass"],["role","option",1,"p-autocomplete-empty-message",3,"ngStyle"],[4,"ngIf","ngIfElse"]],template:function(i,n){if(i&1){let o=T();u(0,"div",13,0),g("click",function(h){return d(o),m(n.onContainerClick(h))}),_(2,sl,2,25,"input",14)(3,ml,3,2,"ng-container",15)(4,Cl,6,26,"ul",16)(5,Sl,3,2,"ng-container",15)(6,Fl,4,5,"button",17),u(7,"p-overlay",18,1),pe("visibleChange",function(h){return d(o),ce(n.overlayVisible,h)||(n.overlayVisible=h),m(h)}),g("onAnimationStart",function(h){return d(o),m(n.onOverlayAnimationStart(h))})("onHide",function(){return d(o),m(n.hide())}),_(9,ts,10,11,"ng-template",null,2,Te),p()()}i&2&&(F(n.styleClass),c("ngClass",n.rootClass)("ngStyle",n.style),s(2),c("ngIf",!n.multiple),s(),c("ngIf",n.filled&&!n.disabled&&n.showClear&&!n.loading),s(),c("ngIf",n.multiple),s(),c("ngIf",n.loading),s(),c("ngIf",n.dropdown),s(),se("visible",n.overlayVisible),c("options",n.overlayOptions)("target","@parent")("appendTo",n.appendTo)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions))},dependencies:[oe,ue,ct,Se,_e,De,tn,Ee,ut,nn,He,Qi,Ui,Je,At,en,z],encapsulation:2,changeDetection:0})}return t})(),Fn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[Xt,z]})}return t})();var ls=["date"],ss=["header"],cs=["footer"],ps=["disabledDate"],us=["decade"],ds=["previousicon"],ms=["nexticon"],hs=["triggericon"],_s=["clearicon"],fs=["decrementicon"],gs=["incrementicon"],bs=["inputicon"],ys=["container"],vs=["inputfield"],xs=["contentWrapper"],Cs=[[["p-header"]],[["p-footer"]]],ws=["p-header","p-footer"],ks=t=>({clickCallBack:t}),Ts=t=>({"p-datepicker-input-icon":t}),Is=(t,r)=>({showTransitionParams:t,hideTransitionParams:r}),Ss=t=>({value:"visible",params:t}),Bn=t=>({visibility:t}),hi=t=>({$implicit:t}),Ds=(t,r)=>({"p-datepicker-day-cell":!0,"p-datepicker-other-month":t,"p-datepicker-today":r}),Ms=(t,r)=>({"p-datepicker-month":!0,"p-datepicker-month-selected":t,"p-disabled":r}),Vs=(t,r)=>({"p-datepicker-year":!0,"p-datepicker-year-selected":t,"p-disabled":r});function Es(t,r){if(t&1){let e=T();u(0,"TimesIcon",11),g("click",function(){d(e);let n=l(3);return m(n.clear())}),p()}t&2&&F("p-datepicker-clear-icon")}function Os(t,r){}function Fs(t,r){t&1&&_(0,Os,0,0,"ng-template")}function Bs(t,r){if(t&1){let e=T();u(0,"span",12),g("click",function(){d(e);let n=l(3);return m(n.clear())}),_(1,Fs,1,0,null,13),p()}if(t&2){let e=l(3);s(),c("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function $s(t,r){if(t&1&&(A(0),_(1,Es,1,2,"TimesIcon",9)(2,Bs,2,1,"span",10),R()),t&2){let e=l(2);s(),c("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),s(),c("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Ps(t,r){if(t&1&&C(0,"span",16),t&2){let e=l(3);c("ngClass",e.icon)}}function Ls(t,r){t&1&&C(0,"CalendarIcon")}function As(t,r){}function Rs(t,r){t&1&&_(0,As,0,0,"ng-template")}function Ns(t,r){if(t&1&&(A(0),_(1,Ls,1,0,"CalendarIcon",7)(2,Rs,1,0,null,13),R()),t&2){let e=l(3);s(),c("ngIf",!e.triggerIconTemplate&&!e._triggerIconTemplate),s(),c("ngTemplateOutlet",e.triggerIconTemplate||e._triggerIconTemplate)}}function zs(t,r){if(t&1){let e=T();u(0,"button",14),g("click",function(n){d(e),l();let o=ot(1),a=l();return m(a.onButtonClick(n,o))}),_(1,Ps,1,1,"span",15)(2,Ns,3,2,"ng-container",7),p()}if(t&2){let e,i=l(2);c("disabled",i.disabled),f("aria-label",i.iconButtonAriaLabel)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.panelId:null),s(),c("ngIf",i.icon),s(),c("ngIf",!i.icon)}}function Hs(t,r){if(t&1){let e=T();u(0,"CalendarIcon",20),g("click",function(n){d(e);let o=l(3);return m(o.onButtonClick(n))}),p()}if(t&2){let e=l(3);c("ngClass",Q(1,Ts,e.showOnFocus))}}function Us(t,r){t&1&&U(0)}function Qs(t,r){if(t&1&&(A(0),u(1,"span",17),_(2,Hs,1,3,"CalendarIcon",18)(3,Us,1,0,"ng-container",19),p(),R()),t&2){let e=l(2);s(2),c("ngIf",!e.inputIconTemplate&&!e._inputIconTemplate),s(),c("ngTemplateOutlet",e.inputIconTemplate||e._inputIconTemplate)("ngTemplateOutletContext",Q(3,ks,e.onButtonClick.bind(e)))}}function Ys(t,r){if(t&1){let e=T();u(0,"input",6,1),g("focus",function(n){d(e);let o=l();return m(o.onInputFocus(n))})("keydown",function(n){d(e);let o=l();return m(o.onInputKeydown(n))})("click",function(){d(e);let n=l();return m(n.onInputClick())})("blur",function(n){d(e);let o=l();return m(o.onInputBlur(n))})("input",function(n){d(e);let o=l();return m(o.onUserInput(n))}),p(),_(2,$s,3,2,"ng-container",7)(3,zs,3,6,"button",8)(4,Qs,4,5,"ng-container",7)}if(t&2){let e,i=l();F(i.inputStyleClass),c("pSize",i.size)("value",i.inputFieldValue)("readonly",i.readonlyInput)("ngStyle",i.inputStyle)("ngClass","p-datepicker-input")("placeholder",i.placeholder||"")("disabled",i.disabled)("pAutoFocus",i.autofocus)("variant",i.variant)("fluid",i.hasFluid),f("id",i.inputId)("name",i.name)("required",i.required)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.panelId:null)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("tabindex",i.tabindex)("inputmode",i.touchUI?"off":null),s(2),c("ngIf",i.showClear&&!i.disabled&&i.value!=null),s(),c("ngIf",i.showIcon&&i.iconDisplay==="button"),s(),c("ngIf",i.iconDisplay==="input"&&i.showIcon)}}function qs(t,r){t&1&&U(0)}function Ks(t,r){t&1&&C(0,"ChevronLeftIcon")}function js(t,r){}function Ws(t,r){t&1&&_(0,js,0,0,"ng-template")}function Gs(t,r){if(t&1&&(u(0,"span"),_(1,Ws,1,0,null,13),p()),t&2){let e=l(4);s(),c("ngTemplateOutlet",e.previousIconTemplate||e._previousIconTemplate)}}function Zs(t,r){if(t&1){let e=T();u(0,"button",37),g("click",function(n){d(e);let o=l(4);return m(o.switchToMonthView(n))})("keydown",function(n){d(e);let o=l(4);return m(o.onContainerButtonKeydown(n))}),b(1),p()}if(t&2){let e=l().$implicit,i=l(3);c("disabled",i.switchViewButtonDisabled()),f("aria-label",i.getTranslation("chooseMonth")),s(),le(" ",i.getMonthName(e.month)," ")}}function Xs(t,r){if(t&1){let e=T();u(0,"button",38),g("click",function(n){d(e);let o=l(4);return m(o.switchToYearView(n))})("keydown",function(n){d(e);let o=l(4);return m(o.onContainerButtonKeydown(n))}),b(1),p()}if(t&2){let e=l().$implicit,i=l(3);c("disabled",i.switchViewButtonDisabled()),f("aria-label",i.getTranslation("chooseYear")),s(),le(" ",i.getYear(e)," ")}}function Js(t,r){if(t&1&&(A(0),b(1),R()),t&2){let e=l(5);s(),Vt("",e.yearPickerValues()[0]," - ",e.yearPickerValues()[e.yearPickerValues().length-1],"")}}function ec(t,r){t&1&&U(0)}function tc(t,r){if(t&1&&(u(0,"span",39),_(1,Js,2,2,"ng-container",7)(2,ec,1,0,"ng-container",19),p()),t&2){let e=l(4);s(),c("ngIf",!e.decadeTemplate&&!e._decadeTemplate),s(),c("ngTemplateOutlet",e.decadeTemplate||e._decadeTemplate)("ngTemplateOutletContext",Q(3,hi,e.yearPickerValues))}}function ic(t,r){t&1&&C(0,"ChevronRightIcon")}function nc(t,r){}function oc(t,r){t&1&&_(0,nc,0,0,"ng-template")}function rc(t,r){if(t&1&&(u(0,"span"),_(1,oc,1,0,null,13),p()),t&2){let e=l(4);s(),c("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function ac(t,r){if(t&1&&(u(0,"th",44)(1,"span"),b(2),p()()),t&2){let e=l(5);s(2),P(e.getTranslation("weekHeader"))}}function lc(t,r){if(t&1&&(u(0,"th",45)(1,"span",46),b(2),p()()),t&2){let e=r.$implicit;s(2),P(e)}}function sc(t,r){if(t&1&&(u(0,"td",49)(1,"span",50),b(2),p()()),t&2){let e=l().index,i=l(2).$implicit;s(2),le(" ",i.weekNumbers[e]," ")}}function cc(t,r){if(t&1&&(A(0),b(1),R()),t&2){let e=l(2).$implicit;s(),P(e.day)}}function pc(t,r){t&1&&U(0)}function uc(t,r){if(t&1&&(A(0),_(1,pc,1,0,"ng-container",19),R()),t&2){let e=l(2).$implicit,i=l(6);s(),c("ngTemplateOutlet",i.dateTemplate||i._dateTemplate)("ngTemplateOutletContext",Q(2,hi,e))}}function dc(t,r){t&1&&U(0)}function mc(t,r){if(t&1&&(A(0),_(1,dc,1,0,"ng-container",19),R()),t&2){let e=l(2).$implicit,i=l(6);s(),c("ngTemplateOutlet",i.disabledDateTemplate||i._disabledDateTemplate)("ngTemplateOutletContext",Q(2,hi,e))}}function hc(t,r){if(t&1&&(u(0,"div",53),b(1),p()),t&2){let e=l(2).$implicit;s(),le(" ",e.day," ")}}function _c(t,r){if(t&1){let e=T();A(0),u(1,"span",51),g("click",function(n){d(e);let o=l().$implicit,a=l(6);return m(a.onDateSelect(n,o))})("keydown",function(n){d(e);let o=l().$implicit,a=l(3).index,h=l(3);return m(h.onDateCellKeydown(n,o,a))}),_(2,cc,2,1,"ng-container",7)(3,uc,2,4,"ng-container",7)(4,mc,2,4,"ng-container",7),p(),_(5,hc,2,1,"div",52),R()}if(t&2){let e=l().$implicit,i=l(6);s(),c("ngClass",i.dayClass(e)),f("data-date",i.formatDateKey(i.formatDateMetaToDate(e))),s(),c("ngIf",!i.dateTemplate&&!i._dateTemplate&&(e.selectable||!i.disabledDateTemplate&&!i._disabledDateTemplate)),s(),c("ngIf",e.selectable||!i.disabledDateTemplate&&!i._disabledDateTemplate),s(),c("ngIf",!e.selectable),s(),c("ngIf",i.isSelected(e))}}function fc(t,r){if(t&1&&(u(0,"td",16),_(1,_c,6,6,"ng-container",7),p()),t&2){let e=r.$implicit,i=l(6);c("ngClass",j(3,Ds,e.otherMonth,e.today)),f("aria-label",e.day),s(),c("ngIf",e.otherMonth?i.showOtherMonths:!0)}}function gc(t,r){if(t&1&&(u(0,"tr"),_(1,sc,3,1,"td",47)(2,fc,2,6,"td",48),p()),t&2){let e=r.$implicit,i=l(5);s(),c("ngIf",i.showWeek),s(),c("ngForOf",e)}}function bc(t,r){if(t&1&&(u(0,"table",40)(1,"thead")(2,"tr"),_(3,ac,3,1,"th",41)(4,lc,3,1,"th",42),p()(),u(5,"tbody"),_(6,gc,3,2,"tr",43),p()()),t&2){let e=l().$implicit,i=l(3);s(3),c("ngIf",i.showWeek),s(),c("ngForOf",i.weekDays),s(2),c("ngForOf",e.dates)}}function yc(t,r){if(t&1){let e=T();u(0,"div",28)(1,"div",29)(2,"p-button",30),g("keydown",function(n){d(e);let o=l(3);return m(o.onContainerButtonKeydown(n))})("onClick",function(n){d(e);let o=l(3);return m(o.onPrevButtonClick(n))}),_(3,Ks,1,0,"ChevronLeftIcon",7)(4,Gs,2,1,"span",7),p(),u(5,"div",31),_(6,Zs,2,3,"button",32)(7,Xs,2,3,"button",33)(8,tc,3,5,"span",34),p(),u(9,"p-button",35),g("keydown",function(n){d(e);let o=l(3);return m(o.onContainerButtonKeydown(n))})("onClick",function(n){d(e);let o=l(3);return m(o.onNextButtonClick(n))}),_(10,ic,1,0,"ChevronRightIcon",7)(11,rc,2,1,"span",7),p()(),_(12,bc,7,3,"table",36),p()}if(t&2){let e=r.index,i=l(3);s(2),c("ngStyle",Q(12,Bn,e===0?"visible":"hidden"))("ariaLabel",i.prevIconAriaLabel),s(),c("ngIf",!i.previousIconTemplate&&!i._previousIconTemplate),s(),c("ngIf",i.previousIconTemplate||i._previousIconTemplate),s(2),c("ngIf",i.currentView==="date"),s(),c("ngIf",i.currentView!=="year"),s(),c("ngIf",i.currentView==="year"),s(),c("ngStyle",Q(14,Bn,e===i.months.length-1?"visible":"hidden"))("ariaLabel",i.nextIconAriaLabel),s(),c("ngIf",!i.nextIconTemplate&&!i._nextIconTemplate),s(),c("ngIf",i.nextIconTemplate||i._nextIconTemplate),s(),c("ngIf",i.currentView==="date")}}function vc(t,r){if(t&1&&(u(0,"div",53),b(1),p()),t&2){let e=l().$implicit;s(),le(" ",e," ")}}function xc(t,r){if(t&1){let e=T();u(0,"span",56),g("click",function(n){let o=d(e).index,a=l(4);return m(a.onMonthSelect(n,o))})("keydown",function(n){let o=d(e).index,a=l(4);return m(a.onMonthCellKeydown(n,o))}),b(1),_(2,vc,2,1,"div",52),p()}if(t&2){let e=r.$implicit,i=r.index,n=l(4);c("ngClass",j(3,Ms,n.isMonthSelected(i),n.isMonthDisabled(i))),s(),le(" ",e," "),s(),c("ngIf",n.isMonthSelected(i))}}function Cc(t,r){if(t&1&&(u(0,"div",54),_(1,xc,3,6,"span",55),p()),t&2){let e=l(3);s(),c("ngForOf",e.monthPickerValues())}}function wc(t,r){if(t&1&&(u(0,"div",53),b(1),p()),t&2){let e=l().$implicit;s(),le(" ",e," ")}}function kc(t,r){if(t&1){let e=T();u(0,"span",56),g("click",function(n){let o=d(e).$implicit,a=l(4);return m(a.onYearSelect(n,o))})("keydown",function(n){let o=d(e).$implicit,a=l(4);return m(a.onYearCellKeydown(n,o))}),b(1),_(2,wc,2,1,"div",52),p()}if(t&2){let e=r.$implicit,i=l(4);c("ngClass",j(3,Vs,i.isYearSelected(e),i.isYearDisabled(e))),s(),le(" ",e," "),s(),c("ngIf",i.isYearSelected(e))}}function Tc(t,r){if(t&1&&(u(0,"div",57),_(1,kc,3,6,"span",55),p()),t&2){let e=l(3);s(),c("ngForOf",e.yearPickerValues())}}function Ic(t,r){if(t&1&&(A(0),u(1,"div",24),_(2,yc,13,16,"div",25),p(),_(3,Cc,2,1,"div",26)(4,Tc,2,1,"div",27),R()),t&2){let e=l(2);s(2),c("ngForOf",e.months),s(),c("ngIf",e.currentView==="month"),s(),c("ngIf",e.currentView==="year")}}function Sc(t,r){t&1&&C(0,"ChevronUpIcon")}function Dc(t,r){}function Mc(t,r){t&1&&_(0,Dc,0,0,"ng-template")}function Vc(t,r){t&1&&(A(0),b(1,"0"),R())}function Ec(t,r){t&1&&C(0,"ChevronDownIcon")}function Oc(t,r){}function Fc(t,r){t&1&&_(0,Oc,0,0,"ng-template")}function Bc(t,r){t&1&&C(0,"ChevronUpIcon")}function $c(t,r){}function Pc(t,r){t&1&&_(0,$c,0,0,"ng-template")}function Lc(t,r){t&1&&(A(0),b(1,"0"),R())}function Ac(t,r){t&1&&C(0,"ChevronDownIcon")}function Rc(t,r){}function Nc(t,r){t&1&&_(0,Rc,0,0,"ng-template")}function zc(t,r){if(t&1&&(A(0),_(1,Nc,1,0,null,13),R()),t&2){let e=l(3);s(),c("ngTemplateOutlet",e.decrementIconTemplate||e._decrementIconTemplate)}}function Hc(t,r){if(t&1&&(u(0,"div",61)(1,"span"),b(2),p()()),t&2){let e=l(3);s(2),P(e.timeSeparator)}}function Uc(t,r){t&1&&C(0,"ChevronUpIcon")}function Qc(t,r){}function Yc(t,r){t&1&&_(0,Qc,0,0,"ng-template")}function qc(t,r){t&1&&(A(0),b(1,"0"),R())}function Kc(t,r){t&1&&C(0,"ChevronDownIcon")}function jc(t,r){}function Wc(t,r){t&1&&_(0,jc,0,0,"ng-template")}function Gc(t,r){if(t&1){let e=T();u(0,"div",66)(1,"p-button",60),g("keydown",function(n){d(e);let o=l(3);return m(o.onContainerButtonKeydown(n))})("keydown.enter",function(n){d(e);let o=l(3);return m(o.incrementSecond(n))})("keydown.space",function(n){d(e);let o=l(3);return m(o.incrementSecond(n))})("mousedown",function(n){d(e);let o=l(3);return m(o.onTimePickerElementMouseDown(n,2,1))})("mouseup",function(n){d(e);let o=l(3);return m(o.onTimePickerElementMouseUp(n))})("keyup.enter",function(n){d(e);let o=l(3);return m(o.onTimePickerElementMouseUp(n))})("keyup.space",function(n){d(e);let o=l(3);return m(o.onTimePickerElementMouseUp(n))})("mouseleave",function(){d(e);let n=l(3);return m(n.onTimePickerElementMouseLeave())}),_(2,Uc,1,0,"ChevronUpIcon",7)(3,Yc,1,0,null,13),p(),u(4,"span"),_(5,qc,2,0,"ng-container",7),b(6),p(),u(7,"p-button",60),g("keydown",function(n){d(e);let o=l(3);return m(o.onContainerButtonKeydown(n))})("keydown.enter",function(n){d(e);let o=l(3);return m(o.decrementSecond(n))})("keydown.space",function(n){d(e);let o=l(3);return m(o.decrementSecond(n))})("mousedown",function(n){d(e);let o=l(3);return m(o.onTimePickerElementMouseDown(n,2,-1))})("mouseup",function(n){d(e);let o=l(3);return m(o.onTimePickerElementMouseUp(n))})("keyup.enter",function(n){d(e);let o=l(3);return m(o.onTimePickerElementMouseUp(n))})("keyup.space",function(n){d(e);let o=l(3);return m(o.onTimePickerElementMouseUp(n))})("mouseleave",function(){d(e);let n=l(3);return m(n.onTimePickerElementMouseLeave())}),_(8,Kc,1,0,"ChevronDownIcon",7)(9,Wc,1,0,null,13),p()()}if(t&2){let e=l(3);s(),f("aria-label",e.getTranslation("nextSecond")),s(),c("ngIf",!e.incrementIconTemplate&&!e._incrementIconTemplate),s(),c("ngTemplateOutlet",e.incrementIconTemplate||e._incrementIconTemplate),s(2),c("ngIf",e.currentSecond<10),s(),P(e.currentSecond),s(),f("aria-label",e.getTranslation("prevSecond")),s(),c("ngIf",!e.decrementIconTemplate&&!e._decrementIconTemplate),s(),c("ngTemplateOutlet",e.decrementIconTemplate||e._decrementIconTemplate)}}function Zc(t,r){if(t&1&&(u(0,"div",61)(1,"span"),b(2),p()()),t&2){let e=l(3);s(2),P(e.timeSeparator)}}function Xc(t,r){t&1&&C(0,"ChevronUpIcon")}function Jc(t,r){}function ep(t,r){t&1&&_(0,Jc,0,0,"ng-template")}function tp(t,r){t&1&&C(0,"ChevronDownIcon")}function ip(t,r){}function np(t,r){t&1&&_(0,ip,0,0,"ng-template")}function op(t,r){if(t&1){let e=T();u(0,"div",67)(1,"p-button",68),g("keydown",function(n){d(e);let o=l(3);return m(o.onContainerButtonKeydown(n))})("onClick",function(n){d(e);let o=l(3);return m(o.toggleAMPM(n))})("keydown.enter",function(n){d(e);let o=l(3);return m(o.toggleAMPM(n))}),_(2,Xc,1,0,"ChevronUpIcon",7)(3,ep,1,0,null,13),p(),u(4,"span"),b(5),p(),u(6,"p-button",69),g("keydown",function(n){d(e);let o=l(3);return m(o.onContainerButtonKeydown(n))})("click",function(n){d(e);let o=l(3);return m(o.toggleAMPM(n))})("keydown.enter",function(n){d(e);let o=l(3);return m(o.toggleAMPM(n))}),_(7,tp,1,0,"ChevronDownIcon",7)(8,np,1,0,null,13),p()()}if(t&2){let e=l(3);s(),f("aria-label",e.getTranslation("am")),s(),c("ngIf",!e.incrementIconTemplate&&!e._incrementIconTemplate),s(),c("ngTemplateOutlet",e.incrementIconTemplate||e._incrementIconTemplate),s(2),P(e.pm?"PM":"AM"),s(),f("aria-label",e.getTranslation("pm")),s(),c("ngIf",!e.decrementIconTemplate&&!e._decrementIconTemplate),s(),c("ngTemplateOutlet",e.decrementIconTemplate||e._decrementIconTemplate)}}function rp(t,r){if(t&1){let e=T();u(0,"div",58)(1,"div",59)(2,"p-button",60),g("keydown",function(n){d(e);let o=l(2);return m(o.onContainerButtonKeydown(n))})("keydown.enter",function(n){d(e);let o=l(2);return m(o.incrementHour(n))})("keydown.space",function(n){d(e);let o=l(2);return m(o.incrementHour(n))})("mousedown",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseDown(n,0,1))})("mouseup",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseUp(n))})("keyup.enter",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseUp(n))})("keyup.space",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseUp(n))})("mouseleave",function(){d(e);let n=l(2);return m(n.onTimePickerElementMouseLeave())}),_(3,Sc,1,0,"ChevronUpIcon",7)(4,Mc,1,0,null,13),p(),u(5,"span"),_(6,Vc,2,0,"ng-container",7),b(7),p(),u(8,"p-button",60),g("keydown",function(n){d(e);let o=l(2);return m(o.onContainerButtonKeydown(n))})("keydown.enter",function(n){d(e);let o=l(2);return m(o.decrementHour(n))})("keydown.space",function(n){d(e);let o=l(2);return m(o.decrementHour(n))})("mousedown",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseDown(n,0,-1))})("mouseup",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseUp(n))})("keyup.enter",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseUp(n))})("keyup.space",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseUp(n))})("mouseleave",function(){d(e);let n=l(2);return m(n.onTimePickerElementMouseLeave())}),_(9,Ec,1,0,"ChevronDownIcon",7)(10,Fc,1,0,null,13),p()(),u(11,"div",61)(12,"span"),b(13),p()(),u(14,"div",62)(15,"p-button",60),g("keydown",function(n){d(e);let o=l(2);return m(o.onContainerButtonKeydown(n))})("keydown.enter",function(n){d(e);let o=l(2);return m(o.incrementMinute(n))})("keydown.space",function(n){d(e);let o=l(2);return m(o.incrementMinute(n))})("mousedown",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseDown(n,1,1))})("mouseup",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseUp(n))})("keyup.enter",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseUp(n))})("keyup.space",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseUp(n))})("mouseleave",function(){d(e);let n=l(2);return m(n.onTimePickerElementMouseLeave())}),_(16,Bc,1,0,"ChevronUpIcon",7)(17,Pc,1,0,null,13),p(),u(18,"span"),_(19,Lc,2,0,"ng-container",7),b(20),p(),u(21,"p-button",60),g("keydown",function(n){d(e);let o=l(2);return m(o.onContainerButtonKeydown(n))})("keydown.enter",function(n){d(e);let o=l(2);return m(o.decrementMinute(n))})("keydown.space",function(n){d(e);let o=l(2);return m(o.decrementMinute(n))})("mousedown",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseDown(n,1,-1))})("mouseup",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseUp(n))})("keyup.enter",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseUp(n))})("keyup.space",function(n){d(e);let o=l(2);return m(o.onTimePickerElementMouseUp(n))})("mouseleave",function(){d(e);let n=l(2);return m(n.onTimePickerElementMouseLeave())}),_(22,Ac,1,0,"ChevronDownIcon",7)(23,zc,2,1,"ng-container",7),p()(),_(24,Hc,3,1,"div",63)(25,Gc,10,8,"div",64)(26,Zc,3,1,"div",63)(27,op,9,7,"div",65),p()}if(t&2){let e=l(2);s(2),f("aria-label",e.getTranslation("nextHour")),s(),c("ngIf",!e.incrementIconTemplate&&!e._incrementIconTemplate),s(),c("ngTemplateOutlet",e.incrementIconTemplate||e._incrementIconTemplate),s(2),c("ngIf",e.currentHour<10),s(),P(e.currentHour),s(),f("aria-label",e.getTranslation("prevHour")),s(),c("ngIf",!e.decrementIconTemplate&&!e._decrementIconTemplate),s(),c("ngTemplateOutlet",e.decrementIconTemplate||e._decrementIconTemplate),s(3),P(e.timeSeparator),s(2),f("aria-label",e.getTranslation("nextMinute")),s(),c("ngIf",!e.incrementIconTemplate&&!e._incrementIconTemplate),s(),c("ngTemplateOutlet",e.incrementIconTemplate||e._incrementIconTemplate),s(2),c("ngIf",e.currentMinute<10),s(),P(e.currentMinute),s(),f("aria-label",e.getTranslation("prevMinute")),s(),c("ngIf",!e.decrementIconTemplate&&!e._decrementIconTemplate),s(),c("ngIf",e.decrementIconTemplate||e._decrementIconTemplate),s(),c("ngIf",e.showSeconds),s(),c("ngIf",e.showSeconds),s(),c("ngIf",e.hourFormat=="12"),s(),c("ngIf",e.hourFormat=="12")}}function ap(t,r){if(t&1){let e=T();u(0,"div",70)(1,"p-button",71),g("keydown",function(n){d(e);let o=l(2);return m(o.onContainerButtonKeydown(n))})("onClick",function(n){d(e);let o=l(2);return m(o.onTodayButtonClick(n))}),p(),u(2,"p-button",72),g("keydown",function(n){d(e);let o=l(2);return m(o.onContainerButtonKeydown(n))})("onClick",function(n){d(e);let o=l(2);return m(o.onClearButtonClick(n))}),p()()}if(t&2){let e=l(2);s(),c("label",e.getTranslation("today"))("ngClass",e.todayButtonStyleClass),s(),c("label",e.getTranslation("clear"))("ngClass",e.clearButtonStyleClass)}}function lp(t,r){t&1&&U(0)}function sp(t,r){if(t&1){let e=T();u(0,"div",21,2),g("@overlayAnimation.start",function(n){d(e);let o=l();return m(o.onOverlayAnimationStart(n))})("@overlayAnimation.done",function(n){d(e);let o=l();return m(o.onOverlayAnimationDone(n))})("click",function(n){d(e);let o=l();return m(o.onOverlayClick(n))}),Ct(2),_(3,qs,1,0,"ng-container",13)(4,Ic,5,3,"ng-container",7)(5,rp,28,21,"div",22)(6,ap,3,4,"div",23),Ct(7,1),_(8,lp,1,0,"ng-container",13),p()}if(t&2){let e=l();F(e.panelStyleClass),c("ngStyle",e.panelStyle)("ngClass",e.panelClass)("@overlayAnimation",Q(18,Ss,j(15,Is,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.inline===!0),f("id",e.panelId)("aria-label",e.getTranslation("chooseDate"))("role",e.inline?null:"dialog")("aria-modal",e.inline?null:"true"),s(3),c("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),c("ngIf",!e.timeOnly),s(),c("ngIf",(e.showTime||e.timeOnly)&&e.currentView==="date"),s(),c("ngIf",e.showButtonBar),s(2),c("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var cp=({dt:t})=>`
.p-datepicker {
    position: relative;
    display: inline-flex;
    max-width: 100%;
}

.p-datepicker-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-datepicker-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${t("datepicker.dropdown.width")};
    border-start-end-radius: ${t("datepicker.dropdown.border.radius")};
    border-end-end-radius: ${t("datepicker.dropdown.border.radius")};
    background: ${t("datepicker.dropdown.background")};
    border: 1px solid ${t("datepicker.dropdown.border.color")};
    border-inline-start: 0 none;
    color: ${t("datepicker.dropdown.color")};
    transition: background ${t("datepicker.transition.duration")}, color ${t("datepicker.transition.duration")}, border-color ${t("datepicker.transition.duration")}, outline-color ${t("datepicker.transition.duration")};
    outline-color: transparent;
}

.p-datepicker-dropdown:not(:disabled):hover {
    background: ${t("datepicker.dropdown.hover.background")};
    border-color: ${t("datepicker.dropdown.hover.border.color")};
    color: ${t("datepicker.dropdown.hover.color")};
}

.p-datepicker-dropdown:not(:disabled):active {
    background: ${t("datepicker.dropdown.active.background")};
    border-color: ${t("datepicker.dropdown.active.border.color")};
    color: ${t("datepicker.dropdown.active.color")};
}

.p-datepicker-dropdown:focus-visible {
    box-shadow: ${t("datepicker.dropdown.focus.ring.shadow")};
    outline: ${t("datepicker.dropdown.focus.ring.width")} ${t("datepicker.dropdown.focus.ring.style")} ${t("datepicker.dropdown.focus.ring.color")};
    outline-offset: ${t("datepicker.dropdown.focus.ring.offset")};
}

.p-datepicker:has(.p-datepicker-input-icon-container) {
    position: relative;
}

.p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {
    padding-inline-end: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-datepicker-input-icon-container {
    cursor: pointer;
    position: absolute;
    top: 50%;
    inset-inline-end: ${t("form.field.padding.x")};
    margin-top: calc(-1 * (${t("icon.size")} / 2));
    color: ${t("datepicker.input.icon.color")};
    line-height: 1;
}

.p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-clear-icon,
.p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-clear-icon {
    inset-inline-end: calc(${t("datepicker.dropdown.width")} + ${t("form.field.padding.x")});
}

.p-datepicker-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    color: ${t("form.field.icon.color")};
    inset-inline-end: ${t("form.field.padding.x")};
}

.p-datepicker-fluid {
    display: flex;
}

.p-datepicker-fluid .p-datepicker-input {
    width: 1%;
}

.p-datepicker .p-datepicker-panel {
    min-width: 100%;
}

.p-datepicker-panel {
    width: auto;
    padding: ${t("datepicker.panel.padding")};
    background: ${t("datepicker.panel.background")};
    color: ${t("datepicker.panel.color")};
    border: 1px solid ${t("datepicker.panel.border.color")};
    border-radius: ${t("datepicker.panel.border.radius")};
    box-shadow: ${t("datepicker.panel.shadow")};
}

.p-datepicker-panel-inline {
    display: inline-block;
    overflow-x: auto;
    box-shadow: none;
}

.p-datepicker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${t("datepicker.header.padding")};
    background: ${t("datepicker.header.background")};
    color: ${t("datepicker.header.color")};
    border-bottom: 1px solid ${t("datepicker.header.border.color")};
}

.p-datepicker-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-datepicker-prev-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-datepicker-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${t("datepicker.title.gap")};
    font-weight: ${t("datepicker.title.font.weight")};
}

.p-datepicker-select-year,
.p-datepicker-select-month {
    border: none;
    background: transparent;
    margin: 0;
    cursor: pointer;
    font-weight: inherit;
    transition: background ${t("datepicker.transition.duration")}, color ${t("datepicker.transition.duration")}, border-color ${t("datepicker.transition.duration")}, outline-color ${t("datepicker.transition.duration")}, box-shadow ${t("datepicker.transition.duration")};
}

.p-datepicker-select-month {
    padding: ${t("datepicker.select.month.padding")};
    color: ${t("datepicker.select.month.color")};
    border-radius: ${t("datepicker.select.month.border.radius")};
}

.p-datepicker-select-year {
    padding: ${t("datepicker.select.year.padding")};
    color: ${t("datepicker.select.year.color")};
    border-radius: ${t("datepicker.select.year.border.radius")};
}

.p-datepicker-select-month:enabled:hover {
    background: ${t("datepicker.select.month.hover.background")};
    color: ${t("datepicker.select.month.hover.color")};
}

.p-datepicker-select-year:enabled:hover {
    background: ${t("datepicker.select.year.hover.background")};
    color: ${t("datepicker.select.year.hover.color")};
}

.p-datepicker-calendar-container {
    display: flex;
}

.p-datepicker-calendar-container .p-datepicker-calendar {
    flex: 1 1 auto;
    border-inline-start: 1px solid ${t("datepicker.group.border.color")};
    padding-inline: ${t("datepicker.group.gap")};
}

.p-datepicker-calendar-container .p-datepicker-calendar:first-child {
    padding-inline-start: 0;
    border-inline-start: 0 none;
}

.p-datepicker-calendar-container .p-datepicker-calendar:last-child {
    padding-inline-end: 0;
}

.p-datepicker-day-view {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    margin: ${t("datepicker.day.view.margin")};
}

.p-datepicker-weekday-cell {
    padding: ${t("datepicker.week.day.padding")};
}

.p-datepicker-weekday {
    font-weight: ${t("datepicker.week.day.font.weight")};
    color: ${t("datepicker.week.day.color")};
}

.p-datepicker-day-cell {
    padding: ${t("datepicker.date.padding")};
}

.p-datepicker-day {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: ${t("datepicker.date.width")};
    height: ${t("datepicker.date.height")};
    border-radius: ${t("datepicker.date.border.radius")};
    transition: background ${t("datepicker.transition.duration")}, color ${t("datepicker.transition.duration")}, border-color ${t("datepicker.transition.duration")},
        box-shadow ${t("datepicker.transition.duration")}, outline-color ${t("datepicker.transition.duration")};
    border: 1px solid transparent;
    outline-color: transparent;
    color: ${t("datepicker.date.color")};
}

.p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
    background: ${t("datepicker.date.hover.background")};
    color: ${t("datepicker.date.hover.color")};
}

.p-datepicker-day:focus-visible {
    box-shadow: ${t("datepicker.date.focus.ring.shadow")};
    outline: ${t("datepicker.date.focus.ring.width")} ${t("datepicker.date.focus.ring.style")} ${t("datepicker.date.focus.ring.color")};
    outline-offset: ${t("datepicker.date.focus.ring.offset")};
}

.p-datepicker-day-selected {
    background: ${t("datepicker.date.selected.background")};
    color: ${t("datepicker.date.selected.color")};
}

.p-datepicker-day-selected-range {
    background: ${t("datepicker.date.range.selected.background")};
    color: ${t("datepicker.date.range.selected.color")};
}

.p-datepicker-today > .p-datepicker-day {
    background: ${t("datepicker.today.background")};
    color: ${t("datepicker.today.color")};
}

.p-datepicker-today > .p-datepicker-day-selected {
    background: ${t("datepicker.date.selected.background")};
    color: ${t("datepicker.date.selected.color")};
}

.p-datepicker-today > .p-datepicker-day-selected-range {
    background: ${t("datepicker.date.range.selected.background")};
    color: ${t("datepicker.date.range.selected.color")};
}

.p-datepicker-weeknumber {
    text-align: center
}

.p-datepicker-month-view {
    margin: ${t("datepicker.month.view.margin")};
}

.p-datepicker-month {
    width: 33.3%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: ${t("datepicker.month.padding")};
    transition: background ${t("datepicker.transition.duration")}, color ${t("datepicker.transition.duration")}, border-color ${t("datepicker.transition.duration")}, box-shadow ${t("datepicker.transition.duration")}, outline-color ${t("datepicker.transition.duration")};
    border-radius: ${t("datepicker.month.border.radius")};
    outline-color: transparent;
    color: ${t("datepicker.date.color")};
}

.p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {
    color:  ${t("datepicker.date.hover.color")};
    background: ${t("datepicker.date.hover.background")};
}

.p-datepicker-month-selected {
    color: ${t("datepicker.date.selected.color")};
    background: ${t("datepicker.date.selected.background")};
}

.p-datepicker-month:not(.p-disabled):focus-visible {
    box-shadow: ${t("datepicker.date.focus.ring.shadow")};
    outline: ${t("datepicker.date.focus.ring.width")} ${t("datepicker.date.focus.ring.style")} ${t("datepicker.date.focus.ring.color")};
    outline-offset: ${t("datepicker.date.focus.ring.offset")};
}

.p-datepicker-year-view {
    margin: ${t("datepicker.year.view.margin")};
}

.p-datepicker-year {
    width: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: ${t("datepicker.year.padding")};
    transition: background ${t("datepicker.transition.duration")}, color ${t("datepicker.transition.duration")}, border-color ${t("datepicker.transition.duration")}, box-shadow ${t("datepicker.transition.duration")}, outline-color ${t("datepicker.transition.duration")};
    border-radius: ${t("datepicker.year.border.radius")};
    outline-color: transparent;
    color: ${t("datepicker.date.color")};
}

.p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {
    color: ${t("datepicker.date.hover.color")};
    background: ${t("datepicker.date.hover.background")};
}

.p-datepicker-year-selected {
    color: ${t("datepicker.date.selected.color")};
    background: ${t("datepicker.date.selected.background")};
}

.p-datepicker-year:not(.p-disabled):focus-visible {
    box-shadow: ${t("datepicker.date.focus.ring.shadow")};
    outline: ${t("datepicker.date.focus.ring.width")} ${t("datepicker.date.focus.ring.style")} ${t("datepicker.date.focus.ring.color")};
    outline-offset: ${t("datepicker.date.focus.ring.offset")};
}

.p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  ${t("datepicker.buttonbar.padding")};
    border-top: 1px solid ${t("datepicker.buttonbar.border.color")};
}

.p-datepicker-buttonbar .p-button {
    width: auto;
}

.p-datepicker-time-picker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${t("datepicker.time.picker.border.color")};
    padding: 0;
    gap: ${t("datepicker.time.picker.gap")};
}

.p-datepicker-calendar-container + .p-datepicker-time-picker {
    padding: ${t("datepicker.time.picker.padding")};
}

.p-datepicker-time-picker > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${t("datepicker.time.picker.button.gap")};
}

.p-datepicker-time-picker span {
    font-size: 1rem;
}

.p-datepicker-timeonly .p-datepicker-time-picker {
    border-top: 0 none;
}

.p-datepicker-calendar:not(:first-child):not(:last-child) .p-datepicker-header {
    justify-content: center;
}

.p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {
    width: ${t("datepicker.dropdown.sm.width")};
}

.p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,
.p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
}

.p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {
    width: ${t("datepicker.dropdown.lg.width")};
}

.p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,
.p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
}

/* For PrimeNG */

p-calendar.ng-invalid.ng-dirty .p-datepicker.p-inputwrapper .p-inputtext{
    border-color: ${t("inputtext.invalid.border.color")};
}

p-datePicker.ng-invalid.ng-dirty .p-datepicker.p-inputwrapper .p-inputtext,
p-date-picker.ng-invalid.ng-dirty .p-datepicker.p-inputwrapper .p-inputtext,
p-datepicker.ng-invalid.ng-dirty .p-datepicker.p-inputwrapper .p-inputtext {
    border-color: ${t("inputtext.invalid.border.color")};
}

`,pp={root:({props:t})=>({position:t.appendTo==="self"?"relative":void 0})},up={root:({instance:t})=>({"p-datepicker p-component p-inputwrapper":!0,"p-datepicker-fluid":t.hasFluid,"p-inputwrapper-filled":t.filled,"p-variant-filled":t.variant==="filled"||t.config.inputVariant()==="filled"||t.config.inputStyle()==="filled","p-inputwrapper-focus":t.focus,"p-focus":t.focus||t.overlayVisible}),pcInput:"p-datepicker-input",dropdown:"p-datepicker-dropdown",inputIconContainer:"p-datepicker-input-icon-container",inputIcon:"p-datepicker-input-icon",panel:({instance:t})=>({"p-datepicker-panel p-component":!0,"p-datepicker-panel-inline":t.inline,"p-disabled":t.disabled,"p-datepicker-timeonly":t.timeOnly}),calendarContainer:"p-datepicker-calendar-container",calendar:"p-datepicker-calendar",header:"p-datepicker-header",pcPrevButton:"p-datepicker-prev-button",title:"p-datepicker-title",selectMonth:"p-datepicker-select-month",selectYear:"p-datepicker-select-year",decade:"p-datepicker-decade",pcNextButton:"p-datepicker-next-button",dayView:"p-datepicker-day-view",weekHeader:"p-datepicker-weekheader p-disabled",weekNumber:"p-datepicker-weeknumber",weekLabelContainer:"p-datepicker-weeklabel-container p-disabled",weekDayCell:"p-datepicker-weekday-cell",weekDay:"p-datepicker-weekday",dayCell:({date:t})=>["p-datepicker-day-cell",{"p-datepicker-other-month":t.otherMonth,"p-datepicker-today":t.today}],day:({instance:t,date:r})=>{let e="";if(t.isRangeSelection()&&t.isSelected(r)&&r.selectable){let i=t.value[0],n=t.value[1],o=i&&r.year===i.getFullYear()&&r.month===i.getMonth()&&r.day===i.getDate(),a=n&&r.year===n.getFullYear()&&r.month===n.getMonth()&&r.day===n.getDate();e=o||a?"p-datepicker-day-selected":"p-datepicker-day-selected-range"}return{"p-datepicker-day":!0,"p-datepicker-day-selected":!t.isRangeSelection()&&t.isSelected(r)&&r.selectable,"p-disabled":t.disabled||!r.selectable,[e]:!0}},monthView:"p-datepicker-month-view",month:({instance:t,props:r,month:e,index:i})=>["p-datepicker-month",{"p-datepicker-month-selected":t.isMonthSelected(i),"p-disabled":r.disabled||!e.selectable}],yearView:"p-datepicker-year-view",year:({instance:t,props:r,year:e})=>["p-datepicker-year",{"p-datepicker-year-selected":t.isYearSelected(e.value),"p-disabled":r.disabled||!e.selectable}],timePicker:"p-datepicker-time-picker",hourPicker:"p-datepicker-hour-picker",pcIncrementButton:"p-datepicker-increment-button",pcDecrementButton:"p-datepicker-decrement-button",separator:"p-datepicker-separator",minutePicker:"p-datepicker-minute-picker",secondPicker:"p-datepicker-second-picker",ampmPicker:"p-datepicker-ampm-picker",buttonbar:"p-datepicker-buttonbar",pcTodayButton:"p-datepicker-today-button",pcClearButton:"p-datepicker-clear-button"},$n=(()=>{class t extends ee{name="datepicker";theme=cp;classes=up;inlineStyles=pp;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var dp={provide:ge,useExisting:he(()=>Jt),multi:!0},Jt=(()=>{class t extends te{zone;overlayService;iconDisplay="button";style;styleClass;inputStyle;inputId;name;inputStyleClass;placeholder;ariaLabelledBy;ariaLabel;iconAriaLabel;disabled;get dateFormat(){return this._dateFormat}set dateFormat(e){this._dateFormat=e,this.initialized&&this.updateInputfield()}multipleSeparator=",";rangeSeparator="-";inline=!1;showOtherMonths=!0;selectOtherMonths;showIcon;fluid;icon;appendTo;readonlyInput;shortYearCutoff="+10";monthNavigator;yearNavigator;get hourFormat(){return this._hourFormat}set hourFormat(e){this._hourFormat=e,this.initialized&&this.updateInputfield()}timeOnly;stepHour=1;stepMinute=1;stepSecond=1;showSeconds=!1;required;showOnFocus=!0;showWeek=!1;startWeekFromFirstDayOfYear=!1;showClear=!1;dataType="date";selectionMode="single";maxDateCount;showButtonBar;todayButtonStyleClass;clearButtonStyleClass;autofocus;autoZIndex=!0;baseZIndex=0;panelStyleClass;panelStyle;keepInvalid=!1;hideOnDateTimeSelect=!0;touchUI;timeSeparator=":";focusTrap=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";tabindex;variant;size;get minDate(){return this._minDate}set minDate(e){this._minDate=e,this.currentMonth!=null&&this.currentMonth!=null&&this.currentYear&&this.createMonths(this.currentMonth,this.currentYear)}get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=e,this.currentMonth!=null&&this.currentMonth!=null&&this.currentYear&&this.createMonths(this.currentMonth,this.currentYear)}get disabledDates(){return this._disabledDates}set disabledDates(e){this._disabledDates=e,this.currentMonth!=null&&this.currentMonth!=null&&this.currentYear&&this.createMonths(this.currentMonth,this.currentYear)}get disabledDays(){return this._disabledDays}set disabledDays(e){this._disabledDays=e,this.currentMonth!=null&&this.currentMonth!=null&&this.currentYear&&this.createMonths(this.currentMonth,this.currentYear)}get yearRange(){return this._yearRange}set yearRange(e){if(this._yearRange=e,e){let i=e.split(":"),n=parseInt(i[0]),o=parseInt(i[1]);this.populateYearOptions(n,o)}}get showTime(){return this._showTime}set showTime(e){this._showTime=e,this.currentHour===void 0&&this.initTime(this.value||new Date),this.updateInputfield()}get responsiveOptions(){return this._responsiveOptions}set responsiveOptions(e){this._responsiveOptions=e,this.destroyResponsiveStyleElement(),this.createResponsiveStyle()}get numberOfMonths(){return this._numberOfMonths}set numberOfMonths(e){this._numberOfMonths=e,this.destroyResponsiveStyleElement(),this.createResponsiveStyle()}get firstDayOfWeek(){return this._firstDayOfWeek}set firstDayOfWeek(e){this._firstDayOfWeek=e,this.createWeekDays()}set locale(e){console.log("Locale property has no effect, use new i18n API instead.")}get view(){return this._view}set view(e){this._view=e,this.currentView=this._view}get defaultDate(){return this._defaultDate}set defaultDate(e){if(this._defaultDate=e,this.initialized){let i=e||new Date;this.currentMonth=i.getMonth(),this.currentYear=i.getFullYear(),this.initTime(i),this.createMonths(this.currentMonth,this.currentYear)}}onFocus=new V;onBlur=new V;onClose=new V;onSelect=new V;onClear=new V;onInput=new V;onTodayClick=new V;onClearClick=new V;onMonthChange=new V;onYearChange=new V;onClickOutside=new V;onShow=new V;containerViewChild;inputfieldViewChild;set content(e){this.contentViewChild=e,this.contentViewChild&&(this.isMonthNavigate?(Promise.resolve(null).then(()=>this.updateFocus()),this.isMonthNavigate=!1):!this.focus&&!this.inline&&this.initFocusableCell())}_componentStyle=H($n);contentViewChild;value;dates;months;weekDays;currentMonth;currentYear;currentHour;currentMinute;currentSecond;pm;mask;maskClickListener;overlay;responsiveStyleElement;overlayVisible;onModelChange=()=>{};onModelTouched=()=>{};calendarElement;timePickerTimer;documentClickListener;animationEndListener;ticksTo1970;yearOptions;focus;isKeydown;filled;inputFieldValue=null;_minDate;_maxDate;_dateFormat;_hourFormat="24";_showTime;_yearRange;preventDocumentListener;dayClass(e){return this._componentStyle.classes.day({instance:this,date:e})}dateTemplate;headerTemplate;footerTemplate;disabledDateTemplate;decadeTemplate;previousIconTemplate;nextIconTemplate;triggerIconTemplate;clearIconTemplate;decrementIconTemplate;incrementIconTemplate;inputIconTemplate;_dateTemplate;_headerTemplate;_footerTemplate;_disabledDateTemplate;_decadeTemplate;_previousIconTemplate;_nextIconTemplate;_triggerIconTemplate;_clearIconTemplate;_decrementIconTemplate;_incrementIconTemplate;_inputIconTemplate;_disabledDates;_disabledDays;selectElement;todayElement;focusElement;scrollHandler;documentResizeListener;navigationState=null;isMonthNavigate;initialized;translationSubscription;_locale;_responsiveOptions;currentView;attributeSelector;panelId;_numberOfMonths=1;_firstDayOfWeek;_view="date";preventFocus;_defaultDate;_focusKey=null;window;get locale(){return this._locale}get iconButtonAriaLabel(){return this.iconAriaLabel?this.iconAriaLabel:this.getTranslation("chooseDate")}get prevIconAriaLabel(){return this.currentView==="year"?this.getTranslation("prevDecade"):this.currentView==="month"?this.getTranslation("prevYear"):this.getTranslation("prevMonth")}get nextIconAriaLabel(){return this.currentView==="year"?this.getTranslation("nextDecade"):this.currentView==="month"?this.getTranslation("nextYear"):this.getTranslation("nextMonth")}get rootClass(){return this._componentStyle.classes.root({instance:this})}get panelClass(){return this._componentStyle.classes.panel({instance:this})}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}constructor(e,i){super(),this.zone=e,this.overlayService=i,this.window=this.document.defaultView}ngOnInit(){super.ngOnInit(),this.attributeSelector=ze("pn_id_"),this.panelId=this.attributeSelector+"_panel";let e=this.defaultDate||new Date;this.createResponsiveStyle(),this.currentMonth=e.getMonth(),this.currentYear=e.getFullYear(),this.yearOptions=[],this.currentView=this.view,this.view==="date"&&(this.createWeekDays(),this.initTime(e),this.createMonths(this.currentMonth,this.currentYear),this.ticksTo1970=(1969*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*1e7),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.createWeekDays(),this.cd.markForCheck()}),this.initialized=!0}ngAfterViewInit(){super.ngAfterViewInit(),this.inline&&(this.contentViewChild&&this.contentViewChild.nativeElement.setAttribute(this.attributeSelector,""),!this.disabled&&!this.inline&&(this.initFocusableCell(),this.numberOfMonths===1&&this.contentViewChild&&this.contentViewChild.nativeElement&&(this.contentViewChild.nativeElement.style.width=wt(this.containerViewChild?.nativeElement)+"px")))}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"date":this._dateTemplate=e.template;break;case"decade":this._decadeTemplate=e.template;break;case"disabledDate":this._disabledDateTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"inputicon":this._inputIconTemplate=e.template;break;case"previousicon":this._previousIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break;case"triggericon":this._triggerIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"decrementicon":this._decrementIconTemplate=e.template;break;case"incrementicon":this._incrementIconTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._dateTemplate=e.template;break}})}getTranslation(e){return this.config.getTranslation(e)}populateYearOptions(e,i){this.yearOptions=[];for(let n=e;n<=i;n++)this.yearOptions.push(n)}createWeekDays(){this.weekDays=[];let e=this.getFirstDateOfWeek(),i=this.getTranslation(xe.DAY_NAMES_MIN);for(let n=0;n<7;n++)this.weekDays.push(i[e]),e=e==6?0:++e}monthPickerValues(){let e=[];for(let i=0;i<=11;i++)e.push(this.config.getTranslation("monthNamesShort")[i]);return e}yearPickerValues(){let e=[],i=this.currentYear-this.currentYear%10;for(let n=0;n<10;n++)e.push(i+n);return e}createMonths(e,i){this.months=this.months=[];for(let n=0;n<this.numberOfMonths;n++){let o=e+n,a=i;o>11&&(o=o%12,a=i+Math.floor((e+n)/12)),this.months.push(this.createMonth(o,a))}}getWeekNumber(e){let i=new Date(e.getTime());if(this.startWeekFromFirstDayOfYear){let o=+this.getFirstDateOfWeek();i.setDate(i.getDate()+6+o-i.getDay())}else i.setDate(i.getDate()+4-(i.getDay()||7));let n=i.getTime();return i.setMonth(0),i.setDate(1),Math.floor(Math.round((n-i.getTime())/864e5)/7)+1}createMonth(e,i){let n=[],o=this.getFirstDayOfMonthIndex(e,i),a=this.getDaysCountInMonth(e,i),h=this.getDaysCountInPrevMonth(e,i),v=1,x=new Date,I=[],$=Math.ceil((a+o)/7);for(let Y=0;Y<$;Y++){let E=[];if(Y==0){for(let D=h-o+1;D<=h;D++){let K=this.getPreviousMonthAndYear(e,i);E.push({day:D,month:K.month,year:K.year,otherMonth:!0,today:this.isToday(x,D,K.month,K.year),selectable:this.isSelectable(D,K.month,K.year,!0)})}let S=7-E.length;for(let D=0;D<S;D++)E.push({day:v,month:e,year:i,today:this.isToday(x,v,e,i),selectable:this.isSelectable(v,e,i,!1)}),v++}else for(let S=0;S<7;S++){if(v>a){let D=this.getNextMonthAndYear(e,i);E.push({day:v-a,month:D.month,year:D.year,otherMonth:!0,today:this.isToday(x,v-a,D.month,D.year),selectable:this.isSelectable(v-a,D.month,D.year,!0)})}else E.push({day:v,month:e,year:i,today:this.isToday(x,v,e,i),selectable:this.isSelectable(v,e,i,!1)});v++}this.showWeek&&I.push(this.getWeekNumber(new Date(E[0].year,E[0].month,E[0].day))),n.push(E)}return{month:e,year:i,dates:n,weekNumbers:I}}initTime(e){this.pm=e.getHours()>11,this.showTime?(this.currentMinute=e.getMinutes(),this.currentSecond=e.getSeconds(),this.setCurrentHourPM(e.getHours())):this.timeOnly&&(this.currentMinute=0,this.currentHour=0,this.currentSecond=0)}navBackward(e){if(this.disabled){e.preventDefault();return}this.isMonthNavigate=!0,this.currentView==="month"?(this.decrementYear(),setTimeout(()=>{this.updateFocus()},1)):this.currentView==="year"?(this.decrementDecade(),setTimeout(()=>{this.updateFocus()},1)):(this.currentMonth===0?(this.currentMonth=11,this.decrementYear()):this.currentMonth--,this.onMonthChange.emit({month:this.currentMonth+1,year:this.currentYear}),this.createMonths(this.currentMonth,this.currentYear))}navForward(e){if(this.disabled){e.preventDefault();return}this.isMonthNavigate=!0,this.currentView==="month"?(this.incrementYear(),setTimeout(()=>{this.updateFocus()},1)):this.currentView==="year"?(this.incrementDecade(),setTimeout(()=>{this.updateFocus()},1)):(this.currentMonth===11?(this.currentMonth=0,this.incrementYear()):this.currentMonth++,this.onMonthChange.emit({month:this.currentMonth+1,year:this.currentYear}),this.createMonths(this.currentMonth,this.currentYear))}decrementYear(){this.currentYear--;let e=this.yearOptions;if(this.yearNavigator&&this.currentYear<e[0]){let i=e[e.length-1]-e[0];this.populateYearOptions(e[0]-i,e[e.length-1]-i)}}decrementDecade(){this.currentYear=this.currentYear-10}incrementDecade(){this.currentYear=this.currentYear+10}incrementYear(){this.currentYear++;let e=this.yearOptions;if(this.yearNavigator&&this.currentYear>e[e.length-1]){let i=e[e.length-1]-e[0];this.populateYearOptions(e[0]+i,e[e.length-1]+i)}}switchToMonthView(e){this.setCurrentView("month"),e.preventDefault()}switchToYearView(e){this.setCurrentView("year"),e.preventDefault()}onDateSelect(e,i){if(this.disabled||!i.selectable){e.preventDefault();return}this.isMultipleSelection()&&this.isSelected(i)?(this.value=this.value.filter((n,o)=>!this.isDateEquals(n,i)),this.value.length===0&&(this.value=null),this.updateModel(this.value)):this.shouldSelectDate(i)&&this.selectDate(i),this.hideOnDateTimeSelect&&(this.isSingleSelection()||this.isRangeSelection()&&this.value[1])&&setTimeout(()=>{e.preventDefault(),this.hideOverlay(),this.mask&&this.disableModality(),this.cd.markForCheck()},150),this.updateInputfield(),e.preventDefault()}shouldSelectDate(e){return this.isMultipleSelection()&&this.maxDateCount!=null?this.maxDateCount>(this.value?this.value.length:0):!0}onMonthSelect(e,i){this.view==="month"?this.onDateSelect(e,{year:this.currentYear,month:i,day:1,selectable:!0}):(this.currentMonth=i,this.createMonths(this.currentMonth,this.currentYear),this.setCurrentView("date"),this.onMonthChange.emit({month:this.currentMonth+1,year:this.currentYear}))}onYearSelect(e,i){this.view==="year"?this.onDateSelect(e,{year:i,month:0,day:1,selectable:!0}):(this.currentYear=i,this.setCurrentView("month"),this.onYearChange.emit({month:this.currentMonth+1,year:this.currentYear}))}updateInputfield(){let e="";if(this.value){if(this.isSingleSelection())e=this.formatDateTime(this.value);else if(this.isMultipleSelection())for(let i=0;i<this.value.length;i++){let n=this.formatDateTime(this.value[i]);e+=n,i!==this.value.length-1&&(e+=this.multipleSeparator+" ")}else if(this.isRangeSelection()&&this.value&&this.value.length){let i=this.value[0],n=this.value[1];e=this.formatDateTime(i),n&&(e+=" "+this.rangeSeparator+" "+this.formatDateTime(n))}}this.inputFieldValue=e,this.updateFilledState(),this.inputfieldViewChild&&this.inputfieldViewChild.nativeElement&&(this.inputfieldViewChild.nativeElement.value=this.inputFieldValue)}formatDateTime(e){let i=this.keepInvalid?e:null,n=this.isValidDateForTimeConstraints(e);return this.isValidDate(e)?this.timeOnly?i=this.formatTime(e):(i=this.formatDate(e,this.getDateFormat()),this.showTime&&(i+=" "+this.formatTime(e))):this.dataType==="string"&&(i=e),i=n?i:"",i}formatDateMetaToDate(e){return new Date(e.year,e.month,e.day)}formatDateKey(e){return`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`}setCurrentHourPM(e){this.hourFormat=="12"?(this.pm=e>11,e>=12?this.currentHour=e==12?12:e-12:this.currentHour=e==0?12:e):this.currentHour=e}setCurrentView(e){this.currentView=e,this.cd.detectChanges(),this.alignOverlay()}selectDate(e){let i=this.formatDateMetaToDate(e);if(this.showTime&&(this.hourFormat=="12"?this.currentHour===12?i.setHours(this.pm?12:0):i.setHours(this.pm?this.currentHour+12:this.currentHour):i.setHours(this.currentHour),i.setMinutes(this.currentMinute),i.setSeconds(this.currentSecond)),this.minDate&&this.minDate>i&&(i=this.minDate,this.setCurrentHourPM(i.getHours()),this.currentMinute=i.getMinutes(),this.currentSecond=i.getSeconds()),this.maxDate&&this.maxDate<i&&(i=this.maxDate,this.setCurrentHourPM(i.getHours()),this.currentMinute=i.getMinutes(),this.currentSecond=i.getSeconds()),this.isSingleSelection())this.updateModel(i);else if(this.isMultipleSelection())this.updateModel(this.value?[...this.value,i]:[i]);else if(this.isRangeSelection())if(this.value&&this.value.length){let n=this.value[0],o=this.value[1];!o&&i.getTime()>=n.getTime()?o=i:(n=i,o=null),this.updateModel([n,o])}else this.updateModel([i,null]);this.onSelect.emit(i)}updateModel(e){if(this.value=e,this.dataType=="date")this.onModelChange(this.value);else if(this.dataType=="string")if(this.isSingleSelection())this.onModelChange(this.formatDateTime(this.value));else{let i=null;Array.isArray(this.value)&&(i=this.value.map(n=>this.formatDateTime(n))),this.onModelChange(i)}}getFirstDayOfMonthIndex(e,i){let n=new Date;n.setDate(1),n.setMonth(e),n.setFullYear(i);let o=n.getDay()+this.getSundayIndex();return o>=7?o-7:o}getDaysCountInMonth(e,i){return 32-this.daylightSavingAdjust(new Date(i,e,32)).getDate()}getDaysCountInPrevMonth(e,i){let n=this.getPreviousMonthAndYear(e,i);return this.getDaysCountInMonth(n.month,n.year)}getPreviousMonthAndYear(e,i){let n,o;return e===0?(n=11,o=i-1):(n=e-1,o=i),{month:n,year:o}}getNextMonthAndYear(e,i){let n,o;return e===11?(n=0,o=i+1):(n=e+1,o=i),{month:n,year:o}}getSundayIndex(){let e=this.getFirstDateOfWeek();return e>0?7-e:0}isSelected(e){if(this.value){if(this.isSingleSelection())return this.isDateEquals(this.value,e);if(this.isMultipleSelection()){let i=!1;for(let n of this.value)if(i=this.isDateEquals(n,e),i)break;return i}else if(this.isRangeSelection())return this.value[1]?this.isDateEquals(this.value[0],e)||this.isDateEquals(this.value[1],e)||this.isDateBetween(this.value[0],this.value[1],e):this.isDateEquals(this.value[0],e)}else return!1}isComparable(){return this.value!=null&&typeof this.value!="string"}isMonthSelected(e){if(!this.isComparable())return!1;if(this.isMultipleSelection())return this.value.some(i=>i.getMonth()===e&&i.getFullYear()===this.currentYear);if(this.isRangeSelection())if(this.value[1]){let i=new Date(this.currentYear,e,1),n=new Date(this.value[0].getFullYear(),this.value[0].getMonth(),1),o=new Date(this.value[1].getFullYear(),this.value[1].getMonth(),1);return i>=n&&i<=o}else return this.value[0]?.getFullYear()===this.currentYear&&this.value[0]?.getMonth()===e;else return this.value.getMonth()===e&&this.value.getFullYear()===this.currentYear}isMonthDisabled(e,i){let n=i??this.currentYear;for(let o=1;o<this.getDaysCountInMonth(e,n)+1;o++)if(this.isSelectable(o,e,n,!1))return!1;return!0}isYearDisabled(e){return Array(12).fill(0).every((i,n)=>this.isMonthDisabled(n,e))}isYearSelected(e){if(this.isComparable()){let i=this.isRangeSelection()?this.value[0]:this.value;return this.isMultipleSelection()?!1:i.getFullYear()===e}return!1}isDateEquals(e,i){return e&&Tt(e)?e.getDate()===i.day&&e.getMonth()===i.month&&e.getFullYear()===i.year:!1}isDateBetween(e,i,n){let o=!1;if(Tt(e)&&Tt(i)){let a=this.formatDateMetaToDate(n);return e.getTime()<=a.getTime()&&i.getTime()>=a.getTime()}return o}isSingleSelection(){return this.selectionMode==="single"}isRangeSelection(){return this.selectionMode==="range"}isMultipleSelection(){return this.selectionMode==="multiple"}isToday(e,i,n,o){return e.getDate()===i&&e.getMonth()===n&&e.getFullYear()===o}isSelectable(e,i,n,o){let a=!0,h=!0,v=!0,x=!0;return o&&!this.selectOtherMonths?!1:(this.minDate&&(this.minDate.getFullYear()>n||this.minDate.getFullYear()===n&&this.currentView!="year"&&(this.minDate.getMonth()>i||this.minDate.getMonth()===i&&this.minDate.getDate()>e))&&(a=!1),this.maxDate&&(this.maxDate.getFullYear()<n||this.maxDate.getFullYear()===n&&(this.maxDate.getMonth()<i||this.maxDate.getMonth()===i&&this.maxDate.getDate()<e))&&(h=!1),this.disabledDates&&(v=!this.isDateDisabled(e,i,n)),this.disabledDays&&(x=!this.isDayDisabled(e,i,n)),a&&h&&v&&x)}isDateDisabled(e,i,n){if(this.disabledDates){for(let o of this.disabledDates)if(o.getFullYear()===n&&o.getMonth()===i&&o.getDate()===e)return!0}return!1}isDayDisabled(e,i,n){if(this.disabledDays){let a=new Date(n,i,e).getDay();return this.disabledDays.indexOf(a)!==-1}return!1}onInputFocus(e){this.focus=!0,this.showOnFocus&&this.showOverlay(),this.onFocus.emit(e)}onInputClick(){this.showOnFocus&&!this.overlayVisible&&this.showOverlay()}onInputBlur(e){this.focus=!1,this.onBlur.emit(e),this.keepInvalid||this.updateInputfield(),this.onModelTouched()}onButtonClick(e,i=this.inputfieldViewChild?.nativeElement){this.disabled||(this.overlayVisible?this.hideOverlay():(i.focus(),this.showOverlay()))}clear(){this.value=null,this.onModelChange(this.value),this.updateInputfield(),this.onClear.emit()}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}getMonthName(e){return this.config.getTranslation("monthNames")[e]}getYear(e){return this.currentView==="month"?this.currentYear:e.year}switchViewButtonDisabled(){return this.numberOfMonths>1||this.disabled}onPrevButtonClick(e){this.navigationState={backward:!0,button:!0},this.navBackward(e)}onNextButtonClick(e){this.navigationState={backward:!1,button:!0},this.navForward(e)}onContainerButtonKeydown(e){switch(e.which){case 9:if(this.inline||this.trapFocus(e),this.inline){let i=Z(this.containerViewChild?.nativeElement,".p-datepicker-header"),n=e.target;if(this.timeOnly)return;n==i.children[i?.children?.length-1]&&this.initFocusableCell()}break;case 27:this.inputfieldViewChild?.nativeElement.focus(),this.overlayVisible=!1,e.preventDefault();break;default:break}}onInputKeydown(e){this.isKeydown=!0,e.keyCode===40&&this.contentViewChild?this.trapFocus(e):e.keyCode===27?this.overlayVisible&&(this.inputfieldViewChild?.nativeElement.focus(),this.overlayVisible=!1,e.preventDefault()):e.keyCode===13?this.overlayVisible&&(this.overlayVisible=!1,e.preventDefault()):e.keyCode===9&&this.contentViewChild&&(ri(this.contentViewChild.nativeElement).forEach(i=>i.tabIndex="-1"),this.overlayVisible&&(this.overlayVisible=!1))}onDateCellKeydown(e,i,n){let o=e.currentTarget,a=o.parentElement,h=this.formatDateMetaToDate(i);switch(e.which){case 40:{o.tabIndex="-1";let S=kt(a),D=a.parentElement.nextElementSibling;if(D){let K=D.children[S].children[0];Be(K,"p-disabled")?(this.navigationState={backward:!1},this.navForward(e)):(D.children[S].children[0].tabIndex="0",D.children[S].children[0].focus())}else this.navigationState={backward:!1},this.navForward(e);e.preventDefault();break}case 38:{o.tabIndex="-1";let S=kt(a),D=a.parentElement.previousElementSibling;if(D){let K=D.children[S].children[0];Be(K,"p-disabled")?(this.navigationState={backward:!0},this.navBackward(e)):(K.tabIndex="0",K.focus())}else this.navigationState={backward:!0},this.navBackward(e);e.preventDefault();break}case 37:{o.tabIndex="-1";let S=a.previousElementSibling;if(S){let D=S.children[0];Be(D,"p-disabled")||Be(D.parentElement,"p-datepicker-weeknumber")?this.navigateToMonth(!0,n):(D.tabIndex="0",D.focus())}else this.navigateToMonth(!0,n);e.preventDefault();break}case 39:{o.tabIndex="-1";let S=a.nextElementSibling;if(S){let D=S.children[0];Be(D,"p-disabled")?this.navigateToMonth(!1,n):(D.tabIndex="0",D.focus())}else this.navigateToMonth(!1,n);e.preventDefault();break}case 13:case 32:{this.onDateSelect(e,i),e.preventDefault();break}case 27:{this.inputfieldViewChild?.nativeElement.focus(),this.overlayVisible=!1,e.preventDefault();break}case 9:{this.inline||this.trapFocus(e);break}case 33:{o.tabIndex="-1";let S=new Date(h.getFullYear(),h.getMonth()-1,h.getDate()),D=this.formatDateKey(S);this.navigateToMonth(!0,n,`span[data-date='${D}']:not(.p-disabled):not(.p-ink)`),e.preventDefault();break}case 34:{o.tabIndex="-1";let S=new Date(h.getFullYear(),h.getMonth()+1,h.getDate()),D=this.formatDateKey(S);this.navigateToMonth(!1,n,`span[data-date='${D}']:not(.p-disabled):not(.p-ink)`),e.preventDefault();break}case 36:o.tabIndex="-1";let v=new Date(h.getFullYear(),h.getMonth(),1),x=this.formatDateKey(v),I=Z(o.offsetParent,`span[data-date='${x}']:not(.p-disabled):not(.p-ink)`);I&&(I.tabIndex="0",I.focus()),e.preventDefault();break;case 35:o.tabIndex="-1";let $=new Date(h.getFullYear(),h.getMonth()+1,0),Y=this.formatDateKey($),E=Z(o.offsetParent,`span[data-date='${Y}']:not(.p-disabled):not(.p-ink)`);$&&(E.tabIndex="0",E.focus()),e.preventDefault();break;default:break}}onMonthCellKeydown(e,i){let n=e.currentTarget;switch(e.which){case 38:case 40:{n.tabIndex="-1";var o=n.parentElement.children,a=kt(n);let h=o[e.which===40?a+3:a-3];h&&(h.tabIndex="0",h.focus()),e.preventDefault();break}case 37:{n.tabIndex="-1";let h=n.previousElementSibling;h?(h.tabIndex="0",h.focus()):(this.navigationState={backward:!0},this.navBackward(e)),e.preventDefault();break}case 39:{n.tabIndex="-1";let h=n.nextElementSibling;h?(h.tabIndex="0",h.focus()):(this.navigationState={backward:!1},this.navForward(e)),e.preventDefault();break}case 13:case 32:{this.onMonthSelect(e,i),e.preventDefault();break}case 27:{this.inputfieldViewChild?.nativeElement.focus(),this.overlayVisible=!1,e.preventDefault();break}case 9:{this.inline||this.trapFocus(e);break}default:break}}onYearCellKeydown(e,i){let n=e.currentTarget;switch(e.which){case 38:case 40:{n.tabIndex="-1";var o=n.parentElement.children,a=kt(n);let h=o[e.which===40?a+2:a-2];h&&(h.tabIndex="0",h.focus()),e.preventDefault();break}case 37:{n.tabIndex="-1";let h=n.previousElementSibling;h?(h.tabIndex="0",h.focus()):(this.navigationState={backward:!0},this.navBackward(e)),e.preventDefault();break}case 39:{n.tabIndex="-1";let h=n.nextElementSibling;h?(h.tabIndex="0",h.focus()):(this.navigationState={backward:!1},this.navForward(e)),e.preventDefault();break}case 13:case 32:{this.onYearSelect(e,i),e.preventDefault();break}case 27:{this.inputfieldViewChild?.nativeElement.focus(),this.overlayVisible=!1,e.preventDefault();break}case 9:{this.trapFocus(e);break}default:break}}navigateToMonth(e,i,n){if(e)if(this.numberOfMonths===1||i===0)this.navigationState={backward:!0},this._focusKey=n,this.navBackward(event);else{let o=this.contentViewChild.nativeElement.children[i-1];if(n){let a=Z(o,n);a.tabIndex="0",a.focus()}else{let a=qe(o,".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)"),h=a[a.length-1];h.tabIndex="0",h.focus()}}else if(this.numberOfMonths===1||i===this.numberOfMonths-1)this.navigationState={backward:!1},this._focusKey=n,this.navForward(event);else{let o=this.contentViewChild.nativeElement.children[i+1];if(n){let a=Z(o,n);a.tabIndex="0",a.focus()}else{let a=Z(o,".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");a.tabIndex="0",a.focus()}}}updateFocus(){let e;if(this.navigationState){if(this.navigationState.button)this.initFocusableCell(),this.navigationState.backward?Z(this.contentViewChild.nativeElement,".p-datepicker-prev-button").focus():Z(this.contentViewChild.nativeElement,".p-datepicker-next-button").focus();else{if(this.navigationState.backward){let i;this.currentView==="month"?i=qe(this.contentViewChild.nativeElement,".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)"):this.currentView==="year"?i=qe(this.contentViewChild.nativeElement,".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)"):i=qe(this.contentViewChild.nativeElement,this._focusKey||".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)"),i&&i.length>0&&(e=i[i.length-1])}else this.currentView==="month"?e=Z(this.contentViewChild.nativeElement,".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)"):this.currentView==="year"?e=Z(this.contentViewChild.nativeElement,".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)"):e=Z(this.contentViewChild.nativeElement,this._focusKey||".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");e&&(e.tabIndex="0",e.focus())}this.navigationState=null,this._focusKey=null}else this.initFocusableCell()}initFocusableCell(){let e=this.contentViewChild?.nativeElement,i;if(this.currentView==="month"){let n=qe(e,".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)"),o=Z(e,".p-datepicker-month-view .p-datepicker-month.p-highlight");n.forEach(a=>a.tabIndex=-1),i=o||n[0],n.length===0&&qe(e,'.p-datepicker-month-view .p-datepicker-month.p-disabled[tabindex = "0"]').forEach(h=>h.tabIndex=-1)}else if(this.currentView==="year"){let n=qe(e,".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)"),o=Z(e,".p-datepicker-year-view .p-datepicker-year.p-highlight");n.forEach(a=>a.tabIndex=-1),i=o||n[0],n.length===0&&qe(e,'.p-datepicker-year-view .p-datepicker-year.p-disabled[tabindex = "0"]').forEach(h=>h.tabIndex=-1)}else if(i=Z(e,"span.p-highlight"),!i){let n=Z(e,"td.p-datepicker-today span:not(.p-disabled):not(.p-ink)");n?i=n:i=Z(e,".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)")}i&&(i.tabIndex="0",!this.preventFocus&&(!this.navigationState||!this.navigationState.button)&&setTimeout(()=>{this.disabled||i.focus()},1),this.preventFocus=!1)}trapFocus(e){let i=ri(this.contentViewChild.nativeElement);if(i&&i.length>0)if(!i[0].ownerDocument.activeElement)i[0].focus();else{let n=i.indexOf(i[0].ownerDocument.activeElement);if(e.shiftKey)if(n==-1||n===0)if(this.focusTrap)i[i.length-1].focus();else{if(n===-1)return this.hideOverlay();if(n===0)return}else i[n-1].focus();else if(n==-1)if(this.timeOnly)i[0].focus();else{let o=0;for(let a=0;a<i.length;a++)i[a].tagName==="SPAN"&&(o=a);i[o].focus()}else if(n===i.length-1){if(!this.focusTrap&&n!=-1)return this.hideOverlay();i[0].focus()}else i[n+1].focus()}e.preventDefault()}onMonthDropdownChange(e){this.currentMonth=parseInt(e),this.onMonthChange.emit({month:this.currentMonth+1,year:this.currentYear}),this.createMonths(this.currentMonth,this.currentYear)}onYearDropdownChange(e){this.currentYear=parseInt(e),this.onYearChange.emit({month:this.currentMonth+1,year:this.currentYear}),this.createMonths(this.currentMonth,this.currentYear)}convertTo24Hour(e,i){return this.hourFormat=="12"?e===12?i?12:0:i?e+12:e:e}constrainTime(e,i,n,o){let a=[e,i,n],h,v=this.value,x=this.convertTo24Hour(e,o),I=this.isRangeSelection(),$=this.isMultipleSelection();(I||$)&&(this.value||(this.value=[new Date,new Date]),I&&(v=this.value[1]||this.value[0]),$&&(v=this.value[this.value.length-1]));let E=v?v.toDateString():null,S=this.minDate&&E&&this.minDate.toDateString()===E,D=this.maxDate&&E&&this.maxDate.toDateString()===E;switch(S&&(h=this.minDate.getHours()>=12),!0){case(S&&h&&this.minDate.getHours()===12&&this.minDate.getHours()>x):a[0]=11;case(S&&this.minDate.getHours()===x&&this.minDate.getMinutes()>i):a[1]=this.minDate.getMinutes();case(S&&this.minDate.getHours()===x&&this.minDate.getMinutes()===i&&this.minDate.getSeconds()>n):a[2]=this.minDate.getSeconds();break;case(S&&!h&&this.minDate.getHours()-1===x&&this.minDate.getHours()>x):a[0]=11,this.pm=!0;case(S&&this.minDate.getHours()===x&&this.minDate.getMinutes()>i):a[1]=this.minDate.getMinutes();case(S&&this.minDate.getHours()===x&&this.minDate.getMinutes()===i&&this.minDate.getSeconds()>n):a[2]=this.minDate.getSeconds();break;case(S&&h&&this.minDate.getHours()>x&&x!==12):this.setCurrentHourPM(this.minDate.getHours()),a[0]=this.currentHour;case(S&&this.minDate.getHours()===x&&this.minDate.getMinutes()>i):a[1]=this.minDate.getMinutes();case(S&&this.minDate.getHours()===x&&this.minDate.getMinutes()===i&&this.minDate.getSeconds()>n):a[2]=this.minDate.getSeconds();break;case(S&&this.minDate.getHours()>x):a[0]=this.minDate.getHours();case(S&&this.minDate.getHours()===x&&this.minDate.getMinutes()>i):a[1]=this.minDate.getMinutes();case(S&&this.minDate.getHours()===x&&this.minDate.getMinutes()===i&&this.minDate.getSeconds()>n):a[2]=this.minDate.getSeconds();break;case(D&&this.maxDate.getHours()<x):a[0]=this.maxDate.getHours();case(D&&this.maxDate.getHours()===x&&this.maxDate.getMinutes()<i):a[1]=this.maxDate.getMinutes();case(D&&this.maxDate.getHours()===x&&this.maxDate.getMinutes()===i&&this.maxDate.getSeconds()<n):a[2]=this.maxDate.getSeconds();break}return a}incrementHour(e){let i=this.currentHour??0,n=(this.currentHour??0)+this.stepHour,o=this.pm;this.hourFormat=="24"?n=n>=24?n-24:n:this.hourFormat=="12"&&(i<12&&n>11&&(o=!this.pm),n=n>=13?n-12:n),this.toggleAMPMIfNotMinDate(o),[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(n,this.currentMinute,this.currentSecond,o),e.preventDefault()}toggleAMPMIfNotMinDate(e){let i=this.value,n=i?i.toDateString():null;this.minDate&&n&&this.minDate.toDateString()===n&&this.minDate.getHours()>=12?this.pm=!0:this.pm=e}onTimePickerElementMouseDown(e,i,n){this.disabled||(this.repeat(e,null,i,n),e.preventDefault())}onTimePickerElementMouseUp(e){this.disabled||(this.clearTimePickerTimer(),this.updateTime())}onTimePickerElementMouseLeave(){!this.disabled&&this.timePickerTimer&&(this.clearTimePickerTimer(),this.updateTime())}repeat(e,i,n,o){let a=i||500;switch(this.clearTimePickerTimer(),this.timePickerTimer=setTimeout(()=>{this.repeat(e,100,n,o),this.cd.markForCheck()},a),n){case 0:o===1?this.incrementHour(e):this.decrementHour(e);break;case 1:o===1?this.incrementMinute(e):this.decrementMinute(e);break;case 2:o===1?this.incrementSecond(e):this.decrementSecond(e);break}this.updateInputfield()}clearTimePickerTimer(){this.timePickerTimer&&(clearTimeout(this.timePickerTimer),this.timePickerTimer=null)}decrementHour(e){let i=(this.currentHour??0)-this.stepHour,n=this.pm;this.hourFormat=="24"?i=i<0?24+i:i:this.hourFormat=="12"&&(this.currentHour===12&&(n=!this.pm),i=i<=0?12+i:i),this.toggleAMPMIfNotMinDate(n),[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(i,this.currentMinute,this.currentSecond,n),e.preventDefault()}incrementMinute(e){let i=(this.currentMinute??0)+this.stepMinute;i=i>59?i-60:i,[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(this.currentHour,i,this.currentSecond,this.pm),e.preventDefault()}decrementMinute(e){let i=(this.currentMinute??0)-this.stepMinute;i=i<0?60+i:i,[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(this.currentHour,i,this.currentSecond,this.pm),e.preventDefault()}incrementSecond(e){let i=this.currentSecond+this.stepSecond;i=i>59?i-60:i,[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(this.currentHour,this.currentMinute,i,this.pm),e.preventDefault()}decrementSecond(e){let i=this.currentSecond-this.stepSecond;i=i<0?60+i:i,[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(this.currentHour,this.currentMinute,i,this.pm),e.preventDefault()}updateTime(){let e=this.value;this.isRangeSelection()&&(e=this.value[1]||this.value[0]),this.isMultipleSelection()&&(e=this.value[this.value.length-1]),e=e?new Date(e.getTime()):new Date,this.hourFormat=="12"?this.currentHour===12?e.setHours(this.pm?12:0):e.setHours(this.pm?this.currentHour+12:this.currentHour):e.setHours(this.currentHour),e.setMinutes(this.currentMinute),e.setSeconds(this.currentSecond),this.isRangeSelection()&&(this.value[1]?e=[this.value[0],e]:e=[e,null]),this.isMultipleSelection()&&(e=[...this.value.slice(0,-1),e]),this.updateModel(e),this.onSelect.emit(e),this.updateInputfield()}toggleAMPM(e){let i=!this.pm;this.pm=i,[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(this.currentHour,this.currentMinute,this.currentSecond,i),this.updateTime(),e.preventDefault()}onUserInput(e){if(!this.isKeydown)return;this.isKeydown=!1;let i=e.target.value;try{let n=this.parseValueFromString(i);this.isValidSelection(n)?(this.updateModel(n),this.updateUI()):this.keepInvalid&&this.updateModel(n)}catch{let o=this.keepInvalid?i:null;this.updateModel(o)}this.filled=i!=null&&i.length,this.onInput.emit(e)}isValidSelection(e){if(this.isSingleSelection())return this.isSelectable(e.getDate(),e.getMonth(),e.getFullYear(),!1);let i=e.every(n=>this.isSelectable(n.getDate(),n.getMonth(),n.getFullYear(),!1));return i&&this.isRangeSelection()&&(i=e.length===1||e.length>1&&e[1]>=e[0]),i}parseValueFromString(e){if(!e||e.trim().length===0)return null;let i;if(this.isSingleSelection())i=this.parseDateTime(e);else if(this.isMultipleSelection()){let n=e.split(this.multipleSeparator);i=[];for(let o of n)i.push(this.parseDateTime(o.trim()))}else if(this.isRangeSelection()){let n=e.split(" "+this.rangeSeparator+" ");i=[];for(let o=0;o<n.length;o++)i[o]=this.parseDateTime(n[o].trim())}return i}parseDateTime(e){let i,n=e.split(" ");if(this.timeOnly)i=new Date,this.populateTime(i,n[0],n[1]);else{let o=this.getDateFormat();if(this.showTime){let a=this.hourFormat=="12"?n.pop():null,h=n.pop();i=this.parseDate(n.join(" "),o),this.populateTime(i,h,a)}else i=this.parseDate(e,o)}return i}populateTime(e,i,n){if(this.hourFormat=="12"&&!n)throw"Invalid Time";this.pm=n==="PM"||n==="pm";let o=this.parseTime(i);e.setHours(o.hour),e.setMinutes(o.minute),e.setSeconds(o.second)}isValidDate(e){return Tt(e)&&Ge(e)}updateUI(){let e=this.value;Array.isArray(e)&&(e=e.length===2?e[1]:e[0]);let i=this.defaultDate&&this.isValidDate(this.defaultDate)&&!this.value?this.defaultDate:e&&this.isValidDate(e)?e:new Date;this.currentMonth=i.getMonth(),this.currentYear=i.getFullYear(),this.createMonths(this.currentMonth,this.currentYear),(this.showTime||this.timeOnly)&&(this.setCurrentHourPM(i.getHours()),this.currentMinute=i.getMinutes(),this.currentSecond=i.getSeconds())}showOverlay(){this.overlayVisible||(this.updateUI(),this.touchUI||(this.preventFocus=!0),this.overlayVisible=!0)}hideOverlay(){this.inputfieldViewChild?.nativeElement.focus(),this.overlayVisible=!1,this.clearTimePickerTimer(),this.touchUI&&this.disableModality(),this.cd.markForCheck()}toggle(){this.inline||(this.overlayVisible?this.hideOverlay():(this.showOverlay(),this.inputfieldViewChild?.nativeElement.focus()))}onOverlayAnimationStart(e){switch(e.toState){case"visible":case"visibleTouchUI":if(!this.inline){this.overlay=e.element,this.overlay?.setAttribute(this.attributeSelector,"");let i=this.inline?void 0:{position:"absolute",top:"0",left:"0"};Mi(this.overlay,i),this.appendOverlay(),this.updateFocus(),this.autoZIndex&&(this.touchUI?Ue.set("modal",this.overlay,this.baseZIndex||this.config.zIndex.modal):Ue.set("overlay",this.overlay,this.baseZIndex||this.config.zIndex.overlay)),this.alignOverlay(),this.onShow.emit(e)}break;case"void":this.onOverlayHide(),this.onClose.emit(e);break}}onOverlayAnimationDone(e){switch(e.toState){case"visible":case"visibleTouchUI":this.inline||(this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener());break;case"void":this.autoZIndex&&Ue.clear(e.element);break}}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.document.body.appendChild(this.overlay):Bt(this.appendTo,this.overlay))}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.el.nativeElement.appendChild(this.overlay)}alignOverlay(){this.touchUI?this.enableModality(this.overlay):this.overlay&&(this.appendTo?(this.view==="date"?(this.overlay.style.width||(this.overlay.style.width=wt(this.overlay)+"px"),this.overlay.style.minWidth||(this.overlay.style.minWidth=wt(this.inputfieldViewChild?.nativeElement)+"px")):this.overlay.style.width||(this.overlay.style.width=wt(this.inputfieldViewChild?.nativeElement)+"px"),Di(this.overlay,this.inputfieldViewChild?.nativeElement)):Vi(this.overlay,this.inputfieldViewChild?.nativeElement))}enableModality(e){!this.mask&&this.touchUI&&(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",String(parseInt(e.style.zIndex)-1)),Ye(this.mask,"p-overlay-mask p-datepicker-mask p-datepicker-mask-scrollblocker p-overlay-mask p-overlay-mask-enter"),this.maskClickListener=this.renderer.listen(this.mask,"click",n=>{this.disableModality(),this.overlayVisible=!1}),this.renderer.appendChild(this.document.body,this.mask),Ot())}disableModality(){this.mask&&(Ye(this.mask,"p-overlay-mask-leave"),this.animationEndListener||(this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyMask.bind(this))))}destroyMask(){if(!this.mask)return;this.renderer.removeChild(this.document.body,this.mask);let e=this.document.body.children,i;for(let n=0;n<e.length;n++){let o=e[n];if(Be(o,"p-datepicker-mask-scrollblocker")){i=!0;break}}i||Ft(),this.unbindAnimationEndListener(),this.unbindMaskClickListener(),this.mask=null}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}writeValue(e){if(this.value=e,this.value&&typeof this.value=="string")try{this.value=this.parseValueFromString(this.value)}catch{this.keepInvalid&&(this.value=e)}this.updateInputfield(),this.updateUI(),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}getDateFormat(){return this.dateFormat||this.getTranslation("dateFormat")}getFirstDateOfWeek(){return this._firstDayOfWeek||this.getTranslation(xe.FIRST_DAY_OF_WEEK)}formatDate(e,i){if(!e)return"";let n,o=I=>{let $=n+1<i.length&&i.charAt(n+1)===I;return $&&n++,$},a=(I,$,Y)=>{let E=""+$;if(o(I))for(;E.length<Y;)E="0"+E;return E},h=(I,$,Y,E)=>o(I)?E[$]:Y[$],v="",x=!1;if(e)for(n=0;n<i.length;n++)if(x)i.charAt(n)==="'"&&!o("'")?x=!1:v+=i.charAt(n);else switch(i.charAt(n)){case"d":v+=a("d",e.getDate(),2);break;case"D":v+=h("D",e.getDay(),this.getTranslation(xe.DAY_NAMES_SHORT),this.getTranslation(xe.DAY_NAMES));break;case"o":v+=a("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":v+=a("m",e.getMonth()+1,2);break;case"M":v+=h("M",e.getMonth(),this.getTranslation(xe.MONTH_NAMES_SHORT),this.getTranslation(xe.MONTH_NAMES));break;case"y":v+=o("y")?e.getFullYear():(e.getFullYear()%100<10?"0":"")+e.getFullYear()%100;break;case"@":v+=e.getTime();break;case"!":v+=e.getTime()*1e4+this.ticksTo1970;break;case"'":o("'")?v+="'":x=!0;break;default:v+=i.charAt(n)}return v}formatTime(e){if(!e)return"";let i="",n=e.getHours(),o=e.getMinutes(),a=e.getSeconds();return this.hourFormat=="12"&&n>11&&n!=12&&(n-=12),this.hourFormat=="12"?i+=n===0?12:n<10?"0"+n:n:i+=n<10?"0"+n:n,i+=":",i+=o<10?"0"+o:o,this.showSeconds&&(i+=":",i+=a<10?"0"+a:a),this.hourFormat=="12"&&(i+=e.getHours()>11?" PM":" AM"),i}parseTime(e){let i=e.split(":"),n=this.showSeconds?3:2;if(i.length!==n)throw"Invalid time";let o=parseInt(i[0]),a=parseInt(i[1]),h=this.showSeconds?parseInt(i[2]):null;if(isNaN(o)||isNaN(a)||o>23||a>59||this.hourFormat=="12"&&o>12||this.showSeconds&&(isNaN(h)||h>59))throw"Invalid time";return this.hourFormat=="12"&&(o!==12&&this.pm?o+=12:!this.pm&&o===12&&(o-=12)),{hour:o,minute:a,second:h}}parseDate(e,i){if(i==null||e==null)throw"Invalid arguments";if(e=typeof e=="object"?e.toString():e+"",e==="")return null;let n,o,a,h=0,v=typeof this.shortYearCutoff!="string"?this.shortYearCutoff:new Date().getFullYear()%100+parseInt(this.shortYearCutoff,10),x=-1,I=-1,$=-1,Y=-1,E=!1,S,D=Le=>{let rt=n+1<i.length&&i.charAt(n+1)===Le;return rt&&n++,rt},K=Le=>{let rt=D(Le),It=Le==="@"?14:Le==="!"?20:Le==="y"&&rt?4:Le==="o"?3:2,vt=Le==="y"?It:1,St=new RegExp("^\\d{"+vt+","+It+"}"),Qe=e.substring(h).match(St);if(!Qe)throw"Missing number at position "+h;return h+=Qe[0].length,parseInt(Qe[0],10)},yt=(Le,rt,It)=>{let vt=-1,St=D(Le)?It:rt,Qe=[];for(let Oe=0;Oe<St.length;Oe++)Qe.push([Oe,St[Oe]]);Qe.sort((Oe,xt)=>-(Oe[1].length-xt[1].length));for(let Oe=0;Oe<Qe.length;Oe++){let xt=Qe[Oe][1];if(e.substr(h,xt.length).toLowerCase()===xt.toLowerCase()){vt=Qe[Oe][0],h+=xt.length;break}}if(vt!==-1)return vt+1;throw"Unknown name at position "+h},ti=()=>{if(e.charAt(h)!==i.charAt(n))throw"Unexpected literal at position "+h;h++};for(this.view==="month"&&($=1),n=0;n<i.length;n++)if(E)i.charAt(n)==="'"&&!D("'")?E=!1:ti();else switch(i.charAt(n)){case"d":$=K("d");break;case"D":yt("D",this.getTranslation(xe.DAY_NAMES_SHORT),this.getTranslation(xe.DAY_NAMES));break;case"o":Y=K("o");break;case"m":I=K("m");break;case"M":I=yt("M",this.getTranslation(xe.MONTH_NAMES_SHORT),this.getTranslation(xe.MONTH_NAMES));break;case"y":x=K("y");break;case"@":S=new Date(K("@")),x=S.getFullYear(),I=S.getMonth()+1,$=S.getDate();break;case"!":S=new Date((K("!")-this.ticksTo1970)/1e4),x=S.getFullYear(),I=S.getMonth()+1,$=S.getDate();break;case"'":D("'")?ti():E=!0;break;default:ti()}if(h<e.length&&(a=e.substr(h),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(x===-1?x=new Date().getFullYear():x<100&&(x+=new Date().getFullYear()-new Date().getFullYear()%100+(x<=v?0:-100)),Y>-1){I=1,$=Y;do{if(o=this.getDaysCountInMonth(x,I-1),$<=o)break;I++,$-=o}while(!0)}if(this.view==="year"&&(I=I===-1?1:I,$=$===-1?1:$),S=this.daylightSavingAdjust(new Date(x,I-1,$)),S.getFullYear()!==x||S.getMonth()+1!==I||S.getDate()!==$)throw"Invalid date";return S}daylightSavingAdjust(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null}updateFilledState(){this.filled=this.inputFieldValue&&this.inputFieldValue!=""}isValidDateForTimeConstraints(e){return this.keepInvalid?!0:(!this.minDate||e>=this.minDate)&&(!this.maxDate||e<=this.maxDate)}onTodayButtonClick(e){let i=new Date,n={day:i.getDate(),month:i.getMonth(),year:i.getFullYear(),otherMonth:i.getMonth()!==this.currentMonth||i.getFullYear()!==this.currentYear,today:!0,selectable:!0};this.createMonths(i.getMonth(),i.getFullYear()),this.onDateSelect(e,n),this.onTodayClick.emit(i)}onClearButtonClick(e){this.updateModel(null),this.updateInputfield(),this.hideOverlay(),this.onClearClick.emit(e)}createResponsiveStyle(){if(this.numberOfMonths>1&&this.responsiveOptions){this.responsiveStyleElement||(this.responsiveStyleElement=this.renderer.createElement("style"),this.responsiveStyleElement.type="text/css",this.renderer.appendChild(this.document.body,this.responsiveStyleElement));let e="";if(this.responsiveOptions){let i=[...this.responsiveOptions].filter(n=>!!(n.breakpoint&&n.numMonths)).sort((n,o)=>-1*n.breakpoint.localeCompare(o.breakpoint,void 0,{numeric:!0}));for(let n=0;n<i.length;n++){let{breakpoint:o,numMonths:a}=i[n],h=`
                        .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${a}) .p-datepicker-next {
                            display: inline-flex !important;
                        }
                    `;for(let v=a;v<this.numberOfMonths;v++)h+=`
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${v+1}) {
                                display: none !important;
                            }
                        `;e+=`
                        @media screen and (max-width: ${o}) {
                            ${h}
                        }
                    `}}this.responsiveStyleElement.innerHTML=e,$t(this.responsiveStyleElement,"nonce",this.config?.csp()?.nonce)}}destroyResponsiveStyleElement(){this.responsiveStyleElement&&(this.responsiveStyleElement.remove(),this.responsiveStyleElement=null)}bindDocumentClickListener(){this.documentClickListener||this.zone.runOutsideAngular(()=>{let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(e,"mousedown",i=>{this.isOutsideClicked(i)&&this.overlayVisible&&this.zone.run(()=>{this.hideOverlay(),this.onClickOutside.emit(i),this.cd.markForCheck()})})})}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){!this.documentResizeListener&&!this.touchUI&&(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Hi(this.containerViewChild?.nativeElement,()=>{this.overlayVisible&&this.hideOverlay()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}isOutsideClicked(e){return!(this.el.nativeElement.isSameNode(e.target)||this.isNavIconClicked(e)||this.el.nativeElement.contains(e.target)||this.overlay&&this.overlay.contains(e.target))}isNavIconClicked(e){return Be(e.target,"p-datepicker-prev-button")||Be(e.target,"p-datepicker-prev-icon")||Be(e.target,"p-datepicker-next-button")||Be(e.target,"p-datepicker-next-icon")}onWindowResize(){this.overlayVisible&&!Bi()&&this.hideOverlay()}onOverlayHide(){this.currentView=this.view,this.mask&&this.destroyMask(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.overlay=null}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),this.overlay&&this.autoZIndex&&Ue.clear(this.overlay),this.destroyResponsiveStyleElement(),this.clearTimePickerTimer(),this.restoreOverlayAppend(),this.onOverlayHide(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(Fe(at),Fe(Pt))};static \u0275cmp=O({type:t,selectors:[["p-datePicker"],["p-datepicker"],["p-date-picker"]],contentQueries:function(i,n,o){if(i&1&&(M(o,ls,4),M(o,ss,4),M(o,cs,4),M(o,ps,4),M(o,us,4),M(o,ds,4),M(o,ms,4),M(o,hs,4),M(o,_s,4),M(o,fs,4),M(o,gs,4),M(o,bs,4),M(o,fe,4)),i&2){let a;w(a=k())&&(n.dateTemplate=a.first),w(a=k())&&(n.headerTemplate=a.first),w(a=k())&&(n.footerTemplate=a.first),w(a=k())&&(n.disabledDateTemplate=a.first),w(a=k())&&(n.decadeTemplate=a.first),w(a=k())&&(n.previousIconTemplate=a.first),w(a=k())&&(n.nextIconTemplate=a.first),w(a=k())&&(n.triggerIconTemplate=a.first),w(a=k())&&(n.clearIconTemplate=a.first),w(a=k())&&(n.decrementIconTemplate=a.first),w(a=k())&&(n.incrementIconTemplate=a.first),w(a=k())&&(n.inputIconTemplate=a.first),w(a=k())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&(G(ys,5),G(vs,5),G(xs,5)),i&2){let o;w(o=k())&&(n.containerViewChild=o.first),w(o=k())&&(n.inputfieldViewChild=o.first),w(o=k())&&(n.content=o.first)}},inputs:{iconDisplay:"iconDisplay",style:"style",styleClass:"styleClass",inputStyle:"inputStyle",inputId:"inputId",name:"name",inputStyleClass:"inputStyleClass",placeholder:"placeholder",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",iconAriaLabel:"iconAriaLabel",disabled:[2,"disabled","disabled",y],dateFormat:"dateFormat",multipleSeparator:"multipleSeparator",rangeSeparator:"rangeSeparator",inline:[2,"inline","inline",y],showOtherMonths:[2,"showOtherMonths","showOtherMonths",y],selectOtherMonths:[2,"selectOtherMonths","selectOtherMonths",y],showIcon:[2,"showIcon","showIcon",y],fluid:[2,"fluid","fluid",y],icon:"icon",appendTo:"appendTo",readonlyInput:[2,"readonlyInput","readonlyInput",y],shortYearCutoff:"shortYearCutoff",monthNavigator:[2,"monthNavigator","monthNavigator",y],yearNavigator:[2,"yearNavigator","yearNavigator",y],hourFormat:"hourFormat",timeOnly:[2,"timeOnly","timeOnly",y],stepHour:[2,"stepHour","stepHour",N],stepMinute:[2,"stepMinute","stepMinute",N],stepSecond:[2,"stepSecond","stepSecond",N],showSeconds:[2,"showSeconds","showSeconds",y],required:[2,"required","required",y],showOnFocus:[2,"showOnFocus","showOnFocus",y],showWeek:[2,"showWeek","showWeek",y],startWeekFromFirstDayOfYear:"startWeekFromFirstDayOfYear",showClear:[2,"showClear","showClear",y],dataType:"dataType",selectionMode:"selectionMode",maxDateCount:[2,"maxDateCount","maxDateCount",N],showButtonBar:[2,"showButtonBar","showButtonBar",y],todayButtonStyleClass:"todayButtonStyleClass",clearButtonStyleClass:"clearButtonStyleClass",autofocus:[2,"autofocus","autofocus",y],autoZIndex:[2,"autoZIndex","autoZIndex",y],baseZIndex:[2,"baseZIndex","baseZIndex",N],panelStyleClass:"panelStyleClass",panelStyle:"panelStyle",keepInvalid:[2,"keepInvalid","keepInvalid",y],hideOnDateTimeSelect:[2,"hideOnDateTimeSelect","hideOnDateTimeSelect",y],touchUI:[2,"touchUI","touchUI",y],timeSeparator:"timeSeparator",focusTrap:[2,"focusTrap","focusTrap",y],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",tabindex:[2,"tabindex","tabindex",N],variant:"variant",size:"size",minDate:"minDate",maxDate:"maxDate",disabledDates:"disabledDates",disabledDays:"disabledDays",yearRange:"yearRange",showTime:"showTime",responsiveOptions:"responsiveOptions",numberOfMonths:"numberOfMonths",firstDayOfWeek:"firstDayOfWeek",locale:"locale",view:"view",defaultDate:"defaultDate"},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClose:"onClose",onSelect:"onSelect",onClear:"onClear",onInput:"onInput",onTodayClick:"onTodayClick",onClearClick:"onClearClick",onMonthChange:"onMonthChange",onYearChange:"onYearChange",onClickOutside:"onClickOutside",onShow:"onShow"},features:[J([dp,$n]),L],ngContentSelectors:ws,decls:4,vars:6,consts:[["container",""],["inputfield",""],["contentWrapper",""],[3,"ngClass","ngStyle"],[3,"ngIf"],[3,"class","ngStyle","ngClass","click",4,"ngIf"],["pInputText","","type","text","role","combobox","aria-autocomplete","none","aria-haspopup","dialog","autocomplete","off",3,"focus","keydown","click","blur","input","pSize","value","readonly","ngStyle","ngClass","placeholder","disabled","pAutoFocus","variant","fluid"],[4,"ngIf"],["type","button","aria-haspopup","dialog","class","p-datepicker-dropdown","tabindex","0",3,"disabled","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["class","p-datepicker-clear-icon",3,"click",4,"ngIf"],[3,"click"],[1,"p-datepicker-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["type","button","aria-haspopup","dialog","tabindex","0",1,"p-datepicker-dropdown",3,"click","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-datepicker-input-icon-container"],[3,"ngClass","click",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"click","ngClass"],[3,"click","ngStyle","ngClass"],["class","p-datepicker-time-picker",4,"ngIf"],["class","p-datepicker-buttonbar",4,"ngIf"],[1,"p-datepicker-calendar-container"],["class","p-datepicker-calendar",4,"ngFor","ngForOf"],["class","p-datepicker-month-view",4,"ngIf"],["class","p-datepicker-year-view",4,"ngIf"],[1,"p-datepicker-calendar"],[1,"p-datepicker-header"],["size","small","rounded","","text","","styleClass","p-datepicker-prev-button p-button-icon-only","type","button",3,"keydown","onClick","ngStyle","ariaLabel"],[1,"p-datepicker-title"],["type","button","class","p-datepicker-select-month","pRipple","",3,"disabled","click","keydown",4,"ngIf"],["type","button","class","p-datepicker-select-year","pRipple","",3,"disabled","click","keydown",4,"ngIf"],["class","p-datepicker-decade",4,"ngIf"],["rounded","","text","","size","small","styleClass","p-datepicker-next-button p-button-icon-only",3,"keydown","onClick","ngStyle","ariaLabel"],["class","p-datepicker-day-view","role","grid",4,"ngIf"],["type","button","pRipple","",1,"p-datepicker-select-month",3,"click","keydown","disabled"],["type","button","pRipple","",1,"p-datepicker-select-year",3,"click","keydown","disabled"],[1,"p-datepicker-decade"],["role","grid",1,"p-datepicker-day-view"],["class","p-datepicker-weekheader p-disabled",4,"ngIf"],["class","p-datepicker-weekday-cell","scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"p-datepicker-weekheader","p-disabled"],["scope","col",1,"p-datepicker-weekday-cell"],[1,"p-datepicker-weekday"],["class","p-datepicker-weeknumber",4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"p-datepicker-weeknumber"],[1,"p-datepicker-weeklabel-container","p-disabled"],["draggable","false","pRipple","",3,"click","keydown","ngClass"],["class","p-hidden-accessible","aria-live","polite",4,"ngIf"],["aria-live","polite",1,"p-hidden-accessible"],[1,"p-datepicker-month-view"],["pRipple","",3,"ngClass","click","keydown",4,"ngFor","ngForOf"],["pRipple","",3,"click","keydown","ngClass"],[1,"p-datepicker-year-view"],[1,"p-datepicker-time-picker"],[1,"p-datepicker-hour-picker"],["rounded","","text","","size","small","styleClass","p-datepicker-increment-button p-button-icon-only",3,"keydown","keydown.enter","keydown.space","mousedown","mouseup","keyup.enter","keyup.space","mouseleave"],[1,"p-datepicker-separator"],[1,"p-datepicker-minute-picker"],["class","p-datepicker-separator",4,"ngIf"],["class","p-datepicker-second-picker",4,"ngIf"],["class","p-datepicker-ampm-picker",4,"ngIf"],[1,"p-datepicker-second-picker"],[1,"p-datepicker-ampm-picker"],["size","small","text","","rounded","","styleClass","p-datepicker-increment-button p-button-icon-only",3,"keydown","onClick","keydown.enter"],["size","small","text","","rounded","","styleClass","p-datepicker-increment-button p-button-icon-only",3,"keydown","click","keydown.enter"],[1,"p-datepicker-buttonbar"],["size","small","styleClass","p-datepicker-today-button",3,"keydown","onClick","label","ngClass"],["size","small","styleClass","p-datepicker-clear-button",3,"keydown","onClick","label","ngClass"]],template:function(i,n){i&1&&(Mt(Cs),u(0,"span",3,0),_(2,Ys,5,25,"ng-template",4)(3,sp,9,20,"div",5),p()),i&2&&(F(n.styleClass),c("ngClass",n.rootClass)("ngStyle",n.style),s(2),c("ngIf",!n.inline),s(),c("ngIf",n.inline||n.overlayVisible))},dependencies:[oe,ue,ct,Se,_e,De,Rt,ut,cn,pn,un,At,Je,sn,He,Ee,z],encapsulation:2,data:{animation:[Et("overlayAnimation",[Ti("visibleTouchUI",Ne({transform:"translate(-50%,-50%)",opacity:1})),We("void => visible",[Ne({opacity:0,transform:"scaleY(0.8)"}),je("{{showTransitionParams}}",Ne({opacity:1,transform:"*"}))]),We("visible => void",[je("{{hideTransitionParams}}",Ne({opacity:0}))]),We("void => visibleTouchUI",[Ne({opacity:0,transform:"translate3d(-50%, -40%, 0) scale(0.9)"}),je("{{showTransitionParams}}")]),We("visibleTouchUI => void",[je("{{hideTransitionParams}}",Ne({opacity:0,transform:"translate3d(-50%, -40%, 0) scale(0.9)"}))])])]},changeDetection:0})}return t})(),Pn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[Jt,z,z]})}return t})();var _i=["Fiction","Non-fiction","Fantasy","Science Fiction","Mystery","Thriller","Romance","Historical Fiction","Biography","Memoir","Philosophy","Psychology","Self-help","Business","Science","History","Poetry","Classics","Horror","Young Adult","Graphic Novel","Essays","Productivity","Technology"];var hp=()=>({width:"min(520px, 92vw)"});function _p(t,r){if(t&1){let e=T();u(0,"img",29),g("error",function(n){d(e);let o=l();return m(o.onCoverError(n))}),p()}if(t&2){let e=l();c("src",e.value().coverImageUrl,Dt)}}function fp(t,r){if(t&1&&(u(0,"p",25),b(1),p()),t&2){let e=l();s(),P(e.error())}}var ei=class t{store=H(ht);state=me(null);closed=Ce();visible=Ie(()=>this.state()!==null);isEdit=Ie(()=>this.state()?.mode==="edit");statusOptions=dt;saving=re(!1);error=re(null);genreMatches=re(_i);value=re(li());constructor(){st(()=>{let r=this.state();r&&(this.error.set(null),this.value.set(r.mode==="edit"?Yi(r.book):Ke(Ae({},li()),{title:r.initialTitle??""})))})}canSubmit(){return this.value().title.trim().length>0&&this.value().author.trim().length>0&&!this.saving()}filterGenres(r){let e=r.query.toLowerCase();this.genreMatches.set(_i.filter(i=>i.toLowerCase().includes(e)))}onCoverError(r){r.target.style.visibility="hidden"}submit(){if(!this.canSubmit())return;let r=this.state();if(!r)return;let e=this.value(),i=qi(Ke(Ae({},e),{rating:e.rating?e.rating:null})),n=r.mode==="edit"?r.book.id:void 0;this.saving.set(!0),this.error.set(null),this.store.saveBook(i,n).subscribe({next:()=>{this.saving.set(!1),this.close()},error:o=>{this.saving.set(!1),this.error.set(o?.error?.message??"Could not save this book. Check the fields and try again.")}})}onVisibleChange(r){r||this.close()}close(){this.closed.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-book-form"]],inputs:{state:[1,"state"]},outputs:{closed:"closed"},decls:55,vars:33,consts:[["styleClass","bs-book-form-dialog",3,"visibleChange","visible","modal","header"],[1,"grid",3,"ngSubmit"],[1,"row","two"],[1,"field"],["for","bf-title"],["id","bf-title","pInputText","","type","text","name","title","required","",3,"ngModelChange","ngModel"],["for","bf-author"],["id","bf-author","pInputText","","type","text","name","author","required","",3,"ngModelChange","ngModel"],["for","bf-genre"],["inputId","bf-genre","name","genre","placeholder","e.g. Fiction",3,"ngModelChange","completeMethod","ngModel","suggestions","dropdown"],["optionLabel","label","optionValue","value","name","status",3,"ngModelChange","options","ngModel"],["for","bf-current"],["inputId","bf-current","name","currentPage",3,"ngModelChange","ngModel","min","showButtons"],["for","bf-total"],["inputId","bf-total","name","totalPages","placeholder","Optional",3,"ngModelChange","ngModel","min"],["for","bf-started"],["inputId","bf-started","name","dateStarted","dateFormat","M d, yy","appendTo","body",3,"ngModelChange","ngModel","showIcon","showClear"],["for","bf-completed"],["inputId","bf-completed","name","dateCompleted","dateFormat","M d, yy","appendTo","body",3,"ngModelChange","ngModel","showIcon","showClear"],["name","rating",3,"ngModelChange","ngModel","stars"],["for","bf-cover"],["id","bf-cover","pInputText","","type","text","name","coverImageUrl","placeholder","https://\u2026",3,"ngModelChange","ngModel"],["alt","",1,"cover-preview",3,"src"],["for","bf-notes"],["id","bf-notes","pTextarea","","rows","3","name","notes","placeholder","A line worth keeping\u2026",3,"ngModelChange","ngModel"],[1,"error"],[1,"actions"],["pButton","","type","button","label","Cancel",1,"p-button-text",3,"click"],["pButton","","type","submit",3,"label","loading","disabled"],["alt","",1,"cover-preview",3,"error","src"]],template:function(e,i){e&1&&(u(0,"p-dialog",0),g("visibleChange",function(o){return i.onVisibleChange(o)}),u(1,"form",1),g("ngSubmit",function(){return i.submit()}),u(2,"div",2)(3,"div",3)(4,"label",4),b(5,"Title *"),p(),u(6,"input",5),pe("ngModelChange",function(o){return ce(i.value().title,o)||(i.value().title=o),o}),p()(),u(7,"div",3)(8,"label",6),b(9,"Author *"),p(),u(10,"input",7),pe("ngModelChange",function(o){return ce(i.value().author,o)||(i.value().author=o),o}),p()()(),u(11,"div",2)(12,"div",3)(13,"label",8),b(14,"Genre"),p(),u(15,"p-autoComplete",9),pe("ngModelChange",function(o){return ce(i.value().genre,o)||(i.value().genre=o),o}),g("completeMethod",function(o){return i.filterGenres(o)}),p()(),u(16,"div",3)(17,"label"),b(18,"Status"),p(),u(19,"p-selectButton",10),pe("ngModelChange",function(o){return ce(i.value().status,o)||(i.value().status=o),o}),p()()(),u(20,"div",2)(21,"div",3)(22,"label",11),b(23,"Current page"),p(),u(24,"p-inputNumber",12),pe("ngModelChange",function(o){return ce(i.value().currentPage,o)||(i.value().currentPage=o),o}),p()(),u(25,"div",3)(26,"label",13),b(27,"Total pages"),p(),u(28,"p-inputNumber",14),pe("ngModelChange",function(o){return ce(i.value().totalPages,o)||(i.value().totalPages=o),o}),p()()(),u(29,"div",2)(30,"div",3)(31,"label",15),b(32,"Date started"),p(),u(33,"p-datePicker",16),pe("ngModelChange",function(o){return ce(i.value().dateStarted,o)||(i.value().dateStarted=o),o}),p()(),u(34,"div",3)(35,"label",17),b(36,"Date completed"),p(),u(37,"p-datePicker",18),pe("ngModelChange",function(o){return ce(i.value().dateCompleted,o)||(i.value().dateCompleted=o),o}),p()()(),u(38,"div",3)(39,"label"),b(40,"Rating"),p(),u(41,"p-rating",19),pe("ngModelChange",function(o){return ce(i.value().rating,o)||(i.value().rating=o),o}),p()(),u(42,"div",3)(43,"label",20),b(44,"Cover image URL"),p(),u(45,"input",21),pe("ngModelChange",function(o){return ce(i.value().coverImageUrl,o)||(i.value().coverImageUrl=o),o}),p(),_(46,_p,1,1,"img",22),p(),u(47,"div",3)(48,"label",23),b(49,"Notes"),p(),u(50,"textarea",24),pe("ngModelChange",function(o){return ce(i.value().notes,o)||(i.value().notes=o),o}),p()(),_(51,fp,2,1,"p",25),u(52,"div",26)(53,"button",27),g("click",function(){return i.close()}),p(),C(54,"button",28),p()()()),e&2&&(ve(lt(32,hp)),c("visible",i.visible())("modal",!0)("header",i.isEdit()?"Edit book":"Add a book"),s(6),se("ngModel",i.value().title),s(4),se("ngModel",i.value().author),s(5),se("ngModel",i.value().genre),c("suggestions",i.genreMatches())("dropdown",!0),s(4),c("options",i.statusOptions),se("ngModel",i.value().status),s(5),se("ngModel",i.value().currentPage),c("min",0)("showButtons",!1),s(4),se("ngModel",i.value().totalPages),c("min",0),s(5),se("ngModel",i.value().dateStarted),c("showIcon",!0)("showClear",!0),s(4),se("ngModel",i.value().dateCompleted),c("showIcon",!0)("showClear",!0),s(4),se("ngModel",i.value().rating),c("stars",5),s(4),se("ngModel",i.value().coverImageUrl),s(),q(i.value().coverImageUrl?46:-1),s(4),se("ngModel",i.value().notes),s(),q(i.error()?51:-1),s(3),c("label",i.isEdit()?"Save changes":"Add book")("loading",i.saving())("disabled",!i.canSubmit()))},dependencies:[Ve,Ni,Xe,Me,Ai,zi,be,Ri,Ji,Xi,tt,et,pt,Ee,Mn,Gt,Fn,Xt,Yt,bt,ft,nt,jt,Kt,Pn,Jt],styles:[".grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;padding-top:4px}.row.two[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px}@media(max-width:480px){.row.two[_ngcontent-%COMP%]{grid-template-columns:1fr}}.field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--bs-text-faint)}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     .field .p-autocomplete, [_nghost-%COMP%]     .field .p-inputnumber, [_nghost-%COMP%]     .field .p-datepicker{width:100%}.cover-preview[_ngcontent-%COMP%]{margin-top:8px;width:64px;height:92px;object-fit:cover;border-radius:3px;border:1px solid var(--bs-hairline)}.error[_ngcontent-%COMP%]{color:#d98080;font-size:13px;margin:0}.actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px;margin-top:4px}"],changeDetection:0})};var gp=(t,r)=>r.value;function bp(t,r){t&1&&C(0,"p-skeleton",4)}function yp(t,r){t&1&&(u(0,"div",5)(1,"p"),b(2,"Your shelf is empty. Type a title above and press Enter to add your first book."),p()())}function vp(t,r){if(t&1){let e=T();u(0,"button",19),g("click",function(){let n=d(e).$implicit,o=l(2);return m(o.store.statusFilter.set(n.value))}),p()}if(t&2){let e=r.$implicit,i=l(2);ye("p-button-outlined",i.store.statusFilter()!==e.value),c("label",e.label)}}function xp(t,r){t&1&&(u(0,"div",5)(1,"p"),b(2,"No books match that search."),p()())}function Cp(t,r){if(t&1){let e=T();u(0,"app-hero-shelf",20),g("spineClick",function(n){d(e);let o=l(2);return m(o.open(n))}),p()}if(t&2){let e=l(2);c("books",e.store.filteredBooks())("activeId",e.activeBookId())}}function wp(t,r){if(t&1){let e=T();u(0,"div",12)(1,"span",13)(2,"input",14),g("ngModelChange",function(n){d(e);let o=l();return m(o.store.searchQuery.set(n))}),p()(),u(3,"div",15)(4,"button",16),g("click",function(){d(e);let n=l();return m(n.store.statusFilter.set(null))}),p(),we(5,vp,1,3,"button",17,gp),p()(),_(7,xp,3,0,"div",5)(8,Cp,1,2,"app-hero-shelf",18)}if(t&2){let e=l();s(2),c("ngModel",e.store.searchQuery()),s(2),ye("p-button-outlined",e.store.statusFilter()!==null),s(),ke(e.statusOptions),s(2),q(e.store.filteredBooks().length===0?7:8)}}function kp(t,r){if(t&1){let e=T();u(0,"section",7)(1,"h2"),b(2,"Recently finished"),p(),u(3,"app-book-rail",21),g("openBook",function(n){d(e);let o=l();return m(o.open(n))}),p()()}if(t&2){let e=l();s(3),c("books",e.store.recentlyCompleted())}}var Ln=class t{store=H(ht);statusOptions=dt;id=me(void 0);activeBookId=re(null);formState=re(null);constructor(){st(()=>{let r=this.id();r!==void 0&&this.activeBookId.set(Number(r))})}open(r){this.activeBookId.set(r)}close(){this.activeBookId.set(null)}bump(r){let e=r.totalPages?Math.min(r.totalPages,r.currentPage+10):r.currentPage+10;this.store.updateProgress(r.id,e)}onQuickAdd(r){this.formState.set({mode:"add",initialTitle:r})}editBook(r){this.formState.set({mode:"edit",book:r})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["app-shelf-page"]],inputs:{id:[1,"id"]},decls:26,vars:7,consts:[[1,"app-shell"],[1,"hero-head"],[1,"sub"],[3,"add"],["height","340px","borderRadius","6px"],[1,"empty-shelf"],[3,"stats"],[1,"section"],["variant","continue","emptyLabel","Nothing in progress. Pull a spine off the shelf above to start one.",3,"openBook","bumpProgress","books"],["variant","added","emptyLabel","Nothing added yet.",3,"openBook","books"],[3,"closed","editRequested","bookId"],[3,"closed","state"],[1,"filters"],[1,"search"],["pInputText","","type","text","placeholder","Search title, author, genre\u2026",3,"ngModelChange","ngModel"],[1,"chips"],["pButton","","type","button","label","All",1,"p-button-sm",3,"click"],["pButton","","type","button",1,"p-button-sm",3,"label","p-button-outlined"],[3,"books","activeId"],["pButton","","type","button",1,"p-button-sm",3,"click","label"],[3,"spineClick","books","activeId"],["variant","completed",3,"openBook","books"]],template:function(e,i){e&1&&(u(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),b(4,"Every book you've opened, "),u(5,"em"),b(6,"lit"),p(),b(7," and lined up."),p(),u(8,"p",2),b(9,"Click a spine to update status, progress, or rating in one motion."),p()(),u(10,"app-quick-add",3),g("add",function(o){return i.onQuickAdd(o)}),p()(),_(11,bp,1,0,"p-skeleton",4)(12,yp,3,0,"div",5)(13,wp,9,4),C(14,"app-stats-strip",6),u(15,"section",7)(16,"h2"),b(17,"Continue reading"),p(),u(18,"app-book-rail",8),g("openBook",function(o){return i.open(o)})("bumpProgress",function(o){return i.bump(o)}),p()(),_(19,kp,4,1,"section",7),u(20,"section",7)(21,"h2"),b(22,"Recently added"),p(),u(23,"app-book-rail",9),g("openBook",function(o){return i.open(o)}),p()()(),u(24,"app-book-drawer",10),g("closed",function(){return i.close()})("editRequested",function(o){return i.editBook(o)}),p(),u(25,"app-book-form",11),g("closed",function(){return i.formState.set(null)}),p()),e&2&&(s(11),q(i.store.isLoading()&&i.store.books().length===0?11:i.store.books().length===0?12:13),s(3),c("stats",i.store.stats()),s(4),c("books",i.store.continueReading()),s(),q(i.store.recentlyCompleted().length>0?19:-1),s(4),c("books",i.store.recentlyAdded()),s(),c("bookId",i.activeBookId()),s(),c("state",i.formState()))},dependencies:[Ve,Xe,Me,be,rn,si,pt,Ee,tt,et,zt,Ht,Ut,Qt,Wt,ei],styles:[".app-shell[_ngcontent-%COMP%]{max-width:1180px;margin:0 auto;padding:40px 28px 100px}.hero-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;margin-bottom:28px;flex-wrap:wrap}.hero-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:600;font-size:clamp(26px,3.4vw,36px);margin:0}.hero-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:var(--bs-brass);font-style:italic}.sub[_ngcontent-%COMP%]{color:var(--bs-text-dim);font-size:14px;margin-top:8px;max-width:380px}.filters[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:14px;flex-wrap:wrap}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:260px;max-width:60vw}.chips[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap}.empty-shelf[_ngcontent-%COMP%]{height:220px;display:flex;align-items:center;justify-content:center;text-align:center;border:1px dashed var(--bs-hairline);border-radius:6px;color:var(--bs-text-faint);font-size:14px;padding:24px}.section[_ngcontent-%COMP%]{margin-top:48px}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:19px;margin:0 0 16px}"],changeDetection:0})};export{Ln as ShelfPageComponent};
