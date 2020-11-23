import ReelContainer from './ReelContainer';
export default class Console{

    static init(){
        let btn = document.getElementById('spinBtn');
        btn.onclick = ()=>{
            ReelContainer.spinReels();
        };

    }
}