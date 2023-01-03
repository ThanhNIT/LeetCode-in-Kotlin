package g0401_0500.s0491_increasing_subsequences

import org.hamcrest.CoreMatchers.equalTo
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test
import java.util.Arrays
import java.util.function.Consumer

internal class SolutionTest {
    @Test
    fun findSubsequences() {
        val expected: List<List<Int>> = ArrayList(
            Arrays.asList(
                Arrays.asList(4, 6),
                Arrays.asList(4, 6, 7),
                Arrays.asList(4, 6, 7, 7),
                Arrays.asList(4, 7),
                Arrays.asList(4, 7, 7),
                Arrays.asList(6, 7),
                Arrays.asList(6, 7, 7),
                Arrays.asList(7, 7)
            )
        )
        val result = Solution().findSubsequences(intArrayOf(4, 6, 7, 7))
        result.forEach(
            Consumer { e: List<Int> ->
                assertThat(
                    expected.contains(e),
                    equalTo(true)
                )
            }
        )
    }

    @Test
    fun findSubsequences2() {
        val expected: List<List<Int>> = ArrayList(Arrays.asList(Arrays.asList(4, 4)))
        assertThat(Solution().findSubsequences(intArrayOf(4, 4, 3, 2, 1)), equalTo(expected))
    }
}
