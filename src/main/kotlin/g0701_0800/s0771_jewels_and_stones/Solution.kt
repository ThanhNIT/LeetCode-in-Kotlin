package g0701_0800.s0771_jewels_and_stones

class Solution {
    fun numJewelsInStones(jewels: String, stones: String): Int {
        val x = IntArray(60)
        var count = 0
        val len = jewels.length
        val len2 = stones.length
        for (i in 0 until len) {
            x[jewels[i].code - 65]++
        }
        for (i in 0 until len2) {
            if (x[stones[i].toInt() - 65] == 1) {
                count++
            }
        }
        return count
    }
}
