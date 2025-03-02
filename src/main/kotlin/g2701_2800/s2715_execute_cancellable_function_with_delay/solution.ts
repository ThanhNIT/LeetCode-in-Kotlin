// #Easy #2023_08_02_Time_64_ms_(91.95%)_Space_42.3_MB_(96.51%)

function cancellable(fn: Function, args: any[], t: number): Function {
    let cancelled: boolean = false
    setTimeout(() => {
        if (!cancelled) {
            fn(...args)
        }
    }, t)
    return () => {
        cancelled = true
    }
}

/*
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr))
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

export { cancellable }
