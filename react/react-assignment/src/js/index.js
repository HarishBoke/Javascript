import store from '../js/store/index';

import addArticle from '../js/actions/index';

window.store = store;
window.addArticle = addArticle;

console.log(`store.getState() ${JSON.stringify(store.getState())}`); 

store.subscribe(() => console.log('Look ma, Redux!!'));

store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );

console.log(`store.getState() ${JSON.stringify(store.getState())}`);