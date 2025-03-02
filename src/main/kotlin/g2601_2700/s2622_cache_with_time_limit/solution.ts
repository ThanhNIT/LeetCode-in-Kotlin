// #Medium #2023_07_16_Time_59_ms_(86.77%)_Space_42.4_MB_(94.28%)

class TimeLimitedCache {
    private keyMap: Map<number, any>
    constructor() {
        this.keyMap = new Map<number, any>()
    }

    set(key: number, value: number, duration: number): boolean {
        let existed: boolean = this.keyMap.has(key)
        if (existed) clearTimeout(this.keyMap.get(key).clearRef)

        this.keyMap.set(key, {
            value,
            clearRef: setTimeout(() => {
                this.keyMap.delete(key)
            }, duration),
        })
        return existed
    }

    get(key: number): number {
        return this.keyMap.has(key) ? this.keyMap.get(key).value : -1
    }

    count(): number {
        return this.keyMap.size
    }
}

/*
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

export { TimeLimitedCache }
