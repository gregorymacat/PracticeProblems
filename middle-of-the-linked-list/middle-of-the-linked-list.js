/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let node = head;
    let finalNode = head;
    let len = 0;
    //let nodeTracker = [];
    
    if (head === null) {
        return;
    }
    while (node !== null) {
        //nodeTracker.push(node);
        len += 1;
        node = node.next;
    }
    
    let halfLen;
    if (len % 2 === 0) {
        halfLen = (len / 2) + 1;
    } else {
        halfLen = Math.floor(len / 2) + 1;
    }
    
    
    for (var currNode = 1; currNode < halfLen; currNode++) {
        finalNode = finalNode.next;
    }
    return finalNode;
};