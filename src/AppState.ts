import { observable } from 'mobx';

export default class AppState {
    @observable timer = 0;

  constructor() {
      debugger
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }
}
