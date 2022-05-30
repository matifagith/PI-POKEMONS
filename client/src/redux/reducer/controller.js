export function payloadHandler(payload){
    if(payload === 'atoz') return {prop:'name'};
    if(payload === 'ztoa') return {prop:'name'};
    if(payload === 'hh') return {prop:'height'};
    if(payload === 'lh') return {prop:'height'};
    if(payload === 'hw') return {prop:'weight'};
    if(payload === 'lw') return {prop:'weight'};
    if(payload === 'hhp') return {prop:'hp'};
    if(payload === 'lhp') return {prop:'hp'};
    if(payload === 'hs') return {prop:'speed'};
    if(payload === 'ls') return {prop:'speed'};
    if(payload === 'ha') return {prop:'attack'};
    if(payload === 'la') return {prop:'attack'};
    if(payload === 'hd') return {prop:'defense'};
    if(payload === 'ld') return {prop:'defense'};
}