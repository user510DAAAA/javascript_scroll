// JavaScript

//console.log('Hello world!');
//実行する機能
//const show = (entries) => {
    //const keyframes = {
        //opacity: [0, 1],
        //translate: ['200px 0',0]
      //}
      //entries[0].target.animate(keyframes,600);
    //console.log(entries[0].target);
  //}
  //監視機能の設置
//const observer = new IntersectionObserver(show);
//監視対象の指示
//observer.observe(document.querySelector('#img01'));
const show = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
        const keyframes = {
          opacity: [0, 1],
          translate: ['300px 150px',0]
        }
        entry.target.animate(keyframes,600);
         //一度表示されたら止める
      obs.unobserve(entry.target);
    }
    });
  }
  
  const observer = new IntersectionObserver(show);
  
  //監視対象
  const images = document.querySelectorAll('.img');
  images.forEach(img =>{
    observer.observe(img);
  });