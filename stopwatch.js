// const sw = new Stopwatch()
class Stopwatch {
    constructor() {
        this.startTime = 0;
        this.endTime = 0;
        this.duration = 0;
    }

    reset() {
        this.duration = 0;
        this.startTime = 0;
        this.endTime = 0;
    }

    start() {
        if (this.startTime) throw new Error('Started already! Please stopwatch.reset()')
        this.startTime = new Date().getTime();
        console.log(this.startTime)
    }

    stop() {
        if (this.endTime) throw new Error('Already end stopwatch. Please stopwatch.reset()')
        this.endTime = new Date().getTime();
        this.duration = (this.endTime - this.startTime) / 1000
    }

}
