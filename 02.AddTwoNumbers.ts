// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// since linkedList, 
// add l1 and l2 value if presnt, 
// create a new LinkedList with node value as total value and next as recursion of next nodes of l1 and l2

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry: number = 0): ListNode | null {
    if (!l1 && !l2 && !carry) return null;
    const total: number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
    carry = parseInt(total / 10 + '');
    return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));
};
