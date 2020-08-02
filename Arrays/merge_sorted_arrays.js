/**Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2. */

var merge = function (num1, m, num2, n) {
    while (m + n > 0) {
        if (m > 0 && n > 0) {
            if (num1[m - 1] > num2[n - 1]) {
                num1[m + n - 1] = num1[m - 1]
                m--;
            } else {
                num1[m + n - 1] = num2[n - 1]
                n--;
            }
        } else if (m > 0) {
            while (m > 0) {
                num1[n + m - 1] = num1[m - 1]
                m--
            }
            return num1
        } else if (n > 0) {
            while (n > 0) {
                num1[n + m - 1] = num2[n - 1]
                n--
            }
            return num1
        }
    }
    return num1
};