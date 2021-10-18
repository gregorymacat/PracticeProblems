/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 1047
 1100 failed
 */
var removeElements = function(head, val) {
    // iterate through linked list's nexts from head
        // if the current node is the head node
            // check if current value is equal to val
                // if so set head to the next node
            
            // check if next node value is equal to val
                // if so set next to the next node's next
        
    // if current node is not head node
        // check if next node value is equal to val
            // if so set next to the next node's next
    
    var currNode = head;
    var prevNode = currNode;
    var currHead = currNode;
    
    while (currNode !== null) {
        if (currNode.val === val) {
            if (currNode === currHead) {
                currHead = currNode.next;
            } else {
                prevNode.next = currNode.next;
            }
        } else {
            prevNode = currNode;
        }
        currNode = currNode.next;
    }
    return currHead;
};



/*
if (currNode === currHead) {
            if (currNode.val === val) {
                currNode = currNode.next;
                currHead = currNode.next;
            } else {
                currNode = currNode.next;
            }
            if (currNode.next !== null) {
                if (currNode.next.val === val) {
                    if (currNode.next.next !== null) {
                        currNode.next = currNode.next.next;
                    } else {
                        currNode.next = null;
                    }
                }
            }
        } else {
            if (currNode.next !== null) {
                if (currNode.next.val === val) {
                    if (currNode.next.next !== null) {
                        currNode.next = currNode.next.next;
                    } else {
                        currNode.next = null;
                    }
                }
            }
            currNode = currNode.next;
        }
*/