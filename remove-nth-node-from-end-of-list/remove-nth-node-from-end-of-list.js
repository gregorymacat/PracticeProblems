/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let currNode = head;
    
    if (head === null) {
        return;
    }
    while (currNode !== null) {
        length += 1;
        currNode = currNode.next;
    }
    currNode = head;
    
    let difference = length - n;
    if (difference === 0) {
        currNode = currNode.next;
        return currNode;
    }
    
    for (let count = 1; count < difference; count++) {
        currNode = currNode.next;
    }
    let newNext = currNode.next.next;
    currNode.next = newNext;
    return head;
};