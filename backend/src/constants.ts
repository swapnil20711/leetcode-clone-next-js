import { Problem, SupportedLanguage } from './types.js';

export const INITIAL_PROBLEMS: Problem[] = [
  {
    id: '1',
    slug: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the *same* element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
};`,
      [SupportedLanguage.CPP]: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
    }
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        `,
      [SupportedLanguage.JAVA]: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [2,7,11,15], target = 9', expectedOutput: '[0,1]' },
      { id: 't2', input: 'nums = [3,2,4], target = 6', expectedOutput: '[1,2]' },
      { id: 't3', input: 'nums = [3,3], target = 6', expectedOutput: '[0,1]' }
    ]
  },
  {
    id: '2',
    slug: 'palindrome-number',
    title: 'Palindrome Number',
    difficulty: 'Easy',
    description: 'Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.',
    examples: [
      { input: 'x = 121', output: 'true' },
      { input: 'x = -121', output: 'false', explanation: 'From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.' }
    ],
    constraints: ['-2^31 <= x <= 2^31 - 1'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def isPalindrome(self, x: int) -> bool:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    bool isPalindrome(int x) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public boolean isPalindrome(int x) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: '121', expectedOutput: 'true' },
      { id: 't2', input: '-121', expectedOutput: 'false' },
      { id: 't3', input: '10', expectedOutput: 'false' }
    ]
  },
  {
    id: '3',
    slug: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Medium',
    description: `Given a string \`s\` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.`,
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' }
    ],
    constraints: ['1 <= s.length <= 10^4', 's consists of parentheses only'],
    starterCode: {
       [SupportedLanguage.JAVASCRIPT]: `/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def isValid(self, s: str) -> bool:
      `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    bool isValid(string s) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public boolean isValid(String s) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: '"()"', expectedOutput: 'true' },
      { id: 't2', input: '"()[]{}"', expectedOutput: 'true' },
      { id: 't3', input: '"(]"', expectedOutput: 'false' },
      { id: 't4', input: '"([)]"', expectedOutput: 'false' }
    ]
  },
  {
    id: '4',
    slug: 'maximum-subarray',
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    description: `Given an integer array \`nums\`, find the subarray with the largest sum, and return *its sum*.`,
    examples: [
      { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: 'The subarray [4,-1,2,1] has the largest sum 6.' },
      { input: 'nums = [1]', output: '1' },
      { input: 'nums = [5,4,-1,7,8]', output: '23' }
    ],
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int maxSubArray(int[] nums) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', expectedOutput: '6' },
      { id: 't2', input: 'nums = [1]', expectedOutput: '1' },
      { id: 't3', input: 'nums = [5,4,-1,7,8]', expectedOutput: '23' }
    ]
  },
  {
    id: '5',
    slug: 'climbing-stairs',
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    description: `You are climbing a staircase. It takes \`n\` steps to reach the top.

Each time you can either climb \`1\` or \`2\` steps. In how many distinct ways can you climb to the top?`,
    examples: [
      { input: 'n = 2', output: '2', explanation: '1. 1 step + 1 step\n2. 2 steps' },
      { input: 'n = 3', output: '3', explanation: '1. 1+1+1\n2. 1+2\n3. 2+1' }
    ],
    constraints: ['1 <= n <= 45'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def climbStairs(self, n: int) -> int:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    int climbStairs(int n) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int climbStairs(int n) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'n = 2', expectedOutput: '2' },
      { id: 't2', input: 'n = 3', expectedOutput: '3' },
      { id: 't3', input: 'n = 4', expectedOutput: '5' }
    ]
  },
  {
    id: '6',
    slug: 'coin-change',
    title: 'Coin Change',
    difficulty: 'Medium',
    description: `You are given an integer array \`coins\` representing coins of different denominations and an integer \`amount\` representing a total amount of money.

Return *the fewest number of coins that you need to make up that amount*. If that amount of money cannot be made up by any combination of the coins, return \`-1\`.

You may assume that you have an infinite number of each kind of coin.`,
    examples: [
      { input: 'coins = [1,2,5], amount = 11', output: '3', explanation: '11 = 5 + 5 + 1' },
      { input: 'coins = [2], amount = 3', output: '-1' },
      { input: 'coins = [1], amount = 0', output: '0' }
    ],
    constraints: ['1 <= coins.length <= 12', '1 <= coins[i] <= 2^31 - 1', '0 <= amount <= 10^4'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int coinChange(int[] coins, int amount) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'coins = [1,2,5], amount = 11', expectedOutput: '3' },
      { id: 't2', input: 'coins = [2], amount = 3', expectedOutput: '-1' },
      { id: 't3', input: 'coins = [1], amount = 0', expectedOutput: '0' }
    ]
  },
  {
    id: '7',
    slug: 'longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    difficulty: 'Medium',
    description: `Given an integer array \`nums\`, return *the length of the longest strictly increasing subsequence*.`,
    examples: [
      { input: 'nums = [10,9,2,5,3,7,101,18]', output: '4', explanation: 'The longest increasing subsequence is [2,3,7,101], therefore the length is 4.' },
      { input: 'nums = [0,1,0,3,2,3]', output: '4' },
      { input: 'nums = [7,7,7,7,7,7,7]', output: '1' }
    ],
    constraints: ['1 <= nums.length <= 2500', '-10^4 <= nums[i] <= 10^4'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int lengthOfLIS(int[] nums) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [10,9,2,5,3,7,101,18]', expectedOutput: '4' },
      { id: 't2', input: 'nums = [0,1,0,3,2,3]', expectedOutput: '4' },
      { id: 't3', input: 'nums = [7,7,7,7,7,7,7]', expectedOutput: '1' }
    ]
  },
  {
    id: '8',
    slug: 'permutations',
    title: 'Permutations',
    difficulty: 'Medium',
    description: `Given an array \`nums\` of distinct integers, return *all the possible permutations*. You can return the answer in **any order**.`,
    examples: [
      { input: 'nums = [1,2,3]', output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]' },
      { input: 'nums = [0,1]', output: '[[0,1],[1,0]]' },
      { input: 'nums = [1]', output: '[[1]]' }
    ],
    constraints: ['1 <= nums.length <= 6', '-10 <= nums[i] <= 10', 'All the integers of nums are unique.'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public List<List<Integer>> permute(int[] nums) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [1,2,3]', expectedOutput: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]' },
      { id: 't2', input: 'nums = [0,1]', expectedOutput: '[[0,1],[1,0]]' }
    ]
  },
  {
    id: '9',
    slug: 'best-time-to-buy-and-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`ith\` day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return \`0\`.`,
    examples: [
      { input: 'prices = [7,1,5,3,6,4]', output: '5', explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.' },
      { input: 'prices = [7,6,4,3,1]', output: '0', explanation: 'In this case, no transactions are done and the max profit = 0.' }
    ],
    constraints: ['1 <= prices.length <= 10^5', '0 <= prices[i] <= 10^4'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int maxProfit(int[] prices) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'prices = [7,1,5,3,6,4]', expectedOutput: '5' },
      { id: 't2', input: 'prices = [7,6,4,3,1]', expectedOutput: '0' }
    ]
  },
  {
    id: '10',
    slug: 'container-with-most-water',
    title: 'Container With Most Water',
    difficulty: 'Medium',
    description: `You are given an integer array \`height\` of length \`n\`. There are \`n\` vertical lines drawn such that the two endpoints of the \`ith\` line are \`(i, 0)\` and \`(i, height[i])\`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return *the maximum amount of water a container can store*.`,
    examples: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49' },
      { input: 'height = [1,1]', output: '1' }
    ],
    constraints: ['n == height.length', '2 <= n <= 10^5', '0 <= height[i] <= 10^4'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var maxArea = function(height) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def maxArea(self, height: List[int]) -> int:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    int maxArea(vector<int>& height) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int maxArea(int[] height) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'height = [1,8,6,2,5,4,8,3,7]', expectedOutput: '49' },
      { id: 't2', input: 'height = [1,1]', expectedOutput: '1' }
    ]
  },
  {
    id: '11',
    slug: '3sum',
    title: '3Sum',
    difficulty: 'Medium',
    description: `Given an integer array nums, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, and \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.

Notice that the solution set must not contain duplicate triplets.`,
    examples: [
      { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' },
      { input: 'nums = [0,1,1]', output: '[]' },
      { input: 'nums = [0,0,0]', output: '[[0,0,0]]' }
    ],
    constraints: ['3 <= nums.length <= 3000', '-10^5 <= nums[i] <= 10^5'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var threeSum = function(nums) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [-1,0,1,2,-1,-4]', expectedOutput: '[[-1,-1,2],[-1,0,1]]' },
      { id: 't2', input: 'nums = [0,1,1]', expectedOutput: '[]' },
      { id: 't3', input: 'nums = [0,0,0]', expectedOutput: '[[0,0,0]]' }
    ]
  },
  {
    id: '12',
    slug: 'merge-intervals',
    title: 'Merge Intervals',
    difficulty: 'Medium',
    description: `Given an array of \`intervals\` where \`intervals[i] = [starti, endi]\`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.`,
    examples: [
      { input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]' },
      { input: 'intervals = [[1,4],[4,5]]', output: '[[1,5]]' }
    ],
    constraints: ['1 <= intervals.length <= 10^4', 'intervals[i].length == 2'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var merge = function(intervals) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int[][] merge(int[][] intervals) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]', expectedOutput: '[[1,6],[8,10],[15,18]]' },
      { id: 't2', input: 'intervals = [[1,4],[4,5]]', expectedOutput: '[[1,5]]' }
    ]
  },
  {
    id: '13',
    slug: 'group-anagrams',
    title: 'Group Anagrams',
    difficulty: 'Medium',
    description: `Given an array of strings \`strs\`, group **the anagrams** together. You can return the answer in **any order**.`,
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
      { input: 'strs = [""]', output: '[[""]]' },
      { input: 'strs = ["a"]', output: '[["a"]]' }
    ],
    constraints: ['1 <= strs.length <= 10^4', '0 <= strs[i].length <= 100'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var groupAnagrams = function(strs) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'strs = ["eat","tea","tan","ate","nat","bat"]', expectedOutput: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
      { id: 't2', input: 'strs = [""]', expectedOutput: '[[""]]' }
    ]
  },
  {
    id: '14',
    slug: 'subarray-sum-equals-k',
    title: 'Subarray Sum Equals K',
    difficulty: 'Medium',
    description: `Given an array of integers \`nums\` and an integer \`k\`, return *the total number of subarrays whose sum equals to \`k\`*.

A subarray is a contiguous non-empty sequence of elements within an array.`,
    examples: [
      { input: 'nums = [1,1,1], k = 2', output: '2' },
      { input: 'nums = [1,2,3], k = 3', output: '2' }
    ],
    constraints: ['1 <= nums.length <= 2 * 10^4', '-1000 <= nums[i] <= 1000'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var subarraySum = function(nums, k) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int subarraySum(int[] nums, int k) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [1,1,1], k = 2', expectedOutput: '2' },
      { id: 't2', input: 'nums = [1,2,3], k = 3', expectedOutput: '2' }
    ]
  },
  {
    id: '15',
    slug: 'longest-substring-without-repeating-characters',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    description: `Given a string \`s\`, find the length of the **longest substring** without repeating characters.`,
    examples: [
      { input: 's = "abcabcbb"', output: '3' },
      { input: 's = "bbbbb"', output: '1' },
      { input: 's = "pwwkew"', output: '3' }
    ],
    constraints: ['0 <= s.length <= 5 * 10^4', 's consists of English letters, digits, symbols and spaces.'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var lengthOfLongestSubstring = function(s) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 's = "abcabcbb"', expectedOutput: '3' },
      { id: 't2', input: 's = "bbbbb"', expectedOutput: '1' },
      { id: 't3', input: 's = "pwwkew"', expectedOutput: '3' }
    ]
  },
  {
    id: '16',
    slug: 'valid-palindrome',
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    description: `A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string \`s\`, return \`true\` *if it is a palindrome, or* \`false\` *otherwise*.`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true' },
      { input: 's = "race a car"', output: 'false' },
      { input: 's = " "', output: 'true' }
    ],
    constraints: ['1 <= s.length <= 2 * 10^5'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var isPalindrome = function(s) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    bool isPalindrome(string s) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public boolean isPalindrome(String s) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 's = "A man, a plan, a canal: Panama"', expectedOutput: 'true' },
      { id: 't2', input: 's = "race a car"', expectedOutput: 'false' },
      { id: 't3', input: 's = " "', expectedOutput: 'true' }
    ]
  },
  {
    id: '17',
    slug: 'search-in-rotated-sorted-array',
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    description: `There is an integer array \`nums\` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, \`nums\` is **possibly rotated** at an unknown pivot index \`k\` (\`1 <= k < nums.length\`).

Given the array \`nums\` **after** the possible rotation and an integer \`target\`, return *the index of* \`target\` *if it is in* \`nums\`, *or* \`-1\` *if it is not in* \`nums\`.

You must write an algorithm with \`O(log n)\` runtime complexity.`,
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' },
      { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1' },
      { input: 'nums = [1], target = 0', output: '-1' }
    ],
    constraints: ['1 <= nums.length <= 5000', '-10^4 <= nums[i] <= 10^4', 'All values of nums are unique.', 'nums is an ascending array that is possibly rotated.'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var search = function(nums, target) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def search(self, nums: List[int], target: int) -> int:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    int search(vector<int>& nums, int target) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int search(int[] nums, int target) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [4,5,6,7,0,1,2], target = 0', expectedOutput: '4' },
      { id: 't2', input: 'nums = [4,5,6,7,0,1,2], target = 3', expectedOutput: '-1' },
      { id: 't3', input: 'nums = [1], target = 0', expectedOutput: '-1' }
    ]
  },
  {
    id: '18',
    slug: 'combination-sum',
    title: 'Combination Sum',
    difficulty: 'Medium',
    description: `Given an array of **distinct** integers \`candidates\` and a target integer \`target\`, return *a list of all **unique combinations** of* \`candidates\` *where the chosen numbers sum to* \`target\`. You may return the combinations in **any order**.

The **same** number may be chosen from \`candidates\` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.`,
    examples: [
      { input: 'candidates = [2,3,6,7], target = 7', output: '[[2,2,3],[7]]' },
      { input: 'candidates = [2,3,5], target = 8', output: '[[2,2,2,2],[2,3,3],[3,5]]' },
      { input: 'candidates = [2], target = 1', output: '[]' }
    ],
    constraints: ['1 <= candidates.length <= 30', '1 <= candidates[i] <= 200', 'All elements of candidates are distinct.'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var combinationSum = function(candidates, target) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'candidates = [2,3,6,7], target = 7', expectedOutput: '[[2,2,3],[7]]' },
      { id: 't2', input: 'candidates = [2,3,5], target = 8', expectedOutput: '[[2,2,2,2],[2,3,3],[3,5]]' },
      { id: 't3', input: 'candidates = [2], target = 1', expectedOutput: '[]' }
    ]
  },
  {
    id: '19',
    slug: 'subsets',
    title: 'Subsets',
    difficulty: 'Medium',
    description: `Given an integer array \`nums\` of **unique** elements, return *all possible subsets (the power set)*.

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.`,
    examples: [
      { input: 'nums = [1,2,3]', output: '[[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]]' },
      { input: 'nums = [0]', output: '[[0],[]]' }
    ],
    constraints: ['1 <= nums.length <= 10', '-10 <= nums[i] <= 10', 'All the numbers of nums are unique.'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var subsets = function(nums) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [1,2,3]', expectedOutput: '[[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]]' },
      { id: 't2', input: 'nums = [0]', expectedOutput: '[[0],[]]' }
    ]
  },
  {
    id: '20',
    slug: 'word-search',
    title: 'Word Search',
    difficulty: 'Medium',
    description: `Given an \`m x n\` grid of characters \`board\` and a string \`word\`, return \`true\` *if* \`word\` *exists in the grid*.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.`,
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true' },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', output: 'true' },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"', output: 'false' }
    ],
    constraints: ['m == board.length', 'n = board[i].length', '1 <= m, n <= 6'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var exist = function(board, word) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public boolean exist(char[][] board, String word) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', expectedOutput: 'true' },
      { id: 't2', input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"', expectedOutput: 'false' }
    ]
  },
  {
    id: '21',
    slug: 'house-robber',
    title: 'House Robber',
    difficulty: 'Medium',
    description: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array \`nums\` representing the amount of money of each house, return *the maximum amount of money you can rob tonight without alerting the police*.`,
    examples: [
      { input: 'nums = [1,2,3,1]', output: '4', explanation: 'Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.' },
      { input: 'nums = [2,7,9,3,1]', output: '12' }
    ],
    constraints: ['1 <= nums.length <= 100', '0 <= nums[i] <= 400'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var rob = function(nums) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def rob(self, nums: List[int]) -> int:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    int rob(vector<int>& nums) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int rob(int[] nums) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [1,2,3,1]', expectedOutput: '4' },
      { id: 't2', input: 'nums = [2,7,9,3,1]', expectedOutput: '12' }
    ]
  },
  {
    id: '22',
    slug: 'unique-paths',
    title: 'Unique Paths',
    difficulty: 'Medium',
    description: `There is a robot on an \`m x n\` grid. The robot is initially located at the **top-left corner** (i.e., \`grid[0][0]\`). The robot tries to move to the **bottom-right corner** (i.e., \`grid[m - 1][n - 1]\`). The robot can only move either down or right at any point in time.

Given the two integers \`m\` and \`n\`, return *the number of possible unique paths that the robot can take to reach the bottom-right corner*.`,
    examples: [
      { input: 'm = 3, n = 7', output: '28' },
      { input: 'm = 3, n = 2', output: '3' }
    ],
    constraints: ['1 <= m, n <= 100'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var uniquePaths = function(m, n) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    int uniquePaths(int m, int n) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int uniquePaths(int m, int n) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'm = 3, n = 7', expectedOutput: '28' },
      { id: 't2', input: 'm = 3, n = 2', expectedOutput: '3' }
    ]
  },
  {
    id: '23',
    slug: 'jump-game',
    title: 'Jump Game',
    difficulty: 'Medium',
    description: `You are given an integer array \`nums\`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return \`true\` *if you can reach the last index, or* \`false\` *otherwise*.`,
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: 'true', explanation: 'Jump 1 step from index 0 to 1, then 3 steps to the last index.' },
      { input: 'nums = [3,2,1,0,4]', output: 'false' }
    ],
    constraints: ['1 <= nums.length <= 10^4', '0 <= nums[i] <= 10^5'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var canJump = function(nums) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def canJump(self, nums: List[int]) -> bool:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    bool canJump(vector<int>& nums) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public boolean canJump(int[] nums) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [2,3,1,1,4]', expectedOutput: 'true' },
      { id: 't2', input: 'nums = [3,2,1,0,4]', expectedOutput: 'false' }
    ]
  },
  {
    id: '24',
    slug: 'product-of-array-except-self',
    title: 'Product of Array Except Self',
    difficulty: 'Medium',
    description: `Given an integer array \`nums\`, return *an array* \`answer\` *such that* \`answer[i]\` *is equal to the product of all the elements of* \`nums\` *except* \`nums[i]\`.

The product of any prefix or suffix of \`nums\` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in \`O(n)\` time and without using the division operation.`,
    examples: [
      { input: 'nums = [1,2,3,4]', output: '[24,12,8,6]' },
      { input: 'nums = [-1,1,0,-3,3]', output: '[0,0,9,0,0]' }
    ],
    constraints: ['2 <= nums.length <= 10^5', '-30 <= nums[i] <= 30'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var productExceptSelf = function(nums) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [1,2,3,4]', expectedOutput: '[24,12,8,6]' },
      { id: 't2', input: 'nums = [-1,1,0,-3,3]', expectedOutput: '[0,0,9,0,0]' }
    ]
  },
  {
    id: '25',
    slug: 'move-zeroes',
    title: 'Move Zeroes',
    difficulty: 'Easy',
    description: `Given an integer array \`nums\`, move all \`0\`'s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.`,
    examples: [
      { input: 'nums = [0,1,0,3,12]', output: '[1,3,12,0,0]' },
      { input: 'nums = [0]', output: '[0]' }
    ],
    constraints: ['1 <= nums.length <= 10^4', '-2^31 <= nums[i] <= 2^31 - 1'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public void moveZeroes(int[] nums) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [0,1,0,3,12]', expectedOutput: '[1,3,12,0,0]' },
      { id: 't2', input: 'nums = [0]', expectedOutput: '[0]' }
    ]
  },
  {
    id: '26',
    slug: 'find-all-numbers-disappeared-in-an-array',
    title: 'Find All Numbers Disappeared in an Array',
    difficulty: 'Easy',
    description: `Given an array \`nums\` of \`n\` integers where \`nums[i]\` is in the range \`[1, n]\`, return *an array of all the integers in the range* \`[1, n]\` *that do not appear in* \`nums\`.`,
    examples: [
      { input: 'nums = [4,3,2,7,8,2,3,1]', output: '[5,6]' },
      { input: 'nums = [1,1]', output: '[2]' }
    ],
    constraints: ['n == nums.length', '1 <= n <= 10^5', '1 <= nums[i] <= n'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var findDisappearedNumbers = function(nums) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [4,3,2,7,8,2,3,1]', expectedOutput: '[5,6]' },
      { id: 't2', input: 'nums = [1,1]', expectedOutput: '[2]' }
    ]
  },
  {
    id: '27',
    slug: 'rotate-image',
    title: 'Rotate Image',
    difficulty: 'Medium',
    description: `You are given an \`n x n\` 2D matrix representing an image, rotate the image by **90 degrees (clockwise)**.

You have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.`,
    examples: [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[[7,4,1],[8,5,2],[9,6,3]]' },
      { input: 'matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]', output: '[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]' }
    ],
    constraints: ['n == matrix.length == matrix[i].length', '1 <= n <= 20'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public void rotate(int[][] matrix) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', expectedOutput: '[[7,4,1],[8,5,2],[9,6,3]]' },
      { id: 't2', input: 'matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]', expectedOutput: '[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]' }
    ]
  },
  {
    id: '28',
    slug: 'set-matrix-zeroes',
    title: 'Set Matrix Zeroes',
    difficulty: 'Medium',
    description: `Given an \`m x n\` integer matrix \`matrix\`, if an element is \`0\`, set its entire row and column to \`0\`'s.

You must do it **in-place**.`,
    examples: [
      { input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]', output: '[[1,0,1],[0,0,0],[1,0,1]]' },
      { input: 'matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]', output: '[[0,0,0,0],[0,4,5,0],[0,3,1,0]]' }
    ],
    constraints: ['m == matrix.length', 'n == matrix[0].length', '1 <= m, n <= 200'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public void setZeroes(int[][] matrix) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]', expectedOutput: '[[1,0,1],[0,0,0],[1,0,1]]' },
      { id: 't2', input: 'matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]', expectedOutput: '[[0,0,0,0],[0,4,5,0],[0,3,1,0]]' }
    ]
  },
  {
    id: '29',
    slug: 'spiral-matrix',
    title: 'Spiral Matrix',
    difficulty: 'Medium',
    description: `Given an \`m x n\` \`matrix\`, return *all elements of the* \`matrix\` *in spiral order*.`,
    examples: [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,3,6,9,8,7,4,5]' },
      { input: 'matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]', output: '[1,2,3,4,8,12,11,10,9,5,6,7]' }
    ],
    constraints: ['m == matrix.length', 'n == matrix[i].length', '1 <= m, n <= 10'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var spiralOrder = function(matrix) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', expectedOutput: '[1,2,3,6,9,8,7,4,5]' },
      { id: 't2', input: 'matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]', expectedOutput: '[1,2,3,4,8,12,11,10,9,5,6,7]' }
    ]
  },
  {
    id: '30',
    slug: 'single-number',
    title: 'Single Number',
    difficulty: 'Easy',
    description: `Given a **non-empty** array of integers \`nums\`, every element appears *twice* except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.`,
    examples: [
      { input: 'nums = [2,2,1]', output: '1' },
      { input: 'nums = [4,1,2,1,2]', output: '4' },
      { input: 'nums = [1]', output: '1' }
    ],
    constraints: ['1 <= nums.length <= 3 * 10^4', '-3 * 10^4 <= nums[i] <= 3 * 10^4'],
    starterCode: {
      [SupportedLanguage.JAVASCRIPT]: `var singleNumber = function(nums) {
    
};`,
      [SupportedLanguage.PYTHON]: `class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        `,
      [SupportedLanguage.CPP]: `class Solution {
public:
    int singleNumber(vector<int>& nums) {
        
    }
};`,
      [SupportedLanguage.JAVA]: `class Solution {
    public int singleNumber(int[] nums) {
        
    }
}`
    },
    testCases: [
      { id: 't1', input: 'nums = [2,2,1]', expectedOutput: '1' },
      { id: 't2', input: 'nums = [4,1,2,1,2]', expectedOutput: '4' },
      { id: 't3', input: 'nums = [1]', expectedOutput: '1' }
    ]
  }
];